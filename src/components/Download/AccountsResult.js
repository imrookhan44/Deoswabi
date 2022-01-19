/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from "react";
import { storage } from "../firebase";
import "firebase/database";
import firebase from "firebase";
import "./Download.css";
import { Tab, pak, Tabs } from "react-bootstrap";
import { AiFillDelete } from "react-icons/ai";
import { RiFolderDownloadFill } from "react-icons/all";

import pdf from "../../assets/images/pdf.png";
import { object } from "yup/lib/locale";

class AccountsResult extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: null,
      url: "",
      progress: 0,
      documents: [],
      bookName: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleUpload = this.handleUpload.bind(this);
  }
  componentDidMount() {
    const dbRef = firebase.database().ref("accounts");
    dbRef.on("value", (snapshot) => {
      if (snapshot && snapshot.val()) {
        const data = snapshot.val();
        let objValues = Object?.values(data);
        console.log(objValues);
        let objKeys = Object.keys(data);
        console.log(objKeys);
        objValues.map((item, index) => (item["xid"] = objKeys[index]));
        this.setState({ documents: objValues });
        console.log("data docs ", this.state.documents);
        console.log("data object  ", objValues);
      }
    });
  }

  handleChange = (e) => {
    if (e.target.files[0]) {
      const image = e.target.files[0];
      this.setState(() => ({ image }));
    }
  };
  writeFileUrl = () => {
    firebase
      .database()
      .ref("accounts")
      .push({
        url: this.state.url,
        uid: Math.floor(Math.random() * 100),
        name: this.state.bookName,
      });
  };
  handleUpload = () => {
    const { image } = this.state;
    const uploadTask = storage.ref(`images/${image.name}`).put(image);
    console.log(image.name);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        this.setState({ progress });
      },
      (error) => {
        console.log(error);
      },
      () => {
        storage
          .ref("images")
          .child(image.name)
          .getDownloadURL()
          .then((url) => {
            console.log(url);
            this.setState({ url });

            this.writeFileUrl(url);
          });
      }
    );
  };

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-12" id="pak">
            {this.state.documents &&
              this.state.documents.length > 0 &&
              this.state.documents.map((item, index) => (
                <div className="dataa">
                  <a className="download" href={item?.url} target="_blank">
                    {" "}
                    <RiFolderDownloadFill size="25px" /> Download
                  </a>
                  &nbsp;&nbsp;&nbsp;
                  <div className="pdf">
                    <img src={pdf} style={{ width: "200px" }} />
                  </div>
                  <h6 className="itemName">
                    <b>{item.name}</b>
                  </h6>
                </div>
              ))}
          </div>
        </div>
      </div>
    );
  }
}

export default AccountsResult;

/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from "react";
import { storage } from "../firebase";
import "firebase/database";
import firebase from "firebase";
import "./imageUpload.css";
import {Tab,pak,Tabs} from "react-bootstrap";
import { AiFillDelete } from "react-icons/ai";
import { RiFolderDownloadFill } from "react-icons/all";

import pdf from "../../assets/images/pdf.png";
import HrUpload from "./HrUpload";
import Accountant from "./Accountact";

class ImageUpload extends Component {
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
    const dbRef = firebase.database().ref("url");
    dbRef.on("value", (snapshot) => {
      const data = snapshot.val();
      let objValues = Object.values(data);
      console.log(objValues);
      let objKeys = Object.keys(data);
      console.log(objKeys);
      objValues.map((item, index) => (item["xid"] = objKeys[index]));
      this.setState({ documents: objValues });
      console.log("data docs ", this.state.documents);
      console.log("data objcet  ", objValues);
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
      .ref("url")
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

  deleteItem = (item) => {
    const dbRef = firebase
      .database()
      .ref("url")
      .child(item.xid)
      .remove((oncomplete) => {
        console.log(" on complete : ", oncomplete);
      })
      .then((res) => {
        console.log("res : ", res);
      })
      .catch((e) => {
        console.log("err : ", e);
      });
    console.log(item.xid);
  };

  handleInputChange = (e) => {
    this.setState({ bookName: e.target.value });
  };
  render() {
    const style = {
      height: "40vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    };
    
    return (
      
      <div className="">
        <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="mb-3">
  <Tab eventKey="home" title="Finance">
  <div className="container-fluid">
        <div className="row" >
  <div className="col-12">
            <div style={style}>
              <div className="ab" style={{}}></div>
              <input
                type="file"
                onChange={this.handleChange}
                style={{ height: "100px" }}
              />
              <label>file name</label>
              <input type="text" onChange={(e) => this.handleInputChange(e)} />
              <br />
              <button onClick={this.handleUpload}>Upload</button>
              <progress value={this.state.progress} max="100" />
            </div>
          </div>
          <hr />
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
                    <button
                      className="Button"
                      onClick={() => this.deleteItem(item)}
                    >
                      <AiFillDelete size="20px" />
                    </button>
                    <div className="pdf">
                      <img src={pdf} style={{ width: "200px" }} />
                    </div>
                    <h6 className="itemName">
                      <b>{item.name}</b>
                    </h6>
                  </div>
                ))}
            </div>
            </div></div>
          
        
          
         
          </div>
        </div>
        
    <pak />
  </Tab>
  <Tab eventKey="profile" title="HR">
    <HrUpload/>
    <pak />
  </Tab>
  <Tab eventKey="contact" title="Accounts" >
    <Accountant/>
    <pak />
  </Tab>
</Tabs>
        
      </div>
    );
  }
}

export default ImageUpload;

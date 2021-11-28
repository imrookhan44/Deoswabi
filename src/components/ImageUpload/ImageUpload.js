import React, { Component } from "react";
import { InitFirebase, storage } from "../firebase";
class ImageUpload extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: null,
      url: "",
      progress: 0,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleUpload = this.handleUpload.bind(this);
  }
  componentDidMount() {}
  handleChange = (e) => {
    if (e.target.files[0]) {
      const image = e.target.files[0];
      this.setState(() => ({ image }));
    }
  };
  handleUpload = () => {
    const { image } = this.state;
    const uploadTask = storage.ref(`images/${image.name}`).put(image);
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
          });
      }
    );
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
      <>
        <div style={style}>
          <img
            src={this.state.url || ""}
            alt="Uploaded images"
            height="300"
            width="400"
          />
          <div className="ab" style={{}}></div>
          <label>
            {" "}
            <i style={{ fontsize: "31px", border: "1px solid black" }}>
              {" "}
            </i>{" "}
          </label>
          <input
            type="file"
            onChange={this.handleChange}
            style={{ height: "100px" }}
          />
          <button onClick={this.handleUpload}>Upload</button>
          <progress value={this.state.progress} max="100" />
        </div>
        <ul>
          <li>1</li>
          <li>2</li>
          <li>3</li>
        </ul>
      </>
    );
  }
}

export default ImageUpload;

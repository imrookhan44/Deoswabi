import React, { Component, component } from 'react'
import firebase from '../firebase'
import './Admin.css'
export class Admin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            files: null
        }

    }
    handleChange = (files) => {
        this.setState({
            files: files

        })
    }
    handleSave = () => {
        let bucketName = 'images'
        let files = this.state.files[0]
        let storageRef = firebase.storage().ref(`${bucketName}/${files.name}`)
        let UploadTask = storageRef.put(files)
        UploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
            () => {
                let downloadURL = UploadTask.snapshot.downloadURL
            })
    }
    showImage = () => {
        let storageRef = firebase.storage().ref()
        let spaceRef = storageRef.child('images/' + this.state.files[0].name)
        storageRef.child('images/' + this.state.files[0].name).getDownloadURL().then((url) => {
            console.log(url)
            document.getElementById('new-img').src = url
            document.getElementById('new-img1').src = url
            document.getElementById('new-img2').src = url
            document.getElementById('new-img3').src = url
        })
    }
    render() {
        return (
            <div>&nbsp;
                
                <input type="file" onChange={(e) => { this.handleChange(e.target.files) }} />
                <button className="Adminpage" onClick={this.handleSave}>Save</button>&nbsp;
                <button onClick={this.showImage}>Show image</button><br />&nbsp;<br />&nbsp;
                <img id="new-img" height="300px" width="400px" />
                <img id="new-img1" height="300px" width="300px"/>
                <img id="new-img2" height="300px" width="300px"/>
                <img id="new-img3" height="300px" width="300px"/>

            </div>

        )
    }
}
export default Admin

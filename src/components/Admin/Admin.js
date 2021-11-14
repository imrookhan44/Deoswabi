import React, { Component, component } from 'react'
import firebase from '../firebase'
export class Admin extends Component {
    constructor(props){
        super(props);
        this.state={
            files : null
        }

    }
    handleChange =(files) =>{
        this.setState({
            files : files

        })
    }
    handleSave =()=>{
        let bucketName = 'images'
        let files = this.state.files[0]
        let storageRef= firebase.storage().ref(`${bucketName}/${files.name}`)
        let UploadTask = storageRef.put(files)
        UploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
            ()=>{
            let downloadURL = UploadTask.snapshot.downloadURL
        })
    }
    showImage=()=>{
        let storageRef = firebase.storage().ref()
        let spaceRef = storageRef.child('images/'+this.state.files[0].name)
        storageRef.child('images/'+this.state.files[0].name).getDownloadURL().then((url)=>{
            console.log(url)
            document.getElementById('new-img').src= url
        })
    }
    render() {
        return (
            <div>
<input type="file" onChange={(e)=>{this.handleChange(e.target.files)}}/>
<button onClick={this.handleSave}>Save</button>
<button onClick={this.showImage}>Show image</button>
<img id="new-img"/>

            </div>
        )
    }
}
export default Admin

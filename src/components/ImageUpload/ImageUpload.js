import React, {Component} from 'react';
import { ArrowRight } from 'react-bootstrap-icons';
import { storage } from './utils/firebase'
class ImageUpload extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: null,
      url: '',
      progress: 0
    }
    this.handleChange = this
      .handleChange
      .bind(this);
      this.handleUpload = this.handleUpload.bind(this);
  }
  handleChange = e => {
    if (e.target.files[0]) {
      const image = e.target.files[0];
      this.setState(() => ({image}));
    }
  }
  handleUpload = () => {
      const {image} = this.state;
      const uploadTask = storage.ref(`images/${image.name}`).put(image);
      uploadTask.on('state_changed', 
      (snapshot) => {
        // progrss function ....
        const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
        this.setState({progress});
      }, 
      (error) => {
           // error function ....
        console.log(error);
      }, 
    () => {
        // complete function ....
        storage.ref('images').child(image.name).getDownloadURL().then(url => {
            console.log(url);
            this.setState({url});
        })
    });
  }
  render() {
    const style = {
      height: '30vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center' ,
      display:'none', visibility:'none'
    };
    return (
      <div style={style}>
        <img src={this.state.url || ''} alt="Uploaded images" height="300" width="400"/>
      <div className='ab' style={{}}></div>
      <label> <i style={{fontsize: '31px',border:'1px solid black'}}> </i> <ArrowRight /> </label>
        <input  type="file" onChange={this.handleChange}/>
        <button onClick={this.handleUpload}>Upload</button>
        <progress value={this.state.progress} max="100"/>
      </div>
    )
  }
}

export default ImageUpload;
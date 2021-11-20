// import { storage } from "firebase";
// import React, { useState } from "react"
// const Test = () => {
//     const [image , setimage] = useState(null)

//     const handleChange = (e) => {
//         if(e.target.files[0]){
//             setimage(e.target.files[0]);
//         }
//     };
//     const handleUploadImage = () =>{
//         console.log('image  value', image)
//     } 
//     const UploadTask = storage.ref(`/images/$(image.name}`).put(image);
//     UploadTask.on(
//         "state_changed",
//         snapshot => {},
//         error => {
//             console.log(error);
//         },
//         ()=> {
//             storage
//             .ref('images')
//             .child(image.name)
            
//             .grtDownloadURL(image.url)
//             .then(url) => {
//                 console.log(url)
//             }
//         }
//     )
//     return (
//         <>
//         <h1>Upload from Test</h1>
//         <input type='file' onChange={handleChange} />
//         <button className='' onClick={handleUploadImage}> Upload</button>
//         </>
//     )
// }
// export default Test
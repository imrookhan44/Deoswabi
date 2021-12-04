import { useState } from "react";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
// import { ref as dbRef } from "firebase/database";
import { storage, } from "../firebase";
// import myFirebase from "../firebase";
import { getDatabase, set, ref as databaseRef } from "firebase/database";

function UploadImage() {


    const [progress, setProgress] = useState(0);
    const [url, setURL] = useState("");
    const [files, setFiles] = useState([])
    const [downloadBool, setDownloadBool] = useState(false);

    const formHandler = (e) => {
        e.preventDefault();
        setFiles(e.target.files[0])
        console.log("e event check ",e)
        //  uploadFiles();
        // saveData();
    };

    console.log(files.name);

    const saveData = () => {
        console.log("check 1", url);
        const db = getDatabase();
        set(databaseRef(db, 'imageUrl'), {
            imageUrl: url
        }).then((res) => {
            console.log("check 2", res);
            alert("data store successfully")
        }).catch((error) => {
            console.log("check 3 error", error);
            alert("there is an error" + error)
        })
    }

    const uploadFiles = () => {
        setDownloadBool(true);
        console.log("files : ", files)

        if (!files) return;
        const sotrageRef = ref(storage, `myfiles/${files.name}`);
        const uploadTask = uploadBytesResumable(sotrageRef, files);

        uploadTask.on(
            "state_changed",
            (snapshot) => {
                const prog = Math.round(
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                );
                setProgress(prog);
            },
            (error) => console.log("file not uplaoded", error),
            () => {
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    console.log("File available at", downloadURL);
                    setURL(downloadURL)
                });
            }
        );
    };

    return (
        <div className="App">
            <div>
                <input type="file" multiple onChange={formHandler} className="input" />
                <button onClick={uploadFiles}>Upload</button>
            </div>
            <hr />
            <h2>Uploading done {progress}%</h2>
            {/* <div dangerouslySetInnerHTML={{ __html: "https://firebasestorage.googleapis.com/v0/b/fir-app-cc066.appspot.com/o/myfiles%2FNasir.docx?alt=media&token=36865762-3974-45dc-9519-de7809589ece" }} /> */}
            <div>
                <h1> this is pdf file and htis ive </h1>
                {downloadBool &&
                    <embed src={"https://firebasestorage.googleapis.com/v0/b/fir-app-cc066.appspot.com/o/myfiles%2FNasir.docx?alt=media&token=36865762-3974-45dc-9519-de7809589ece"} />
                }
            </div>
            {/* test <iframe title="afdads" srcDoc="https://firebasestorage.googleapis.com/v0/b/fir-app-cc066.appspot.com/o/myfiles%2FNasir.docx?alt=media&token=36865762-3974-45dc-9519-de7809589ece" /> */}
        </div>
    );
}

export default UploadImage;
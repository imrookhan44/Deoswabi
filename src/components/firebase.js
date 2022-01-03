import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/firestore";
import 'firebase/storage';
const firebaseConfig = {
  apiKey: "AIzaSyBzfg3xiSnoTOCZcv1kAnRRGt1tl8DojJo",
  authDomain: "fir-tutorial-c1f87.firebaseapp.com",
  databaseURL: "https://fir-tutorial-c1f87-default-rtdb.firebaseio.com",
  projectId: "fir-tutorial-c1f87",
  storageBucket: "fir-tutorial-c1f87.appspot.com",
  messagingSenderId: "611466670485",
  appId: "1:611466670485:web:d5994bc0aaa3d90ba1069c",
  measurementId: "G-TWBGL9DQK4"
};



let InitFirebase;
var fireDb=firebase.initializeApp(firebaseConfig);
console.log("firebase in utils", firebase.database());
const storage = firebase.storage();
var auth = firebase.auth();
const db = firebase.firestore();
export { storage, firebase as default, auth, db,fireDb };



import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/firestore";
import 'firebase/storage';
const firebaseConfig = {

  apiKey: "AIzaSyDKxFOIrlmHD-qy6hMBPsFP1mZlqjC4n0A",
  authDomain: "brainspk.firebaseapp.com",
  databaseURL: "https://brainspk-default-rtdb.firebaseio.com",
  projectId: "brainspk",
  storageBucket: "brainspk.appspot.com",
  messagingSenderId: "282352287183",
  appId: "1:282352287183:web:01d35810df20ab69cf26ba",
  measurementId: "G-LZQBPLGZR1"
};
let InitFirebase;
var fireDb = firebase.initializeApp(firebaseConfig);
console.log("firebase in utils", firebase.database());
const storage = firebase.storage();
var auth = firebase.auth();
const db = firebase.firestore();
export { storage, firebase as default, auth, db, fireDb };



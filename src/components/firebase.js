import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";
import "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyCdOEGsqTGOaAiFtZSmP9f4itKSfHmELr8",
  authDomain: "fir-app-cc066.firebaseapp.com",
  databaseURL: "https://fir-app-cc066-default-rtdb.firebaseio.com",
  projectId: "fir-app-cc066",
  storageBucket: "fir-app-cc066.appspot.com",
  messagingSenderId: "32749480634",
  appId: "1:32749480634:web:df22fba82342d11dacf083"
};
let InitFirebase;
InitFirebase = firebase.initializeApp(firebaseConfig);
console.log("firebase in utils", firebase.database());
const storage = firebase.storage();
const auth = firebase.auth();
const db = firebase.firestore();
export { storage, InitFirebase, firebase as default, auth, db };

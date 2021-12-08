import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";
import "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyArLVA_Lde73VMAie7cH4wLj2RLeGNPDqw",
  authDomain: "apca-9ca67.firebaseapp.com",
  projectId: "apca-9ca67",
  storageBucket: "apca-9ca67.appspot.com",
  messagingSenderId: "842905420618",
  appId: "1:842905420618:web:5ef68d99cf7211327cf7b3"
};
let InitFirebase;
InitFirebase = firebase.initializeApp(firebaseConfig);
console.log("firebase in utils", firebase.database());
const storage = firebase.storage();
const auth = firebase.auth();
const db = firebase.firestore();
export { storage, InitFirebase, firebase as default, auth, db };

import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/firestore";
import 'firebase/storage';
const firebaseConfig = {

  apiKey: "AIzaSyAQHhSxQVA4vCAwKguMW2P0uzLHwf-a6eA",
  authDomain: "deo-female-swabi-8d40d.firebaseapp.com",
  databaseURL: "https://deo-female-swabi-8d40d-default-rtdb.firebaseio.com",
  projectId: "deo-female-swabi-8d40d",
  storageBucket: "deo-female-swabi-8d40d.appspot.com",
  messagingSenderId: "615524511626",
  appId: "1:615524511626:web:c608cb2b1f936ddcfae273"
};
let InitFirebase;
var fireDb = firebase.initializeApp(firebaseConfig);
console.log("firebase in utils", firebase.database());
const storage = firebase.storage();
var auth = firebase.auth();
const db = firebase.firestore();
export { storage, firebase as default, auth, db, fireDb };



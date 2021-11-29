import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";
import "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyCuJiVGaSqUhz1JvjoHX8SOowQZSOt8OKY",
  authDomain: "apca-ede85.firebaseapp.com",
  projectId: "apca-ede85",
  storageBucket: "apca-ede85.appspot.com",
  messagingSenderId: "813674036273",
  appId: "1:813674036273:web:5f07058b13c23fa2106910",
};
let InitFirebase;
InitFirebase = firebase.initializeApp(firebaseConfig);
console.log("firebase in utils", firebase.database());
const storage = firebase.storage();
const auth = firebase.auth();
const db = firebase.firestore();
export { storage, InitFirebase, firebase as default, auth, db };

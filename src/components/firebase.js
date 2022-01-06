import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";
import "firebase/firestore";
// const firebaseConfig = {
//   apiKey: "AIzaSyArLVA_Lde73VMAie7cH4wLj2RLeGNPDqw",
//   authDomain: "apca-9ca67.firebaseapp.com",
//   projectId: "apca-9ca67",
//   storageBucket: "apca-9ca67.appspot.com",
//   messagingSenderId: "842905420618",
//   appId: "1:842905420618:web:5ef68d99cf7211327cf7b3"
// };
const firebaseConfig = {
  apiKey: "AIzaSyDZ9K_tZCi5ea4Oz4GfiA6Rhw3deqo-6cA",
  authDomain: "react-crud-ee620.firebaseapp.com",
  databaseURL: "https://react-crud-ee620-default-rtdb.firebaseio.com",
  projectId: "react-crud-ee620",
  storageBucket: "react-crud-ee620.appspot.com",
  messagingSenderId: "233946900955",
  appId: "1:233946900955:web:a6d67825e20b0099165ffe"
};
let InitFirebase;
InitFirebase = firebase.initializeApp(firebaseConfig);
console.log("firebase in utils", firebase.database());
const storage = firebase.storage();
const auth = firebase.auth();
const db = firebase.firestore();
export { storage, InitFirebase, firebase as default, auth, db };

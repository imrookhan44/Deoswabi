import firebase from "firebase/app";
import "firebase/auth";
import 'firebase/firebase-firestore';
import Config from '../components/Config';


firebase.initializeApp(Config)

  const auth  =  firebase.auth()
  const db    = firebase.firestore()
  

export  {auth,db}

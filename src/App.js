import React, { useState, useEffect } from "react";
import Routes from "./components/routes/Routes.";
import { auth } from "./components/firebase";
import Login from "./components/login/Login";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Footer from "../src/components/footer/Footer";
import { BrowserRouter, Route, Redirect } from "react-router-dom";
import { db } from "./components/firebase";

const authentication = {
  isLoggedIn: false,
  onAuthentication() { 
    this.isLoggedIn  = true
   },
  getLogInStatus() {
    return auth?.currentUser?.uid;
  },
};

export function SecureRoute(props) {
  console.log("auth user 2 ", auth?.currentUser?.email);
  return (
    <Route
      path={props.path}
      render={(data) =>
        authentication.getLogInStatus() ? (
          <props.component {...data}></props.component>
        ) : (
          <Redirect to={{ pathname: "/login" }}></Redirect>
        )
      }
    />
  );
}

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [userDetails, setUserDetails] = useState(null);
  useEffect(() => {

    auth.onAuthStateChanged((user) => {
      if (user) setCurrentUser(user);
      else setCurrentUser(null);
      getUserDetails();
    });
    getUserDetails();

  }, []);

  const getUserDetails = () => {
    if (auth?.currentUser?.email) {
      console.log(" user ", auth?.currentUser?.email);
      db.collection("clerksData")
        .where("email", "==", auth?.currentUser?.email)
        .get()
        .then((res) => {
          console.log("curent user details", res.docs.map((item) => item.data()));
          let user = res.docs.map((item) => item.data());
          user = user[0];
          setUserDetails(user);
          console.log(" userdetails ", userDetails);
        })
        .catch((e) => console.error(e));
    }
  }
  return (
    <BrowserRouter>
      <Navbar
        admin={userDetails?.role}


      // admin={currentUser?.email == "imrankhan@gmail.com" ? true : false}
      />


      <Routes />

      <Footer />
    </BrowserRouter>
  );
}
export default App;

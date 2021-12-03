// import logo from './logo.svg';
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Footer from "../src/components/footer/Footer";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Routes from "./components/routes/Routes.";
import "fontawesome";
import { auth } from "./components/firebase";

import React, { useState, useEffect } from "react";
import { route } from "fontawesome";
import AdminNavbar from "./components/common/admin-navbar/admin-navbar";

const authentication={
  // isLoggedIn:false,
  onAuthtication(){
    // this.isLoggedIn=true;
  },
  getLogInStatus(){
    // return this.isLoggedIn;
    return auth?.currentUser?.uid;
  }
}

export function SecureRoute(props) {
  console.log("auth user 2 ", auth?.currentUser?.email)
  return(
    <Route path={props.path} render={data=>authentication.getLogInStatus()?(
      <props.component {...data}></props.component>):
    (<Redirect to={{pathname:"/"}}></Redirect>)}></Route>
  )
}

function App() {
  console.log("auth user ", auth?.currentUser)
  // auth.signOut(); 
  return (
    <BrowserRouter>
     {auth?.currentUser?.email == "nasir@gmail.com" ? <AdminNavbar /> : <Navbar />}
      <Routes />
      <Footer />
    </BrowserRouter>
  );
}
export default App;


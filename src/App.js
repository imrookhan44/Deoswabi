// import logo from './logo.svg';
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Footer from "../src/components/footer/Footer";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Routes from "./components/routes/Routes.";
import "fontawesome";
import { auth } from "./components/firebase";
import Login from "./components/login/Login";
import React, { useState, useEffect } from "react";
import { route } from "fontawesome";

const authentication={
  isLoggedIn:false,
  onAuthtication(){
    this.isLoggedIn=true;
  },
  getLogInStatus(){

    return this.isLoggedIn;
  }
}

export function SecureRoute(props) {
  return(
    <Route path={props.path} render={data=>authentication.getLogInStatus()?(
      <props.component {...data}></props.component>):
    (<Redirect to={{pathname:"/"}}></Redirect>)}></Route>
  )
}


function App() {
  const [user, setUser] = useState(null)
  useEffect(() => {
    auth.onAuthStateChanged(user=>{
      if(user) setUser(user)
      else setUser(null)
    })
  
    
  }, [])
  return (
   

    <BrowserRouter>
    
    

      <Navbar />
    

      <Footer />
    
      <Routes />
    
    </BrowserRouter>
  
  );
}
export default App;


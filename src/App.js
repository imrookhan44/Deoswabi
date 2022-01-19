import React, { useState, useEffect } from "react";
import Routes from "./components/routes/Routes.";
import { auth } from "./components/firebase";
import Login from "./components/login/Login";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Footer from "../src/components/footer/Footer";
import { BrowserRouter, Route, Redirect } from "react-router-dom";
import News from "./components/news/News"
const authentication = {
  onAuthentication() {},
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
          <Redirect to={{ pathname: "/" }}></Redirect>
        )
      }
    ></Route>
  );
}

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  useEffect(() => {
    auth.onAuthStateChanged((currentUser) => {
      if (currentUser) setCurrentUser(currentUser);
      else setCurrentUser(null);
    });
  }, []);
  return (
    <BrowserRouter>
      {/* {auth?.currentUser?.email &&  */}
      <Navbar admin={currentUser?.email == "imrankhan@gmail.com" ? true : false} />
      
      <Routes  />

      
      <Footer />

      
      
    </BrowserRouter>
  );
}
export default App;

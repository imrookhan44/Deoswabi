// import logo from './logo.svg';
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Footer from "../src/components/footer/Footer";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Routes from "./components/routes/Routes.";
import "fontawesome";
import { auth } from "./components/firebase";

import React, { useState, useEffect } from "react";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes />
      <Footer />
    </BrowserRouter>
  );
}
export default App;

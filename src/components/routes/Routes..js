import { useEffect, useState } from "react";
import firebase from "firebase";

import Home from "../home/Home";
import Profile from "../profile/Profile";
import Updatedacc from "../updatedacc/Updatedacc";
import Signup from "../Signup/Signup";
import Signin from "../Signin/Signin";
import Upload from "../upload/Upload";
import Login from "../login/Login";
import Userdetails from "../user details/user";
import Download from "../Download/Download";
import Admin from "../Admin/Admin";
import { Route, Switch } from "react-router-dom";
import { SecureRoute } from "../../App";
// import easyDonation from "../donation/EasyDonation";
import BankDonation from "../BankDonation/BankDonation";
import CnicDonation from "../CnicDonation/CnicDonation";
import ImageUpload from "../ImageUpload/ImageUpload";
import index from "../donation/index";
import Test from "../Admin/Test";
import EasyDonation from "../donation/EasyDonation";
import ImportLink from "../ImportLink/ImportLink";





function Routes(isLoggedIn) {
  const [user] = useState();
  const [oldUser] = useState();
  return (
    <Switch>
      <Route path="/profile" component={Profile} />
      <Route path="/updatedacc" component={Updatedacc} />
      <Route path="/signup" component={Signup} />
      <Route path="/signin" component={Signin} />
      <Route path="/upload" component={Upload} />
      <Route path="/login" component={Login} />
      <Route path="/userdetails" component={Userdetails} />
      <SecureRoute path="/download" component={Download} />
      <Route exacts path="/Admin" component={Admin} />
      <Route path="/Test" component={Test} />
      <Route path="/donation" component={index} />
      <Route path="/BankDonation" component={BankDonation} />
      <Route path="/CnicDonation" component={CnicDonation} />
      <Route path="/easyDonation" component={EasyDonation} />
      <Route path="/ImageUpload" component={ImageUpload} />
      <Route path="/importLink" component={ImportLink} />




      <Route path="/" component={isLoggedIn ? Home : Login} />
      {user ? <Routes /> : oldUser && <Login />}
    </Switch>
  );
}
export default Routes;

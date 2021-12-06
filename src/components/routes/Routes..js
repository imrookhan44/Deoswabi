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
import easyDonation from "../donation/EasyDonation";
import BankDonation from "../BankDonation/BankDonation";
import CnicDonation from "../CnicDonation/CnicDonation";
import ImageUpload from "../ImageUpload/ImageUpload";
import index from "../donation/index";
import Test from "../Admin/Test";
import dropdown from "../../dropdown/dropdown";

function Routes(isLoggedIn) {
  const [oldUserState, setOlduserState] = useState(false);
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
      <secureRoute path="/userdetails" component={Userdetails} />
      <SecureRoute path="/download" component={Download} />
      <Route path="/Admin" component={Admin} />
      <SecureRoute path="/Test" component={Test} />
      <SecureRoute path="/index" component={index} />
      <SecureRoute path="/BankDonation" component={BankDonation} />
      <SecureRoute path="/CnicDonation" component={CnicDonation} />
      <SecureRoute path="/donation" component={easyDonation} />
      <Route path="/dropdown" component={dropdown} />
      {/* <Route path='/ImageUpload' component={ImageUpload} /> */}

      <Route path="/" component={isLoggedIn ? Home : Login} />
      {user ? <Routes /> : oldUser && <Login />} 
    </Switch>
  );
}
export default Routes;

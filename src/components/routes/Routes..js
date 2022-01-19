import { useEffect, useState } from "react";
import firebase from "firebase";
import TodoApp from "../Adminpage/Adminpage";
import Profile from "../profile/Profile";
import Updatedacc from "../updatedacc/Updatedacc";
import Signup from "../Signup/Signup";
import Signin from "../Signin/Signin";
import Upload from "../upload/Upload";
import Login from "../login/Login";
import Userdetails from "../user details/user";
import Download from "../Download/Download";
import Admin from "../Admin/Admin";
import { Redirect, Route, Switch } from "react-router-dom";
import BankDonation from "../BankDonation/BankDonation";
import CnicDonation from "../CnicDonation/CnicDonation";
import ImageUpload from "../ImageUpload/ImageUpload";
import index from "../donation/index";
import Test from "../Admin/Test";
import EasyDonation from "../donation/EasyDonation";
import SchoolStatus from "../../School Status/SchoolStatus";
import ImportLink from "../ImportLink/ImportLink";
import Slider from "../slider/Slider";
import Adminpage from "../Adminpage/Adminpage";
// import AdminNavbar from "../navbarLinks/NavbarLink";
// import NavbarLink from "../navbarLinks/NavbarLink";
import NavbarLink from "../adminNavbar/NavbarLink";
import News from "../news/News"
function Routes(isLoggedIn) {
  const [user] = useState();
  const [oldUser] = useState();
  return (
    <Switch>
      <Route path="/profile" component={Profile} />
      <Route path="/news" component={News} />
      <Route path="/updatedacc" component={Updatedacc} />
      <Route path="/signup" component={Signup} />
      <Route path="/signin" component={Signin} />
      <Route path="/upload" component={Upload} />
      <Route path="/login" component={Login} />
      <Route path="/userdetails" component={Userdetails} />
      <Route path="/download" component={Download} />
      <Route exacts path="/adminPage" component={Adminpage} />
      <Route exacts path="/admin" component={Admin} />
      {/* <Route exacts path="/adminNavbar" component={AdminNavbar} /> */}
      <Route path="/Test" component={Test} />
      <Route path="/donation" component={index} />
      <Route path="/BankDonation" component={BankDonation} />
      <Route path="/CnicDonation" component={CnicDonation} />
      <Route path="/easyDonation" component={EasyDonation} />
      <Route path="/SchoolStatus" component={SchoolStatus} />
      <Route path="/ImageUpload" component={ImageUpload} />
      <Route path="/importLink" component={ImportLink} />
      <Route path="/navbarLink" component={NavbarLink} />
      <Route path="/" component={Slider} />

      <Route path="admin" component={isLoggedIn ?Adminpage : Admin} /> 
       {user ? <Routes /> : oldUser && <Admin />}
    </Switch>
  );
}
export default Routes;

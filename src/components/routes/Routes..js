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
import NavbarLink from "../adminNavbar/NavbarLink";
import News from "../news/News";
import ManageUser from "../user details/manageUsers/ManageUser";
import AllData from "./../all data/AllData";
// import ProtectedRoutes from "../ProtectedRoutes";
import { SecuredRoute } from "../../App";
import NotAdmin from "../NotAdmin";
function Routes(props) {
  let { userDetails, isLoggedIn } = props;
  // debugger
  const [user] = useState();
  const [oldUser] = useState();

  return (
    <Switch>
      <Route path="/profile" component={Profile} />
      <SecuredRoute path="/news" component={News} userDetails={userDetails} />
      <Route path="/updatedacc" component={Updatedacc} />
      <Route path="/signup" component={Signup} />
      <Route path="/notAdmin" component={NotAdmin} />
      <Route path="/signin" component={Signin} />
      <Route path="/upload" component={Upload} />
      <Route path="/login" component={Login} />
      <Route path="/userdetails" component={Userdetails} />
      <Route path="/download" component={Download} />
      <Route exacts path="/adminPage" component={Adminpage} />
      <Route exacts path="/admin" component={Admin} />
      <Route path="/Test" component={Test} />
      <Route path="/donation" component={index} />
      <Route path="/BankDonation" component={BankDonation} />
      <SecuredRoute path="/allData" component={AllData} userDetails={userDetails} />
      <Route path="/CnicDonation" component={CnicDonation} />
      <Route path="/easyDonation" component={EasyDonation} />
      <Route path="/SchoolStatus" component={SchoolStatus} />
      <Route path="/ImageUpload" component={ImageUpload} />
      <SecuredRoute path="/importLink" component={ImportLink} userDetails={userDetails} />
      <Route path="/navbarLink" component={NavbarLink} />
      <SecuredRoute path="/manageUser" component={ManageUser} userDetails={userDetails} />
      <Route path="/"  component={Slider} />
      
      <Route path="admin" component={isLoggedIn ? Adminpage : Admin} />
      {user ? <Routes /> : oldUser && <Admin />}
    </Switch>
  );
}
export default Routes;

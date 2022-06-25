import { useEffect, useState } from "react";
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
import ImageUpload from "../ImageUpload/ImageUpload";
import SchoolStatus from "../../School Status/SchoolStatus";
import ImportLink from "../ImportLink/ImportLink";
import Slider from "../slider/Slider";
import Adminpage from "../Adminpage/Adminpage";
import NavbarLink from "../adminNavbar/NavbarLink";
import News from "../news/News";
import ManageUser from "../user details/manageUsers/ManageUser";
import AllData from "./../all data/AllData";
import { SecuredRoute } from "../../App";
import NotAdmin from "../NotAdmin";
import Attendance from "../attendance/Attendance";
import Attendance1 from "../attendance/Attendance1";
import PndTable from "../../School Status/Pnd/PndTable";
import Donation from "../donation/Donation";

function Routes(props) {


  let { userDetails, isLoggedIn } = props;
  const [user] = useState();
  const [oldUser] = useState();
  return (
    <Switch>
      <Route path="/pndtable" component={PndTable} />
      <Route path="/attendance1" component={Attendance1} />
      <Route path="/attendance" component={Attendance} />
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
      <SecuredRoute path="/allData" component={AllData} userDetails={userDetails} />
      <Route path="/SchoolStatus" component={SchoolStatus} />
      <SecuredRoute path="/ImageUpload" component={ImageUpload} userDetails={userDetails} />
      <SecuredRoute path="/importLink" component={ImportLink} userDetails={userDetails} />
      <SecuredRoute path="/attendance" component={Attendance} userDetails={userDetails} />
      <Route path="/navbarLink" component={NavbarLink} />
      <Route path="/donation" component={Donation} />
      <SecuredRoute path="/manageUser" component={ManageUser} userDetails={userDetails} />
      <Route path="/" component={Slider} />
      <Route path="admin" component={isLoggedIn ? Adminpage : Admin} />
      {user ? <Routes /> : oldUser && <Admin />}
    </Switch>
  );
}
export default Routes;

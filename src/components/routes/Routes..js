import Home from '../home/Home';
import Profile from '../profile/Profile';
import Updatedacc from '../updatedacc/Updatedacc';
import Signup from '../Signup/Signup';
import Signin from '../Signin/Signin';
import Upload from '../upload/Upload';
import Login from '../login/Login';
import Userdetails from '../user details/user';
import Download from '../Download/Download';
import Admin from '../Admin/Admin';
import {  Route, Switch, } from 'react-router-dom'
import easyDonation from '../donation/EasyDonation';
import BankDonation from '../BankDonation/BankDonation';
import CnicDonation from '../CnicDonation/CnicDonation';
import ImageUpload from '../ImageUpload/ImageUpload';
import index from "../donation/index"
import Test from '../Admin/Test'
 
function Routes() {
  return (

        <Switch>
          <Route path='/profile'  component={Profile} />
          <Route path='/updatedacc' component={Updatedacc} />
          <Route path='/signup' component={Signup} />
          <Route path='/signin' component={Signin} />
          <Route path='/upload' component={Upload} />
          <Route path='/login' component={Login} />
          <Route path='/userdetails' component={Userdetails} />
          <Route path='/download' component={Download} />
          <Route path='/Admin' component={Admin} />
          <Route path='/Test' component={Test} />
          <Route path='/index' component={index} />
          <Route path='/BankDonation'  component={BankDonation} />
          <Route path='/CnicDonation' component={CnicDonation} />
          <Route path='/donation'component={easyDonation} />
          {/* <Route path='/ImageUpload' component={ImageUpload} /> */}

          <Route path='/' component={Home} />
        </Switch>
  )
}
export default Routes 
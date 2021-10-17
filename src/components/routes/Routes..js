import Home from '../home/Home';
import Profile from '../profile/Profile';
import Updatedacc from '../updatedacc/Updatedacc';
import Signup from '../Signup/Signup';
import Signin from '../Signin/Signin';
import Upload from '../upload/Upload';
import Login from '../login/Login';
import {  Route, Switch, } from 'react-router-dom'
 
function Routes() {
  return (

        <Switch>
          <Route path='/profile'  component={Profile} />
          <Route path='/updatedacc' component={Updatedacc} />
          <Route path='/signup' component={Signup} />
          <Route path='/signin' component={Signin} />
          <Route path='/upload' component={Upload} />
          <Route path='/login' component={Login} />

          <Route path='/' component={Home} />
        </Switch>
  )
}
export default Routes 
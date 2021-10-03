import './App.css';
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import Profile from './components/profile/Profile';
import Updatedacc from './components/updatedacc/Updatedacc';
import { BrowserRouter as Router, Route, Switch, } from 'react-router-dom'
function App() {
  return (

    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/'>
            <Home />
          </Route>
          <Route path='/Profile'>
            <Profile />
          </Route>
          <Route path='/Updatedacc'>
            <Updatedacc />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}
export default App
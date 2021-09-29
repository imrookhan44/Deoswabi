
import './App.css';
import Login from './components/login/Login';
import Navbar from './components/navbar/Navbar'
import Home from './components/home/Home'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/login'>
            <Login />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

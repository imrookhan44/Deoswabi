import './App.css';
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import Profile from './components/profile/Profile';
import Updatedacc from './components/updatedacc/Updatedacc';
import { BrowserRouter , Route, Switch, } from 'react-router-dom'
function App() {
  return (

    <BrowserRouter> 
        <Navbar />
        <Switch>
          <Route path='/profile'  component={Profile} />
          <Route path='/updatedacc' component={Updatedacc} />
          <Route path='/' component={Home} />
        </Switch>
      </BrowserRouter>
  )
}
export default App
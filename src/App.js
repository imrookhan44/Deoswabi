import './App.css';
import Footer from '../src/Footer/Footer'
import Profile from './profile/Profile';
import Projeoct from './Project/Projeoct';
import Login from './components/login/Login';
function App() {
  return (
    <div className="App">
      <Profile />
      <Projeoct />
      <Login />
    {/* <Footer />  */}
    </div>
  );
}

export default App;

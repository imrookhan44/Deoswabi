import './App.css';

import Profile from './components/profile/Profile'
 import Project from './components/Project/Project';
// import Login from './components/login/Login';
function App() {
  return (
    <div className="App">
      <Profile />
      <Project />
      {/* <Login /> */}
    </div>
  );
}

export default App;

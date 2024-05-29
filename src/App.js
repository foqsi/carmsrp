import { Routes, Route } from 'react-router-dom';
import Main from './components/pages/Main.jsx';
import Login from './components/pages/Login.jsx';
import Navbar from './components/navbar/NavBar.jsx';
import SignIn from './components/accounts/SignIn.jsx';
import Profile from './components/accounts/Profile.jsx';



function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Profile" element={<Profile />} />
      </Routes>
    </div>
  );
}


export default App;

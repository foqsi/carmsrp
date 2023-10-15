import Main from './pages/Main.jsx';
import Navbar from './components/navbar/NavBar.jsx';
import CarOfTheDay from './pages/CarOfTheDay.jsx';
import RandomCar from './pages/RandomCar.jsx';
import TopCars from './pages/TopCars.jsx';
import Footer from './components/Footer.jsx';
import SignIn from './pages/accounts/SignIn.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/CarOfTheDay" element={<CarOfTheDay />} />
        <Route path="/RandomCar" element={<RandomCar />} />
        <Route path="/TopCars" element={<TopCars />} />
        <Route path="/SignIn" element={<SignIn />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

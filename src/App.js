import logo from './logo.svg';
import './App.css';
import Home from './componenti/Home.js'
import Collection from './componenti/Collection'
import SingSide from './componenti/login'
import Pricing from './componenti/Abbonamenti';
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Routes>
      <Route path='/Home/collection' element = {<Collection />} />
      <Route path='/Home' element={<Home />} />
      <Route path='/login' element={<SingSide />} />
      <Route path='/Home/login=success/Abbonamenti' element={<Pricing />} /> 
      </Routes>
    </div>
  );
}

export default App;

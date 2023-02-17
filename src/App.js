import logo from './logo.svg';
import './App.css';
import Home from './componenti/Home.js'
import Collection from './componenti/Collection'
import SingSide from './componenti/login'
import SignUp from './componenti/Registrazione';
import Pricing from './componenti/Abbonamenti';
import Contatti  from './componenti/Contatti';
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Routes>
      <Route path='/Home/collection' element = {<Collection />} />
      <Route path='/Home' element={<Home />} />
      <Route path='/login' element={<SingSide />} />
      <Route path='/registrazione' element={<SignUp />} />
      <Route path='/Home/login=success/Abbonamenti' element={<Pricing />} /> 
      <Route path='/contatti' element={<Contatti />} />
      </Routes>
    </div>
  );
}

export default App;

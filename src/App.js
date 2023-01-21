import logo from './logo.svg';
import './App.css';
import Home from './componenti/Home.js'
import Collection from './componenti/Collection'
import SingSide from './componenti/login'
import Pricing from './componenti/Abbonamenti';
import { Routes, Route } from "react-router-dom";
import PaymentForm from './pagamento/formPagamento';
import Checkout from './pagamento/checkout';
function App() {
  return (
    <div className="App">
      <Routes>
      <Route path='/Home/collection' element = {<Collection />} />
      <Route path='/Home' element={<Home />} />
      <Route path='/Home/login' element={<SingSide />} />
      <Route path='/Home/login=success/Abbonamenti' element={<Pricing />} /> 
      <Route path='/Home/pagamento' element={<PaymentForm />} />
      <Route path='/Home/checkout' element={<Checkout />} />
      </Routes>
    </div>
  );
}

export default App;

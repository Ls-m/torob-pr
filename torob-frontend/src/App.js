import "./App.css";
import axios from 'axios'
import Home from "./pages/Home";
import {
  BrowserRouter,
  Routes, // instead of "Switch"
  Route,
} from "react-router-dom";
import Customer from "./pages/Customer";
import Seller from "./pages/Seller";
import Mobile from "./pages/Mobile";
import Laptop from "./pages/Laptop";

  
function App() {
  
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/customer" element={<Customer />}/>
      <Route path="/seller" element={<Seller />}/>
      <Route path="/mobiles" element={<Mobile/>}/>
      <Route path="/laptops" element={<Laptop/>}/>
    </Routes>
  </BrowserRouter>
  );
  
 
}
  
export default App;
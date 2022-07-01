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
  
function App() {
  
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/customer" element={<Customer />}/>
      <Route path="/seller" element={<Seller />}/>
    </Routes>
  </BrowserRouter>
  );
  
 
}
  
export default App;
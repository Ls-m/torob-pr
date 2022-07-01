import "./App.css";
import axios from 'axios'
import Home from "./components/Home";
import {
  BrowserRouter,
  Routes, // instead of "Switch"
  Route,
} from "react-router-dom";
  
function App() {
  
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}/>
    </Routes>
  </BrowserRouter>
  );
  
 
}
  
export default App;
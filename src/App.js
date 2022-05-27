import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Navbar from './Pages/Shared/Navbar/Navbar'
import Register from './Pages/Register/Register';
function App() {
  return (
    <div>

      <Navbar></Navbar>

      <Routes>

        <Route path="register" element={<Register></Register>}></Route>

      </Routes>



    </div>
  );
}

export default App;

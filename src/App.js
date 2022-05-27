import './App.css';
import { Routes, Route } from "react-router-dom";
import Navbar from './Pages/Shared/Navbar/Navbar';
import Register from './Pages/Register/Register';


import SignIn from './Pages/SignIn/SignIn';
import Home from './Pages/Home/Home';

function App() {
  return (
    <div>

      <Navbar></Navbar>

      <Routes>


        <Route path="/" element={<Home></Home>}></Route>
        <Route path="register" element={<Register></Register>}></Route>

        <Route path="login" element={<SignIn></SignIn>}></Route>


      </Routes>



    </div>
  );
}

export default App;

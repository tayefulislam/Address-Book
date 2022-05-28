import './App.css';
import { Routes, Route } from "react-router-dom";
import Navbar from './Pages/Shared/Navbar/Navbar';
import Register from './Pages/Register/Register';


import SignIn from './Pages/SignIn/SignIn';
import Home from './Pages/Home/Home';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ContactDetail from './Pages/UserModules/ContactDetail';
import AddNewContact from './Pages/UserModules/AddNewContact';
import RequireAuth from './Pages/RequireAuth/RequireAuth';

function App() {
  return (
    <div>

      <Navbar></Navbar>

      <Routes>


        <Route path="/" element={<RequireAuth><Home></Home></RequireAuth>}></Route>
        <Route path="/contactsDetails/:id" element={<RequireAuth><ContactDetail></ContactDetail></RequireAuth>}></Route>
        <Route path="/newContact" element={<RequireAuth><AddNewContact></AddNewContact></RequireAuth>}></Route>



        <Route path="register" element={<Register></Register>}></Route>

        <Route path="login" element={<SignIn></SignIn>}></Route>


      </Routes>


      <ToastContainer />

    </div>
  );
}

export default App;

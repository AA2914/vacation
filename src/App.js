
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './Pages/Home';
import About from './Pages/About';
import Services from './Pages/Services';
import Apartment from './Pages/Apartment';
import Blog from './Pages/Blog';
import Contact from './Pages/Contact';
import Footer from './Pages/Footer';
import { Route, Routes } from 'react-router-dom';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Booklist from './Pages/Booklist';
import AdminLogin from './Pages/AdminLogin';
import Cards from './Pages/Cards';
import UserRegister from './Pages/UserRegister';
import UserBooking from './Pages/UserBooking';
import UserContact from './Pages/UserContact';
import BookingForm from './Pages/BookingForm';
import BookingSuccess from './Pages/BookingSuccess';



function App() {
  return (
    <>
   

    <Routes>
  <Route path='/' element={<Login/>}/>
  <Route path='home' element={<Home />}/>
  <Route path='about' element={<About/>}/>
  <Route path='services' element={<Services/>}/>
  <Route path='apartment' element={<Apartment/>}/>
  <Route path='blog' element={<Blog/>}/>
  <Route path='contact' element={<Contact/>}/>
  <Route path='footer' element={<Footer/>}/>

  <Route  path="adminlogin" element={<AdminLogin/>}/>
  <Route path='card' element={<Cards/>}/>
  <Route path='userRegister' element={<UserRegister/>}/>
  <Route path='userBooking' element={<UserBooking/>}/>
  <Route path='userContact' element={<UserContact/>}/>

  <Route path='register' element={<Register/>}/>
  <Route  path="/view-room/:number" element={<Booklist/>}/>
  <Route  path="bookingform" element={<BookingForm/>}/>
  <Route  path="bookingsuccess" element={<BookingSuccess/>}/>

   </Routes>
   
    </>
  );
}

export default App;

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import Header from './Components/Header.jsx';
import Footer from './Components/Footer.jsx';
import Services from './pages/Services.jsx';



export default function App() {
  return (
    <BrowserRouter>
    <Header></Header>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/login' element={<Login />} />
        <Route path='/service' element={<Services></Services>} />
        

        
      </Routes>
      <Footer></Footer>
    
    </BrowserRouter>
    
  );
}

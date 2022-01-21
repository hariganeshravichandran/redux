import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from '../Header/header';
import About from './About';
import Contact from './Contact';
import Footer from './Footer';
// import Header from './Header';
import Home from './Home';

export default function Router() {
  return <div>
      <Header/>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/about' element={<About/>}/>
                <Route path='/contact' element={<Contact/>}/>
                <Route path='/footer' element={<Footer/>}/>
            </Routes>
        </BrowserRouter>
      <Footer/>
  </div>;
}


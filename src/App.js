import React from 'react';
import { BrowserRouter as RouterOutlet, Route, Routes } from 'react-router-dom';
import './App.scss';
import Home from './components/Homes/Home'
import Nav from './components/Nav/Nav'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <>
        <div className='header'>
            <Nav/>
        </div>
        <div className='boy'>
          <div className='boy-container'>
            <RouterOutlet>
                <Routes>
                  <Route path="/" element={<Home/>}></Route>
                </Routes>
            </RouterOutlet>
          </div>
        </div>
        <div className='footer'>
            <Footer/>
        </div>
    </>
  );
}

export default App;

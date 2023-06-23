import React from 'react';
import { BrowserRouter as RouterOutlet, Route, Routes } from 'react-router-dom';
import './App.scss';
import Home from './components/Homes/Home'
import Nav from './components/Nav/Nav'
import Footer from './components/Footer/Footer'
import { useState, useEffect } from 'react';

function App() {

  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScroll = () => {
    if (window.pageYOffset > 300) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };


  return (
    <>
      <div className='app'>
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
          {showButton?      
            <button className='gotop' onClick={handleClick}>
              <span class="material-symbols-outlined">
                expand_less
              </span>
            </button> : <></>
          }
  
          <div className='footer'>
              <Footer/>
          </div>
      </div>
    </>
  );
}

export default App;

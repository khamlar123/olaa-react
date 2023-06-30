import React from 'react';
import { BrowserRouter as RouterOutlet, Route, Routes, Navigate } from 'react-router-dom';
import './App.scss';
import Home from './components/Homes/Home'
import Login from './components/login/login'
import Register from './components/register/register'
import Nav from './components/Nav/Nav'
import Footer from './components/Footer/Footer'
import Search  from './components/Search/Search';
import BreadCrumb from './components/BreadCrumbs/BreadCrumbs';
import Category from './components/Catgorys/catgory'
import ProductDetail from './components/Product-detail/Product-detail'
import { useState, useEffect } from 'react';
import Submenue from './components/Nav/componenet/Submenue'

function App() {

  const [showButton, setShowButton] = useState(false);
  const currentUrl = window.location.href;

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    console.log('url', currentUrl.split("/")[3]);
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
              <Nav />
              {showButton ? <Submenue />: <></>  }
          </div>
          {currentUrl.split("/")[3] == 'home' || currentUrl.split("/")[3] == '' ? <></>: <BreadCrumb data={currentUrl} />}
          <div className='boy'>
            <div className='boy-container'>
              <RouterOutlet>
                  <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/login" element={<Login />}></Route>
                    <Route path="/register" element={<Register />}></Route>
                    <Route path="/home" element={<Navigate to="/"/>}></Route>
                    <Route path="/search/:searchKey" element={<Search />}></Route>
                    <Route path="/catgory/:id" element={<Category />}></Route>
                    <Route path='/product-detail/:id' element={<ProductDetail />}></Route>
                  </Routes>
              </RouterOutlet>
            </div>
          </div>
          {showButton?      
            <button className='gotop' onClick={handleClick}>
              <span className="material-symbols-outlined">
                expand_less
              </span>
            </button> : <></>
          }
  
          <div className='footer'>
              <Footer />
          </div>
      </div>
    </>
  );
}

export default App;

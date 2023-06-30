import './Nav.scss'
import logo from '../../images/logo olaa.svg'
import searchIcon  from '../../images/icon-home/Secrch.svg'
import lgIcon from '../../images/icon-home/usa_flag.svg'
import google from '../../images/login-icon/Google.svg'
import { useState } from 'react'
function Nav() {

    const [language,setLanguage] = useState(false); 
    const [kw,setKw] = useState("");

    function openLanguagesFunc(){
            setLanguage(prevState => !prevState);
    }

    function gotoSearch() {
        window.location.href = '/search/'+ kw;
    }

    function handleKeyUp(e) {
        if (e.keyCode === 13) {
            gotoSearch();
        }
    }

    return(
        <>
            <div className="nav-wrapper">
                <div className="nav-content">
                    <div className='logo'>
                        <div className='logo-farm'>
                            <a href="/home">
                                <img src={logo} alt='img'/>
                            </a>
                        </div>
                    </div>
                    
                    <dvi className="search">
                        <div className='search-content'>
                            <input type='text' value={kw} onChange={(e) => setKw(e.target.value) } onKeyUp={handleKeyUp} />
                            <a href={'/search/'+kw}>
                                <button >
                                    <img src={searchIcon} alt=""/>
                                </button>
                            </a>
                        </div>
                    </dvi>

                    <div className='iocns'>
                        <a href='/login' className='icon-item user' >
                            <span className="material-symbols-outlined">
                                person
                            </span>
                            User

                            <div className='user-sub'>
                                <span class="material-symbols-outlined arrow">
                                        arrow_drop_up
                                </span>

                                <div className='btn'>
                                    <button>Login</button>
                                </div>

                                <div className='connect-with'>
                                    <p>Or connect with</p>
                                    <img src={google}></img>
                                </div>

                                <hr/>

                                <div className='nothave'>
                                    <p>Don't have an account?</p>
                                </div>

                                <div className='btn'>
                                    <button id='reg'>Register</button>
                                </div>

                            </div>

                        </a>
                        <a className='icon-item'>
                            <span className="material-symbols-outlined">
                                shopping_cart
                            </span>
                            Card
                            <div className='cart-sub'>
                                        <span class="material-symbols-outlined arrow">
                                             arrow_drop_up
                                         </span>

                                <p>Please, Login or Register</p>
                            </div>
                        </a>
                        
                        <a className='icon-item' onClick={() => openLanguagesFunc()}>
                                <div className='lg-img'>
                                    <img src={lgIcon} alt='lg'/>
                                </div>
                                ENG

                                {!language ?  <></>: 
                                         <div className='sub-item'>
                                         <span class="material-symbols-outlined arrow">
                                             arrow_drop_up
                                         </span>
     
                                         <div className='sub-sub'>
                                             <img src={lgIcon}></img>
                                             <p>English</p>
                                         </div>
     
                                         <div className='sub-sub'>
                                             <img src={lgIcon}></img>
                                             <p>English</p>
                                         </div>
                                     </div>
                                }
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Nav;
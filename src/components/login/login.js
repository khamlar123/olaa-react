import './login.scss';
import closeEye from '../../images/login-icon/close_eye.svg'
import openEye from '../../images/login-icon/open_eye.svg'
import google from '../../images/login-icon/Google.svg'
import { useState, useEffect } from 'react'; 
import { Link } from "react-router-dom";

function Login() {

    const [openEyeBl,setOpenEye] = useState(false);
    const [userName,setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [swithMode,setSwithMode] = useState(false);

    useEffect(() => {
        (!swithMode ? setUserName("+85620"): setUserName(""))
    }, {})


    function userNameFunc(value) {
        setUserName(value)
    }

    function passwordFunc(value) {
        setPassword(value)
    }

    function changeMode() {
        (swithMode ? setUserName("+85620"): setUserName(""))
        setSwithMode(prevState => !prevState);
    }


    return (
        <>
           <div className='login-wrapper'>
                <div className='login-container'>

                    <div className='login-title'>
                        <h2>Login</h2>
                        <div className='icon'>
                            <span class="material-symbols-outlined" onClick={() => changeMode()}>
                                {!swithMode? 'mail' : 'phone_iphone'}
                            </span>

                            <div className='helep'>
                                <p className='Login-with'>{!swithMode ? 'Login with email' : 'Login with phone number' } </p>
                                <span className="material-symbols-outlined arrow" >
                                    arrow_right
                                </span>
                            </div>

                        </div>
                    </div>

                    <div className='input-item'>
                        <label class="input">
                            <input class="input__field" type="text" placeholder=" " value={userName} onChange={(e) => userNameFunc(e.target.value)} />
                            <span class="input__label">{!swithMode? 'Phone': 'Email'} </span>
                        </label>
                    </div>
    
                    <div className='input-item'>
                        <label class="input">
                            <input class="input__field" type={openEyeBl? 'text':'password'} placeholder=" " value={password} onChange={(e) => passwordFunc(e.target.value)}/>
                            <span class="input__label">Password</span>
                            {openEyeBl ? <img src={openEye}  onClick={() =>  setOpenEye(false)} /> : <img src={closeEye} onClick={() => setOpenEye(true)} /> }
                            
                        </label>
                    </div>

                    <div className='forget'>
                        <a href='#'>Forgot password ?</a>
                    </div>

                    <div className='btn'>
                        <button>
                            Login
                        </button>
                    </div>

                    <div className='register-by'>
                        <p>or registered by</p>
                        <div className='footer'>
                            <img src={google}></img>
                            <label>
                            You don't have an account ?
                                <Link to={`/register`}>
                                    <a > Register</a>
                                </Link>
                               
                            </label>
                        </div>
                    </div>

                </div> 
           </div>
        </>
    )
}

export default Login;
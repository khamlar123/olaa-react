import './register.scss'
import closeEye from '../../images/login-icon/close_eye.svg'
import openEye from '../../images/login-icon/open_eye.svg'
import google from '../../images/login-icon/Google.svg'
import { Link } from "react-router-dom";
import { useState } from 'react'

function Register() {
    const [openEyeItem,setOpenEye] = useState(false);
    const [iagree,setIagree] = useState(false);
    const [registerModel,setRegisterModel] = useState({
        firstName: '',
        lastName: '',
        userName: '+85620',
        password: '',
        iagree: false,
    });

    function openEyeFunc() {
        setOpenEye(prevState => !prevState);
    }

    function iagreeFunc() {
        setIagree(prevState => !prevState);
    }

    function registerSubmit() {
        registerModel.iagree = iagree;
        console.log('xxxxxxxxxxxx',registerModel);
    }


    const onChange = (e, key) => {
        setRegisterModel((prevCredentials) => ({
          ...prevCredentials,
          [key]: e.target.value + "",
        }));
    };
    


    return (
        <>
            <div className='register-wrapper'>
                <div className='register-container'>
                    <div className='title'>
                        <h4>Register</h4>
                    </div>

                    <div className='input-group'>
                        <input type='text'   name="firstName"  placeholder='First Name' value={registerModel.firstName} onChange={(e) => onChange(e,"firstName")} required minLength={2} maxLength={60} />
                        <input type='text' name="lastName"  placeholder='last Name' value={registerModel.lastName} onChange={(e) => onChange(e,"lastName")} required minLength={2} maxLength={60}/>
                    </div>

                    <div className='input-item'>
                        <input type='text' name='userName'  placeholder='Phone number' value={registerModel.userName} onChange={(e) => onChange(e,"userName")} required maxLength={14} minLength={14}/>
                    </div>

                    <div className='input-item'>
                        <input type={!openEyeItem ? 'password':'text'} placeholder='Password' name='password' value={registerModel.password} onChange={(e) => onChange(e,"password")} required minLength={6} maxLength={14} />
                         {!openEyeItem ?<img src={closeEye} onClick={() => openEyeFunc()} /> :  <img src={openEye} onClick={() => openEyeFunc()} />}    
                    </div>

                    <div className='i-agree'>
                        <div className='agree-item' onClick={() => iagreeFunc()}>
                            <div className={!iagree ? 'check-box': 'check-box checked'}></div>
                            <p>
                                I agree to Olaa's <span>Terms</span> of Use and Privacy Policy
                            </p>
                        </div>
                    </div>

                    <div className='btn'>
                        <button onClick={() => registerSubmit()}  disabled={!iagree}>
                            Register
                        </button>
                    </div>

                    <div className='connect-with'>
                        <div className='coonet'>
                            <p>Or connect with</p>
                        </div>

                        <div className='footer'>
                            <img src={google} />
                            <label>Have an account? <Link  to={`/login`} ><a>Login</a></Link> </label>
                        </div>

                    </div>

                </div>
            </div>
        </>
    )    
}

export default Register;
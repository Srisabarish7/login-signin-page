import React, {useState} from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { FaUser, FaLock } from 'react-icons/fa'; 
import './login.css';
import downloadImage from '../Assests/download.png'; 


function Login() {

    const[action,setAction]=useState("Login");
    const[name, setName] = useState("");
    const[password, setPassword] = useState("");
    const[namePlaceholder, setNamePlaceholder] = useState("Name");
    const[passwordPlaceholder, setPasswordPlaceholder] = useState("Password");
    const[errors, setErrors] = useState({});
    const navigate=useNavigate();

    const handlePlaceholder = (setPlaceholder) => {
        setPlaceholder("");
    };
    
    const handleReset = (setPlaceholder, placeholderText) => {
        setPlaceholder(placeholderText);
    };
    
    const handleLogin = () => {
        let validationErrors = {};
        if (name === "") {
          validationErrors.name = "*required";
        }
        if (password === "") {
          validationErrors.password = "*required";
        }
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return; 
          }
        navigate('/');
      };


  return (   
    <>
        <div className='navbar'>
            <img src={downloadImage} alt='Logo'/>
                <ul>
                    <li><a href='/'>Home</a></li>
                    <li><a href='/register'>Register</a></li>
                </ul>
        </div>   

        <div className='login-container'>
            <div className='login-header'>
                <div className='login-text'>{action}</div>
                    </div>
                    <div className='login-inputs'>
                        <div className='login-input'>
                            <FaUser className='icon'/>
                            <input type='text' placeholder={namePlaceholder} value={name} onChange={(e) => setName(e.target.value)}
                                onFocus={() => handlePlaceholder(setNamePlaceholder)}
                                onBlur={() => handleReset(setNamePlaceholder, "Name")}
                                className={errors.name ? 'error' : ''}
                            />
                            {errors.name && <div className='login-error-message'>{errors.name}</div>}
                    </div>
                    <div className='login-input'>
                        <FaLock className='icon'/>
                        <input type='password' placeholder={passwordPlaceholder} value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            onFocus={() => handlePlaceholder(setPasswordPlaceholder)}
                            onBlur={() => handleReset(setPasswordPlaceholder, "Password")}
                            className={errors.password ? 'error' : ''}
                        />
                        {errors.password && <div className='login-error-message'>{errors.password}</div>}
                    </div>
                </div>
                <div className='login-forgot-password'>Forgot Password?<span>Click Here</span></div>
                <div className='login-registartion'>Don't have an account?<NavLink to="/register">Register</NavLink></div>
                <div className='login-submit-container'>
                    <div className='login-submit' onClick={handleLogin}>
                    Login
                </div>
            </div>
        </div>
    </>
  )
}

export default Login
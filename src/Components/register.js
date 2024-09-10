import React, {useState} from 'react'
import './register.css'
import { NavLink, useNavigate } from 'react-router-dom'
import { FaUser,FaLock,FaEnvelope } from 'react-icons/fa';
import downloadImage from '../Assests/download.png'; 

function Register() {

    const[action,setAction]=useState("Register");
    const[name, setName] = useState("");
    const[password,setPassword]=useState("");
    const[namePlaceholder, setNamePlaceholder] = useState("Name");
    const[passwordPlaceholder, setPasswordPlaceholder] = useState("Password");
    const[emailPlaceholder, setEmailPlaceholder] = useState("Email");
    const[retypePasswordPlaceholder, setretypePasswordPlaceholder] = useState("Re-Type Password");
    const[errors, setErrors] = useState({});
    const navigate = useNavigate();

    const handlePlaceholder = (setPlaceholder) => {
        setPlaceholder("");
    };
    
    const handleReset = (setPlaceholder, placeholderText) => {
        setPlaceholder(placeholderText);
    };

    const handleRegister = () => {
        let validationErrors={};
        if (name === "") {
            validationErrors.name = "*required";
        }

        if(password === ""){
            validationErrors.password = "*required";
        }

        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return; 
        }
        alert('Registered successfully!');
        navigate('/login');
    };

return (
    <>
        <div className='navbar'>
            <img src={downloadImage} alt='Logo'/>
                <ul>
                    <li><a href='/'>Home</a></li>
                    <li><a href='/login'>Login</a></li>
                </ul>
        </div>  

        <div className='container'>
            <div className='header'>
                <div className='text'>{action}</div>
            </div>
            <div className='inputs'>
                <div className='input'>
                    <FaUser className='icon'/>
                    <input type='text' placeholder={namePlaceholder} value={name} onChange={(e)=>setName(e.target.value)}
                        onFocus={() => handlePlaceholder(setNamePlaceholder)}
                        onBlur={() => handleReset(setNamePlaceholder, "Name")}
                        className={errors.name ? 'error' : ''}
                    />
                    {errors.name && <div className='register-error-message'>{errors.name}</div>}
                </div>
                <div className='input'>
                    <FaEnvelope className='icon'/>
                    <input type='email' placeholder={emailPlaceholder}
                        onFocus={() => handlePlaceholder(setEmailPlaceholder)}
                        onBlur={() => handleReset(setEmailPlaceholder, "Email")}/>
                </div>
                <div className='input'>
                    <FaLock className='icon'/>
                    <input type='password' placeholder={passwordPlaceholder} value={password} onChange={(e)=>setPassword(e.target.value)}
                       onFocus={() => handlePlaceholder(setPasswordPlaceholder)}
                       onBlur={() => handleReset(setPasswordPlaceholder, "Password")}
                       className={errors.password ? 'error' : ''}
                    />
                    {errors.password && <div className='register-error-message'>{errors.password}</div>}
                </div>
                <div className='input'>
                    <FaLock className='icon'/>
                    <input type='password' placeholder={retypePasswordPlaceholder}
                        onFocus={() => handlePlaceholder(setretypePasswordPlaceholder)}
                        onBlur={() => handleReset(setretypePasswordPlaceholder, "Re-Type Passord")}/>
                </div>
            </div>
            <div className='forgot-password'>Already Have an account?<NavLink to="/login">Login</NavLink></div>
            <div className='submit-container'>
                <div className='submit' onClick={handleRegister}>
                        Register
                </div>
            </div>
        </div> 
    </> 
  )
}

export default Register
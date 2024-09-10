import React from 'react'
import './home.css';
import downloadImage from '../Assests/download.png'; 

function home() {
  return (
    <>
        <div className='navbar'>
            <img src={downloadImage} alt='Logo'/>
                <ul>
                    <li><a href='/'>Home</a></li>
                    <li><a href='/login'>Login</a></li>
                </ul>
        </div>   
         
        <div className='title'>CUBEAI SOLUTIONS</div>
    </>
  )
}

export default home
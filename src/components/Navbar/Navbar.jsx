import React from 'react'
import './Navbar.css'
import HomeIcon from '@mui/icons-material/Home';
import { Link } from 'react-router-dom';

const Navbar = ({openSignInPopUp, openSignUpPopUp}) => {
  return (
    <div className='navbar'>
        <div className='navbar_container'>
            <h1 className='stroke-text'><span style={{color:'#800020'}}>UNI</span>Trade</h1>
            <ul className='nav_list_container'>
                <div className='home_icon'>
                  <HomeIcon/><li className='nav_list'><Link style={{textDecoration:'0', color:'#800020'}} to='/home'>Home</Link></li>
                </div>
                <li className='nav_list'><Link style={{textDecoration:'0', color:'#800020'}} to='/about'>About Us</Link></li>
                <li className='nav_list'><Link style={{textDecoration:'0', color:'#800020'}} to='/services'>Services</Link></li>
                <div className='home_icon'>
                <HomeIcon/><li className='nav_list'><Link style={{textDecoration:'0', color:'#800020'}}  to='/investment'>Investment Plan</Link></li>
                </div>
                
                <li className='nav_list'><Link style={{textDecoration:'0', color:'#800020'}} to='/contact'>Contact Us</Link></li>
                <span onClick={openSignInPopUp}>Login</span>
                <span onClick={openSignUpPopUp}>Register</span>

            </ul>

        </div>
        

    </div>
  )
}

export default Navbar


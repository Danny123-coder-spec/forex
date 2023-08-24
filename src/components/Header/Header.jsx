import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='header'>
        <div className='header_container'>
          <div className='header_text'>
            <span>Mastering the art of Achieving financial stability <br/><span style={{marginLeft:'8rem'}}>with forex trading</span></span>
            <span style={{fontSize:'18px'}}>Finding balance amidst market votality:The art of breaking even in forex trading</span>
          </div>
          <div className='btn'>
            <Link href=""><button>GET STARTED</button></Link>
          </div>

        </div>

    </div>
  )
}

export default Header



// https://astutealliance.ltd/images/forex-1.jpg
// https://astutealliance.ltd/images/stock-markete200.jpg
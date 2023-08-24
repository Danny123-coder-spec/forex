import React from 'react'
import './Container.css'
import img from '../assets/CEO.jpg'
import sign from '../assets/sign.png'
import { Link } from 'react-router-dom'



const Container = () => {

  return (
    <div className='container'>
      <div className='container-header'>
          <div className='about'>
            <b  style={{fontSize:'2.5rem'}}className="wine_color">About Us</b>
            <span className='grey_color'>We are the leading start Up forex trading company</span>
          </div>
          <div className="about_container">
            <div className='about_left'>
              

              <span className='wine_color' style={{fontSize:'30px'}}>We have been providing quality <br/>services for more than 3 years </span>
              <div>
                <img src={img} alt="" style={{borderRadius:'50%', height:'4.5rem'}}/>
                <span className='wine_color' style={{fontWeight:'bold'}}>Dalli Fx, </span>{', '}<span className='grey_color'>CEO</span>
              </div>
             
            
            </div>
            {/* <hr/> */}
            
            
            <div className='about_right'>
             <p className='grey_color'>
              We are dedicated team committed to delivering exceptional products/Services and 
              providing a seamless user experience.With expertise in our fields we strive to meet the needs
              and exceed the expectations of our valued customers.
            </p>
            <Link style={{textDecoration:'0', fontWeight:'bold'}} className='wine_color' to="/">READ MORE -></Link>
        </div>


          </div>
          
        </div>
        
      

    </div>
  )
}

export default Container
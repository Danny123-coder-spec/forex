import React, { useState } from 'react'
import './SignIn.css'
import { Link } from 'react-router-dom'
import {AiOutlineClose} from 'react-icons/ai'
// import closeIcon from '../../assets/x.svg'
import google from '../assets/search.png'



function SignIn({openSignUpPopUp,closePopUp}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  return (
    <div className='open_Pop_Up'>
      <div className='login_form'>
       <div className='close_login_btn'>
         {/* <button type='button' onClick={closePopUp}><img  src='' alt="" /></button> */}
         <AiOutlineClose onClick={closePopUp} className='closeIcon'/>
          <span style={{fontWeight:'bold', fontSize:'20px'}}>Login to unitrade</span>
       </div>
       <form action="">
        <div className='email_login'>
          <label htmlFor="input_email" >
            Email
          </label>
          <input style={{fontSize:'16px'}} type="text" name='' id='input_email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
        </div>
        <div className='password_login'>
          <label htmlFor="input_password">
            Password
          </label>
          <input style={{fontSize:'16px'}} type="password" name='' id='input_password' value={password} onChange={(e) => setPassword(e.target.value)}/>
        </div>
        <div className='remember_checked'>
          <div className='checkbox'>
            <label htmlFor="">
              <input type="checkbox" name="" id="" value=''/>
              Remember Me
            </label>
            <div className='forgot'>
              <Link style={{textDecoration:'0', color:'#000'}} to='/forgot'><span className='for_pass' style={{color:'#000'}}>Forgot your password?</span></Link>
            </div>
          </div>
        </div>
        <div className='login_btn'>
          <button type='button'>Login</button>
        </div>
        <div className='or_tag'>
          <div className='line_Or'></div>
          <span>Or</span>
          <div className='line_Or'></div>
        </div>
        <div className='google_btn'>
          <img width='20' height='20' src={google} alt="" />
          <button type='button'>Continue With Google</button>
        </div>
        <div className='below_terms'></div>
        <div className='sign_Up'>
          <span>Don't have an account?</span>
          <span onClick={openSignUpPopUp} style={{paddingLeft:'8px', color:'#800020'}}>Sign up</span>
        </div>
        <div className='terms_of_service'>
          <p>By continuing, you agree to inserviz <Link style={{textDecoration:'0', color:'#800020'}} to='/termsOfService'>Terms of Service</Link> and acknowledge you've read our <Link style={{textDecoration:'0', color:'#800020'}} to='/privacy_policy'>Privacy Policy</Link></p>
        </div>

       </form>

       </div>
    </div>
  )
}

export default SignIn

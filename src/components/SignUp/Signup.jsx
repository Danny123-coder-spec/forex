import React, { useState } from 'react'
import './SignUp.css'
// import closeIcon from '../assets/x.svg'
// import google from '../../assets/google.png'
import {AiOutlineClose} from 'react-icons/ai'
import { Link } from 'react-router-dom'
import google from '../assets/search.png'

const SignUp = ({closePopUp, openSignInPopUp}) => {
  const [formData, setFormData] = useState({
    email:'',
    password:''
  });

  const handleEmail = (e) => {
    const {name, value} = e.target;
    setFormData({
      ...formData,
      [name]:value
    });

  }

  const handleInitialPass = (e) => {
    const {name, value} = e.target;
    setFormData({
      ...formData,
      [name]:value
    });

  }
  

  return (
    <div className='signUp'>
        <div className='signUp_container'>
          {/* <img className="close_img" onClick={closePopUp} src='' alt="" /> */}
          <AiOutlineClose onClick={closePopUp} className='closeIcon'/>
           <div className='close_btn'>
             {/* <span>IT'S FREE! View job postings easily with Inserviz</span> */}
           </div>

            <div className='terms_of_service'>
              <p style={{fontSize:'14px'}}>By continuing, you agree to inserviz <Link style={{textDecoration:'0', color:'#800020'}} to='/termsOfService'>Terms of Service</Link> and acknowledge you've read our <Link style={{textDecoration:'0', color:'#800020'}} to='/privacy_policy'>Privacy Policy</Link></p>
            </div>
            <div className='google_btn'>
              <img width='20' height='20' src={google} alt="" />
              <button>Continue With Google</button>
            </div>
            <div className='or_tag'>
              <div className='line_Or'></div>
              <span>Or</span>
              <div className='line_Or'></div>
            </div>
            <form action="">
               <div className='email_signUp'>
                  <label htmlFor="input_email" >
                    Email
                   </label>
                  <input style={{fontSize:'16px'}}
                   type="email"
                    name='email' 
                   id='input_email' 
                   value={formData.email} 
                   onChange={handleEmail}/>
                </div>
                <div className='password_signUp'>
                  <label htmlFor="input_password">
                    Password
                  </label>
                   {/* <div className='password_icon'> */}
                     <input style={{fontSize:'16px'}}
                      type="password" name='password' id='input_password' 
                      value={formData.password} 
                      onChange={handleInitialPass}/>
                     {/* <img src="" alt="" /> */}
                   {/* </div> */}
                </div>
                <div className='password_req'>
                   <p style={{fontSize:'14px', color:'#595959'}}>Password must contain at least 8 characters including 1 uppercase letter, 1 lowercase letter, 1 number, and 1 special character</p>
               </div>
            
               <div className='signUp_btn'>
                  <button type='button'>Sign Up</button>
                </div>
                <div className=''></div>
                <div className='login'>
                  <span>Already have an account?</span>
                  <span onClick={openSignInPopUp} style={{paddingLeft:'8px', color:'#800020'}}>Login</span>
                </div>

            </form>
            


        </div>


    </div>
  )
}

export default SignUp
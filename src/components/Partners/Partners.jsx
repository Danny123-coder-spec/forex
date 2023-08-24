import React from 'react'
import './Partners.css'
import partners3 from '../assets/partner3.jpeg'
import partners2 from '../assets/partner2.jpeg'
import partners1 from '../assets/partner1.jpeg'
import TelegramIcon from '@mui/icons-material/Telegram';
import { Link } from 'react-router-dom'

const Partners = () => {
  return (
    <div className='partners'>
        <div className='partners_container'>
            <span className='wine_color' style={{marginLeft:'26rem',fontSize:'3rem', fontWeight:'bold'}}>Our Partners</span>
            <hr/>
            <div className='partner_img'>
              <div className='partner_img_names'>
                <Link to='/telegram'><img src={partners3} alt="" /></Link>
                <div className='partner_names'>
                  <span className='wine_color'>Exness</span>
                  <span className='grey_color'>Broker</span>
                  <div className='tel'>
                    <div className='circle_border'></div><Link className='telegram grey_color' to='/telegram'><TelegramIcon/></Link>
                  </div>
                  </div>
              </div>
              <div className='partner_img_names'>
                <Link to='/telegram' style={{marginLeft:'2rem'}}><img src={partners2} alt="" /></Link>
                <div className='partner_names'>
                  <span className='wine_color'>Habby Fx</span>
                  <span className='grey_color'>Consultant</span>
                  <div className='tel'>
                    <div className='circle_border'></div><Link className='telegram grey_color' to='/telegram'><TelegramIcon/></Link>
                  </div>
                </div>

              </div>
              <div className='partner_img_names'>
                <Link to='/telegram' style={{marginLeft:'2rem'}}><img src={partners1} alt="" /></Link>
                <div className='partner_names'>
                  <span className='wine_color'>Elvis Justice Fx</span>
                  <span className='grey_color'>Mentor</span>
                  
                  <div className='tel'>
                    <div className='circle_border'></div><Link className='telegram grey_color' to='/telegram'><TelegramIcon/></Link>
                  </div>
                </div>
              </div>
            </div>

        </div>

    </div>
  )
}

export default Partners
import React from 'react'
import './Body.css'
import trade from '../assets/trade.jpeg'
import { BodyData } from '../Data/Body'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt'
import { Link } from 'react-router-dom'

const Body = () => {
  return (
    <div className='body'>
        <div className='body_container'>
          <img style={{borderRadius:'50%'}} src={trade} alt="" />
          <div className='body_info'>
            <div className='body_header'>
            <span className='wine_color' style={{fontSize:'2.5rem', fontWeight:'bold'}}>Why Choose Us As Your Market Expects.</span>
            <p className='grey_color'>
            "Experience that matters: Our team brings
             years of industry experience and a proven track record of
              delivering consistent results in the market.With deep market 
              insights and  our in-depth understanding of market dynamics 
              and trends, we provide valuable insights that help you make 
              informed decisions."
            </p>
            </div>
            <div className="body_text wine_color">
              {/* <ul>
                {BodyData.map(data =>(
                  <div className="data_category" style={{}}>
                    <span className='wine_color'>{data.icon}</span>
                    <span className='wine_color'>{data.name}</span>
                  </div>
                ))}
              </ul> */}

              <div className='body_text_left'>
                <div>
                <ArrowRightAltIcon/><span>Diversified Portfolio Management</span>
                </div>
                <div>
                <ArrowRightAltIcon/><span>Sector-Specific Opportunities</span>
                </div>
                <div>
                <ArrowRightAltIcon/><span>Emerging Markets Exploration</span>
                </div>
              </div>
              <div className='body_text_right'>
              <div>
               <ArrowRightAltIcon/><span>Stock Investments</span>
              </div>
              <div>
              <ArrowRightAltIcon/><span>Global Market Exposure</span>
              </div>
              <div>
              <ArrowRightAltIcon/><span>Real Estate Investment</span>
              </div>
              </div>
             

            </div>
            <div className="btn" style={{marginLeft:'10rem', marginTop:'0'}}>
            <Link to='/' ><button style={{fontSize:'1rem'}}>Learn More</button></Link>
            </div>

          </div>
          

        </div>

    </div>
  )
}

export default Body
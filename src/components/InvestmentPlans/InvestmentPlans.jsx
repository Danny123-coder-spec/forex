import React from 'react'
import './InvestmentPlans.css'
import { InvestmentData } from '../Data/InvestmentPlans'

const InvestmentPlans = () => {
  return (
    <div className='investment'>
        <div className='investment_container'>
            <div className='investment_header'>
              <span className='wine_color' style={{fontSize:'3rem', fontWeight:'bold'}}>Our Investment Plans</span>
              <span className='grey_color' style={{fontSize:'1.1rem', marginTop:'1rem'}}>We utilize multi-asset management to make unified profit for our investors</span>
            </div>

            <div className='investmentPlans'>
              {/* <div> */}
                {InvestmentData.map(investment =>{
                  return(
               
                    <div className='investmentPlan'>
                      <p style={{}}>{investment.title}</p> 
                        <div className='investment_text' style={{fontWeight:'bold'}}>
                         
                          <span className='grey_color' >{investment.minimum}</span>
                          {/* <hr className='grey_color'/> */}
                          <span className='grey_color'>{investment.maximum}</span>
                          <span className='grey_color'>{investment.shared}</span>
                          <span className='grey_color'>{investment.returns}</span>
                          <span className='grey_color'>{investment.withdrawal}</span>

                        </div>
                    </div>
                 )
                
              })}
            {/* </div> */}
            </div>

           


        </div>

    </div>
  )
}

export default InvestmentPlans

// <div className="plans">
// <div>
//     {plansData.map((plan, index)=> {
//         return (
//             <div className="plan" key={index}>
//                 {plan.icon}
//                 <span>{plan.name}</span>
//                 <span> ${plan.price}</span>

//                 <div className="features">
//                     {plan.features.map((feature, index)=> {
//                         return(
//                             <div className="feature">
//                                 <img src={whiteTick} alt="" />
//                                 <span key={index}>{feature}</span>
//                             </div>
//                         )
//                     }
//                     )}

//                 </div>

//                 <div className="benefits">
//                     <span>See more benefits</span>
//                     <img src={RightArrow} alt="" onClick={onClick}/>
//                 </div>

//                 <button onClick={onClick} className="btn">Join Now</button>
//             </div>
//         )
//     }
//     )}
// </div>

// </div>
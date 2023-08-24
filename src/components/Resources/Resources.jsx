

import React from 'react'
import { Link } from 'react-router-dom'
import './Resources.css'
import started from '../assets/started.png'
import plan from '../assets/market-analysis.png'
import strategies from '../assets/strategies.png'
import quiz from '../assets/computer.png'

const Resources = () => {
  return (
    <div className='resource'>
        <div className='resource_container'>
           <span style={{marginLeft:'9rem', fontSize:'2rem', fontWeight:'bold'}} className='wine_color'>Build your confidence with our world of educational resources</span>
           <div className='resource_categories'>
             <div className='resource_category'>
                <span style={{fontSize:'1.1rem', color:'#053c50', fontWeight:'bold'}}>New Trader?</span>
                <span className='details'>Welcome! Get ready to explore the fascinating realm of forex trading with us. We're here to demystify the intricacies of forex trading</span>
                <Link style={{textDecoration:'0', marginTop:'1rem'}}><h5 className='wine_color' style={{fontWeight:'500', fontSize:'1.1rem', marginTop:'0.4rem'}}>Get Started {'->'}</h5></Link>
                <img style={{width:'4.5rem', height:'4.5rem'}} src={started} alt="" />
             </div>
             <div className='resource_category'>
                <span style={{fontSize:'1.1rem', color:'#053c50', fontWeight:'bold'}}>Level up your expertise?</span>
                <span className='details'>Let's work together to create a personalized trading plan that aligns with your goals and keeps you on the path to success.</span>
                <Link style={{textDecoration:'0'}}><h5 className='wine_color' style={{fontWeight:'500', fontSize:'1.1rem', marginTop:'3rem'}}>Create A Plan {'->'}</h5></Link>
                <img style={{width:'4rem', height:'4rem'}} src={plan} alt="" />

             </div>
             <div className='resource_category'>
                <span style={{fontSize:'1.1rem', color:'#053c50', fontWeight:'bold'}}>Ready to dive into strategic mastery?</span>
                <span className='details'>Explore the art of strategic trading with our detailed guides, equipping you with effective techniques for success in the market.</span>
                <Link style={{textDecoration:'0', marginTop:'1rem'}}><h5 className='wine_color' style={{fontWeight:'500', fontSize:'1.1rem', marginTop:'0.2rem'}}>View Strategies {'->'}</h5></Link>
                <img style={{width:'4rem', height:'4rem', paddingTop:'0px'}} src={strategies} alt="" />

             </div>
             <div className='resource_category'>
                <span style={{fontSize:'1.1rem', color:'#053c50', fontWeight:'bold'}}>Feeling unsure about where to begin?</span>
                <span className='details'>Discover tailored resources for your unique trading style by taking our quick quiz. Unlock personalized recommendations and excel.</span>
                <Link style={{textDecoration:'0', }}><h5 className='wine_color' style={{fontWeight:'500', fontSize:'1.1rem', marginTop:'0.8rem'}}>Take our quiz {'->'}</h5></Link>
                <img style={{width:'4rem', height:'4rem', paddingTop:'0px'}} src={quiz} alt="" />
             </div>

            </div>



        </div>

    </div>
  )
}

export default Resources

// import React from 'react'
// import './Resources.css'
// import { ResourcesData } from '../Data/Resources'
// import { Link } from 'react-router-dom'

// const Resources = () => {
//     const targetId = 3;
//     const Items = ResourcesData;
//     Items.find(item =>
//         item.id === targetId);
//   return (
//     <div className='resources'>
//         <div className='resources_container'>
//             <span className='wine_color' style={{marginLeft:'10rem', fontSize:'2rem', fontWeight:'bold'}}>Build your confidence with our world of educational resources</span>
//             <div className='resources_categories'>
//                 {Items.map(item => (
//                     <Item key={item.id} item={item} isTarget={item.id === targetId}/>
//                 ))}

//             </div>

//         </div>

//     </div>
//   )
// }

// function Item({ item, isTarget}) {
//     const {id, title, details, link} = item;
//     return(
//         <div className='resource_category'>
//             <div className='resource_category_details'>
//               <span style={{fontSize:'1.1rem'}}>{title}</span>
//               <span>{details}</span>
//              {/* <Link to='/resource' style={{textDecoration:'0', marginTop:'1rem', fontWeight:'500'}} className='wine_color'><h3>{link}</h3></Link> */}
//              <Link><span>{link}</span></Link>
//             </div>
            
//         </div>
//     )

// }

// export default Resources


{/* <Link to={`/items/${id}`}>View Details</Link> */}

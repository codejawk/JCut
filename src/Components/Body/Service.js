import React from 'react';
import { Link } from 'react-router-dom'
import men from './men.jpg'
import women from './women.jpg'
import MenApp from '../../Components/MenSalon/MenApp'

function Service(){
    return(
     
        <div className='service'>
          <div className="service-item"> 
          <Link to="men-app">
              
          <img src={men} style = {{marginLeft:30,marginRight:89,marginTop:10, width: 50, height: 50}}></img>
          <p style = {{marginLeft:30,marginRight:89}}>Men Salon</p> 
          </Link>

<div>
        <p style =  {{fontSize:10}}>(currently unavailable)</p>        
          <img src={women} style = {{marginLeft:42, marginRight:70,marginTop:10, width: 50, height: 50}}></img>
          <p style =  {{marginLeft:60,marginRight:89}}>Women Salon</p>
          </div>
          
          
          
           </div> 
           <br/><br/><br/>
        </div>
        
    )
}

export default Service
import React from 'react'
import Service from './Service'

function City(){
   const styles={
    
  }
    return(
        <div  style={styles}>
        <br></br>
        <select name="City" id="city">
          <option value="asn">Asansol</option>
          <option value="kol">Kolkata</option>
          <option value="ndls">New Delhi</option>
          <option value="knp">Kanpur</option>
          <option value="luc">Lucknow</option>
          <option value="brs">Banaras</option>

        </select>
       
        <br></br>
    
        </div>
    )
}

export default City


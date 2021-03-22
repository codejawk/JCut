import React from 'react'
import B from './B.jpeg'


function Drawer(props){
    return(
        <div>
        <img src={props.imgA} style = {{ width:'100%'  }}></img>
        <h1 style={{backgroundColor:" #ffaa80",textAlign:"center"}}><b>{props.name}</b></h1>
        <div style={{display:'flex',justifyContent:"space-between"}}>
        <p>{props.price}</p>
        <p>{props.total}</p>
        </div>
        <h2>What Does This Service Include? </h2>
        <br/>
        <div style={{display:'flex',justifyContent:"space-between"}}>
          <img src={props.img1} style = {{ width:70,height:70}}></img>
          <div><h3><b>{props.cont1}</b></h3>
          <p>{props.cont1a}</p>
          </div>
        </div>
        <br/>
        
        <hr></hr>
        <br/>
        <br/>
      
        <div style={{display:'flex',justifyContent:"space-between"}}>
          <div><h3><b>{props.cont2}</b></h3>
          <p>{props.cont2a}</p>
          </div>
          <img src={props.img2} style = {{ width:70,height:70}}></img>
        </div>
        <br/>
      
        <hr></hr>
        <br/>
        <br/>
      
        <div style={{display:'flex',justifyContent:"space-between"}}>
        <img src={props.img3} style = {{ width:70,height:70}}></img>  
        <div><h3><b>{props.cont3}</b></h3>
          <p>{props.cont3a}</p>
          </div>
          
        </div>
        <h1>khan</h1>
        <h1>khan</h1>
        <h1>khan</h1>
        <h1>khan</h1>
        <h1>khan</h1>
        <h1>khan</h1>
        </div>
    )
}

export default Drawer


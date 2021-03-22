import React, { useState } from 'react';
import { Row, Col, Divider } from 'antd';
import { Link } from 'react-router-dom'
import Drawerprops from './Drawerprops'
import { Drawer, Button } from 'antd';



import { Carousel } from 'antd';
import C from './C.jpg'
function MenContent(props){
  
    const [visible, setVisible] = useState(false);
  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };


    return(
      <div style={{border: "0.8px solid #e29b9b",justifyContent:"center",marginLeft:480,marginTop:15, width:'30%'}} >

      <div>
    
    <img src={props.imgA} style = {{marginLeft:90,marginRight:89, width:'50%' , height:120 }}></img>
    <h1 style={{fontSize:20,marginLeft:90,marginRight:90}}><b>{props.title}</b></h1>
    <div style={{justifyContent:"left",alignContent:"left",display:"flex",justifyContent:"space-around"}}> 
    <p style={{justifyContent:"center",marginLeft:6}} > {props.price} </p>
    <p> ADD</p>
    </div>
    
    <hr style={{border:"0.8px solid #D3D3D3",width:"80%"}}/>
    <div style={{justifyContent:"left",alignContent:"left",display:"flex",justifyContent:"space-around"}}> 
     
    <ul style={{textAlign:"left"}}>
      <li>{props.abt1}</li>
    </ul>
    <Button style={{justifyContent:"center",alignItems:"center"}} type="primary" onClick={showDrawer}>
        View Details
    </Button>
    </div>
    </div>
  <Drawer
    title="Kids Hair Cut"
    placement="right"
    closable={true}
    onClose={onClose}
    visible={visible}
    width={400}
  >
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
  </Drawer>
  
  </div>
 
    )

}

export default MenContent
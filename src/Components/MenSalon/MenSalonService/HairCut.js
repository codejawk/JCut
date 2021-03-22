import React, { useState } from 'react';
import { Row, Col, Divider } from 'antd';
import { Link } from 'react-router-dom'

import { Drawer, Button } from 'antd';



import { Carousel } from 'antd';
import A from './A.jpg'
function HairCut(){
  
    const [visible, setVisible] = useState(false);
  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };


    return(
    <div>
      <div style={{justifyContent:"center",marginLeft:150,marginTop:3, width:'50%',marginLeft:360}} >
    
    <img src={A} style = {{marginLeft:30,marginRight:89, width:'50%' , height:170 }}></img>
    <h1 style={{fontSize:20,marginRight:100}}><b>Hair Cut</b></h1>
    <div style={{justifyContent:"left",alignContent:"left",display:"flex",justifyContent:"space-around"}}> 
    <p style={{justifyContent:"center",marginLeft:40}} > $120 </p>
    <Button style={{justifyContent:"center",marginRight:80}} type="primary" onClick={showDrawer}>
        View Details
    </Button>
    </div>
    </div>
  <Drawer
    title="Hair Cut"
    placement="right"
    closable={true}
    onClose={onClose}
    visible={visible}
    width={400}
    drawerStyle={{backgroundColor:"red"}}
   
  >
  
  <img src={A} style = {{ width:'100%'  }}></img>
    <h1 style={{backgroundColor:" #ffaa80",textAlign:"center"}}><b>Hair Cut</b></h1>
    <div style={{display:'flex',justifyContent:"space-between"}}>
    <p>INR 100</p>
    <p>Some contents...</p>
    </div>
    <h2>What Does This Service Include? </h2>
    <br/>
    <div style={{display:'flex',justifyContent:"space-between"}}>
      <img src={A} style = {{ width:70,height:70}}></img>
      <div><h3><b>Haircut in the safety of your Home</b></h3>
      <p>Disposable towels,cape,and single-use products</p>
      </div>
    </div>
    <br/>
    
    <hr></hr>
    <br/>
    <br/>

    <div style={{display:'flex',justifyContent:"space-between"}}>
      <div><h3><b>Haircut in the safety of your Home</b></h3>
      <p>Disposable towels,cape,and single-use products</p>
      </div>
      <img src={A} style = {{ width:70,height:70}}></img>
    </div>
    <br/>

    <hr></hr>
    <br/>
    <br/>

    <div style={{display:'flex',justifyContent:"space-between"}}>
    <img src={A} style = {{ width:70,height:70}}></img>  
    <div><h3><b>Haircut in the safety of your Home</b></h3>
      <p>Disposable towels,cape,and single-use products</p>
      </div>
      
    </div>
    <h1>khan</h1>
    <h1>khan</h1>
    <h1>khan</h1>
    <h1>khan</h1>
    <h1>khan</h1>
    <h1>khan</h1>

  </Drawer>
    </div>

 
    )

}

export default HairCut
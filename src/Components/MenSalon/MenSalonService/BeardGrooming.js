import React, { useState } from 'react';
import { Row, Col, Divider } from 'antd';
import { Link } from 'react-router-dom'
import Drawerprops from './Drawerprops'
import { Drawer, Button } from 'antd';



import { Carousel } from 'antd';
import C from './C.jpg'
function Beard (){
  
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
    
    <img src={C} style = {{marginLeft:90,marginRight:89, width:'50%' , height:120 }}></img>
    <h1 style={{fontSize:15,marginLeft:90,marginRight:100}}><b>Beard Grooming & Moustache Shaving </b></h1>
    <div style={{justifyContent:"left",alignContent:"left",display:"flex",justifyContent:"space-around"}}> 
    <p style={{justifyContent:"center",marginLeft:6}} > $120 </p>
    <p> ADD</p>
    </div>
    
    <hr style={{border:"0.8px solid #D3D3D3",width:"80%"}}/>
    <div style={{justifyContent:"left",alignContent:"left",display:"flex",justifyContent:"space-around"}}> 
    
    <ul style={{textAlign:"left"}}>
      <li>Lightens Black Spot And Brightens Skin</li>
      <li>Perfect for Oily And Regular Skin</li>
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
  <Drawerprops 
  imgA={C}
  name="Kids Hair Cut-GIRLS"
  price="INR 300"
  total="ADD"
  cont1="Haircut in the safety of your Home"
  cont1a="Disposable towels,cape,and single-use products"
  img1={C}
  cont2="Haircut in the safety of your Home"
  cont2a="Disposable towels,cape,and single-use products"
  img2={C}
  cont3="Haircut in the safety of your Home"
  cont3a="Disposable towels,cape,and single-use products"
  img3={C}
  
/>

  </Drawer>
    </div>
 
    )

}

export default Beard
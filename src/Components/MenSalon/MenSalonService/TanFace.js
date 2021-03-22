import React, { useState } from 'react';
import { Row, Col, Divider } from 'antd';
import { Link } from 'react-router-dom'
import DrawerTan from './Drawerprops'
import { Drawer, Button } from 'antd';



import { Carousel } from 'antd';
import B from './B.jpeg'

function Tan(){
  
  
    const [visible, setVisible] = useState(false);
  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };


    return(
    <div style={{border: "0.8px solid #e29b9b",justifyContent:"center",marginLeft:480,marginTop:15, width:'30%'}} >
    <div >
    
    <img src={B} style = {{marginLeft:90,marginRight:89, width:'50%' , height:120 }}></img>
    <h1 style={{fontSize:20,marginLeft:90,marginRight:100}}><b>Face Care</b></h1>
    <div style={{justifyContent:"left",alignContent:"left",display:"flex",justifyContent:"space-around"}}> 
    <p style={{justifyContent:"center",marginLeft:67}} > $120 </p>
    <p> ADD</p>
    </div>
    
    <hr style={{border:"0.8px solid #D3D3D3",width:"80%"}}/>
    <div style={{justifyContent:"left",alignContent:"left",display:"flex",justifyContent:"space-around"}}> 
    
    <p><b>SKIN-CARE:</b>Face and Neck Detan Pack </p>
    <Button style={{justifyContent:"center"}} type="primary" onClick={showDrawer}>
        View Details
    </Button>
    </div>
    
    </div>
  <Drawer
    title="Face Wash"
    placement="right"
    closable={true}
    onClose={onClose}
    visible={visible}
    width={400}
  >
  <DrawerTan 
      imgA={B}
      name="Face Wash"
      price="INR 300"
      total="ADD"
      cont1="Haircut in the safety of your Home"
      cont1a="Disposable towels,cape,and single-use products"
      img1={B}
      cont2="Haircut in the safety of your Home"
      cont2a="Disposable towels,cape,and single-use products"
      img2={B}
      cont3="Haircut in the safety of your Home"
      cont3a="Disposable towels,cape,and single-use products"
      img3={B}
      
  />
  

  </Drawer>
    </div>
 
    )

}

export default Tan
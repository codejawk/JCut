import React, { useState } from 'react';
import { Row, Col, Divider } from 'antd';
import { Link } from 'react-router-dom'
import Drawerprops from './Drawerprops'
import { Drawer, Button } from 'antd';
import MenContent from './MenContent'


import { Carousel } from 'antd';
import C from './C.jpg'
function KidsGirls (){
  
    const [visible, setVisible] = useState(false);
  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };


    return(
    <MenContent
      imgA={C}
      title="Kids Hair Cut-(Girls)"
      abt1="Perfect Hair cut for girls"
    

  
  
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

  
 
    )

}

export default KidsGirls
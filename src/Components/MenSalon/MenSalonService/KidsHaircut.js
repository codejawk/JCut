import React, { useState } from 'react';
import { Row, Col, Divider } from 'antd';
import { Link } from 'react-router-dom'
import Drawerprops from './Drawerprops'
import { Drawer, Button } from 'antd';
import KidsBoys from './KidsBoys'
import KidsGirls from './KidsGirls'
import FamilyPack from './FamilyPack'
import { Carousel } from 'antd';
import C from './C.jpg'
function KidsHairCut(){
  
    const [visible, setVisible] = useState(false);
  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };


    return(
      <div>
      <KidsBoys/>
      <KidsGirls/>
      <FamilyPack/>

    </div>
 
    )

}

export default KidsHairCut
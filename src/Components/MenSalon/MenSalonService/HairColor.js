import React, { useState } from 'react';
import { Row, Col, Divider } from 'antd';
import { Link } from 'react-router-dom'
import WithProduct from './ColorWithProduct'
import CutWithPRoduct from './CutWithProduct'
import WithoutProduct from './WithoutProduct'

import { Drawer, Button } from 'antd';



import { Carousel } from 'antd';
import C from './C.jpg'
function HairColor(){
  
    const [visible, setVisible] = useState(false);
  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };


    return(
      <div>
        <WithProduct/>
        <CutWithPRoduct/>
        <WithoutProduct/>
      </div>
 
    )

}

export default HairColor
import React, { useState } from 'react';
import { Row, Col, Divider } from 'antd';
import { Link } from 'react-router-dom'

import { Drawer, Button } from 'antd';
import AntiPollution from './AntiPollution'
import DoubleAction from './DoubleActionFace'
import Tan from './TanFace'
import ActiveDetox from './ActiveDetoxFace'
import { Carousel } from 'antd';
import B from './B.jpeg'
function FaceWash(){
  
    const [visible, setVisible] = useState(false);
  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };


    return(
    <div>
      <Tan/>
     <ActiveDetox/>
     <AntiPollution/>
     <DoubleAction/>
    </div>
 
    )

}

export default FaceWash
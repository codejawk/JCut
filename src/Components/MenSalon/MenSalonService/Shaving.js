import React, { useState } from 'react';
import { Row, Col, Divider } from 'antd';
import ShaveTrim from './ShaveGrooming' 
import Beard from './BeardGrooming'

function Shaving(){
  
    const [visible, setVisible] = useState(false);
  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };


    return(
    <div>
    <ShaveTrim/>
    <Beard/>
    </div>
 
    )

}

export default Shaving
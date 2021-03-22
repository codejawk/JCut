import React from 'react'
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom'

const { Header, Content, Footer, Sider } = Layout;

function SiderMan(){
    return(
        <Sider
      style={{
        overflow: 'auto',
        height: '100vh',
        position: 'fixed',
        left: 0,
       
      }}
    >
      <div className="logo" />
      <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
        <Menu.Item key="1" >
          Package Deals
        </Menu.Item>
         <Menu.Item key="2" >
         <Link to="/men-app/hair-cut"> Haircut for Men</Link>
        </Menu.Item>
        <Menu.Item key="3" >
        <Link to="/men-app/face-wash"> Face Care</Link>
        
        </Menu.Item>
        <Menu.Item key="4">
        <Link to="/men-app/kids-haircut">Kid's Haircut</Link>
         
        </Menu.Item>
        <Menu.Item key="5" >
        <Link to="/men-app/shave"> Shave Beard & Moustache</Link>
       
        </Menu.Item>
        <Menu.Item key="6" >
        <Link to="/men-app/hair-color">Hair Color</Link>
         
        
        </Menu.Item>
      
        
      </Menu>
    </Sider>
    )
}

export default SiderMan
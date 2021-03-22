import { Layout, Menu } from 'antd';
import HairCut from './MenSalonService/HairCut'
import SiderMan from './Sider'
import MenHeader from './MenHeader'
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import { Link } from 'react-router-dom'
import FaceWash from './MenSalonService/FaceWash'
import KidsHairCut from './MenSalonService/KidsHaircut'
import Shave from './MenSalonService/Shaving'
import HairColor from './MenSalonService/HairColor';
const { Header, Content, Footer, Sider } = Layout;



function MenApp() {
  return (
   
    <BrowserRouter>
    <Layout>
    
        <Header style={{height:"100px",display:"flex",justifyContent:"center",backgroundColor:"#eee6dd"}}>
              <MenHeader/>
        </Header>
        
    <Layout>
        <SiderMan/>
<Switch>
      <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
        <div className="site-layout-background" style={{ padding: 24, textAlign: 'center' }}>
        
                <Route path="/men-app/hair-cut" exact component={HairCut}/>
                <Route path="/men-app/face-wash" exact component={FaceWash}/>
                <Route path="/men-app/kids-haircut" exact component={KidsHairCut}/>
                <Route path="/men-app/shave" exact component={Shave}/>
                <Route path="/men-app/hair-color" exact component={HairColor}/>

                
      </div>
      </Content>
      </Switch>
      </Layout>
  
  </Layout>
  </BrowserRouter>
    
  );
}

export default MenApp;

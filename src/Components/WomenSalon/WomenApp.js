import { Layout, Menu } from 'antd';
import WomenHeader from './WomenHeader'
import WomenSider from './WomenSider'

import {BrowserRouter,Switch,Route} from 'react-router-dom'

const { Header, Content, Footer, Sider } = Layout;



function MenApp() {
  return (
   
    <BrowserRouter>
    <Layout>
    
        <Header style={{height:"100px",display:"flex",justifyContent:"center",backgroundColor:"#eee6dd"}}>
          <WomenHeader/>
        </Header>
        
    <Layout>
    <WomenSider/>
<Switch>
      <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
        <div className="site-layout-background" style={{ padding: 24, textAlign: 'center' }}>
        
                

                
      </div>
      </Content>
      </Switch>
      </Layout>
  
  </Layout>
  </BrowserRouter>
    
  );
}

export default MenApp;

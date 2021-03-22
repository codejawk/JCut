// import logo from './logo.svg';
import Header from './Components/Body/Header'
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import './App.css';
import BodyFn from './Components/Body/BodyCont'
import MenApp from './Components/MenSalon/MenApp'
import WomenApp from './Components/WomenSalon/WomenApp'
import HairCut from './Components/MenSalon/MenSalonService/HairCut'
import Home from './Home'
function App() {
  return (
    <BrowserRouter>
      <Switch>
      <Route path="/" exact component={Home}/>
      <Route path="/men-app" exact component={MenApp}/>
      <Route path="/women-app" exact component={WomenApp}/>

      {/*<Route path="/men-app/hair-cut" exact component={HairCut}/>*/}

      </Switch>
    
    </BrowserRouter>
  );
}

export default App;

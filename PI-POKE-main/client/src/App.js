import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import LandingPage from"./componentes/LondingPage/landingpage"
import Home from "./componentes/Home/Home"
import CreatePoke from './componentes/CreatePoke/CreatePoke';
import Detail from './componentes/Detail/detail';







function App() {
  return (
    <BrowserRouter>
      <div className="App">
     
    
    
        <Switch>
          <Route exact path={'/'} component={LandingPage}/>
          <Route path={'/home'} component={Home}/>
          <Route path={'/create'} component={CreatePoke}/>
          <Route path ={'/pokemons/:id'} component = {Detail}/>
        
         
        </Switch>
       
      </div>
    </BrowserRouter>
  );
}

export default App;
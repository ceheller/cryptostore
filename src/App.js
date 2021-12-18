import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from './components/navbar/NavBar';
import Bitcoin from "./components/navbar/Bitcoin";
import Ethereum from "./components/navbar/Ethereum"
import Bnb from "./components/navbar/Bnb"
import Matic from "./components/navbar/Matic"
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

function App() {
  return (
    <Router>
    <NavBar component={NavBar} /> 
      <Switch>
        <Route path='/' exact component={Bitcoin} />
        <Route path='/Ethereum' component={Ethereum} />
        <Route path='/Bnb' component={Bnb} />
        <Route path='/Matic' component={Matic} />
      </Switch>
      <ItemDetailContainer />
    </Router>
  );
}
export default App;

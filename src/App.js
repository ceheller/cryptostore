import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from './components/navbar/NavBar';
import Bitcoin from "./components/items/Bitcoin";
import Ethereum from "./components/items/Ethereum"
import Bnb from "./components/items/Bnb"
import Matic from "./components/items/Matic"
import ItemListContainer from './components/navbar/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

function App() {
  return (
    <Router>
    <ItemDetailContainer />
    <NavBar component={NavBar} /> 
      <Switch>
        <Route path='/' exact component={Bitcoin} />
        <Route path='/Ethereum' component={Ethereum} />
        <Route path='/Bnb' component={Bnb} />
        <Route path='/Matic' component={Matic} />
      </Switch>
    </Router>
  );
}
export default App;

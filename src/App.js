import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from './components/navbar/NavBar';
import Bitcoin from "./pages/navbar/Bitcoin"
import Ethereum from "./pages/navbar/Ethereum"
import Bnb from "./pages/navbar/Bnb"
import Matic from "./pages/navbar/Matic"

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
    </Router>
  );
}
export default App;

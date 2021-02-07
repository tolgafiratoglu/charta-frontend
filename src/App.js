import logo from './logo.svg';
import './App.css';

import Login from "./component/Login"
import Building from "./component/Building"

import { Route, Switch, Redirect, BrowserRouter as Router } from 'react-router-dom'

function App() {
  return (
    <Router>
        <Switch>
            <Route exact path="/login" component={Login} />
            <Route exact path="/building" component={Building} />
        </Switch>  
    </Router>      
  );
}

export default App;

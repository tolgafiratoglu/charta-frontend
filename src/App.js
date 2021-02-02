import logo from './logo.svg';
import './App.css';

import Login from "./component/Login"

import { Route, Switch, Redirect, BrowserRouter as Router } from 'react-router-dom'

function App() {
  return (
    <Router>
        <Switch>
            <Route exact path="/login" component={Login} />
        </Switch>  
    </Router>      
  );
}

export default App;

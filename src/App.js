import 'bootstrap/dist/css/bootstrap.min.css'
import './App.scss';
import './Loader.css';
import React from 'react'
import {HashRouter as Router,Switch,Route,Redirect} from "react-router-dom";
import { Login } from './componentes/Routes/Login'
import { Home } from './componentes/Routes/Home'
import { Details } from './componentes/Routes/Details'
import { PrivateRoute } from './componentes/Routes/PrivateRoute';
import { useSelector } from 'react-redux';


function App() {
  const isAuthenticaded = useSelector((state)=> state.auth_reducer.isAuthenticaded)
  return (
      <Router>
          <Switch>
            <PrivateRoute path='/details' component={Details}/>
            <PrivateRoute path='/home' component={Home}/>
            <Route exact path='/'>
              {(isAuthenticaded)? <Redirect to="/home" /> : <Login/>}
            </Route>
              
          </Switch>
      </Router>
  );
}

export default App;

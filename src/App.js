import 'bootstrap/dist/css/bootstrap.min.css'
import './App.scss';
import React,{useState,useEffect,createContext,useContext} from 'react'
import {HashRouter as Router,Switch,Route,Redirect} from "react-router-dom";
import { Login } from './componentes/Routes/Login'
import { Home } from './componentes/Routes/Home'
import { Details } from './componentes/Routes/Details'
import { PrivateRoute } from './componentes/Routes/PrivateRoute';
export const auth = createContext({})

function App() {
  const [isAuthenticaded,setIsAuthenticaded] = useState(localStorage.getItem('auth'))

  return (
    <auth.Provider value={{isAuthenticaded,setIsAuthenticaded}}>
      <Router>
          <Switch>
            <PrivateRoute path='/details' component={Details}/>
            <PrivateRoute path='/home' component={Home}/>
            
            <Route exact path='/'>
              {(isAuthenticaded)? <Redirect to="/home" /> : <Login/>}
            </Route>
              
          </Switch>
      </Router>
    </auth.Provider>

  );
}

export default App;

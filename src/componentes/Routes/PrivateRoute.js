import React,{useContext,useEffect} from 'react'
import { Route,Redirect } from 'react-router-dom'
import { auth } from '../../App'

export const PrivateRoute = ({path,component}) => {
    const Componente = component 
    const authenticaded = useContext(auth)
    return (
        <Route exact path={path}>
            {(authenticaded.isAuthenticaded)? <Componente />: <Redirect to="/"/>}
        </Route>
    )
}

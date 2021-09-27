import React from 'react'
import { useSelector } from 'react-redux'
import { Route,Redirect } from 'react-router-dom'

export const PrivateRoute = ({path,component}) => {
    const Componente = component 
    const isAuthenticaded = useSelector((state)=> state.auth_reducer.isAuthenticaded)
    return (
        <Route exact path={path}>
            {(isAuthenticaded)? <Componente />: <Redirect to="/"/>}
        </Route>
    )
}

import React, { Fragment, useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import warning from '../images/warning.svg'

export const FasesPeticion = () => {
    const loading = useSelector((state)=> state.dataHeroes_reducer.loading)
    const error = useSelector((state)=> state.dataHeroes_reducer.error)

    return (
        <Fragment>
            {(loading) && <Loader />}
            {(error) && <Error message={"El superheroe no existe"}/>}
        </Fragment>
    )
}

export const Loader = () => {
    return (
        <div class="lds-roller">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    )
}

export const Error = ({message}) => {
    return (

        <div>
            <div className="w-100">
                <img style={{width: "100%"}} src={warning} />
            </div>
            <h3>{message}</h3>
        </div>
            
        
    )
}

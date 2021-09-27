import React, { Fragment } from 'react'
import { useSelector } from 'react-redux'
import { Card } from './Card'

export const ResultadoPeticion = ({addMiembro}) => {
    const dataHeroes = useSelector((state)=> state.dataHeroes_reducer.data)
    return (
        <Fragment>
            <div className="grid-resultados mt-4" >
                {(dataHeroes) && dataHeroes.map(elemento => <Card key={elemento.id} onclick={addMiembro} elemento={elemento} />)}
            </div>
        </Fragment>
        
    )
}

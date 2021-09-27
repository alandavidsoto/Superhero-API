import React, { useState,useEffect, Fragment } from 'react'
import { useLocation } from 'react-router-dom'
import http from '../../helper/http'
import { Header } from '../Header'

export const Details = () => {
    const [character,setCharacter] = useState(null)
    const location = useLocation()
    const params = new URLSearchParams(location.search)
    const id = params.get("id")

    useEffect(() => {
        const url = `https://www.superheroapi.com/api.php/3009719749316257/${id}`;
        http(url,'get').then(res=> (res.status == 200) && setCharacter(res.data)).catch(err => console.log(err))
    }, [])

    document.body.classList.add("background_body")
    return (
        <Fragment>
            {(character) && <Info character={character}/>}
        </Fragment>
    )
}

const Info = ({character}) => {
    const volver = () => {
        window.close()
    }
    return (
        <Fragment>
            <Header />
            <section className="contenedor-details">
                <div className="details">
                    <div className="contenedor-imagen">
                        <img src={character.image.url} />
                    </div>
                    <div className="contenedor-info">
                        <h2>{character.name}</h2>
                        <h4>Alias: </h4>
                        <p>
                            {(character.biography.aliases).join(", ")}
                        </p>
                        <h4>Altura:</h4>
                        <p>{character.appearance.height[1]}</p>
                        <h4>Peso:</h4>
                        <p>{character.appearance.weight[1]}</p>
                        <h4>Lugar de trabajo:</h4>
                        <p>{character.work.base}</p>
                    </div>
                    <button onClick={volver} className="volver btn btn-primary">VOLVER</button>
                </div>
                
            </section>
        </Fragment>
        
        
    )
}   
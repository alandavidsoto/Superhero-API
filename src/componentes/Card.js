import react from "react"

export const Card = ({elemento,onclick}) => {
    return (
        <div className="grid-card">
            <div className="contenedor-imagen">
                <img src={elemento.image.url}/>
            </div>
            <div className="contenedor-descripcion">
                <h5>{elemento.name}</h5>
                <div className="powerstats">
                    <span>
                        Combat: {elemento.powerstats.combat}<br/>
                        Durability: {elemento.powerstats.durability}<br/>
                        Intelligence: {elemento.powerstats.intelligence}<br/>
                        Power: {elemento.powerstats.power}<br/>
                        Speed: {elemento.powerstats.speed}<br/>
                        Strength: {elemento.powerstats.strength}<br/>
                        Team: {(elemento.biography.alignment == "good")?  <b className="text-success">{elemento.biography.alignment}</b> : <b className="text-danger">{elemento.biography.alignment}</b>  }
                    </span>
                </div>
                <button onClick={()=> onclick(elemento.id)} className=" btn btn-light w-100 mt-1">Agregar</button>
            </div>
            
        </div>
    )
}
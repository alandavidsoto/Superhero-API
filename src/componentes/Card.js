import react, { Fragment } from "react"

export const Card = ({elemento,onclick}) => {
    const arrayPowerStats = Object.entries(elemento.powerstats)
    
    return (
        <div className="grid-card">
            <div className="contenedor-imagen">
                <img src={elemento.image.url}/>
            </div>
            <div className="contenedor-descripcion">
                <h5>{elemento.name}</h5>
                <div className="powerstats">
                    <span>
                        {arrayPowerStats.map(elemento => {
                            return (
                                <Fragment>
                                    {elemento[0]}: <span className="text-warning">{elemento[1]}</span><br/>
                                </Fragment> 
                            )
                        })}
                        Team: {(elemento.biography.alignment == "good")?  <span className="text-success">{elemento.biography.alignment}</span> : <span className="text-danger">{elemento.biography.alignment}</span>  }
                    </span>
                </div>
                <button onClick={()=> onclick(elemento)} className=" btn btn-primary w-100 mt-1">Agregar</button>
            </div>
            
        </div>
    )
}
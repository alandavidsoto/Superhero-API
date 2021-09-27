export const CardTeam = ({elemento,handlerDelete}) => {
    return (
        <div>
            <img src={elemento.image.url} style={{width: "100%",height: "100%"}}/>

            <a href={`/#/details?id=${elemento.id}`} target="_blank" className="icon info">
                <img src="https://res.cloudinary.com/dcea83ydd/image/upload/v1630961529/icons/informacion_ajstkw.svg" style={{width: "100%",height: "100%"}} />
            </a>

            <button className="icon trash" onClick={()=> handlerDelete(elemento.id)} >
                <img src="https://res.cloudinary.com/dcea83ydd/image/upload/v1630961529/icons/eliminar_bm4npo.svg"  style={{width: "100%",height: "100%"}} />
            </button>
            
            <span className={(elemento.biography.alignment == "good")? "bg-success" : "bg-danger"} style={{borderTop:"1px solid #333",position: "absolute",bottom: "0px",right: "0px",left: "0px",textAlign: "center"}}>
                {elemento.biography.alignment}
            </span>
            
        </div>
    )
    
}
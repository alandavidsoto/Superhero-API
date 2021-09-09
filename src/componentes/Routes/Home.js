import React, {useState ,Fragment,useEffect } from 'react'
 import { useHistory } from 'react-router-dom'
import { Buscador } from '../forms/Buscador'
import { PowerStats } from '../PowerStats'
import { Card } from '../Card'
import { CardTeam } from '../CardTeam'


export const Home = () => {
    const [dataHeroes,setDataHeroes] = useState(null)
    const [team,setTeam] = useState([])
    const [character,setCharacter] = useState({bad: 0,good: 0})
    const [uniqueId,setUniqueID ] = useState([])
    const history = useHistory();

    const handlerClick = (id)=>{
        dataHeroes.map(elemento=> {
            if (elemento.id == id){
                if(elemento.biography.alignment == "good"){
                    if(character.good < 3 && !uniqueId.includes(elemento.id)){
                        setCharacter({...character,good: character.good + 1 })
                        setTeam([...team,elemento])
                        setUniqueID([...uniqueId,elemento.id])
                    }
                } else {
                    if(character.bad < 3 && !uniqueId.includes(elemento.id)){
                        setCharacter({...character,bad: character.bad + 1})
                        setTeam([...team,elemento])
                        setUniqueID([...uniqueId,elemento.id])
                    }
                }
            }
        })
    }

    const handlerFetch = (data)=>{
        setDataHeroes(data)
    }
    const handlerDelete  = (id)=> {
        let updateTeam = team.filter(elemento => {
            if (elemento.id == id){
                (elemento.biography.alignment == "good")? setCharacter({...character,good: character.good - 1 }) : setCharacter({...character,bad: character.bad - 1});
                const position = uniqueId.indexOf(id)
                let copiaUniqueId = [...uniqueId]
                copiaUniqueId.splice(position,1)
                setUniqueID(copiaUniqueId)
            }
            
            return (elemento.id != id)
        })
        setTeam(updateTeam)
    }
    const logout = () => {
        localStorage.removeItem("auth")
        window.location.pathname = "/"
        console.log(window.location)
    }
    document.body.style.background = "linear-gradient(45deg,#000,#111)"
    return (
        
        <section className="home">
            <h1 className="header text-center bg-light text-dark">SUPERHERO
                <button onClick={logout} className="logout btn btn-primary" >Logout</button>
            </h1>
                {(team.length > 0 )? 

                <div className="contenedor-team_stats mt-5 mb-5">
                    <div className="grid-team ">
                        {team.map(el => <CardTeam handlerDelete={handlerDelete} elemento={el} />)}
                    </div>
                    <div className="grid-powerstats">
                        <h2 className="text-center">POWERSTATS</h2>
                        {<PowerStats  team={team}/>}
                    </div>
                </div> 
                :
                <div style={{fontSize: "1.1em",height: "70vh",width: "100%",display: "flex", justifyContent: "center",alignItems: "center"}}>
                    Utiliza el buscador para encontrar a tus personajes e incluirlos en tu lista...
                </div>
                }
                
            <div className="buscador row justify-content-center p-3" style={{marginLeft: "0px",marginRight: "0px"}}>
                <h2 className="text-center">BUSCA A TU INTEGRANTE</h2>
                <Buscador handlerFetch={handlerFetch}/>
            </div>
            <div className="grid-resultados mt-4">
                {(dataHeroes) && dataHeroes.map(elemento => <Card key={elemento.id} onclick={handlerClick} elemento={elemento} />)}
            </div>
        </section>
        
    )
}



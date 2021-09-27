import {useState,useEffect} from "react";
import { objPowerStats } from "../helper/CopyStats"; // PLANTILLA

export const PowerStats = ({team}) =>{
    const [stats,setStats] = useState({
        combat: 0,
        durability: 0,
        intelligence: 0,
        power: 0,
        speed: 0,
        strength: 0
    })
    
    const copiaStats = JSON.parse(JSON.stringify(objPowerStats))

    var team = team;

    useEffect(() => {
        team.map(personaje => {
            let obj = Object.entries(personaje.powerstats)
            for (let propiedad in stats ){
                for (let arreglo of obj){
                    if (propiedad == arreglo[0] && arreglo[1] != "null"){
                        copiaStats[propiedad].pts += parseInt(arreglo[1])
                    }
                }

            }
        })
        setStats(copiaStats)
    }, [team])

    return (
        <div className="contenedor-powerstats">
            {Object.keys(stats).map(Element => <Meter stat={stats[Element]} nameStat={Element} />)}
        </div>
        
    )
}

export const Meter = ({stat,nameStat}) => {
    return (
        <div className="meter">
            <span style={{width: "25px"}}>
                <img src={stat.urlImg} style={{width: "100%"}}/>
            </span>
            &nbsp; {nameStat} &nbsp;<b className="text-warning">{stat.pts}</b>
        </div>
    )
}

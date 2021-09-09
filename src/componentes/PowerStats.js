import react,{useState,useEffect} from "react";

export const PowerStats = ({team}) =>{
    var team = team;
    const [combat,setCombat] = useState(0)
    const [durability,setDurability] = useState(0)
    const [intelligence,setIntelligence] = useState(0)
    const [power,setPower] = useState(0)
    const [speed,setSpeed] = useState(0)
    const [strength,setStrength] = useState(0)

    useEffect(() => {
        team.map(personaje => {
            setCombat((personaje.powerstats.combat == "null")?  combat :  parseInt(personaje.powerstats.combat) + combat)
            setDurability((personaje.powerstats.durability == "null")?  durability : parseInt(personaje.powerstats.durability) + durability)
            setIntelligence((personaje.powerstats.intelligence == "null")? intelligence: parseInt(personaje.powerstats.intelligence) + intelligence)
            setPower((personaje.powerstats.power == "null")? power: parseInt(personaje.powerstats.power) + power)
            setSpeed((personaje.powerstats.speed == "null")? speed: parseInt(personaje.powerstats.speed) + speed)
            setStrength((personaje.powerstats.strength == "null")? strength: parseInt(personaje.powerstats.strength) + strength)
        })
        
    }, [team])
    return (
        <div className="contenedor-powerstats">
            <div className="meter">
                <span style={{width: "25px"}}>
                    <img src="https://res.cloudinary.com/dcea83ydd/image/upload/v1631066388/icons/yelmo_hb3fme.svg" style={{width: "100%"}}/>
                </span>
                &nbsp; Combat &nbsp;<b className="text-warning">{combat}</b>
            </div>
            <div className="meter">
                <span style={{width: "25px"}}>
                    <img src="https://res.cloudinary.com/dcea83ydd/image/upload/v1631067132/icons/shield_mnhntn.svg" style={{width: "100%"}}/>
                </span>
                &nbsp; Durability &nbsp;<b className="text-warning">{durability}</b></div>
            <div className="meter">
                <span style={{width: "25px"}}>
                    <img src="https://res.cloudinary.com/dcea83ydd/image/upload/v1631067785/icons/artificial-intelligence_tq5wyj.svg" style={{width: "100%"}}/>
                </span>
                &nbsp; Intelligence &nbsp;<b className="text-warning">{intelligence}</b></div>
            <div className="meter">
                <span style={{width: "25px"}}>
                    <img src="https://res.cloudinary.com/dcea83ydd/image/upload/v1631067521/icons/lighting_ignlfz.svg" style={{width: "100%"}}/>
                </span>
                &nbsp; Power &nbsp;<b className="text-warning">{power}</b></div>
            <div className="meter">
                <span style={{width: "25px"}}>
                    <img src="https://res.cloudinary.com/dcea83ydd/image/upload/v1631067432/icons/speed_wqx1zg.svg" style={{width: "100%"}}/>
                </span>
                &nbsp; Speed &nbsp;<b className="text-warning">{speed}</b></div>
            <div className="meter">
                <span style={{width: "25px"}}>
                    <img src="https://res.cloudinary.com/dcea83ydd/image/upload/v1631067640/icons/strength_azrxnu.svg" style={{width: "100%"}}/>
                </span>
                &nbsp; Strength &nbsp;<b className="text-warning">{strength}</b></div>
        </div>
        
    )
}
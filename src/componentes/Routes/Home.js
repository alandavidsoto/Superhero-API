import React, {useState ,Fragment,useEffect,useContext } from 'react'
import { Buscador } from '../forms/Buscador'
import { Team } from '../Team'
import { ResultadoPeticion } from '../ResultadoPeticion'
import { Header } from '../Header'
import { useSelector } from 'react-redux'
import { FasesPeticion } from '../FasesPeticion'

export const Home = () => {
    const [team,setTeam] = useState([])
    const [character,setCharacter] = useState({bad: 0,good: 0,uniqueId: []})
    const [modal,setModal] = useState(null)
    const dataHeroes = useSelector((state)=> state.dataHeroes_reducer.data)
    
    // realiza la adicion de un miembro

    const addMiembro = (elemento)=>{
        if(elemento.biography.alignment == "good"){
            verificador_addMiembro(elemento,character.good,{good: character.good + 1})
        } else {
            verificador_addMiembro(elemento,character.bad,{bad: character.bad + 1})
        }
        
    }
    // Verifica que el miembro no exceda el N° su Bando y que no se repita

    const verificador_addMiembro = (elemento,tipoHeroe,objeto) =>{
        if(tipoHeroe < 3 ){
            if(!character.uniqueId.includes(elemento.id)){
                setCharacter({...character,...objeto,uniqueId: [...character.uniqueId,elemento.id] })
                setTeam([...team,elemento])
                addModal("Buenisimo, se ha agregado al team","success")
    
            } else addModal("No puedes agregar un mismo personaje","danger")
        } else addModal("No puedes agregar mas heroes del mismo Bando","danger")
        
    }

    // addModal setea el modal en "true" y lo colocamos en "null" en 1000 ms

    const addModal = (message,color) => {
        setModal({message,color})
        setTimeout(()=>{
            setModal(null)
        },1000)
    }
    // Borra un miembro del team
    const deleteMiembro  = (id)=> {
        let updateTeam = team.filter(elemento => {
            if (elemento.id == id){
                const position = character.uniqueId.indexOf(id) // buscamos su posicion en el array
                let newUniqueId = [...character.uniqueId] // hacemos una copia de uniqueID
                newUniqueId.splice(position,1); // lo mutamos borrando el id que le proporcionamos
                (elemento.biography.alignment == "good")? 
                setCharacter({...character,good: character.good - 1,uniqueId: newUniqueId}) : 
                setCharacter({...character,bad: character.bad - 1,uniqueId: newUniqueId});
                return false
            } else {
                return true
            }
        })
        setTeam(updateTeam)
    }
    document.body.style.background = "#000"

    return (
        <section className="home">
            <Header />
            <Team team={team} deleteMiembro={deleteMiembro} />
            <Buscador />
            <div className="d-flex justify-content-center align-items-center" style={{minHeight: "70vh"}}>
                {(dataHeroes)? <ResultadoPeticion addMiembro={addMiembro}/> : 
                <FasesPeticion />
                }
            </div>
            {(modal) &&  <Modal modal={modal}/>}
            
           
        </section>
        
    )
}


export const Modal = ({modal}) => {
    return (
        <div className={"modals d-flex justify-content-center align-items-center text-light bg-"+modal.color}>
            <div className="text-center">{modal.message}</div>
        </div>
    )
}

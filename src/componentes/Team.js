import { PowerStats } from './PowerStats'
import { CardTeam } from './CardTeam'
import superman from '../images/superman2.jpg'


export const Team = ({team,deleteMiembro}) => {
    return (
        <div className="contenedor-team_stats mt-5 mb-5">
            <div className="d-flex justify-content-center">
                {(team.length > 0)? 
                    <div className="grid-team ">
                        {team.map(el => <CardTeam key={el.id} handlerDelete={deleteMiembro} elemento={el} />)}
                    </div> 
                    : 
                    <div >
                        <img class="w-100"src={superman}/>
                    </div>
                }
            </div>
            <div className="grid-powerstats">
                <h2 className="text-center">POWERSTATS</h2>
                {<PowerStats  team={team}/>}
            </div>
        </div> 
    )
}

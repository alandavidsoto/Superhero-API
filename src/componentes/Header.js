import { authentication_action } from '../redux/action'
import { useDispatch } from 'react-redux'

export const Header = () => {
    const dispatch = useDispatch()

    const logout = () => {
        localStorage.removeItem("auth")
        dispatch(authentication_action(null))
    }

    return (
        <h1 className="header text-center bg-primary text-white">SUPERHERO API
            <button onClick={logout} className="logout btn btn-primary" >Logout</button>
        </h1>
    )
}

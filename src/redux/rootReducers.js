import { combineReducers } from "redux";
import {auth_reducer, dataHeroes_reducer} from "./reducer";

const rootReducers = combineReducers({
    auth_reducer,
    dataHeroes_reducer
})


export default rootReducers
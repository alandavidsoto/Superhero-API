import { createStore,applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
/* import auth_reducer from './reducer' */
import rootReducers from "./rootReducers";

const store = createStore(rootReducers,composeWithDevTools(
    applyMiddleware(thunk)
))
export default store
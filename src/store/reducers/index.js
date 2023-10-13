import { compose, legacy_createStore as createStore, applyMiddleware} from 'redux'
import { combineReducers } from "redux";
import thunk from 'redux-thunk'


const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    combineReducers({
       
    }),
    composeEnhancer(applyMiddleware(thunk)))

export default store

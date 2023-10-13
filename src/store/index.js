import { legacy_createStore as createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk';
import combineReducers from './reducers'


const composedEnhancer = composeWithDevTools(applyMiddleware(thunk))

const store = createStore(
        combineReducers, 
        composedEnhancer
    );

export default store;
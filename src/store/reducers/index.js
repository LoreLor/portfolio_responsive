import { combineReducers } from "redux";
import { projectReducer } from './projectReducer';
import { skillReducer } from "./skillReducer";


export default combineReducers({
        projects: projectReducer,
        skills: skillReducer,
})




import { combineReducers } from "redux";
import { projectReducer } from './projectReducer';
import { skillReducer } from "./skillReducer";
import { userReducer } from "./userReducer";


export default combineReducers({
        projects: projectReducer,
        skills: skillReducer,
        user: userReducer
});




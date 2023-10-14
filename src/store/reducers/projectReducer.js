import { GET_PROJECTS, GET_PROJECTS_BY_ID } from "../actions/projects/ationTypes";

const initalState = {
    projects: [],
    detailProject: {}
}

export function projectReducer(state=initalState, action) {
    switch(action.type){
        case GET_PROJECTS:
            return {
                ...state,
                projects: action.payload
            };

        case GET_PROJECTS_BY_ID:
            return {
                ...state,
                detailProject: action.payload
            }


        default:
            return state;
    }
}
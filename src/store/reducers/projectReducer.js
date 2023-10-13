import { GET_PROJECTS } from "../actions/projects/ationTypes";

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
            }

        default:
            return state;
    }
}
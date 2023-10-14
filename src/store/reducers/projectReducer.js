import { GET_PROJECTS, GET_PROJECTS_BY_ID, POST_PROJECT, PUT_PROJECT } from "../actions/projects/ationTypes";

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
            };

        case POST_PROJECT:
            return {
                ...state,
            };

        case PUT_PROJECT:
            return {
                ...state,
                detailProject: action.payload
            };

        case DELETE_PROJECT:
            const projectsFiltered = state.projects.filter(p => p.id !== action.payload);
            return {
                ...state,
                projects: projectsFiltered
            }

        default:
            return state;
    }
}
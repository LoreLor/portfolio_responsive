import { DELETE_SKILL, GET_SKILLS, POST_SKILL, PUT_SKILL } from "../actions/skills/actionsTypes";

const initialState = {
    skills: [],
    detailSkill: {}
}

export function skillReducer (state = initialState, action) {
    switch (action.type) {
        case GET_SKILLS:
            return {
                ...state,
                skills: action.payload
            }

        case POST_SKILL:
            return {
                ...state,
            }

        case PUT_SKILL:
            return {
                ...state,
                detailSkill: action.payload
            }
        
        case DELETE_SKILL: 
            return {
                ...state,
                skills: state.skills.filter(s => s.id !== action.payload)
            }

        default:
            return state;
    }
}
import { DELETE_SKILL, GET_BY_ID, GET_SKILLS, POST_SKILL, PUT_SKILL } from "../actions/skills/actionsTypes";

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

        case GET_BY_ID:
            return {
                ...state,
                detailSkill: action.payload
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
                skills: state.skills.filter(s => s.id !== action.payload.id)
            }

        default:
            return state;
    }
}
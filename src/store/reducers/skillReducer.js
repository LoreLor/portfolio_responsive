import { GET_SKILLS } from "../actions/skills/actionsTypes";

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

        default:
            return state;
    }
}
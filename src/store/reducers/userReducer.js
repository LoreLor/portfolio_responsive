import { DELETE_USER, GET_USERS, SIGNIN_USER, SIGNOUT_USER } from '../actions/user/actionsTypes';


const initialState = {
    user:{},
};

export const userReducer = (state=initialState, action) => {
    switch(action.type){
        case GET_USERS:
            return {
                ...state,
                user: action.payload
            }

        case DELETE_USER:
            const userFiltered = state.user.filter(u => u.id !== action.payload)
            return {
                ...state,
                user: userFiltered
            }

        case SIGNIN_USER:
            return {
                ...state,
                user: action.payload
            }

        case SIGNOUT_USER:
            return {
                ...state,
                user: {}
            }

        default:
            return state;
    }
};
import axios from 'axios';
import SERVER from '../../../server/index'
import { DELETE_USER, GET_USERS, SIGNIN_USER, SIGNOUT_USER } from './actionsTypes';


export const getUser = () => async(dispatch) => {
    try {
        const { data } = await axios.get(`${SERVER}/user`);
        dispatch({
            type: GET_USERS,
            payload: data
        })
    } catch (error) {
        console.log(error);
    }
};

export const deleteUser = (id) => async(dispatch) => {
    try {
        const { data } = await axios.delete(`${SERVER}/user/${id}`);
        dispatch({
            type: DELETE_USER,
            payload: data
        })
    } catch (error) {
        console.log(error);
    }
};

export const signin = (email, password) => async(dispatch) => {
    try {
        const { data } = await axios.post(`${SERVER}/user/signin`, {email, password});
        dispatch({
            type: SIGNIN_USER,
            payload: data
        })
    } catch (error) {
        console.log(error);
    }
};

export const signout = () => async(dispatch) => {
    dispatch({
        type: SIGNOUT_USER,
    });
}
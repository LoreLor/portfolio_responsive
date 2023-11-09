import URL_API from '../../../server';
import axios from 'axios';
import { DELETE_SKILL, GET_SKILLS, PUT_SKILL, POST_SKILL, GET_BY_ID } from './actionsTypes';


export const allSkills = () => async(dispatch) => {
    try {
        const {data} = await axios.get(`${URL_API}/skill`)
        dispatch({
            type: GET_SKILLS,
            payload: data
        })
    } catch (error) {
        console.log(error);
    }
};

export const addSkill = (skill) => async(dispatch) => {
    try {
        const data = await axios.post(`${URL_API}/skill`, skill)
        dispatch({
            type: POST_SKILL
        })
    } catch (error) {
        console.log(error);
    }
};

export const updateSkill = (id, body) => async(dispatch) => {
    try {
        const data = await axios.put(`${URL_API}/skill/${id}`, body);
        dispatch({
            type: PUT_SKILL,
            payload: data
        })
    } catch (error) {
        console.log(error);
    }
};

export const skillById = (id) => async (dispatch) => {
    try {
        const { data } = await axios.get(`${URL_API}/skill/${id}`);
        dispatch({
            type: GET_BY_ID,
            payload: data.response
        })
    } catch (error) {
        console.log(error);
    }
};

export const deleteSkill = (id) => async(dispatch) => {
    try {
        const { data} = await axios.delete(`${URL_API}/skill/${id}`)
        dispatch({
            type: DELETE_SKILL,
            payload: data
        })
    } catch (error) {
        console.log(error);
    }
}
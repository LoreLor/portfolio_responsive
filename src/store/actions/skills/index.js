import URL_API from '../../../server';
import axios from 'axios';
import { DELETE_SKILL, GET_SKILLS } from './actionsTypes';


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
        const data = await axios.post(`${URL_API}/skills`, skill)
        dispatch({
            type: POST_SKILL,
            payload: data
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
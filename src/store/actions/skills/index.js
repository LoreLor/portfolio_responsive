import URL_API from '../../../server';
import axios from 'axios';
import { GET_SKILLS } from './actionsTypes';


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
}
import axios from 'axios';
import { GET_PROJECTS } from './ationTypes';
import URL_API from '../../../server';


export const allProjects = () => async(dispatch) => {
    try{
        const { data } = await axios.get(`${URL_API}/project`);
        console.log('data :>> ', data);
        dispatch({
            type: GET_PROJECTS,
            payload: data
        })
    } catch(err){
        console.log(err)
    }
}
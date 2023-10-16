import axios from 'axios';
import { DELETE_PROJECT, GET_PROJECTS, GET_PROJECTS_BY_ID, POST_PROJECT, PUT_PROJECT } from './ationTypes';
import URL_API from '../../../server';


export const allProjects = () => async(dispatch) => {
    try{
        const { data } = await axios.get(`${URL_API}/project`);
        dispatch({
            type: GET_PROJECTS,
            payload: data
        })
    } catch(error){
        console.log(error)
    }
};

export const projectById = (id) => async(dispatch) => {
    try {
        const {data} = await axios.get(`${URL_API}/project/${id}`);
        console.log('dataId :>> ', data);
        dispatch({
            type: GET_PROJECTS_BY_ID,
            payloas: data
        })
    } catch (error) {
        console.log(error);
    }
};

export const addProject = (project) => async(dispatch) => {
    try {
        const data = await axios.post(`${URL_API_URL}/project`, project);
        dispatch({
            type: POST_PROJECT,
            payload: data
        })
    } catch (error) {
        console.log(error);
    }
};

export const updateProject = (id, project) => async(dispatch) => {
    try {
        const {data} = await axios.put(`${URL_API}/projects/${id}`, project);
        dispatch({
            type: PUT_PROJECT,
            payload: data
        })
    } catch (error) {
        console.log(error);
    }
};

export const deleteProject = (id) => async(dispatch) => {
    try {
        const {data} = await axios.delete(`${URL_API}/projects/${id}`);
        dispatch({
            type: DELETE_PROJECT,
            payload: data
        })
    } catch (error) {
        console.log(error);
    }
}
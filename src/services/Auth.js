import axios from 'axios';

const URL_ROOT = process.env.REACT_APP_API_URL;


const loginService = async (data) => {
    const response = await axios.post(`${URL_ROOT}/login`, data);
    return response.data;
};

const registerService = async (data) => {
    const response = await axios.post(`${URL_ROOT}/usuarios`, data);
    return response.data;
};

const getProfile = async(data)=>{
    const response = await axios.get(`${URL_ROOT}/usuarios/perfil`,data);
    return response.data;
}

export { loginService, registerService, getProfile };
import axios from 'axios';
const URL_ROOT = process.env.REACT_APP_API_URL;

const getProducts = async (data) => {
    const response = await axios.get(`${URL_ROOT}/productos`);
    return response.data;
};

const getProduct = async (id) => {
    const response = await axios.get(`${URL_ROOT}/productos?id=${id}`);
    return response.data;
};




export { getProducts, getProduct };

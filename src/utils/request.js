import axios from 'axios';

const requestCustom = axios.create({
    baseURL: 'https://tiktok.fullstack.edu.vn/api/',
});

export const getCustom = async (path, options = {}) => {
    const response = await requestCustom.get(path, options);

    return response.data;
};

export default requestCustom;

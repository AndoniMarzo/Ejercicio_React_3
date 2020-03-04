import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://andoni-ejercicio-react-3.firebaseio.com/'
});

export default instance;
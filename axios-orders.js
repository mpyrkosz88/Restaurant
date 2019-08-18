import axios from 'axios';

const instance = axios.create({
    baseURL: "https://restaurant-984e6.firebaseio.com/"
});

export default instance;

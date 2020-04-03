import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://myreactburgerbuilderapp.firebaseio.com/'
});

export default instance;

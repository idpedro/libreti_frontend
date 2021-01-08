import axios from 'axios';

const Api = axios.create({
  baseURL: 'http://10.1.1.76:3333/',
});

export default Api;

import axios from 'axios';

const apiBaseUrl = 'http://localhost:4444';

const api = axios.create({
  baseURL: apiBaseUrl,
})

const endpoints = {
  signin: '/auth/signin',
  signup: '/auth/signup',
};

export default {
  signup: (body) => {
    return api.post(endpoints.signup, body);
  },
  signin: (body) => {
    return api.post(endpoints.signin, body);
  },
};

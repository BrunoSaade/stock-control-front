import axios from 'axios';

const apiBaseUrl = 'http://localhost:4444';

const api = axios.create({
  baseURL: apiBaseUrl,
})

const endpoints = {
  signin: '/auth/signin',
  signup: '/auth/signup',
  createProduct: '/product',
  findAllProducts: '/product',
  deleteProductByID: '/product/'
};

export default {
  signup: (body) => {
    return api.post(endpoints.signup, body);
  },
  signin: (body) => {
    return api.post(endpoints.signin, body);
  },
  createProduct: (token, body) => {
    return api.post(endpoints.createProduct, body, {
      headers: {'Authorization': 'Bearer ' + token}
    });
  },
  findAllProducts: (token) => {
    return api.get(endpoints.findAllProducts, {headers: {'Authorization': 'Bearer ' + token}});
  },
  deleteProductByID: (token, id) => {
    return api.delete(
      endpoints.deleteProductByID + id, 
      {headers: {'Authorization': 'Bearer ' + token}}
    );
  },
};

import ApiService from '../services/api';
import * as types from "@/store/types/action-types"
import * as mutation_types from "@/store/types/mutation-types"

const actions = {
  [types.POST_SIGNUP]: async function ({ dispatch, commit, state }) {
    try {
      const body = {
        email: state.auth.signup.email,
        password: state.auth.signup.password,
      };
      const response = await ApiService.signup(body);
      window.localStorage.setItem('token', response.data.data)
      return response;
    } catch (error) {
      throw error;
    }
  },
  [types.POST_SIGNIN]: async function ({ dispatch, commit, state }) {
    try {
      const body = {
        email: state.auth.signin.email,
        password: state.auth.signin.password,
      };
      const response = await ApiService.signin(body);
      window.localStorage.setItem('token', response.data.data)
      return response;
    } catch (error) {
      throw error;
    }
  },
  [types.POST_CREATE_PRODUCT]: async function ({ dispatch, commit, state }) {
    try {
      const body = {
        name: state.newProduct.name,
        quantity: state.newProduct.quantity,
        price: state.newProduct.price,
      };
      const token = window.localStorage.getItem('token')
      const response = await ApiService.createProduct(token, body);
      return response;
    } catch (error) {
      throw error;
    }
  },
  [types.GET_FIND_ALL_PRODUCTS]: async function ({ dispatch, commit, state }) {
    try {
      const token = window.localStorage.getItem('token')
      const response = await ApiService.findAllProducts(token);
      commit(mutation_types.SET_PRODUCTS, response.data.data)
      return response;
    } catch (error) {
      throw error;
    }
  },
  [types.DELETE_PRODUCT_BY_ID]: async function ({ dispatch, commit, state }, {id}) {
    try {
      const token = window.localStorage.getItem('token')
      const response = await ApiService.deleteProductByID(token, id);
      return response;
    } catch (error) {
      throw error;
    }
  },
} 

export default actions
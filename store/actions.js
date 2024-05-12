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
} 

export default actions
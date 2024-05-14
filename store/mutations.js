import Vue from "vue";
import * as types from "./types/mutation-types"

const mutations = {
  [types.SET_EMAIL_SIGNIN]: function (state, value) {
    state.auth.signin.email = value
  },
  [types.SET_PASSWORD_SIGNIN]: function (state, value) {
    state.auth.signin.password = value
  },
  [types.SET_EMAIL_SIGNUP]: function (state, value) {
    state.auth.signup.email = value
  },
  [types.SET_PASSWORD_SIGNUP]: function (state, value) {
    state.auth.signup.password = value
  },
  [types.SET_CONFIRM_PASSWORD_SIGNUP]: function (state, value) {
    state.auth.signup.confirmPassword = value
  },
  [types.SET_NEW_PRODUCT_NAME]: function (state, value) {
    state.newProduct.name = value
  },
  [types.SET_NEW_PRODUCT_QUANTITY]: function (state, value) {
    state.newProduct.quantity = value
  },
  [types.SET_NEW_PRODUCT_PRICE]: function (state, value) {
    state.newProduct.price = value
  },
  [types.SET_PRODUCTS]: function (state, value) {
    state.products = value
  }
}
export default mutations 
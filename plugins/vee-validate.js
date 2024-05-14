import { extend, ValidationObserver, ValidationProvider } from "vee-validate"
import Vue from "vue"

const emailValidate = (email) => {
  const regex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

  const validateByRegex = !!email && !regex.test(String(email).toLowerCase())

  return validateByRegex
}

export const required = {
  validate(value) {
    return {
      required: true,
      valid: !["", null, undefined].includes(value),
    }
  },
  message: "This field is required",
  computesRequired: true,
}

export const email = {
  validate(value) {
    return !emailValidate(value)
  },
  message: "Email must have valid formatting",
}

export const max = {
  validate(value, { max }) {
    return parseFloat(value) <= max
  },
  message: `Must be less then or equal {max}`,
  params: ["max"],
}

export const min = {
  validate(value, { min }) {
    return parseFloat(value) >= min
  },
  message: `Must be greater or equal {min}`,
  params: ["min"],
}

extend("email", email)
extend("required", required)
extend("max", max)
extend("min", min)
Vue.component("ValidationProvider", ValidationProvider)
Vue.component("ValidationObserver", ValidationObserver)

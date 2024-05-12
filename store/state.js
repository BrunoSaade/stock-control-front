const state = {
  auth: {
    signin: {
      email: '',
      password: '',
    },
    signup: {
      email: '',
      password: '',
      confirmPassword: ''
    },
  },
  newProduct: {
    name: "",
    quantity: 0,
  },
  products: [],
}

export default state
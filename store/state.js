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
    quantity: 1,
    price: 0.01
  },
  products: [],
}

export default state
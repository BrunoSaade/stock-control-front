<template lang="pug">
v-container
  v-card.mb-6
    v-card-title Add Product
    v-card-text
      v-form(@submit.prevent="addProduct")
      v-custom-form#addProduct(
        @submit="addProduct" 
        name="addProduct",
      )
        template
          fieldset
            v-row
              v-col(cols="12" sm="4")
                v-text-input#productName(
                  v-model='productName' 
                  label="Product Name"
                  type='text'
                  rules="required"
                )
              v-col(cols="12" sm="4")
                v-text-input#productQuantity(
                  v-model.number='productQuantity' 
                  label="Quantity"
                  type='number'
                  step="1"
                  min="1"
                  rules="required|min:1"
                )
              v-col(cols="12" sm="4")
                v-text-input#productPrice(
                  v-model.number='productPrice' 
                  label="Price (per product)" 
                  type='number'
                  step="0.01"
                  min="0.01"
                  rules="required|min:0.01"
                )
            v-btn(
              type='submit' 
              color="primary"
              class="w-[240px] !bg-secondary-200"
            ) Add
            p.mt-4.mb-0 Total amount: {{ totalAmount }}
  v-card
    v-card-title Products in Stock
    v-card-text
      v-simple-table
        template(v-if="products.length")
          thead
            tr
              th Name
              th Quantity
              th Price
              th Total Price
              th Action
          tbody
            tr(v-for="product in products" :key="product.id")
              td {{ product.name }}
              td {{ product.quantity }}
              td {{ product.price.toFixed(2) }}
              td {{ (product.quantity * product.price).toFixed(2) }}
              td
                v-btn(@click="deleteProduct(product.id)" color="error" icon)
                  v-icon mdi-delete
        template(v-else)
          tbody
            tr
              td(colspan="5") No products available in stock
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from "vuex"
import * as getter_types from "@/store/types/getter-types"
import * as mutation_types from "@/store/types/mutation-types"
import * as action_types from "@/store/types/action-types"
export default {
  name: "Index",
  layout: "Default",
  data() {
    return {}
  },
  async created() {
    await this.getFindAllProducts()
  },
  mounted() {},
  computed: {
    ...mapState({
      products: (state) => state.products,
      newProduct: (state) => state.newProduct,
    }),
    productName: {
      get() {
        return this.newProduct?.name
      },
      set(value) {
        this.setNewProductName(value)
      },
    },
    productQuantity: {
      get() {
        return this.newProduct?.quantity
      },
      set(value) {
        this.setNewProductQuantity(value)
      },
    },
    productPrice: {
      get() {
        return this.newProduct?.price
      },
      set(value) {
        this.setNewProductPrice(value)
      },
    },
    totalAmount() {
      return (parseInt(this.productQuantity) * parseFloat(this.productPrice) || 0).toFixed(2)
    }
  },
  methods: {
    ...mapMutations({
      setNewProductName: mutation_types.SET_NEW_PRODUCT_NAME,
      setNewProductQuantity: mutation_types.SET_NEW_PRODUCT_QUANTITY,
      setNewProductPrice: mutation_types.SET_NEW_PRODUCT_PRICE
    }),
    ...mapActions({
      postCreateProduct: action_types.POST_CREATE_PRODUCT,
      getFindAllProducts: action_types.GET_FIND_ALL_PRODUCTS,
      deleteProductByID: action_types.DELETE_PRODUCT_BY_ID
    }),
    async addProduct() {
      try {
        await this.postCreateProduct()
        await this.getFindAllProducts()
      } catch (error) {
        console.log(error)
      }
      this.handleResetFields()
    },
    async deleteProduct(id) {
      try {
        await this.deleteProductByID({id: id})
        await this.getFindAllProducts()
      } catch (error) {
        console.log(error)
      }
    },
    handleResetFields() {
      this.productName = "";
      this.productQuantity = "";
      this.productPrice = ""
    }
  }
};
</script>

<style scoped>
th {
  @apply text-left;
}
</style>

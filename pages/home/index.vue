<template lang="pug">
v-container
  v-card.mb-6
    v-card-title Add Product
    v-card-text
      v-form(@submit.prevent="addProduct")
        v-row
          v-col(cols="12" sm="6")
            v-text-field(v-model="productName" label="Product Name")
          v-col(cols="12" sm="6")
            v-text-field(v-model.number="productQuantity" label="Quantity")
        v-btn(
          type='submit' 
          color="primary"
          class="w-[240px] !bg-secondary-200"
        ) Add
  v-card
    v-card-title Products in Stock
    v-card-text
      v-list-item-group(v-if="products.length")
        v-list-item(v-for="product in products" :key="product.id")
          v-list-item-content
            v-list-item-title {{ product.name }}
            v-list-item-subtitle Quantity: {{ product.quantity }}
          v-list-item-action
            v-btn(@click="deleteProduct(product.id)" color="error" icon)
              v-icon mdi-delete
      p(v-else) No products available in stock
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
    }
  },
  methods: {
    ...mapMutations({
      setNewProductName: mutation_types.SET_NEW_PRODUCT_NAME,
      setNewProductQuantity: mutation_types.SET_NEW_PRODUCT_QUANTITY
    }),
    addProduct() {
      const newProduct = {
        id: this.products.length + 1,
        name: this.productName,
        quantity: this.productQuantity
      };
      console.log(newProduct)
      this.productName = "";
      this.productQuantity = 0;
    },
    deleteProduct(id) {
      this.products = this.products.filter(product => product.id !== id);
    }
  }
};
</script>

<style scoped>
</style>

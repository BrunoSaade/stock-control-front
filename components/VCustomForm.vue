<template lang="pug">
.default-form
  ValidationObserver(v-slot='{ handleSubmit, invalid, errors }')
    v-form(
      @submit.prevent='handleSubmit(onSubmit)'
      @keyup.enter='handleSubmit(onSubmit)'
    )
      slot(:invalid="invalid" , :errors="errors")
</template>

<script>
import { ValidationObserver } from "vee-validate"
export default {
  name: "VCustomForm",
  components: { ValidationObserver },
  props: {},
  data() {
    return {}
  },
  computed: {},
  watch: {},
  mounted() {},
  created() {},
  methods: {
    onSubmit() {
      this.$emit("submit")
    },
  },
}
</script>

<style lang="postcss" scoped>
</style>
  
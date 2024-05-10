<template lang="pug">
.l-stack-center-center.w-full
  v-card(class="w-[540px]")
    v-card-title Login
    v-card-text
      v-form(@submit.prevent='submitForm')
        v-text-field(v-model='email' label='Email' type='email')
        v-text-field(v-model='senha' label='Senha' type='password')
        v-btn(
          type='submit' 
          color="primary"
          class="w-[240px] !bg-secondary-200"
        ) Entrar
  p.mt-4.text-s3 Don't have an account? 
    span.cursor-pointer(@click="handlePushSignUp") Sign-up
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from "vuex"
import * as getter_types from "@/store/types/getter-types"
import * as mutation_types from "@/store/types/mutation-types"
import * as action_types from "@/store/types/action-types"
export default {
  name: "Index",
  layout: "Default",
  props: {},
  data() {
    return {
      email: '',
      senha: ''
    }
  },
  computed: {
    ...mapState({}),
  },
  watch: {},
  mounted() {},
  created() {},
  methods: {
    submitForm() {
    },
    handlePushSignUp() {
      this.$router.push('/signup')
    }
  }
}
</script>

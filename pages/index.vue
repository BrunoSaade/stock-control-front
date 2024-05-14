<template lang="pug">
.l-stack-center-center.w-full.h-full
  v-card(class="w-[540px]")
    v-card-title Login
    v-card-text
      v-custom-form#signin(
        @submit="handleSignin" 
        name="signin",
      )
        template
          fieldset
            v-text-input#email(
              v-model='email' 
              label='Email' 
              type='email'
              rules="required|email"
            )
            v-text-input#password(
              v-model='password' 
              label='Password' 
              type='password'
              rules="required"
            )
            v-btn(
              type='submit' 
              color="primary"
              class="w-[240px] !bg-secondary-200"
            ) Login
  p.mt-4.text-s3 Don't have an account? 
    NuxtLink.text-tertiary-200.underline(to="/signup") Sign up!
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from "vuex"
import * as getter_types from "@/store/types/getter-types"
import * as mutation_types from "@/store/types/mutation-types"
import * as action_types from "@/store/types/action-types"
import { ValidationObserver } from "vee-validate"
import { ValidationProvider } from "vee-validate"
export default {
  name: "Index",
  layout: "Default",
  components: { ValidationProvider, ValidationObserver },
  props: {},
  data() {
    return {}
  },
  computed: {
    ...mapState({
      authSignin: (state) => state.auth?.signin,
    }),
    email: {
      get() {
        return this.authSignin?.email
      },
      set(value) {
        this.setSigninEmail(value)
      },
    },
    password: {
      get() {
        return this.authSignin?.password
      },
      set(value) {
        this.setSigninPassword(value)
      },
    }
  },
  watch: {},
  mounted() {},
  created() {},
  methods: {
    ...mapActions({
      postSignin: action_types.POST_SIGNIN
    }),
    ...mapMutations({
      setSigninEmail: mutation_types.SET_EMAIL_SIGNIN,
      setSigninPassword: mutation_types.SET_PASSWORD_SIGNIN
    }),
    async handleSignin() {
      try {
        await this.postSignin()
        this.$router.push("/home")
      } catch (error) {
        console.error(error)
      }
    },
  },
}
</script>
<style>
.default-input--message {
  @apply text-error-light-900 font-bold;
}
</style>

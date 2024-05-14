<template lang="pug">
.l-stack-center-center.w-full.h-full
  v-card(class="w-[540px]")
    v-card-title Sign up
    v-card-text
      v-custom-form#signup(
        @submit="handleSignup" 
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
            v-text-input#confirmPassword(
              v-model='confirmPassword' 
              label='Confirm password' 
              type='password'
              rules="required"
            )
            v-btn(
              type='submit' 
              color="primary"
              class="w-[240px] !bg-secondary-200"
            ) Sign up
  p.mt-4.text-s3 Already signed up? 
    NuxtLink.text-tertiary-200.underline(to="/") Login!
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
    return {}
  },
  computed: {
    ...mapState({
      authSignup: (state) => state.auth?.signup,
    }),
    email: {
      get() {
        return this.authSignup?.email
      },
      set(value) {
        this.setSignupEmail(value)
      },
    },
    password: {
      get() {
        return this.authSignup?.password
      },
      set(value) {
        this.setSignupPassword(value)
      },
    },
    confirmPassword: {
      get() {
        return this.authSignup?.confirmPassword
      },
      set(value) {
        this.setSignupConfirmPassword(value)
      },
    }
  },
  watch: {},
  mounted() {},
  created() {},
  methods: {
    ...mapActions({
      postSignup: action_types.POST_SIGNUP
    }),
    ...mapMutations({
      setSignupEmail: mutation_types.SET_EMAIL_SIGNUP,
      setSignupPassword: mutation_types.SET_PASSWORD_SIGNUP,
      setSignupConfirmPassword: mutation_types.SET_CONFIRM_PASSWORD_SIGNUP
    }),
    async handleSignup() {
      try {
        if (this.password === this.confirmPassword) {
          await this.postSignup()
          this.$router.push("/home")
        }
      } catch (error) {
        console.error(error)
      }
    },
  }
}
</script>

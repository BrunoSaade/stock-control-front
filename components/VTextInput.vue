<template lang="pug">
.w-full
  ValidationProvider(
    :rules='rules' 
    v-slot='{ errors }'
    ref="validatorProvider"
  )
    v-text-field(
      ref='input'
      v-bind="{ autocomplete: 'off', ...$attrs }" 
      @input='handleInput' 
      @change='handleChange'
      @keydown.enter="$event.preventDefault(); handleEnter()"
    )
    small(v-show="!!errors[0]" class="default-input--message") {{ errors[0] }}
</template>
<script>
import { ValidationProvider } from "vee-validate"
export default {
  name: 'VTextInput',
  data() {
    return {}
  },
  components: { ValidationProvider },
  props: {
    rules: {
      type: String,
      default: () => "",
    },
  },
  watch: {},
  mounted() {},
  methods: {
    handleInput(event) {
      const value = event
      this.$emit('input', value)
    },
    handleChange(event) {
      const value = event
      this.$emit('change', value)
    },
    handleEnter() {
      this.$emit('keydown-enter');
    },
    resetValidation() {
      this.$refs.validatorProvider.reset()
    },
  },
}
</script>
<style lang="postcss">
.default-input--message {
  @apply text-error-light-900 font-bold;
}
</style>
  
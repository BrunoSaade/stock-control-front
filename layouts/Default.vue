<template lang="pug">
v-container.l-inline-center-start.p-5(class="w-[100vh] h-[100vh]")
  nuxt
  v-btn.bottom-0.right-0.m-5(
    v-if="isLogged"
    class="logout-button" 
    fab dark 
    color="primary" 
    @click="logout"
  )
    v-icon dark mdi-logout
</template>

<script>
export default {
  name: "Default",
  computed: {
    isLogged() {
      return this.$route.path.includes("home")
    }
  },
  methods: {
    logout() {
      this.$router.push('/')
    }
  }
}
</script>

<style scoped>
.logout-button {
  position: fixed;
}
</style>
  
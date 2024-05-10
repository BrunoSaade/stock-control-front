<template lang="pug">
p {{ test }}
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from "vuex"
import * as getter_types from "@/store/types/getter-types"
import * as mutation_types from "@/store/types/mutation-types"
import * as action_types from "@/store/types/action-types"
export default {
  name: "Index",
  props: {},
  data() {
    return {}
  },
  computed: {
    ...mapState({}),
  },
  watch: {},
  mounted() {},
  created() {},
  methods: {},
}
</script>

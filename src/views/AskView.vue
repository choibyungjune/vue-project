<template>
  <div>
    <div v-for="item in this.$store.state.ask">{{ item.title }}</div>
  </div>
</template>
<script>
import { fetchAskList } from '../api/index.js'

export default {
  components: {},
  setup() {},
  created() {
    this.$store.dispatch('FETCH_ASK')
    // var vm = this
    // fetchAskList()
    //   .then(function (response) {
    //     console.log(response)
    //     vm.ask = response.data
    //   })
    //   .catch(function (error) {
    //     console.log(error)
    //   })
  },
  mounted() {},
  unmounted() {},
  methods: {}
}
</script>

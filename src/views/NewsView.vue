<template>
  <div>
    <div v-for="user in this.$store.state.news">{{ user.title }}</div>
  </div>
</template>
<script>
import { fetchNewsList } from '../api/index.js'

export default {
  components: {},
  setup() {},
  created() {
    this.$store.dispatch('FETCH_NEWS')
    // var vm = this
    // // 1
    // fetchNewsList()
    //   .then(function (response) {
    //     console.log(response)
    //     // 2
    //     vm.users = response.data
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

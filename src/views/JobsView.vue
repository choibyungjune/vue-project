<template>
  <div>
    <div v-for="job in this.$store.state.jobs">{{ job.title }}</div>
  </div>
</template>
<script>
import { fetchJobsList } from '../api/index.js'

export default {
  components: {},
  setup() {},
  created() {
    this.$store.dispatch('FETCH_JOBS')
    // fetchJobsList()
    //   .then((response) => (this.jobs = response.data))
    //   .catch(function (error) {
    //     console.log(error)
    //   })
  },
  mounted() {},
  unmounted() {},
  methods: {}
}
</script>

<template>
  <nav>
    <tool-bar></tool-bar>
  </nav>
  <router-view />
</template>

<script>
import ToolBar from './components/ToolBar.vue'
export default {
  components: {
    ToolBar
  }
}
</script>

<style>
body {
  padding: 0;
  margin: 0;
}
</style>

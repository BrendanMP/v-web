<template>
  <div id="app">
    <Hero></Hero>
  </div>
</template>

<script>
  import Hero from './components/hero/Hero'
  export default {
    name: 'app',
    components: {
      Hero,
    }
  }
</script>

<style lang="scss">
  @import "./styles/main";
</style>

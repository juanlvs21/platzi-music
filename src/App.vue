<template>
  <div id="app">
    <PmHeader></PmHeader>

    <router-view></router-view>

    <PmFooter></PmFooter>
  </div>
</template>

<script>
// Import components
import PmFooter from './components/layout/Footer.vue'
import PmHeader from './components/layout/Header.vue'

export default {
  name: 'app',
  components: {
    PmFooter,
    PmHeader,
  },
}
</script>

<style lang="scss">
  .mt-20 {
    margin-top: 20px!important;
  }
  .mrl-5 {
    margin: 0px 5px;
  }
  .ml-5 {
    margin-left: 5px!important;
  }
</style>

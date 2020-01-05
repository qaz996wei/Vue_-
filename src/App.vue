<template>
  <div id="app">
    <FooterGuide v-show='$route.meta.showFooter===true'/>
    <router-view/>
  </div>
</template>

<script>
import FooterGuide from "@/components/FooterGuide/FooterGuide"
export default {
  name: 'App',
  components: {
    FooterGuide
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
#app
  width 100%
  height 100%
  background #f5f5f5
</style>

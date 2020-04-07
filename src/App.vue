<template>
  <div id="app">
    <Loader v-if="loading"/>
    <div v-else>
      <suffix-header />
      <router-view />
      <suffix-footer/>
    </div>
    
  </div>
</template>

<script>
export default  {
  data: () => ({
    loading: false
  }),
}
</script>

<style lang="scss">
@import "@/assets/scss/global.scss";
</style>

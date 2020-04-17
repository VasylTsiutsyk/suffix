<template>
  <div id="app">
    <suffix-header />
    <transition name="page">
      <router-view />
    </transition>
    <suffix-footer />
  </div>
</template>

<style lang="scss">
@import "@/assets/scss/global.scss";
</style>

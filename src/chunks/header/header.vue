<template>
  <header class="header">
    <div class="container-header">
      <div class="header__wrap">
        <!-- <transition name="fade" mode="out-in">
          <button class="header__burger" @click="show = !show" >
            <span class="header__burger-ico"></span>
            <span class="header__burger-ico"></span>
            <span class="header__burger-ico"></span>
          </button>
        </transition>
        <transition name="fade">
          <ul v-if="show" class="menu">
            <li >1</li>
            <li>2</li>
          </ul>
        </transition> -->
          <Burger/>
        <div class="header__logo-wrap">
          <router-link to="/">
            <img src="/svg/logo.svg" alt="logo" class="header__logo">
            <!-- <img src="img/header-logo2.svg" alt="logo" class="header__logo2"> -->
          </router-link>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import Burger from '@/chunks/app/burger/burger'
export default {
  data() {
    return {
      active: false,
      show: false
    };
  },
  components: {
    Burger
  },
  methods: {
    go() {
      // this.$router.replace("/blog");
    },
    toogleActive() {
      this.active = !this.active;
    }
  },
  created() {}
};
</script>

<style lang="scss" scoped>
@import "header.scss";
</style>

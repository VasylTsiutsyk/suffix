<template>
  <header class="header" ref="header">
    <div class="container-header">
      <div class="header__wrap">
        <Burger />
        <div class="header__logo-wrap">
          <router-link to="/">
            <img src="/svg/logo.svg" alt="logo" class="header__logo" />
            <img src="/svg/logo2.svg" alt="logo" class="header__logo2" />
          </router-link>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import Burger from "@/chunks/app/burger/burger";
export default {
  name: "suffix-header",
  mounted() {
    let header = this.$refs.header;
    window.onscroll = scrollHandler;
    function scrollHandler() {
      var h = document.documentElement.clientHeight;
      if (window.pageYOffset > h) {
        header.classList.add("fixed");
      } else {
        header.classList.remove("fixed");
      }
    }
  },
  components: {
    Burger
  }
};
</script>

<style lang="scss">
@import "header.scss";
</style>

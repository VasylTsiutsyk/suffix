<template name="component-name">
  <section class="subscribe">
    <div class="container">
      <div class="subscribe__wrap">
        <div class="subscribe__img-box">
          <img 
            src="img/subscribe.jpg" 
            alt="" 
            class="subscribe__img"
          >
          <div class="block__overlay"></div>
        </div>
        <div class="subscribe__content-box">
          <div class="subscribe__content">
            <h3 class="subscribe__title">ISSUE 22 - MAY 2020</h3>
            <router-link 
              :to="'/blog/'" 
              class="subscribe__btn"
            >
              subscribe now
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>


<style lang="scss" scoped>
@import "home-subscribe.scss";
</style>
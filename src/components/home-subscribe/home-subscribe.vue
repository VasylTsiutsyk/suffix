<template name="component-name">
  <section class="subscribe">
    <div class="container">
      <div class="subscribe__wrap">
        <div class="subscribe__img-box">
          <img src="img/subscribe.jpg" alt="" class="subscribe__img" />
          <div class="block__overlay"></div>
        </div>
        <div class="subscribe__content-box">
          <div class="subscribe__content">
            <h3 class="subscribe__title">{{ $t("global.subscribe-date") }}</h3>
            <router-link :to="'/'" class="subscribe__btn">
              {{ $t("global.subscribe-now") }}
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
@import "home-subscribe.scss";
</style>

<template name="component-name">
  <footer class="footer">
    <div class="container">
      <div class="footer__wrap">
        <div class="footer__logo-wrap">
          <router-link to="/">
            <img
              src="/svg/footer-logo.svg"
              alt="footer-logo"
              class="footer__logo"
            />
          </router-link>
        </div>
        <div class="footer__copyright">
          {{ $t("global.designed") }}
        </div>
      </div>
    </div>
  </footer>
</template>

<style lang="scss">
@import "footer.scss";
</style>

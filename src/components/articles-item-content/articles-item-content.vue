<template name="component-name">
  <section class="articles-item__content">
    <div class="container">
      <div class="articles-item__wrap">
        <div class="block__img-wrap">
          <img
            :src="article.image ? article.image[0] : ''"
            alt="article-image"
            class="block__img"
          />
          <div class="block__overlay"></div>
        </div>

        <p class="block__content" v-html="article.intro"></p>
        <router-link :to="'/'" class="block__link link--large link--black">
          {{ $t("global.go-home") }}
        </router-link>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    article: {
      type: Object,
      required: true
    }
  }
};
</script>

<style lang="scss">
@import "articles-item-content.scss";
</style>

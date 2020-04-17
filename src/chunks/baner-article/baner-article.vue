<template name="component-name">
  <div class="baner__content-box">
    <div class="baner__content">
      <div class="block__nav">
        <div class="block__date-wrap">
          <time
            :datetime="banerArticle.data.date"
            class="block__date date--large date--white "
          >
            {{ banerArticle.data.date | formatDate }}
          </time>
        </div>
        <div class="block__link-wrap">
          <router-link
            :to="{
              path: `articles?tag=${_getTag(banerArticle.data.tag)}`,
              query: { tag: _getTag(banerArticle.data.tag) }
            }"
            class="block__link link--large link--white"
          >
            {{ $t(`label.${_getTag(banerArticle.data.tag)}`) }}
          </router-link>
        </div>
      </div>
      <h2 class="baner__title">{{ banerArticle.data.title }}</h2>
      <p class="baner__intro" v-html="banerArticle.data.intro"></p>
      <router-link
        :to="'/articles/' + banerArticle.data.slug"
        class="baner__btn"
      >
        {{ $t("global.read-more") }}
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "baner-article",
  props: {
    banerArticle: {
      type: Object,
      required: true
    }
  }
};
</script>

<style lang="scss">
@import "baner-article.scss";
</style>

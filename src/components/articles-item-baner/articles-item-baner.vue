<template name="component-name">
  <section class="articles-item__baner">
    <div class="container">
      <div class="block__nav">
        <div class="block__date-wrap">
          <time
            :datetime="article.date"
            class="block__date date--large date--white"
          >
            {{ article.date | formatDate }}
          </time>
        </div>
        <div class="block__link-wrap">
          <router-link
            :to="`/articles?tag=${_getTag(article.tag)}`"
            class="block__link link--large link--white"
          >
            {{ $t(`label.${_getTag(article.tag)}`) }}
          </router-link>
        </div>
      </div>
      <h2 class="block__title">{{ article.title }}</h2>
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
@import "articles-item-baner.scss";
</style>

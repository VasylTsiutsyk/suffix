<template name="component-name">
  <section class="featured">
    <div class="container">
      <div class="featured__wrap">
        <h2 class="block__title">{{ $t("global.featured") }}</h2>
        <ul class="featured__list">
          <HomeFeaturedItem
            :key="article.id"
            v-for="article in articlesByTag"
            :article="article"
          />
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
import HomeFeaturedItem from "./home-featured-item/home-featured-item";
export default {
  name: "home-featured",
  props: ["tag"],
  computed: {
    articlesByTag() {
      const articles = this.$store.state.blog.articlesHome[this.tag.data.title];
      return articles.slice(1, 4);
    }
  },
  components: {
    HomeFeaturedItem
  }
};
</script>
<style lang="scss">
@import "home-featured.scss";
</style>

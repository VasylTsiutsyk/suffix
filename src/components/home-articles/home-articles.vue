<template>
  <section class="lifestyle">
    <div class="container">
      <div class="block__wrap">
        <ul class="block__list">
          <ArticleItem
            :key="article.id"
            v-for="article in articlesByTag"
            v-bind="article"
          />
        </ul>
        <div class="block__btn-wrap">
          <router-link :to="'/'" class="block__btn">
            SEE ALL
          </router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import ArticleItem from "@/components/article-item/article-item";

export default {
  props: ["tag", "ignoreFirst"],
  computed: {
    articlesByTag() {
      const articles = this.$store.state.blog.articlesHome[this.tag.data.title];
      if (this.ignoreFirst) return articles.splice(1);
      return articles;
    }
  },
  components: {
    ArticleItem
  }
};
</script>

<style lang="scss" scoped>
@import "home-articles.scss";
</style>

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
          <router-link :to="'/articles'" class="block__btn">
            {{ $t("global.see-all") }}
          </router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import ArticleItem from "@/components/article-item/article-item";

export default {
  name: "home-articles",
  props: {
    tag: {
      type: Object,
      required: true
    }
  },
  computed: {
    articlesByTag() {
      const articles = this.$store.state.blog.articlesHome[this.tag.data.title];
      return articles;
    }
  },
  components: {
    ArticleItem
  }
};
</script>

<style lang="scss">
@import "home-articles.scss";
</style>

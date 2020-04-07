<template>
  <section class="lifestyle">
    <div class="container">
      <div class="block__wrap">
        <ul class="block__list">
          <ArticleItem
            :key="article.id"
            v-for="article in articles"
            v-bind="article"
          />
        </ul>
        <div class="block__btn-wrap">
          <router-link
            :to="'/'"
            class="block__btn"
          >
            SEE ALL
          </router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import ArticleItem from '@/components/article-item/article-item';
import { /*mapState,*/ mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters('blog', {
      articles: 'exceptFirstArtices',
    }),
  },
  components: {
    ArticleItem,
  },
  created() {
    this.$store.dispatch('blog/getArticles');
  },
};
</script>

<style lang="scss" scoped>
@import 'home-articles.scss';
</style>

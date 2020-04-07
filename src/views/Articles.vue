<template>
  <main>
    <ArticlesBaner/>
    <div class="container">
      <ArticlesBtns/>
    </div>
    <p class="articles__warning">No articles yet. Add articles ...</p>
    <HomeArticles/>
  </main>
</template>

<script>
import ArticlesBaner from "@/components/articles-baner/articles-baner"
import ArticlesBtns from "@/components/articles-btns/articles-btns"
import HomeArticles from "@/components/home-articles/home-articles";
export default {
  name: "articles",
  metaInfo() {
    return {
      title: this.$title('Articles')
      }
  },
  components: {
    ArticlesBaner, ArticlesBtns, HomeArticles
  }
};
</script>

<style lang="scss">
  .articles__warning {
    font-family: $font-base;
    font-size: 24px;
    line-height: 163.35%;
    color: $color-base;
    text-align: center;
    padding: 100px 20px ;
  }
</style>
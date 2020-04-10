<template>
  <section class="baner">
    <div class="baner__wrap">
      
      <div class="baner__img-box">
        <img 
          class="baner__img"
          alt="" 
          :src="article.data.image ? article.data.image[0] : ''"
        >
      </div>

      <div class="baner__content-box">
        <div class="baner__content">
          <div class="block__nav">
            <div class="block__date-wrap">
              <time :datetime="article.data.date" class="block__date date--large date--white ">
                {{ article.data.date | formatDate }}
              </time>
            </div>
            <div class="block__link-wrap">
              <router-link :to="'/'" class="block__link link--large link--white">
                {{ $t(`label.${_getTag(article.data.categs)}`) }}
              </router-link>
            </div>
          </div>
          <h2 class="baner__title">{{ article.data.title }}</h2>
          <p class="baner__intro" v-html="article.data.intro"></p>
          <router-link :to="'/blog/' + article.data.slug" class="baner__btn">
            Read more
          </router-link>
        </div>
      </div>
      <!-- <BanerArticle/> -->
    </div>
  </section>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters("blog", {
      getTagById: "getTagById",
      article: "firstArticle"
    })
  },
  created() {
    // this.$store.dispatch("blog/getArticles");
  }
};
</script>

<style lang="scss" scoped>
@import "home-baner.scss";
</style>

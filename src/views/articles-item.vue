<template>
  <main>
    <ArticlesItemBaner />
    <section class="blog-article">
      <div class="container">
        <Loader v-if="loading" />
        <div class="blog-article__wrap" v-else>
          <img
            :src="singleArticle.image ? singleArticle.image[0] : ''"
            alt="article-image"
          />
          <div class="block__nav">
            <div class="block__date-wrap">
              <time
                :datetime="singleArticle.date"
                class="block__date date--large date--black "
              >
                {{ singleArticle.date | formatDate }}
              </time>
            </div>
            <div class="block__link-wrap">
              <router-link
                :to="`/articles?tag=${_getTag(singleArticle.tag)}`"
                class="block__link link--large link--black"
              >
                {{ $t(`label.${_getTag(singleArticle.tag)}`) }}
              </router-link>
            </div>
          </div>
          <h2 class="block__title">{{ singleArticle.title }}</h2>
          <p class="block__content" v-html="singleArticle.intro"></p>
          <router-link :to="'/'" class="block__link link--large link--black">
            {{ $t("global.go-home") }}
          </router-link>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import ArticlesItemBaner from "@/components/articles-item-baner/articles-item-baner";
import { mutt } from "@/store/blog";
import { mapState, mapActions } from "vuex";

export default {
  data() {
    return {
      loading: true
    };
  },
  metaInfo() {
    return {
      title: this.$title(`${this.$route.params.slug}`)
    };
  },
  computed: {
    ...mapState("blog", ["singleArticle"])
  },
  beforeRouteLeave(to, from, next) {
    this.$store.commit(`blog/${mutt.DEL_SINGLE_ARCTICLE}`);
    next();
  },
  methods: {
    ...mapActions("blog", ["getArticleBySlug"])
  },
  created() {
    this.getArticleBySlug(this.$route.params.slug).then(() => {
      this.loading = false;
    });
  },
  components: {
    ArticlesItemBaner
  }
};
</script>

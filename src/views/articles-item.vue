<template>
  <main>
    <Loader v-if="loading" />
    <div v-else>
      <ArticlesItemBaner :article="singleArticle" />
      <ArticlesItemContent :article="singleArticle" />
    </div>
  </main>
</template>

<script>
import { mutt } from "@/store/blog";
import { mapState, mapActions } from "vuex";
import ArticlesItemBaner from "@/components/articles-item-baner/articles-item-baner";
import ArticlesItemContent from "@/components/articles-item-content/articles-item-content";

export default {
  name: "articles-item",
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
    ArticlesItemBaner,
    ArticlesItemContent
  }
};
</script>

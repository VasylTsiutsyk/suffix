<template>
  <main>
    <ArticlesBaner />
    <section>
      <div class="container">
        <router-link :to="'/articles'" class="block__btn">
          {{ $t("global.see-all") }}
        </router-link>
        <router-link
          :to="{
            path: `articles?tag=${tag.data.title}`,
            query: { tag: tag.data.title }
          }"
          :key="tag.id"
          v-for="tag in tags"
          class="block__btn"
        >
          {{ tag.data.title }}
        </router-link>

        <Loader v-if="loading" />
        <div class="block__wrap" v-else>
          <ul class="block__list">
            <ArticleItem
              v-bind="article"
              :key="article.id"
              v-for="article in filteredArticles"
            />
          </ul>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import { mapState, mapActions } from "vuex";
import ArticlesBaner from "@/components/articles-baner/articles-baner";
import ArticleItem from "@/components/article-item/article-item";
export default {
  name: "articles",
  data() {
    return {
      loading: true
    };
  },
  metaInfo() {
    return {
      title: this.$title("Articles")
    };
  },
  computed: {
    ...mapState("blog", ["tags", "filteredArticles"])
  },
  methods: {
    ...mapActions("blog", ["getArticlesByTag"]),
    requestArticles(route, callback = () => {}) {
      this.loading = true;
      this.getArticlesByTag()
        .then(() => {
          const el = this.tags.find(tag => {
            return tag.data.title === route.query.tag;
          });
          const tagId = el && el.id ? el.id : null;
          if (tagId) {
            this.getArticlesByTag(tagId);
          }
        })
        .then(callback);
      this.loading = false;
    }
  },
  beforeRouteUpdate(to, from, next) {
    this.requestArticles(to, next);
  },
  created() {
    this.requestArticles(this.$route);
  },
  components: {
    ArticlesBaner,
    ArticleItem
  }
};
</script>

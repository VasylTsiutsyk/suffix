<template>
  <main>
    <Loader v-if="loading" />
    <div v-else>
      <HomeBaner :tag="tagFirst" />
      <HomeServices />
      <HomeFeatured :tag="tagFirst" />
      <HomeArticles :tag="tagFirst" />
      <HomeClients />
      <HomeSubscribe />
      <HomeArticles :tag="tag" :key="tag.id" v-for="tag in tagExceptFirst" />
      <Collapse />
    </div>
  </main>
</template>

<script>
import { mapGetters } from "vuex";
import HomeBaner from "@/components/home-baner/home-baner";
import HomeServices from "@/components/home-services/home-services";
import HomeClients from "@/components/home-clients/home-clients";
import HomeSubscribe from "@/components/home-subscribe/home-subscribe";
import HomeArticles from "@/components/home-articles/home-articles";
import HomeFeatured from "@/components/home-featured/home-featured";

export default {
  name: "home",
  data() {
    return {
      loading: true
    };
  },
  metaInfo() {
    return {
      title: this.$title("Home")
    };
  },
  computed: mapGetters("blog", ["tagFirst", "tagExceptFirst"]),
  created() {
    this.loading = true;
    this.$store.dispatch("blog/getArticlesForHome").then(() => {
      this.loading = false;
    });
  },
  components: {
    HomeBaner,
    HomeServices,
    HomeClients,
    HomeSubscribe,
    HomeArticles,
    HomeFeatured
  }
};
</script>

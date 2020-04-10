<template>
  <main>
    <Loader v-if="loading" />

    <div v-else>
      <HomeBaner v-if="false" :tag="tagFirst" />
      <HomeServices />
      <HomeFeatured />

      <HomeArticles :tag="tagFirst" />

      <HomeClients />
      <HomeSubscribe />

      <HomeArticles :tag="tag" :key="tag.id" v-for="tag in tagExceptFirst" />

      <!-- <HomeCollapse /> -->
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
// import HomeCollapse from "@/components/home-collapse/home-collapse";
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
    this.$store.dispatch("blog/getArticlesForHome").then(() => {
      this.loading = false;
    });
    this.$store.dispatch("blog/getCollapse").then(() => {
      this.loading = false;
    });
  },
  components: {
    HomeBaner,
    HomeServices,
    HomeClients,
    HomeSubscribe,
    HomeArticles,
    // HomeCollapse,
    HomeFeatured
  }
};
</script>

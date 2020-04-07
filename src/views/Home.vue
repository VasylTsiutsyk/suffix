<template>
    
  <main>
    <Loader v-if="loading"/>
    <div v-else>
      <HomeBaner />
      <HomeServices/>
      <HomeFeatured/>
      <HomeArticles/>
      <HomeClients/>
      <HomeSubscribe/>
      <HomeArticles/>
      <HomeArticles/>
      <HomeCollapse/>
    </div>

  </main>
</template>

<script>
import HomeBaner from "@/components/home-baner/home-baner";
import HomeServices from "@/components/home-services/home-services";
import HomeClients from "@/components/home-clients/home-clients";
import HomeSubscribe from "@/components/home-subscribe/home-subscribe";
import HomeArticles from "@/components/home-articles/home-articles";
import HomeCollapse from "@/components/home-collapse/home-collapse"
import HomeFeatured from "@/components/home-featured/home-featured"

export default {
  name: "home",
   data: () => ({
    loading: false
  }),
  metaInfo() {
    return {
      title: this.$title('Home')
      }
  },
  components: {
    HomeBaner,
    HomeServices,
    HomeClients,
    HomeSubscribe,
    HomeArticles,
    HomeCollapse,
    HomeFeatured
  }
};
</script>

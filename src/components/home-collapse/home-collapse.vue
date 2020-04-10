<template name="component-name">
  <section class="collapse-section">
    <div class="container">
      <!-- <pre>{{ collapseItems }}</pre> -->
      <!-- :key="collItem.id" v-for="collItem in collapseItems" -->
      <collapse :selected="false">
        <div slot="collapse-header" class="collapse__title">
          dsklf
          <!-- {{collItem.data.title}} -->
        </div>
        <div slot="collapse-body" class="collapse__content">
          slfksl
          <!-- {{collItem.data.content}} -->
        </div>
      </collapse>
    </div>
  </section>
</template>

<script>
// import { mapGetters } from "vuex";
export default {
  name: "collapse",
  // computed: mapGetters("blog", ["collapseItems"]),
  created() {
    // this.$store.dispatch("blog/getCollapse").then(() => {
    //   console.log("Collapse loaded");
    // });
  }
};
</script>

<style lang="scss">
@import "home-collapse.scss";
</style>

<template name="component-name">
  <section class="collapse-section">
    <div class="container">
      <ul class="collapse__list">
        <CollapseItem
          v-for="collItem in collapseItems"
          :key="collItem.id"
          :collItem="collItem"
          @toggle-event="toggleCollapse"
        >
        </CollapseItem>
      </ul>
    </div>
  </section>
</template>

<script>
import { mapGetters } from "vuex";
import CollapseItem from "./collapse-item";
export default {
  name: "collapse",
  computed: mapGetters("collapse", ["collapseItems"]),
  methods: {
    toggleCollapse(id) {
      this.$store.state.collapse.collapseItems.forEach((item, index) => {
        const curr = item;
        if (id === index) {
          curr.isOpen = !curr.isOpen;
        } else {
          curr.isOpen = true;
        }
      });
    }
  },
  created() {
    this.$store.dispatch("collapse/getCollapse").then(data => {
      this.$store.state.collapse.collapseItems = data.items.map(
        (collItem, index) => ({
          ...collItem,
          isOpen: true,
          id: index
        })
      );
    });
  },
  components: {
    CollapseItem
  }
};
</script>
<style lang="scss">
@import "collapse.scss";
</style>

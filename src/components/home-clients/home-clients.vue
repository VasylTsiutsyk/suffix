<template name="component-name">
  <section class="clients">
    <div class="container">
      <div class="clients__wrap">
        <div class="clients__img-box"></div>

        <div class="clients__content-box">
          <h2 class="clients__title">{{ $t("global.our-clients") }}</h2>
          <ul class="clients__list">
            <li
              class="clients__item"
              :key="client.id"
              v-for="client in clients"
            >
              <a :href="client.data.link" target="_blank">
                <img
                  :src="client.data.image ? client.data.image[0] : ''"
                  alt="client svg"
                  class="clients__item-img"
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "clients",
  computed: {
    ...mapGetters("clients", ["clients"])
  },
  created() {
    this.$store.dispatch("clients/getClients");
  }
};
</script>

<style lang="scss">
@import "home-clients.scss";
</style>

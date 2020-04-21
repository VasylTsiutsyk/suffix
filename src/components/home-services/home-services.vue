<template name="component-name">
  <section class="services">
    <div class="container">
      <div class="services__wrap">
        <ul class="services__list">
          <li
            class="services__item"
            :key="service.id"
            v-for="service in services"
          >
            <div class="services__circle" :class="color">
              <img
                class="services__icon"
                :src="service.data.image ? service.data.image[0] : ''"
                alt="service ico"
              />
            </div>
            <h3 class="services__title title--orange">
              {{ service.data.title }}
            </h3>
            <p class="services__text">
              {{ service.data.content }}
            </p>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "services",
  computed: {
    ...mapGetters("services", ["services"]),
    color() {
      const colors = ["icon--red", "icon--orange"];
      return colors[Math.floor(Math.random())];
    }
  },
  created() {
    this.$store.dispatch("services/getServices");
  }
};
</script>

<style lang="scss">
@import "home-services.scss";
</style>

<template>
  <li class="collapse__item" :class="isClosed">
    <button class="collapse__header" :class="isActive" @click="toggleColl">
      {{ collItem.data.title }}
    </button>
    <div class="collapse__content-box">
      <p class="collapse__content" v-html="collItem.data.content"></p>
    </div>
  </li>
</template>

<script>
export default {
  props: ["collItem"],
  methods: {
    toggleColl() {
      this.$emit("toggle-event", this.collItem.id);
    }
  },
  computed: {
    isClosed() {
      return {
        "is-closed": this.collItem.isOpen
      };
    },
    isActive() {
      return {
        "is-active": !this.collItem.isOpen
      };
    }
  }
};
</script>

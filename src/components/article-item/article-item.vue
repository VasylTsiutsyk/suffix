<template>
  <li class="block__item">
    <div class="block__img-wrap">
      <img 
        :src="data.image ? data.image[0] : ''" 
        alt="article-image" 
        class="block__img"
      >
      <div class="block__overlay"></div>
    </div>
    <div class="block__nav">
      <div class="block__date-wrap">
        <time 
          :datetime="data.date" 
          class="block__date date--small date--black "
        >
          {{ data.date | formatDate }}
        </time>
      </div>
      <div class="block__link-wrap">
        <router-link 
          :to="'/'" 
          class="block__link link--small link--black"
        >
          {{ $t(`label.${_getTag(data.categs)}`) }}
        </router-link>
      </div>
    </div>
    <h2 class="block__title">{{data.title}}</h2>
    <router-link 
      :to="'/blog/' + data.slug"
    >
      {{ $t("global.article-more") }}
    </router-link>
  </li>
</template>

<script>
export default {
  props: ["id", "data"]
};
</script>

<style lang="scss" scoped>
// @import "@/assets/scss/settings.scss";
@import "article-item.scss";
</style>

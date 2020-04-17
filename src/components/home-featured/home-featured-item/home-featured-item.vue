<template name="component-name">
  <li class="featured__item">
    <div class="block__img-wrap">
      <img
        :src="article.data.image ? article.data.image[0] : ''"
        alt="it`s place for great image"
        class="block__img"
      />
      <div class="block__overlay"></div>
    </div>
    <div class="block__nav">
      <div class="block__date-wrap">
        <time
          :datetime="article.data.date"
          class="block__date date--small date--black "
        >
          {{ article.data.date | formatDate }}
        </time>
      </div>
      <div class="block__link-wrap">
        <router-link
          :to="{
            path: `articles?tag=${_getTag(article.data.tag)}`,
            query: { tag: _getTag(article.data.tag) }
          }"
          class="block__link link--small link--black"
        >
          {{ $t(`label.${_getTag(article.data.tag)}`) }}
        </router-link>
      </div>
    </div>
    <h3 class="featured__title">
      {{ article.data.title }}
    </h3>
    <p class="featured__intro" v-html="article.data.intro"></p>
  </li>
</template>

<script>
export default {
  name: "featured-item",
  props: {
    article: {
      type: Object,
      required: true
    }
  }
};
</script>

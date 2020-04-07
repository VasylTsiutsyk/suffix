<template name="component-name">
  <section class="featured">
    <div class="container">
      <div class="featured__wrap">
        <h2 class="block__title">featured</h2>
        <ul class="featured__list">
          <HomeFeaturedItem/>
          <HomeFeaturedItem/>
        </ul>
      </div>
    </div>
  </section>
</template>


<script>
import HomeFeaturedItem from '@/components/home-featured-item/home-featured-item'
export default {
  components: {
    HomeFeaturedItem
  }
}

</script>
<style lang="scss">
@import "home-featured.scss";
</style>
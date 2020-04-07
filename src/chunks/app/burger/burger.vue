<template name="component-name">
  <div class="burger-menu">
    <input id="menu__toggle" type="checkbox" />
    <label class="menu__btn" for="menu__toggle">
      <span class="menu__ico"></span>
      <span class="menu__ico"></span>
      <span class="menu__ico"></span>
    </label>

    <ul class="menu__list">
      <li>
        <router-link class="menu__item" to="/">Home</router-link>
      </li>
      <li>
        <router-link class="menu__item" to="/blog">Blog</router-link>
      </li>
      <li>
        <router-link class="menu__item" to="/articles">Articles</router-link>
      </li>
    </ul>
  </div>
</template>


<style lang="scss">
  @import "burger.scss"
</style>
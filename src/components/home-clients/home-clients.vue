<template name="component-name">
  <section class="clients">
    <div class="container">
      <div class="clients__wrap">
        <div class="clients__img-box"></div>

        <div class="clients__content-box">
          <h2 class="clients__title">{{ $t("global.our-clients") }}</h2>
          <ul class="clients__list">
            <li class="clients__item">
              <router-link :to="'/'">
                <img
                  src="/svg/Vector (1).svg"
                  alt=""
                  class="clients__item-img"
                />
              </router-link>
            </li>
            <li class="clients__item">
              <router-link :to="'/'">
                <img
                  src="/svg/Vector (2).svg"
                  alt=""
                  class="clients__item-img"
                />
              </router-link>
            </li>
            <li class="clients__item">
              <router-link :to="'/'">
                <img
                  src="/svg/Vector (1).svg"
                  alt=""
                  class="clients__item-img"
                />
              </router-link>
            </li>
            <li class="clients__item">
              <router-link :to="'/'">
                <img
                  src="/svg/Vector (2).svg"
                  alt=""
                  class="clients__item-img"
                />
              </router-link>
            </li>
            <li class="clients__item">
              <router-link :to="'/'">
                <img
                  src="/svg/Vector (1).svg"
                  alt=""
                  class="clients__item-img"
                />
              </router-link>
            </li>
            <li class="clients__item">
              <router-link :to="'/'">
                <img
                  src="/svg/Vector (2).svg"
                  alt=""
                  class="clients__item-img"
                />
              </router-link>
            </li>
            <li class="clients__item">
              <router-link :to="'/'">
                <img
                  src="/svg/Vector (2).svg"
                  alt=""
                  class="clients__item-img"
                />
              </router-link>
            </li>
            <li class="clients__item">
              <router-link :to="'/'">
                <img
                  src="/svg/Vector (2).svg"
                  alt=""
                  class="clients__item-img"
                />
              </router-link>
            </li>
            <li class="clients__item">
              <router-link :to="'/'">
                <img
                  src="/svg/Vector (2).svg"
                  alt=""
                  class="clients__item-img"
                />
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
@import "home-clients.scss";
</style>

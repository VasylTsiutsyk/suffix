<template name="component-name">
  <li class="featured__item">
    <div class="block__img-wrap">
      <img src="img/featured2.jpg" alt="" class="block__img">
      <div class="block__overlay"></div>
    </div>
    <div class="block__nav">
      <div class="block__date-wrap">
        <h3 class="block__date date--small date--black">10/10/2020</h3>
      </div>
      <div class="block__link-wrap">
        <a href="" class="block__link link--small link--black">LIFESTYLE</a>
      </div>
    </div>
    <!-- <div class="block__nav">
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
            </div> -->
    <h3 class="featured__title">Lorem ipsum dolor sit amet, consectetur adipiscing elit</h3>
    <p class="featured__intro">ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.</p>
  </li>
</template>


<style lang="scss">
@import 'home-featured-item.scss'
</style>
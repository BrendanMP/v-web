<template>
  <section>
    <swiper
      :options="config"
      class="wrapper"
    >
      <swiper-slide
        v-for="(slide, key) in slides"
        :key="key"
        class="slide"
      >
        {{slide.title}}
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </section>
</template>

<script>
  import { swiper, swiperSlide } from 'vue-awesome-swiper'
  import 'swiper/dist/css/swiper.css';

  export default {
    name: 'hero',
    components: {
      swiper,
      swiperSlide
    },
    data () {
      return {
        slides: [
          {
            title: 'Title 1'
          },
          {
            title: 'Title 2'
          },
          {
            title: 'Title 3'
          }
        ],
        config: {
          pagination: {
            el: '.swiper-pagination'
          }
        }
      }
    },
    methods: {}
  }
</script>

<style lang="scss" scoped>
  section {
    height: 100%;
  }

  .wrapper {
    height: 100%;
  }

  .slide {
    height: 100%;
    padding: 2rem;
  }
</style>

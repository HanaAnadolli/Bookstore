<template>
  <Header />
  <div class="home">
    <Carousel
      :navigation="true"
      :pagination="true"
      :startAutoPlay="false"
      :timeout="5000"
      class="carousel"
      v-slot="{ currentSlide }"
    >
      <Slide v-for="(slide, index) in carouselSlides" :key="index">
        <div v-show="currentSlide === index + 1" class="slide-info">
          <img :src="require(`../assets/${slide}.jpg`)" alt="" />
        </div>
      </Slide>
    </Carousel>
  </div>
  <br/> <br />
  <Categories />
  <br/>
  <hr/>
  <Extra/>
</template>

<script>
// @ is an alias to /src
import Carousel from '@/components/Carousel.vue';
import Slide from '@/components/Slide.vue';
import Header from '@/components/Header.vue';
import Categories from '@/components/Categories.vue'
import Extra from '@/components/Extra.vue';

export default {
  name: 'HomeView',
  components:{
    Header,
    Carousel,
    Slide,
    Categories,
    Extra
  },
  setup() {
    const carouselSlides = ["photo1", "photo2", "photo3", "photo4", "photo5"];

    return {carouselSlides}
  }
}

</script>

<style lang="scss" scoped>
.carousel {
  max-height: 100vh;
  height: 80vh;
  .slide-info {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    max-height: 100%;
    height: 100%;
    img {
      min-width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  @media (max-width: 768px) {
    height: 60vh;
    .slide-info {
      img {
        min-height: 100%;
      }
    }
  }

  @media (max-width: 576px) {
    height: 50vh;
    .slide-info {
      img {
        min-height: 100%;
      }
    }
  }
}
</style>

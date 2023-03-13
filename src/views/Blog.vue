 <template>
  <Header />
  <div class="container">
    <header>
    <br>
    <br>
    <br>
   
    </header>
    <footer>
      <div class="boxes">
     
       
        <div class="box">

          <h3>Quote</h3>
          
          <p>“Books are a uniquely portable magic. They are from another world.”</p>
        </div>
        <div class="box">
       
          <h3>Quote</h3>
          <p>“A good bookshop is just a genteel Black Hole that knows how to read.”</p>
        </div>
        <div class="box">
          
          <h3>Quote</h3>
          <p>“Books were safer than other people anyway.”</p>
        </div>
      </div>
    </footer>
  </div>

<br><br><br><br><br><br><br>


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
          <img :src="require(`@/assets/Blog/${slide}.jpg`)" alt="" />
        </div>
      </Slide>
    </Carousel>
  </div>
  <br><br><br><br><br><br><br><br><br>



<Footer />
  </template>

<script>
// @ is an alias to /src
import Carousel from '@/components/Carousel.vue';
import Slide from '@/components/Slide.vue';
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue'

export default {
  name: 'HomeView',
  components:{
    Header,
    Carousel,
    Slide,
    Footer
  },
  setup() {
    const carouselSlides = ["libri1", "l2", "l3", "l4", "l1"];

    return {carouselSlides}
  }
}
</script>

<style lang="scss" scoped>

.copyright {
	padding-top: 1.5rem;
	border-top: 1px solid #d0dae2;
	text-align: center;
}

.copyright a {
	text-decoration: none;
}

.copyright .list-unstyled,
.copyright .statement {
	opacity: 0.7;
}
  .container {
    max-width: 800px;
    margin: 0 auto;
    padding: 0 10px;
  }
  
  .boxes {

    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin: 20px 0;
    padding: 20px;
    background-color:#eee6de;
    border: 1px solid #b6594c;
    border-radius: 20px;
  }
  
  .box {
    width: 300px;
    margin: 20px;
    padding: 10px;
    text-align: center;
    font-family:Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    background-color: #f7f7f7;
    border: 1px solid #8b4513;
    border-radius: 20px;
  }
  
  #foto {
    width: 20px;
  }
  
  h3 {
    font-size: 24px;
    color: #8b4513;
    margin-bottom: 10px;
  }
  
  p {
    font-size: 16px;
    color: #555;
    line-height: 1.5;
  }
  
  img {
    max-width: 100%;
    height: auto;
  }
  
  @media screen and (max-width: 768px) {
    .box {
      width: 100%;
      margin: 20px 0;
    }
  }
  
  .carousel {
    max-height: 100vh;
    height: 80vh;
    border: 1px solid #8b4513;
  }
  
  .slide-info {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    max-height: 100%;
    height: 100%;
    border: 1px solid #8b4513;
  }
  
  .slide-info img {
    min-width: 100%;
    height: 100%;
    border: 1px solid #8b4513;
  }

  @media (max-width: 768px) {
    .carousel {
      height: 60vh;
      border: 1px solid #8b4513;
    }
    
    .slide-info img {
      min-height: 100%;
      border: 1px solid #8b4513;
    }
  }
  
  @media (max-width: 576px) {
    .carousel {
      height: 50vh;
    }
    
    .slide-info img {
      min-height: 100%;
    }
  }


</style>
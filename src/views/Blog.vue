 <template>
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

  <div class="flip-card">
    <div class="flip-card-inner">
      <div class="flip-card-front">
        <img class="" :src="require('@/assets/images/romeo.jpg')"  style="width:500px;height:500px;" />   
      </div>
      <div class="flip-card-back">
        <h1>The most read book</h1>
        <h2>William Shekspear</h2>
        <h3>-Romeo   & Juliet-</h3>
        <p> Romeo and Juliet is a tragedy written by William Shakespeare early in his career about the romance between two Italian youths from feuding families. It was among Shakespeare's most popular plays during his lifetime and, along with Hamlet, is one of his most frequently performed plays. Today, the title characters are regarded as archetypal young lovers.Romeo and Juliet belongs to a tradition of tragic romances stretching back to antiquity. The plot is based on an Italian tale written by Matteo Bandello and translated into verse as The Tragical History of Romeus and Juliet by Arthur Brooke in 1562 and retold in prose in Palace of Pleasure by William Painter in 1567. Shakespeare borrowed heavily from both but expanded the plot by developing a number of supporting characters, particularly Mercutio and Paris. Believed to have been written between 1591 and 1595, the play was first published in a quarto version in 1597. </p>
      </div>
    </div>
  </div>

  <br><br><br>
<div class="copyright bg-gray">
     <div class="container">
         <div class="row">
             <div class="col-lg-6 col-md-12 col-sm-12">
                 <ul class="list-unstyled li-space-lg p-small">
                     <li><a >Article Details</a></li>
                     <li><a >Terms & Conditions</a></li>
                     <li><a >Privacy Policy</a></li>
                 </ul>
             </div> 
             <div class="col-lg-3 col-md-12 col-sm-12">
                 <p class="p-small statement">Copyright © <a >Hana Mirjeta Sara </a></p>
             </div> 
             <div class="col-lg-3 col-md-12 col-sm-12">
           
             </div> 
         </div> 
     </div> 
   </div>

  </template>

<script>
// @ is an alias to /src
import Carousel from '@/components/Carousel.vue';
import Slide from '@/components/Slide.vue';

export default {
  name: 'HomeView',
  components:{
    Carousel,
    Slide,
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

/* The flip card container - set the width and height to whatever you want. We have added the border property to demonstrate that the flip itself goes out of the box on hover (remove perspective if you don't want the 3D effect */
.flip-card {
  margin-left: 34%;
  background-color: transparent;
  border: 1px solid #f1f1f1;
  perspective: 1000px; /* Remove this if you don't want the 3D effect */
  width: 500px;
  height: 500px;
  border: 1px rgba(18, 82, 42, 0.671);
}

/* This container is needed to position the front and back side */
.flip-card-inner {
  position: relative;
  width: 500px;
  height: 500px;
  text-align: center;
  transition: transform 0.8s;
  transform-style: preserve-3d;
  border: 1px rgba(18, 82, 42, 0.671);
}

/* Do an horizontal flip when you move the mouse over the flip box container */
.flip-card:hover .flip-card-inner {
  transform: rotateY(180deg);
  width: 500px;
  height: 500px;
  border: 1px rgba(18, 82, 42, 0.671);
}

/* Position the front and back side */
.flip-card-front, .flip-card-back {
  position: absolute;
  width: 500pc;
  height: 500px;
  -webkit-backface-visibility: hidden; /* Safari */
  backface-visibility: hidden;
  border: 1px rgba(18, 82, 42, 0.671);
}

/* Style the front side (fallback if image is missing) */
.flip-card-front {
  background-color: #bbb;
  color: black;  
  width: 500px;
  border: 1px rgba(18, 82, 42, 0.671);
  height: 500px;
}

/* Style the back side */
.flip-card-back {
  background-color: rgba(177, 151, 139, 0.758);
  color: rgba(13, 11, 10, 0.76);
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  transform: rotateY(180deg);
  width: 100%;
  border: 2px rgba(18, 82, 42, 0.671);
  height: 100%;
}
</style>
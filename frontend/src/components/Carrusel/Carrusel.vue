
<template>
  <div class="col-md-12">>
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="3000"
      controls
      indicators
      background="#ababab"
      img-width="840"
      img-height="480"
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <!-- Text slides with image -->
      <b-carousel-slide>
      <b-card slot="img" alt="img slot" img-blank img-alt="Card image">
        
        <img 
          width="480"
          height="240"
          src="../../img/ramones.jpg" />
      </b-card>
      </b-carousel-slide>

      <!-- Slides with custom text -->      
        
      <b-carousel-slide>
      <b-card slot="img" alt="img slot" img-blank img-alt="Card image">
        
        <img 
          width="480"
          height="240"
          src="../../img/ub40.jpeg" />
      </b-card>
      </b-carousel-slide>

      <!-- Slides with custom text -->     

      <b-carousel-slide>
      <b-card slot="img" alt="img slot" img-blank img-alt="Card image">
        
        <img 
          width="480"
          height="240"
          src="../../img/Soda-Stereo.jpg" />
      </b-card>
      </b-carousel-slide>     

      <!-- Slides with img slot -->
      <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
      <b-carousel-slide>
      <b-card slot="img" alt="img slot" img-blank img-alt="Card image">
        
        <img 
          width="480"
          height="240"
          src="../../img/hendrix.jpg" />
      </b-card>
      </b-carousel-slide>


      <!-- Slide with blank fluid image to maintain slide aspect ratio -->
     <b-carousel-slide>
      <b-card slot="img" alt="img slot" img-blank img-alt="Card image">
        
        <img 
          width="480"
          height="240"
          src="../../img/theDoors.jpg" />
      </b-card>
      </b-carousel-slide>

    </b-carousel>

    <p class="mt-4">
      Slide #: {{ slide }}<br>
      Sliding: {{ sliding }}
    </p>
  </div>
</template>

<script>
 // src = "https://unpkg.com/vue@2.5.17/dist/vue.min.js"
  export default {
    data() {
      return {
        slide: 0,
        sliding: null
      }
    },
    methods: {
      onSlideStart(slide) {
        this.sliding = true
      },    
      onSlideEnd(slide) {
        this.sliding = false
      }
    }
  }
</script>

<style scoped>
/*
.carousel, .carousel-inner > .item > img {
  /*height: 50px;
  width:100%;
  height:480px;
  background-position: center;
}
*/
</style>


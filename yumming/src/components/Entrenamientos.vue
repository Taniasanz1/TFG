<template>

  <body>
    <div class="gallery">
      <div class="gallery-container">
        <img class="gallery-item gallery-item-1" src="../../public/assets/sport-1.png" data-index="1" />
        <img class="gallery-item gallery-item-2" src="../../public/assets/sport-2.jpeg" data-index="2" />
        <img class="gallery-item gallery-item-3" src="../../public/assets/sport-3.jpeg" data-index="3" />
        <img class="gallery-item gallery-item-4" src="../../public/assets/sport-4.jpeg" data-index="4" />
        <img class="gallery-item gallery-item-5" src="../../public/assets/sport-1.png" data-index="5" />
      </div>
      <div class="gallery-controls">
        <button @click="next" class="next">Next</button>
        <button @click="prev" class="prev">Prev</button>

      </div>
    </div>
  </body>
</template>
<script>


export default {
  data() {
    return {
      name: 'Entrenamientos'


    }

  },
  computed: {
    slidesLen() {
      return this.slides.length;
    }
  },

  methods: {
    next() {
      if (this.visibleSlide >= this.slides.length - 1) {
        this.visibleSlide = 0;
      } else {
        this.visibleSlide++;
      }
    },
    pev() {
      if (this.visibleSlide <= 0) {
        this.visibleSlide = 0;
      } else {
        this.visibleSlide--;
      }
    }
  }
}


</script>
<template>
  <div class="services">
    <div class="services__wrapper">
      <div class="services__container">
        <div class="services__slides">
          <slider
            ref="slide"
            sliderClass="slider_services"
            :rightOffset="5"
            @change="this.changeSlide"
            >
          <div class="services__col" v-for="index in 6" :key="index">
            <CardService />
          </div>
          </slider>
        </div>
        <div class="services__nav">
          <div class="services__nav-button services__nav-button_prev" @click="this.prevSlide()">
            <ArrowSvg />
          </div>
          <div class="services__nav-button services__nav-button_next" @click="this.nextSlide()">
            <ArrowSvg />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CardService from '@/views/element/CardService.vue'
import Slider from '@/views/block/Slider.vue'
import ArrowSvg from '@/assets/image/arrow.svg'

export default {
  components: {
    CardService,
    Slider,
    ArrowSvg
  },
  methods: {
    prevSlide () {
      this.$refs.slide.prev()
    },
    nextSlide () {
      this.$refs.slide.next()
    }
  }
}
</script>

<style lang='scss'>

</style>

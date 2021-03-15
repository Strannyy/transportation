<template>
  <div class="main-slider">
    <div class="main-slider__wrapper">
      <div class="main-slider__container">
        <div class="main-slider__slides">
          <slider
            ref="slide"
            @change="this.changeSlide"
            >
            <div
              :class="{
                ['main-slider__slide']: true,
                ['main-slider__slide_selected']: index === this.currentSlide + 1
              }"
              v-for="index in 3"
              :key="index">
              <div class="main-slider__slide-info">
                <div class="main-slider__slide-title">
                  Transatlantic Delivery Service
                </div>
                <div class="main-slider__slide-text">
                  You can opt for dedicated platforms from  the advantages related to shared surfaces,  resources and equipment.
                </div>
              </div>
              <div class="main-slider__slide-image">
                <img :src="require('@/assets/image/main-slide-' + index + '.jpg')">
              </div>
            </div>
          </slider>
        </div>
        <div class="reviews__nav">
          <div class="reviews__nav-dots">
            <div
              v-for="index in 3"
              @click="this.moveToSlide(index)"
              :key="index"
              :class="{
                ['reviews__nav-dots-item']: true,
                ['reviews__nav-dots-item_selected']: index === this.currentSlide + 1
              }"
            >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Slider from '@/views/block/Slider.vue'

export default {
  components: {
    Slider
  },
  data () {
    return {
      sliderClassTrack: 'slider-main',
      currentSlide: 0
    }
  },
  methods: {
    changeSlide (index) {
      this.currentSlide = index
    },
    moveToSlide (index) {
      this.$refs.slide.moveTo(index - 1)
    }
  }
}
</script>

<style lang='scss'>

</style>

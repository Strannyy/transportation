<template>
  <div class="reviews">
    <div class="reviews__wrapper">
      <div class="reviews__container">
        <div class="reviews__slides">
          <slider
            ref="slide"
            :sliderClass="this.sliderClassTrack"
            :leftOffset="-1"
            :rightOffset="2"
            @change="this.changeSlide"
          >
            <div class="reviews__col" v-for="index in 5" :key="index">
              <CardReviews :cardReviewsClass="this.getCardReviewsClass(index)"/>
            </div>
          </slider>
        </div>
        <div class="reviews__nav">
          <div class="reviews__nav-dots">
            <div
              v-for="index in 5"
              @click="this.moveToSlide(index)"
              :key="index"
              :class="{
                ['reviews__nav-dots-item']: true,
                ['reviews__nav-dots-item_selected']: index === this.currentSlide + 2
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
import CardReviews from '@/views/element/CardReviews.vue'
import Slider from '@/views/block/Slider.vue'

export default {
  components: {
    CardReviews,
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
      this.$refs.slide.moveTo(index - 2)
    },
    getCardReviewsClass (index) {
      if (this.currentSlide === index - 2) {
        return 'card-reviews'
      } else {
        return 'card-reviews_disable'
      }
    }
  }
}
</script>

<style lang='scss'>

</style>

<template>
  <div class="slider">
    <div class="slider__track-wrapper">
      <div
        :class="this.sliderClassObject()"
        :style="this.trackStyle()"
        ref="sliderItems"
      >
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
import Hammer from 'hammerjs'

export default {
  name: 'Slider',
  props: {
    sliderClass: {
      type: String,
      default: 'slider_default'
    },
    leftOffset: {
      type: Number,
      default: 0
    },
    rightOffset: {
      type: Number,
      default: 1
    }
  },
  data () {
    return {
      sliderTrack: 'slider__track',
      currentSliderIndex: 0,
      trackOffset: 0,
      isMove: false
    }
  },
  mounted () {
    window.addEventListener('mousemove', this.mousemove)
    window.addEventListener('resize', this.moveToNearest)
    this.initTouth()
  },
  unmounted () {
    window.removeEventListener('mousemove', this.mousemove)
    window.removeEventListener('resize', this.moveToNearest)
  },
  methods: {
    moveTo (index) {
      if (index < this.leftOffset || index > this.count() - this.rightOffset) {
        return
      }

      this.trackOffset = this.calcWidthElement() * -index
      this.currentSliderIndex = index
      this.$emit('change', index)
    },
    prev () {
      this.moveTo(this.currentSliderIndex - 1)
    },
    next () {
      this.moveTo(this.currentSliderIndex + 1)
    },
    calcWidthElement () {
      return this.$refs.sliderItems.children[0].clientWidth
    },
    trackStyle () {
      return {
        transform: `translateX(${this.trackOffset}px)`
      }
    },
    sliderClassObject () {
      return {
        [this.sliderTrack]: true,
        [this.sliderClass]: true
      }
    },
    count () {
      return this.$refs.sliderItems.children.length ?? 0
    },
    async initTouth () {
      const mc = new Hammer.Manager(this.$refs.sliderItems)
      mc.add(new Hammer.Swipe({
        direction: Hammer.DIRECTION_HORIZONTAL,
        threshold: 0
      }))

      mc.on('swipeleft', () => !this.isMove ? this.next() : null)
      mc.on('swiperight', () => !this.isMove ? this.prev() : null)
    },
    calcNearestIndex () {
      return Math.round(Math.abs(this.trackOffset) / this.calcWidthElement())
    },
    moveToNearest () {
      this.moveTo(this.calcNearestIndex())
    },
    mousedown () {
      this.isMove = true
    },
    mouseup () {
      this.isMove = false
      this.moveToNearest()
    },
    mouseleave () {
      this.isMove = false
      this.moveToNearest()
    },
    mousemove (event) {
      if (!this.isMove) {
        return
      }

      const elemWidth = this.calcWidthElement()
      const trackWidth = elemWidth * this.count
      const minOffset = elemWidth / 2
      const maxOffset = elemWidth / 2 - trackWidth
      const targetOffset = this.trackOffset + event.movementX
      if (targetOffset > minOffset) {
        return
      }

      if (targetOffset <= maxOffset) {
        return
      }

      this.trackOffset = targetOffset
    }
  }
}
</script>

<style lang='scss'>

</style>

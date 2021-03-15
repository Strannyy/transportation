<template>
  <div class="page-index">
    <div class="page-index__content">
      <div class="page-index__main-slider">
        <MainSlider/>
      </div>
      <div class="page-index__services">
        <Services/>
      </div>
      <div class="page-index__calculate">
        <Calculate/>
      </div>
      <div class="page-index__additional-services">
        <AdditionalServices/>
      </div>
      <div class="page-index__working">
        <Working/>
      </div>
      <div class="page-index__form-callback">
        <FormCallback/>
      </div>
      <div class="page-index__reviews">
        <Reviews/>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import HelloWorld from '@/components/HelloWorld.vue'
import MainSlider from '@/views/block/MainSlider.vue'
import Services from '@/views/block/Services.vue'
import Calculate from '@/views/block/Calculate.vue'
import AdditionalServices from '@/views/block/AdditionalServices.vue'
import Working from '@/views/block/Working.vue'
import FormCallback from '@/views/block/FormCallback.vue'
import Reviews from '@/views/block/Reviews.vue'

@Options({
  components: {
    HelloWorld,
    MainSlider,
    Services,
    Calculate,
    AdditionalServices,
    Working,
    FormCallback,
    Reviews
  }
})
export default class MainPage extends Vue {}
</script>

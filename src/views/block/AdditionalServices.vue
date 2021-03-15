<template>
  <div class="additional-services">
    <div class="additional-services__wrapper">
      <div class="additional-services__container">
        <div class="additional-services__row">
          <div class="additional-services__about-col">
            <div class="additional-services__about-content">
              <div class="additional-services__about-title">About PearlLogistics</div>
              <div class="additional-services__about-text">
                Transcargo makes business flow. As one of the world’s leading non-asset-based supply chain management companies, we design and implement industry-leading solutions in both freight management. Over 42,000 dedicated employees, working in 17 regional clusters around the globe, deliver operational excellence — to provide viable answers to the most challenging supply chain questions.
              </div>
            </div>
          </div>
          <div class="additional-services__count-about-col">
            <div class="additional-services__count-about-content">
              <div class="additional-services__count-about-cards-row">
                <div class="additional-services__count-about-cards-col">
                  <CardCountAbout/>
                </div>
                <div class="additional-services__count-about-cards-col">
                  <CardCountAbout/>
                </div>
                <div class="additional-services__count-about-cards-col">
                  <CardCountAbout/>
                </div>
                <div class="additional-services__count-about-cards-col">
                  <CardCountAbout/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
import { Vue, Options } from 'vue-class-component'
import CardCountAbout from '@/views/element/CardCountAbout.vue'

@Options({
  components: {
    CardCountAbout
  }
})

export default class AdditionalServices extends Vue {
}
</script>

<style lang='scss'>

</style>

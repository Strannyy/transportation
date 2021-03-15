<template>
  <div class="card-service">
    <div class="card-service__wrapper">
      <div class="card-service__icon"></div>
      <div class="card-service__content">
        <div class="card-service__title">Road Freight</div>
        <div class="card-service__text">To best support your ever-changing logistics needs, we are continuously evolving our transportation services.</div>
        <router-link to="/" class="card-service__more-link">Read more</router-link>
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
import { Vue } from 'vue-class-component'

export default class CardService extends Vue {
}
</script>

<style lang='scss'>

</style>

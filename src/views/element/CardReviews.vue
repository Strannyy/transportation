<template>
  <div :class="this.cardReviewsClass">
    <div class="card-reviews__wrapper">
      <div class="card-reviews__client-avatar">
        <img src="@/assets/image/avatar-example.jpg" alt="avatar">
      </div>
      <div class="card-reviews__client-info">
        <div class="card-reviews__client-name">Samuel C. Hartnett</div>
        <div class="card-reviews__client-company">Founder & CTO MoveSmart Corp.</div>
      </div>
      <div class="card-reviews__client-review-text">We challenged to complete the project in just over five months. This
        was an incredibly fast-track schedule, given that retrofits of this scale, as we were told by our own advisors.
      </div>
    </div>
  </div>
</template>

<script lang='ts'>

export default {
  props: {
    cardReviewsClass: {
      type: String,
      default: 'card-reviews'
    }
  }
}
</script>

<style lang='scss'>

</style>

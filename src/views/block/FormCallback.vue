<template>
  <div class="form-callback">
    <div class="form-callback__wrapper">
      <div class="form-callback__container">
        <div class="form-callback__row">
          <div class="form-callback__title">
            Contact Us
          </div>
          <div class="form-callback__form">
            <form class="form-callback__contact-us">
              <div>
                <input type="text" class="form-callback__name" required="">
                <label>Name</label>
                <span></span>
              </div>
              <div>
                <input type="tel" class="form-callback__phone" required="">
                <label>Phone</label>
                <span></span>
              </div>
              <div>
                <input type="email" class="form-callback__email" required="">
                <label>Email</label>
                <span></span>
              </div>
              <div>
                <textarea class="form-callback__message" required=""></textarea>
                <label>Message</label>
                <span></span>
              </div>
              <input type="submit" value="Submit" class="form-callback__button">
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
import { Vue } from 'vue-class-component'

export default class FormCallback extends Vue {
}
</script>

<style lang='scss'>

</style>

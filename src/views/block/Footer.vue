<template>
  <div class="app__footer">
    <footer class="footer">
      <div class="footer__container">
        <div class="footer__row">
          <div class="footer__logo-col">
            <img src="../../assets/image/logo.png" alt="logo">
            <div class="header__name-company">
              Барс
            </div>
          </div>
          <div class="footer__info-col"></div>
          <div class="footer__help-col"></div>
          <div class="footer__contact-col"></div>
          <div class="footer__about-col"></div>
          <div class="footer__social-col"></div>
          <div class="footer__copyright-col">
            <div class="footer-copyright">
              <div class="footer-copyright__copyright">
                © {{new Date().getFullYear()}} «Абарс»
              </div>
              <a href="https://www.instagram.com/maksim_bik.20.12/" target="_blank" class="footer-copyright__dev-link">
                Made by MEBiketov
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script lang='ts'>
import { Vue } from 'vue-class-component'

export default class Footer extends Vue {
}
</script>

<style lang='scss'>

</style>

<template>
  <div class="app__footer">
    <footer class="footer">
      <div class="footer__container">
        <div class="footer__row">
          <div class="footer__logo-col">
            <img src="@/assets/image/logo.png" alt="logo">
            <div class="header__name-company">
              Барс
            </div>
          </div>
          <div class="footer__help-col">
            <div class="footer__help-title">Useful links</div>
            <div class="footer__help-list-link">
              <router-link to="/" class="footer__help-link">Home</router-link>
              <router-link to="/about/" class="footer__help-link">About us</router-link>
              <router-link to="/services/" class="footer__help-link">Services</router-link>
              <router-link to="/contacts/" class="footer__help-link">Contacts</router-link>
            </div>
          </div>
          <div class="footer__contact-col">
            <div class="footer__contact-title">Get in touch</div>
            <div class="footer__contact-list">
              <router-link to="/" class="footer__contact-address">
                <div class="footer__contact-icon">
                  <LocSvg />
                </div>
                Krasnoyarsk, RU</router-link>
              <router-link to="/" class="footer__contact-tel">
                <div class="footer__contact-icon">
                  <PhoneSvg />
                </div>
                Tel: 8 (999) 999 99 99</router-link>
              <router-link to="/" class="footer__contact-email">
                <div class="footer__contact-icon">
                  <MailSvg />
                </div>
                EMail: email@email.com</router-link>
            </div>
          </div>
          <div class="footer__social-col">
            <div class="footer__social-title">Social media</div>
            <div class="footer__social-list">
              <a href="/" class="footer__social-vk">
                <div class="footer__social-icon">
                  <VkSvg />
                </div>
              </a>
              <a href="/" class="footer__social-instagram">
                <div class="footer__social-icon">
                  <InstSvg />
                </div>
              </a>
            </div>
          </div>
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

<script>
import VkSvg from '@/assets/image/vk.svg'
import InstSvg from '@/assets/image/instagram.svg'
import LocSvg from '@/assets/image/location.svg'
import PhoneSvg from '@/assets/image/phone.svg'
import MailSvg from '@/assets/image/email.svg'

export default {
  components: {
    VkSvg,
    InstSvg,
    LocSvg,
    PhoneSvg,
    MailSvg
  }
}
</script>

<style lang='scss'>

</style>

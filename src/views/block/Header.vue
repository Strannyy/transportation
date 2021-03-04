<template>
  <div class="app__header">
    <header class="header">
      <div class="header__wrapper">
        <div class="header__container">
          <div class="header__row">
            <div class="header__logo-col">
              <a href="/" class="header__logo-link">
                <img src="@/assets/image/logo.png" alt="logo">
              </a>
              <div class="header__name-company">
                Барс
              </div>
            </div>
            <div class="header__menu-col">
              <div class="header__menu-list">
                <div class="header__menu-item">
                  <a href="" class="header__menu-link">
                    Пункт Меню 1
                  </a>
                </div>
                <div class="header__menu-item">
                  <a href="" class="header__menu-link">
                    Пункт Меню 2
                  </a>
                  <div class="header__sub-menu">
                    <div class="header__sub-menu_item">
                      <a href="" class="header__sub-menu-link">
                        Подпункт 1 Меню 2
                      </a>
                    </div>
                    <div class="header__sub-menu_item">
                      <a href="" class="header__sub-menu-link">
                        Подпункт 2 Меню 2
                      </a>
                    </div>
                    <div class="header__sub-menu_item">
                      <a href="" class="header__sub-menu-link">
                        Подпункт 3 Меню 2
                      </a>
                    </div>
                  </div>
                </div>
                <div class="header__menu-item">
                  <a href="" class="header__menu-link">
                    Пункт Меню 3
                  </a>
                  <div class="header__sub-menu">
                    <div class="header__sub-menu_item">
                      <a href="" class="header__sub-menu-link">
                        Подпункт 1 Меню 3
                      </a>
                    </div>
                    <div class="header__sub-menu_item">
                      <a href="" class="header__sub-menu-link">
                        Подпункт 2 Меню 3
                      </a>
                    </div>
                    <div class="header__sub-menu_item">
                      <a href="" class="header__sub-menu-link">
                        Подпункт 3 Меню 3
                      </a>
                    </div>
                  </div>
                </div>
                <div class="header__menu-item">
                  <a href="" class="header__menu-link">
                    Пункт Меню 4
                  </a>
                  <div class="header__sub-menu">
                    <div class="header__sub-menu_item">
                      <a href="" class="header__sub-menu-link">
                        Подпункт 1 Меню 4
                      </a>
                    </div>
                    <div class="header__sub-menu_item">
                      <a href="" class="header__sub-menu-link">
                        Подпункт 2 Меню 4
                      </a>
                    </div>
                    <div class="header__sub-menu_item">
                      <a href="" class="header__sub-menu-link">
                        Подпункт 3 Меню 4
                      </a>
                    </div>
                  </div>
                </div>
                <div class="header__menu-item">
                  <a href="" class="header__menu-link">
                    Пункт Меню 5
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  </div>
</template>

<script lang='ts'>
import { Vue } from 'vue-class-component'

export default class Header extends Vue {
}
</script>

<style lang='scss'>

</style>

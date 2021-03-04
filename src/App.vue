<template>
  <div class="app__page">
    <Header />
    <div class="app__content">
      <router-view />
    </div>
    <Footer />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import Header from '@/views/block/Header.vue'
import Footer from '@/views/block/Footer.vue'

@Options({
  components: {
    Header,
    Footer
  }
})

export default class App extends Vue {

}
</script>

<style lang="scss">

</style>

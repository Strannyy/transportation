<template>
  <div class="working">
    <div class="working__wrapper">
      <div class="working__container">
        <div class="working__row">
          <div class="working__col">
            <WorkingClient />
          </div>
          <div class="working__col">
            <WorkingClient />
          </div>
          <div class="working__col">
            <WorkingClient />
          </div>
          <div class="working__col">
            <WorkingClient />
          </div>
          <div class="working__col">
            <WorkingClient />
          </div>
          <div class="working__col">
            <WorkingClient />
          </div>
          <div class="working__col">
            <WorkingClient />
          </div>
          <div class="working__col">
            <WorkingClient />
          </div>
          <div class="working__col">
            <WorkingClient />
          </div>
          <div class="working__col">
            <WorkingClient />
          </div>
          <div class="working__col">
            <WorkingClient />
          </div>
          <div class="working__col">
            <WorkingClient />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
import { Options, Vue } from 'vue-class-component'
import WorkingClient from '@/views/element/WorkingClient.vue'

@Options({
  components: {
    WorkingClient
  }
})

export default class Working extends Vue {
}
</script>

<style lang='scss'>

</style>

<template>
  <div>
    <screen-container :showContent="showContent">
      <span class="btn btn-primary pull-right btn-setting" slot="btn-setting">设置大屏</span>
    </screen-container>
  </div>
</template>

<script>
import ScreenContainer from '../ScreenContainer/ScreenContainer'

export default {
  name: 'mobile-check-room',
  data () {
    return {
      showContent: true
    }
  },
  components: {
    ScreenContainer
  }
}
</script>

<style scoped>

</style>

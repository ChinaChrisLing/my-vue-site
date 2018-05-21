<template>
  <div>
    <screen-container :showContent="showContent" :dmpData="dmpData" :tabData="tabData">
      <span class="btn btn-primary pull-right btn-setting" slot="btn-setting">设置大屏</span>
    </screen-container>
  </div>
</template>

<script>
import ScreenContainer from '../../components/ScreenContainer/ScreenContainer'
import {SERVER_DMP_DATA, GET_DMP_DATA} from '../../store/MobileCheckRoom/index'
import {createNamespacedHelpers} from 'vuex'

const {mapActions, mapGetters} = createNamespacedHelpers('mcr')
export default {
  name: 'mobile-check-room',
  data () {
    return {
      showContent: true,
      tabData: [
        {
          path: '/sg',
          tag: 'a',
          name: '单屏数据',
          code: 'singleScreen'
        },
        {
          path: '/mg',
          tag: 'a',
          name: '多屏数据',
          code: 'multiScreen'
        }
      ]
    }
  },
  computed: {
    ...mapGetters({
      dmpData: GET_DMP_DATA
    })
  },
  components: {
    ScreenContainer
  },
  mounted () {
    this[SERVER_DMP_DATA]()
  },
  methods: {
    ...mapActions([
      SERVER_DMP_DATA
    ])
  }
}
</script>

<style scoped>

</style>

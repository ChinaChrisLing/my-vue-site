<template>
  <div>
    <slide-menu :menus="menus"></slide-menu>
  </div>
</template>

<script>
import {SERVER_MENU_DATA} from '../../store/index'
import {mapActions} from 'vuex'
import SlideMenu from '../../components/SlideMenu/SlideMenu'

export default {
  name: 'layout-menu',
  computed: {
    menus: function () {
      let menuData = this.$store.state.menuInfo
      let menu1 = {}
      let menu2 = []
      menuData.map(item => {
        if (item.level === 1) {
          menu1 = item
        } else {
          menu2.push(item)
        }
      })
      return {
        menu1,
        menu2
      }
    }
  },
  created () {
    this[SERVER_MENU_DATA]()
  },
  methods: {
    ...mapActions({
      SERVER_MENU_DATA
    })
  },
  components: {
    SlideMenu
  }
}
</script>

<style scoped lang="less">

</style>

<template>
  <div>
    <header-nav :user="user" :navs="navs" vi-if="user"></header-nav>
  </div>
</template>

<script>
import HeaderNav from '../../components/HeaderNav/HeaderNav'
import {mapGetters, mapActions} from 'vuex'
import {GET_USER_DATA, SERVER_USER_DATA} from '../../store/index'
import Service from '../../axios/service'

export default {
  name: 'layout-header',
  computed: {
    ...mapGetters({
      user: GET_USER_DATA
    }),
    navs: function () {
      let navsData = this.$store.state.navInfo
      let nav1 = []
      let nav2 = []
      if (navsData && navsData.length > 7) {
        nav1 = navsData.slice(0, 7)
        nav2 = navsData.slice(7)
      } else {
        nav1 = navsData
      }
      return {
        nav1,
        nav2
      }
    }
  },
  created () {
    this.checkError()
  },
  methods: {
    ...mapActions([SERVER_USER_DATA]),
    async checkError () {
      await this[SERVER_USER_DATA]()
      if (this.$store.state.error) {
        window.location.href = Service.getLogoutUrl
      }
    }
  },
  components: {HeaderNav}
}
</script>

<style scoped lang="less">

</style>

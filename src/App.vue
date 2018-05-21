<template>
  <div id="app">
    <layout-header></layout-header>
    <layout-content>
      <layout-menu slot="layout-menu"></layout-menu>
    </layout-content>
    <layout-footer></layout-footer>
  </div>
</template>

<script>
import LayoutHeader from './containers/LayoutHeader/LayoutHeader'
import LayoutMenu from './containers/LayoutMenu/LayoutMenu'
import LayoutContent from './containers/LayoutContent/LayoutContent'
import LayoutFooter from './components/LayoutFooter/LayoutFooter'

export default {
  name: 'App',
  components: {
    LayoutHeader,
    LayoutMenu,
    LayoutContent,
    LayoutFooter
  }
}
</script>

<style lang="less">
  @import "assets/css/reset.less";
  @import "assets/css/common.less";
  @import "assets/css/module.less";
</style>

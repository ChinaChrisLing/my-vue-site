<template>
  <div id="app">
    <layout-header></layout-header>
    <div class="content-container">
      <div class="content-wrap">
        <layout-menu></layout-menu>
        <layout-content></layout-content>
      </div>
    </div>
  </div>
</template>

<script>
import LayoutHeader from './containers/LayoutHeader/LayoutHeader'
import LayoutMenu from './containers/LayoutMenu/LayoutMenu'
import LayoutContent from './containers/LayoutContent/LayoutContent'

export default {
  name: 'App',
  components: {
    LayoutHeader,
    LayoutMenu,
    LayoutContent
  }
}
</script>

<style lang="less">
  @import "assets/css/reset.less";
  @import "assets/css/common.less";

  .content-container {
    width: 100%;
    margin: 104px 0 138px;
    .content-wrap {
      width: 1200px;
      min-height: 800px;
      background-color: #fff;
      border: 1px solid #d9dadc;
      margin: 0 auto;
      position: relative;
      display: table;
    }
  }

</style>

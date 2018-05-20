<template>
  <div class="manage-content">
    <h4 class="content-title">数据大屏</h4>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'layout-content'
}
</script>

<style scoped lang="less">
  .manage-content {
    display: table-cell;
    width: 992px;
    .content-title {
      height: 55px;
      margin: 0;
      line-height: 55px;
      position: relative;
      padding: 0 30px;
      border-bottom: 1px solid #e7e7eb;
      font-size: 16px;
      font-weight: 350;
    }
  }
</style>

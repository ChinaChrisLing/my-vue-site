<template>
  <div class="content-container">
    <div class="content-wrap">
      <slot name="layout-menu"></slot>
      <div class="manage-content">
        <h4 class="content-title">数据大屏</h4>
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'layout-content'
}
</script>

<style scoped lang="less">
  .content-container {
    width: 100%;
    margin: 104px 0 138px;
    .content-wrap {
      width: 1200px;
      min-height: 500px;
      background-color: #fff;
      border: 1px solid #d9dadc;
      margin: 0 auto;
      position: relative;
      display: table;
      .manage-content {
        display: table-cell;
        width: 992px;
        border-left: 1px solid #e7e7eb;;
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
    }
  }

</style>

<template>
  <div>
    <div class="screen-container">
      <a
        v-for="item in dmpData"
        class="screen-item"
        :key=item.id
        :href="item.url">
        <span class="screen-img" :style="[item.cover.length?{background: 'url('+ item.cover +')'}:'']"></span>
        <span class="screen-des">2018-04-23大屏</span>
        <span class="screen-des">{{item.name}}</span>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'single-screen',
  props: {
    dmpData: {
      type: Array,
      default: function () {
        return []
      }
    }
  }
}
</script>

<style scoped lang="less">
  .screen-container {
    text-align: left;
    .screen-item {
      display: inline-block;
      width: 200px;
      height: 266px;
      text-align: center;
      margin: 20px 30px;
      -moz-box-shadow: -2px 10px 10px rgba(0, 0, 0, 0.4);
      -webkit-box-shadow: -2px 10px 10px rgba(0, 0, 0, 0.4);
      -ms-box-shadow: -2px 10px 10px rgba(0, 0, 0, 0.4);
      box-shadow: -2px 10px 10px rgba(0, 0, 0, 0.4);
      -ms-transition: transform 0.2s;
      -webkit-transition: transform 0.2s;
      -moz-transition: transform 0.2s;
      transition: transform 0.2s;
      .screen-img {
        background: url('../../assets/logo.png');
        background-size: cover;
        display: inline-block;
        width: 100%;
        height: 200px;
        background-repeat: no-repeat;
        border-top-left-radius: 6px;
        border-top-right-radius: 6px;
        overflow: hidden;
      }
      .screen-des {
        display: inline-block;
        width: 100%;
        border-top: 1px solid #d9dadc;
        padding: 5px;
        color: #444;
        box-sizing: border-box;
      }
    }
    &:hover {
      cursor: pointer;
      //-webkit-filter: blur(1px);
      //-moz-filter: blur(1px);
      //-ms-filter: blur(1px);
      //filter: blur(1px);
      //-webkit-transform: translate3d(0, -5px, 0);
      //-ms-transform: translate3d(0, -5px, 0);
      //-o-transform: translate3d(0, -5px, 0);
      //transform: translate3d(0, -5px, 0);
    }
  }

</style>

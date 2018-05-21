<template>
  <div class="common-panel">
    <div class="panel-header">
      <slot name="btn-setting"></slot>
    </div>
    <div v-if="showContent">
      <div class="tab-nav">
        <ul class="clearfix">
          <li v-for="(item,index) in tabData"
              :key="item.code"
              :class="[selectTab === index ? 'tab-on':'','tab-item']"
              @click="clickHandle('selectTab',index)">
            <router-link :to="item.path" :tag="item.tag">
              {{item.name}}
            </router-link>
          </li>
        </ul>
      </div>
      <keep-alive>
        <router-view :dmpData="dmpData"></router-view>
      </keep-alive>
    </div>
    <div>
      <slot name="panel-content"></slot>
    </div>
  </div>
</template>

<script>

export default {
  name: 'screen-container',
  props: {
    showContent: {
      type: Boolean,
      default: false
    },
    dmpData: {
      type: Array,
      default: function () {
        return []
      }
    },
    tabData: {
      type: Array,
      default: function () {
        return []
      }
    }
  },
  data () {
    return {
      selectTab: 0
    }
  },
  methods: {
    clickHandle (e, v) {
      this[e] = v
    }
  }
}
</script>

<style scoped lang="less">
  .common-panel {
    margin: 1.5rem;
    min-height: 25rem;
    border: 0.05rem solid #e7e6eb;
    z-index: 1;
    .panel-header {
      background-color: #f4f5fa;
      border-bottom: 0.05rem solid #d9dadc;
      height: 2.6rem;
      .btn-setting {
        height: 1.2rem;
        text-align: center;
        line-height: 1.2rem;
        width: 150px;
        margin-right: 20px;
        margin-top: 9px;
      }

    }
    .tab-nav {
      margin-bottom: 10px;
      border-bottom: 1px solid #eee;
      .tab-item {
        float: left;
        margin-right: 20px;
        margin-bottom: -1px;
        list-style: none;
        cursor: pointer;
        border-bottom: 3px solid transparent;
        a {
          display: block;
          padding: 14px 30px;
          font-size: 14px;
          color: #2a2a2a;
          text-decoration: none;
        }
        &:hover {
          border-bottom: 3px solid #a0a3ab;
        }
      }
      .tab-on {
        cursor: default;
        border-bottom: 3px solid #44b549 !important;
      }
    }
  }
</style>

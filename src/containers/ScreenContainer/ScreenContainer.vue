<template>
  <div>
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
</template>

<script>
import {createNamespacedHelpers} from 'vuex'
import {SERVER_DMP_DATA, GET_DMP_DATA} from '../../store/MobileCheckRoom/index'

const {mapActions, mapGetters} = createNamespacedHelpers('mcr')
export default {
  name: 'screen-container',
  data () {
    return {
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
      ],
      selectTab: 0
    }
  },
  computed: {
    ...mapGetters({
      dmpData: GET_DMP_DATA
    })
  },
  mounted () {
    this[SERVER_DMP_DATA]()
  },
  methods: {
    ...mapActions([
      SERVER_DMP_DATA
    ]),
    clickHandle (e, v) {
      this[e] = v
    }
  }
}
</script>

<style scoped lang="less">
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
</style>

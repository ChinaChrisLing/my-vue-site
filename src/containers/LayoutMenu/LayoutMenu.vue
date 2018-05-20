<template>
  <div class="manage-menu">
    <dl>
      <dt class="dt-title" :key="menus.menu1.menu_code">
        <span :class="'module-icon '+menus.menu1.menu_icon"></span>
        <span class="title"> {{menus.menu1.menu_name}}</span>
      </dt>
      <dd v-for="(item,index) in menus.menu2" :key="item.menu_code"
          @click="clickHandle('selectMenu',index)"
          :class="[selectMenu === index ? 'on' : '','dd-content']">
        <router-link tag="a"
                     class="router-item"
                     :to="{name:item.menu_code}"
                     >{{item.menu_name}}
        </router-link>
        <!--<a :href="item.url" @click="selectMenu = index">{{item.menu_name}}</a>-->
      </dd>
    </dl>
  </div>
</template>

<script>
import {SERVER_MENU_DATA} from '../../store/index'

export default {
  name: 'layout-menu',
  data () {
    return {
      selectMenu: 0
    }
  },
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
    this.$store.dispatch(SERVER_MENU_DATA)
  },
  methods: {
    clickHandle (e, v) {
      this[e] = v
    }
  }
}
</script>

<style scoped lang="less">
  .manage-menu {
    width: 208px;
    display: table-cell;
    max-width: 208px;
    padding: 10px 0 150px;
    font-size: 14px;
    border-right: 1px solid #e7e7eb;
    .dt-title {
      line-height: 36px;
      padding: 0 30px 0;
      font-weight: 400;
      color: #888;
      .title {
        font-size: 16px;
        vertical-align: middle;
      }
    }
    .dd-content {
      line-height: 36px;
      .router-item {
        display: block;
        padding: 0 0 0 60px;
        overflow: hidden;
        color: #111;
        text-decoration: none;
        text-overflow: ellipsis;
        word-wrap: normal;
        white-space: nowrap;
        text-decoration: none;
        font-weight: 350;
      }
      &:hover {
        text-decoration: none;
        background-color: #f4f5f9;
      }
    }
  }
</style>

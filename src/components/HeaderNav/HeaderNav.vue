<template>
  <div class="manage-header">
    <ul class="header-container clearfix">
      <li class="logo pull-left"></li>
      <li class="hader-nav pull-left">
        <ul class="clearfix">
          <li :class="[item.className,'nav-li',{navClick:'on'}]" v-for="(item,index) in navs.nav1"
              :key="item.app_code" v-if="index<8"
              @mouseover="index===6 && hoverHander('navShow',true)"
              @mouseout="index===6 && hoverHander('navShow',false)"
              @click="hoverHander('navClick',true)">
            <a :href="item.url"> {{item.app_name}}</a>
            <span v-if="index===6" class="header-arrow"></span>
            <ul v-if="index===6 && navs.nav2.length" v-show="navShow" class="header-nav2 clearfix">
              <li v-for="(it,j) in navs.nav2" :key="it.app_code" :class="navOn === j ? 'on' :'' "
                  @mouseover=" hoverHander('navOn',j)">
                <a :href="it.url"> {{it.app_name}}</a>
              </li>
            </ul>
          </li>
        </ul>
      </li>
      <li class="header-user pull-left">
        <ul class="clearfix">
          <li class="user-left">
            <div class="user-top">
              <span class="company company-a" :title="user.tenant_name">{{user.tenant_name}}</span>
              <span class="company company-b" :title="user.org_name">{{user.org_name}}</span>
            </div>
            <div class="user-bottom">
              <a class="user-name"
                 :href="user.passwd_url">{{user.user_name}}</a>
            </div>
          </li>
          <li class="user-right">
            <span>|</span>
            <a :href="user.logout_url">退出</a>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'header-nav',
  props: {
    user: {
      type: Object,
      default: function () {
        return {
          tenant_name: '',
          org_name: '',
          passwd_url: '',
          user_name: '',
          logout_url: ''
        }
      }
    },
    navs: {
      type: Object,
      default: function () {
        return {nav1: [], nav2: []}
      }
    }
  },
  data () {
    return {
      navShow: false,
      navOn: -1,
      navClick: false
    }
  },
  methods: {
    hoverHander (e, v) {
      this[e] = v
    }
  }
}
</script>

<style scoped lang="less">
  @import "../../assets/css/index.less";

  .manage-header {
    position: fixed;
    width: 100%;
    z-index: 99999;
    min-width: 1200px;
    background: #fff;
    border-top: 4px solid @primaryBgColor;
    border-bottom: 1px solid #d9dadc;
    top: 0;
    .header-container {
      width: 1200px;
      margin: 0 auto;
      .logo {
        display: block;
        float: left;
        width: 170px;
        height: 63px;
        line-height: 63px;
        background: url(https://static.myfuwu.com.cn/static/bms/common/images/logo.png@50h.png) no-repeat left center;
      }
      .hader-nav {
        width: 810px;
        .on {
          background: @primaryBgColor;
          color: #fff !important;
        }
        .nav-li {
          float: left;
          width: 110px;
          height: 63px;
          line-height: 63px;
          text-align: center;
          cursor: pointer;
          color: #2a2a2a;
          a {
            font-size: 18px;
            text-decoration: none;
            color: inherit;
          }
          .header-arrow {
            background: url("../../assets/img/tree_arrow_open.png");
            background-size: 12px;
            background-repeat: no-repeat;
            display: inline-block;
            width: 12px;
            height: 12px;
          }
          .header-nav2 {
            position: absolute;
            z-index: 9999;
            top: 50px;
            border: 1px solid #d8d9dc;
            background-color: #fff;
            li {
              width: 110px;
              line-height: 40px;
              a {
                font-size: 16px;
              }
            }
          }
        }
      }
      .header-user {
        .user-left {
          width: 150px;
          height: 63px;
          float: left;
          margin-right: 10px;
          .user-top {
            margin-top: 12px;
            .company {
              display: inline-block;
              height: 20px;
              -webkit-box-sizing: content-box;
              -moz-box-sizing: content-box;
              box-sizing: content-box;
              padding: 0 5px;
              overflow: hidden;
              font-size: 12px;
              line-height: 20px;
              color: #fff;
              text-overflow: ellipsis;
              white-space: nowrap;
              vertical-align: top;
              border-radius: 3px;
              -webkit-border-radius: 3px;
            }
            .company-a {
              background-color: #62c0e2;
              max-width: 72px;
            }
            .company-b {
              background-color: #59b757;
              max-width: 58px;
            }
          }
          .user-bottom {
            .user-name {
              color: #333;
              font-size: 14px;
              text-decoration: none;
            }
            &:hover {
              cursor: pointer;
            }
          }
        }
        .user-right {
          width: 50px;
          height: 63px;
          float: left;
          font-size: 14px;
          a {
            color: #333;
            text-decoration: none;
            margin-left: 14px;
            margin-top: 20px;
            display: inline-block;
            &:hover {
              text-decoration: underline;
              color: #337ab7;
            }
          }
        }
      }
    }
  }
</style>

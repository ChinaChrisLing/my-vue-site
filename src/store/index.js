import Vue from 'vue'
import Vuex from 'vuex'
import {getData} from '../axios/axios'
import Service from '../axios/service'
import MbileCheckRoomStore from './MobileCheckRoom/index'

Vue.use(Vuex)

const debug = process.env.NODE_ENV === 'development'

const SET_USER_DATA = 'SET_USER_DATA'
const SET_NAV_DATA = 'SET_NAV_DATA'
const SET_MENU_DATA = 'SET_MENU_DATA'
const SET_ERROR_DATA = 'SET_ERROR_DATA'

export const GET_USER_DATA = 'GET_USER_DATA'
export const GET_NAV_DATA = 'GET_NAV_DATA'
export const GET_MENU_DATA = 'GET_MENU_DATA'
export const GET_ERROR_DATA = 'GET_ERROR_DATA'

export const SERVER_USER_DATA = 'SERVER_USER_DATA'
export const SERVER_MENU_DATA = 'SERVER_MENU_DATA'
export const SERVER_NAV_DATA = 'SERVER_NAV_DATA'

const rootState = {
  userInfo: {},
  navInfo: [],
  menuInfo: [],
  error: false,
  appMenuCode: 'DataService'
}

const rootGetters = {
  [GET_USER_DATA] (state) {
    return state.userInfo
  },
  [GET_NAV_DATA] (state) {
    return state.navInfo
  },
  [GET_MENU_DATA] (state) {
    return state.menuInfo
  }
}

const rootMutations = {
  [SET_USER_DATA] (state, data) {
    state.userInfo = data
  },
  [SET_NAV_DATA] (state, data) {
    state.navInfo = data
  },
  [SET_MENU_DATA] (state, data) {
    state.menuInfo = data[state.appMenuCode]
  },
  [SET_ERROR_DATA] (state, data) {
    state.error = data
  }
}

const rootActions = {
  async [SERVER_USER_DATA] ({commit, dispatch}) {
    let [err, userData] = await getData(Service.getLoginData)
    if (err) {
      commit(SET_ERROR_DATA, true)
    }
    commit(SET_USER_DATA, userData.data)
    await dispatch(SERVER_NAV_DATA)
  },
  async [SERVER_MENU_DATA] ({commit}) {
    let [err, appData] = await getData(Service.getMetnu)
    if (err) {
      commit(SET_ERROR_DATA, true)
    }
    commit(SET_MENU_DATA, appData.data)
  },
  async [SERVER_NAV_DATA] ({commit}) {
    let [err, navData] = await getData(Service.getNavigation)
    if (err) {
      commit(SET_ERROR_DATA, true)
    }
    commit(SET_NAV_DATA, navData.data)
  }
}

export default new Vuex.Store({
  strict: debug,
  state: rootState,
  getters: rootGetters,
  mutations: rootMutations,
  actions: rootActions,
  modules: {
    mcr: MbileCheckRoomStore
  }
})

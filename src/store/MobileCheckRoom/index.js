import {getData} from '../../axios/axios'
import Service from '../../axios/service'

export const SERVER_DMP_DATA = 'SERVER_DMP_DATA'
export const GET_DMP_DATA = 'GET_DMP_DATA'
export const SET_DMP_DATA = 'SET_DMP_DATA'

const state = {
  dmpInfo: []
}

const getters = {
  [GET_DMP_DATA] (state, getters, rootState, rootGetters) {
    return state.dmpInfo
  }
}

const mutations = {
  [SET_DMP_DATA] (state, data) {
    state.dmpInfo = data
  }
}

const actions = {
  async [SERVER_DMP_DATA] ({dispatch, commit, getters, rootGetters}) {
    let [err, data] = await getData(Service.getDmpList)
    if (err) {
      return
    }
    commit(SET_DMP_DATA, data.data)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  getters,
  actions
}

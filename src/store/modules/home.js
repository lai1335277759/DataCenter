/**
 * Created by Administrator on 2019/6/13.
 */
import {RECEIVE_HOMEDATE} from '../mutation-types'
import {reqGetHomeDate} from '../../api'

const state = {
  homeDate: []
}

const actions = {
  async getHomeDate({commit}) {
    const result = await reqGetHomeDate()
    if (result.code === 0) {
      commit(RECEIVE_HOMEDATE, result.data)
    }
  },
}

const mutations = {
  [RECEIVE_HOMEDATE](state, homeDate){
    state.homeDate = homeDate
  }
}

const getters = {}

export default {
  state,
  mutations,
  actions,
  getters
}
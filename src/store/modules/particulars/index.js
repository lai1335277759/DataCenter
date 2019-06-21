/**
 * Created by Administrator on 2019/6/20.
 */
import {
  RECEIVE_PATIENTINFODETAIL,
  RECEIVE_TESTINFODETAIL
} from '../../mutation-types'
import {
  reqGetPatientInfoDetail,
  reqGetTestInfoDetail
} from '../../../api'

const state = {
  PatientInfoDetails: {},
  TestInfoDetail: {}
}

const actions = {
  // 获取检验详细信息
  async getTestInfoDetail ({commit}, cb) {
    let testNo = "190509U340"
    const result = await reqGetTestInfoDetail(testNo)
    if (result.code === 200) {
      commit(RECEIVE_TESTINFODETAIL, result.data)
      cb && cb()
    }
  },

  // 获取患者详情
  async getPatientInfoDetail ({commit}) {
    const patientId = state.TestInfoDetail.patientId
    const result = await reqGetPatientInfoDetail(patientId)
    if (result.code === 200) {
      commit(RECEIVE_PATIENTINFODETAIL, result.data)
    }
  }
}

const mutations = {
  [RECEIVE_TESTINFODETAIL] (state, TestInfoDetail) {
    state.TestInfoDetail = TestInfoDetail
  },
  [RECEIVE_PATIENTINFODETAIL] (state, PatientInfoDetails) {
    state.PatientInfoDetails = PatientInfoDetails
  }
}

const getters = {}

export default {
  state,
  mutations,
  actions,
  getters
}
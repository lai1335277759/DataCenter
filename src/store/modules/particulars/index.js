/**
 * Created by Administrator on 2019/6/20.
 */
import {RECEIVE_PATIENTINFODETAIL} from '../../mutation-types'
import {reqGetPatientInfoDetail} from '../../../api'

const state = {
  PatientInfoDetails: {}
}

const actions = {
  async getPatientInfoDetail ({commit}) {
    const patientId = 'ZY010000531294'
    const result = await reqGetPatientInfoDetail(patientId)
    console.log(result)
    if (result.code === 200) {
      console.log(result.data)
      commit(RECEIVE_PATIENTINFODETAIL,result.data)
    }
  }
}

const mutations = {
  [RECEIVE_PATIENTINFODETAIL] (state, PatientInfoDetails) {
    state.PatientInfoDetails = PatientInfoDetails
  }
}

const getters = {

}

export default {
  state,
  mutations,
  actions,
  getters
}
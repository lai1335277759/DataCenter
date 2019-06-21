/**
 * Created by Administrator on 2019/6/13.
 */
import ajax from "./ajax"

const prefix = process.env.NODE_ENV === "development" ? "/api/hospital-data-center" : "http://192.168.1.221:8888"

export const reqGetHomeDate = () => ajax("/homedate")


// 请求患者详细信息
export const reqGetPatientInfoDetail = (patientId) => ajax(prefix + "/patient/getPatientInfoDetail",{patientId})

// 请求检验详细信息
export const reqGetTestInfoDetail = (testNo) => ajax(prefix + "/test/getTestInfoDetail",{testNo})

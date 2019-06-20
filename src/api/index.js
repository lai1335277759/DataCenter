/**
 * Created by Administrator on 2019/6/13.
 */
import ajax from "./ajax"

const prefix = process.env.NODE_ENV === "development" ? "/api" : "http://localhost:8080"

export const reqGetHomeDate = () => ajax("/homedate")

//请求获取患者详细信息
export const reqGetPatientInfoDetail = (patientId) => ajax(prefix + "/hospital-data-center/patient/getPatientInfoDetail",{patientId},"POST")

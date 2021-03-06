/**
 * Created by Administrator on 2019/6/13.
 */
import axios from "axios"

export default function ajax(url, data, method = 'POST') {
  method = method.toUpperCase() //转换成大写
  let promise = axios({
    method: method,
    url: url,
    data: data,
  })
  return promise
    .then((res) => {
      return res.data
    })
    .catch((err) => {
      console.log('***** 请求失败 *****')
      console.log(err)
      console.log('***** 请求失败 *****')
    })
}
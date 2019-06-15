/**
 * Created by Administrator on 2019/6/13.
 */
import axios from 'axios'

export default function ajax(url, data, method = 'GET') {
  method = method.toUpperCase() //转换成大写
  let promise
  if (method === 'GET') {
    promise = axios.get(url, {params: data})
  } else if (method === 'POST') {
    promise = axios.post(url, data)
  }
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
import axios from 'axios'

const $axios = axios.create({
  // baseURL: process.env.BASEURL,
  baseURL: process.env.BASEURL,
  Timeout: 30000,
  headers: {
    'Content-Type': 'application/json; charset=utf-8'
  },
  withCredentials: false
})

// 定义一个响应状态，响应成功以及各种失败的情况
// const requestStatus = {
//   ok: 0,
//   fail: 1,
//   cancel: -1
// }

$axios.interceptors.request.use(function (config) {
  // Do something before request is sent
  return config
}, function (error) {
  // Do something with request error
  return Promise.reject(error)
})

// Add a response interceptor
$axios.interceptors.response.use(function (response) {
  // Do something with response data
  console.log(response)
  return response
}, function (error) {
  // Do something with response error
  return Promise.reject(error)
})

export default $axios

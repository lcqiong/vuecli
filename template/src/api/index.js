import axios from 'axios'

const $axios = axios.create({
  // baseURL: process.env.BASEURL,
  baseURL: process.env.BASE_URL,
  Timeout: 30000,
  headers: {
    'Content-Type': 'application/json; charset=utf-8'
  },
  withCredentials: false
})

// 定义一个响应状态，响应成功以及各种响应失败的情况
const requestStatus = {
  ok: 0, // 响应成功的状态
  fail: 1, // 响应fail的情况
  cancel: -1 // 可能是验证码失效或者其他因素造成的
}

$axios.interceptors.request.use(function (config) {
  // 若请求头需要添加参数，可直接在此处设置config(直接添加（以对象的形式）)
  return config
}, function (error) {
  // Do something with request error
  return Promise.reject(error)
})

// Add a response interceptors
$axios.interceptors.response.use(function (response) {
  // 请求成功
  console.log(response)
  return response
}, function (error) {
  // 请求出错的时候做些什么
  console.log('请求出错', error)
  return Promise.reject(error)
})

export default $axios

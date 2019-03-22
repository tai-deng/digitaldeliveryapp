//请求相关类

import axios from 'axios'
import qs from 'querystring'
// 生产
let api=''
if (process.env.NODE_ENV == 'development') {
  console.log('开发模式')
   api='/api/api'
} else {
  api = '/api'
}
// get请求封装
export default{
  fetchGet (url, params = {}) {
    return new Promise((resolve, reject) => {
      axios.defaults.headers = {
        'Authorization': 'Bearer ' + localStorage.getItem('token'),
        'Content-Type': 'application/json;charset=UTF-8'
      }
      // get 参数不拼接会报404
      axios.get(`${api}/${url}?${qs.stringify(params)}`).then(res => {
        // console.log(res)
        resolve(res.data)
      }).catch(error => {
        reject(error.response.status)
      })
    })
  },
  fetchPost (url, params = {}) {
    return new Promise((resolve, reject) => {
      axios.defaults.headers = {
        'Authorization': 'Bearer ' + localStorage.getItem('token'),
        'Content-Type': 'application/json'
      }
      axios.post(`${api}/${url}`,JSON.stringify(params)).then(res => {
        resolve(res.data)
      }).catch(error => {
        reject(error.response.status)
      })
    })
  },
  // post请求，get传参方式
  fetchPostGet (url, params={}) {
    return new Promise((resolve, reject) => {
      axios.defaults.headers = {
        'Authorization': 'Bearer ' + localStorage.getItem('token'),
        'Content-Type': 'application/json'
      }
      axios.post(`${api}/${url}?${qs.stringify(params)}`).then(res => {
        resolve(res.data)
      }).catch(error => {
        reject(error.response.status)
      })
    })
  },
  // formData对象方式上传文件 提交文件不能写JSON.stringify(params)，应该直接提交params对象
   formDataUpLoad (url, params = {}) {
    return new Promise((resolve, reject) => {
      axios.defaults.headers = {
        'Authorization': 'Bearer ' + localStorage.getItem('token'),
        'Content-Type': 'multipart/form-data'
      }
      axios.post(`${api}/${url}`,params).then(res => {
        resolve(res.data)
      }).catch(error => {
        reject(error.response.status)
      })
    })
  },

}


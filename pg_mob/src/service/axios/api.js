import axios from 'axios'
import store from '@/store' // 引入store
import Vue from 'vue'

import urlConfig from '@/projectConfig/urlConfig'

const ajx = axios.create({
  //正式
  baseURL: urlConfig.baseUrl,
  //测试
  // baseURL: 'http://v2.ocheng.me/api/', 
  // 设定请求环境(测试or生产)，由DefinePlugin 插件定义
  timeout: 36000, // 超时时间
  headers: {
    Accept: 'application/json',
    'X-Channel': 3,
    'X-Channel-Type': 1,
  },
})

ajx.interceptors.request.use(config => config)

ajx.interceptors.response.use(
  (res) => {
    // TODO: 需要修改的返回数据处理
    // console.log('触发response拦截');
    // res.data.
    const {
      code,
      message,
    } = res.data
    // console.log('error1',res)
    // console.log('error2',res.data)
    if (code === 0) {
      return res.data
    }
    res.data = res.data || {}
    res.data.message = res.data.message || '接口返回报错'
    return Promise.reject(res.data)
  },
  (error) => {
    // 这里 不reject 导致 promise变成 resolve 状态
    // console.log('error2',error)
    
    if (error.response) {
      // console.log('error3',error.response)
      return Promise.reject(error.response.data); // eslint-disable-line
    }
    return null
  },
)
// eslint-disable-next-line func-names
const api = function (url, type, params) {
  params = params || {}  
  let axiosMain
  if (type.toUpperCase() === 'GET') {    
    console.log('params',url,params)
    // if(!params.userId&&url=='fuli/permission/list'){
    //   Vue.prototype.$notify('当前登录状态已经过期')
    //   console.log('当前登录状态已经过期',params.userId)
    //   setTimeout(()=>{
    //     window.open(window.location.host+'/fuli/h5/')
    //   },1000)    
    // }
    axiosMain = ajx.get(url, {
      params,
    })
  } else if (type.toUpperCase() === 'POST') {
    if(params.notCompanyId) delete params.notCompanyId
    axiosMain = ajx.post(url, params)
  } else if (type.toUpperCase() === 'PUT') {
    axiosMain = ajx.put(url, params)
  } else if (type.toUpperCase() === 'OPEN') {
    return window.open(`${url}`)
  } else if (type.toUpperCase() === 'DELETE') {
    axiosMain = ajx.delete(url, {
      params,
    })
  } else if (type.toUpperCase() === 'UPLOAD') {        
    params= {
      file:params
    }
    // console.log('params',params)
    axiosMain = ajx({
      url: `${url}`,
      method: 'post',
      data: params,
      // dataType: 'json',
      headers: { //添加请求头        
        "Content-Type": "multipart/form-data"
      }
    })
  } 

  
  return axiosMain.then((res) => {
    if(typeof res.data == 'string'){
      return {    
        data: res.data,
      }
    }
    if(typeof res.data == 'object'){
      res.data = res.data || []
      res.data.data = res.data.data || []
    }  
    
    if (res.data.status) {
      return {
        status: true,
        msg: res.data.msg,
        data: res.data,
        
      }
    }else if(res.data){
      return {
        status: true,
        data: res.data || [],
      }
    }else if(res.code==0){
      return {    
        data: res.data,
      }
    }else{
      return {
        data: res,
      }
    }

  }).catch(err =>   
    {
      console.log(err)
      Vue.prototype.$notify(err.message)
      
      return {
        status: false,
        text: `${err.statusText ? err.statusText : 'error'}`,
        message: err.message,
        code :err.code
      }    
    })
}
export {
  ajx,
  api,
}


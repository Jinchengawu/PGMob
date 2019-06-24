// import { getUserList } from '@/common/member'
import {api} from './api'


const apis = {
  getUserList:'/member/userList',

}

//会员信息列表
export const getUserList = (params) => api(apis.getUserList, 'POST', params)
// export default getUserList = () =>{
//   return request({
//     url: '/member/userList'
//   })
// }
// export function getlabelList () {
//   return request({
//     url: '/member/labelList'
//   })
// }
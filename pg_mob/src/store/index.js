import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate"
Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [createPersistedState()],
  state: {
    userInfo: null,
    companyName: '上海四宸网络科技有限公司', // 客户
    projectCredit: '100万元', // 项目授信总额度
    setUserType: false, // 修改用户状态
    userData:null,
    wxUserData: {
      userId: '11',
      userName: '22',
      companyId: '33',
      companyName: '44',
    },
    powerList: {
      TTarr: [],
      OTarr: [],
      PermissionObj:{}
    },
    isWX: false,
    AarrList: ['动态',2,1,4,3,5,6,7,8,9,11,12,13],
    // AarrList: ['动态','信息','联系人','协作','拜访','项目','报价','尽调','上会','签约','放款','贷后',],
    routerList:['','/addCustomer','/addContact','/addCooperation','/addVisit','/addApproval','/addQuotation','/addInvestigation','/addCommerce','/addSign','/addLoan','','/addRepayment'],
    active:'0',
    indexXY:{},
    homePower:null,
    iswx_remove:false,
    homeActive:0
  },
  mutations: {
    SET_USER_INFO(state, data) {
      state.userInfo = data
    },
    SET_ISWX_REMOVE(state, data){
      state.iswx_remove = data
    },
    SET_HOME_POWER(state, data){
      state.homePower = data
    },
    SET_UserType(state, data) {
      state.setUserType = data
    },
    SET_USER_DATA(state, data) {
      // console.log('USER_DATA个人信息写入',data);
      state.userData = data
    },
    SET_LIST_POWER(state, data) {
      // console.log('USER_DATA个人信息写入',data);
      state.powerList = data
    },
    SET_ISWX(state, data) {
      state.isWX = data
    },
    SET_ACTIVE(state, data) {
      state.active = data
    },
    SET_INDEXXY(state, data) {
      state.indexXY = data
    },
    SET_HOME_ACTIVE(state, data) {
      state.homeActive = data
    },
  },
  actions: {

  },
  getters: {
    homeActive:state => state.homeActive,
    userInfo: state => state.userInfo,
    // console.log('USER_DATA个人信息读取',state.userData);
    userData: state => state.userData,
    // console.log('USER_DATA个人信息读取',state.wxUserData);
    wxUserData: state => state.wxUserData,
    // console.log('USER_DATA个人信息状态',state.setUserType);
    setUserType: state => state.setUserType,
    // console.log('powerList',state.powerList);
    powerList: state => state.powerList,
    isWXType: state => state.isWX,
    AarrList:state => state.AarrList,
    routerList:state => state.routerList,
    active:state => state.active,
    indexXY:state => state.indexXY,
    homePower:state => state.homePower,
    iswx_remove:state => state.iswx_remove,
  },
})

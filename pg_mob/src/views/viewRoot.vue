<template>
  <div class="hello">
    
    viewRoot
    <tb-button :level='num'  :str='msg' >
      <template>
        <div>
          2333
        </div>
      </template>
      <template>
        <div>
          456
        </div>
      </template>
    </tb-button>
    tabMob
    <!-- tabMob -->
      <table-mob 
      :tableData='tableData' 
      :tableConfig='tableConfig' 
      :tabsOnCList="f_tabsOnCList"  
      :tabsSlots ='f_tabsSlots'
      @_selectionChange='getTabSelList'
      @_name='tabEvns'      
      @_sex ='tabEvns'
      @_operating ='tabEvns'
      ref='table_mob'
      >
        <template v-slot:operating >
          <el-button @click="integralThis('change')"  key='change' type="text">{{aaa}}</el-button>
          <el-button @click="integralThis('look')" key='look' type="text">查看</el-button>
          <el-button @click="integralThis('del')"  key='del' type="text">删除</el-button>
        </template>
      </table-mob>
  </div>
</template>

<script>
import tbButton from '@/components/GPMob/tbButton'
import tableMob from '@/components/GPMob/tableMob'
import MTC from '@/tabConfig/member/memTableConfig'
export default {
  components:{
    'tb-button':tbButton,
    'table-mob':tableMob
  },
  name: 'viewRoot',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      num:1,
      tableData: [],
      tableConfig:MTC,
      
      showTypes:{
        searchType:false,//searchView的 状态
        addLabelType:false,//
      },
      memInfoType:false,//memInfoView
      f_tabsOnCList:[{k:'name',mT:'click'},{k:'sex',mT:'mouseover'},{k:'operating',mT:'click'}],//该tab的事件集合  @ k:key; mT:methodsType 
      f_tabsSlots:{operating:'operating'},//插槽
      a1:'',
      a2:'',
      aaa:'编辑'
    }
  },
  methods: {    
    /**
     * @description 会员列表数据
     */
    getMemberList() {      
      // let params = {
      //   sexString: 3,
      //   size: 50,
      //   page: 1,
      //   subscribeString: 3,
      //   registeredString: 3,
      // }
      // getMessageList(params).then(res => {
      //   console.log('会员列表', res)
      //   this.tableData = res.data.data
      // })
      getUserList().then(res => {
        console.log('会员列表', res)
        this.tableData = res.data.data
      })
    },    
    _upSV({...e}){
      console.log('回收筛选数据',{...e})      
      this.showTypes.searchType = false      
      this.memInfoType = false  
    },
    _upAddLabel(){
      this.showTypes.addLabelType = false      
      this.memInfoType = false  
    },
    /**
     * setIngV Tbs事件代理
     * //挂在在每个 tab-v 上的事件;
     * @k 当前选中值的 背景参数
     * @v 当前值的 值
     */
    tabEvns(k,v){
      console.log('setIngV','onC'+k,k,v)
      this['onC'+k](v) //动态调用当前列表中的方法;
    },
    /**
     * onCname Tbs事件代理 中的具体代理事件；
     * //挂在在每个 tab-v 上的事件;
     * @item 当前选中值的 背景参数
     * @v 当前值的 值
     */
    onCname(v){
      console.log('onCname',v)
      this.$router.push({name:'member-user-userManagement-memInfoView',query:{userData:v}})
    },
    onCsex(v){
      console.log('onCsex',v)
    },
    onCintegral(v){
      console.log('onCintegral',v)      
    },
    onCoperating(v){
      console.log('onCoperating',v)
      console.log(this.integralType,222222)
      if(this.integralType=='change'){
        this.aaa='编辑过'
      }
    },
    getTabSelList(v){
      console.log('getTabSelList',v)
    },
    integralThis(type,v){
      this.integralType = type
      console.log(type,v,111111)
    },
    //click
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

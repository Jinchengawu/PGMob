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
      ref="table_mob"
      :table-data="tableData"
      :table-config="tableConfig"
      :tabs-on-c-list="f_tabsOnCList"
      :tabs-slots="f_tabsSlots"
      @_selectionChange="getTabSelList"
      @_name="tabEvns"
    >
      <template v-slot:operating="operating">
        <el-button
          key="change"
          type="text"
          size="mini"
          @click="update(operating.operating)"
        >{{ aaa }}</el-button>
        <el-button
          key="look"
          type="text"
          size="mini"
          @click="look(operating)"
        >查看</el-button>
        <el-button
          key="del"
          size="mini"
          type="text"
          @click="del(operating.operating)"
        >删除</el-button>
      </template>
    </table-mob>
  </div>
</template>

<script>
import tbButton from '@/components/GPMob/tbButton'
import tableMob from '@/components/GPMob/tableMob'
import MTC from '@/tabConfig/member/memTableConfig'
import getUserListData from '@/service/mock/mock'
import {getUserList} from '@/service/axios/tabDataService'
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
  created() {
    this.getMemberList()
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

      // getUserList().then(res => {
      //   console.log('会员列表', res)
      //   this.tableData = res.data.data
      // })
      
      getUserList().then(res=>{
        console.log('getUserList',res)
        this.tableData = res.data
      })
      // this.tableData = getUserListData.list
      console.log('this.tableData',this.tableData)
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
    update(v){
      console.log('update',v)
    },
    look(v){
      console.log('look',v)
    },
    del(v){
      console.log('del',v)
    },
    getTabSelList(v) {
      console.log('getTabSelList', v)
      this.tabSelList = v
      const tabSelIdList = []
      v.map(d => {
        tabSelIdList.push(d.id)
      })
      this.tabSelIdList = tabSelIdList
    },
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

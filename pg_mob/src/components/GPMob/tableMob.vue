<template>
  <div class="tableMob">
    <el-table
      ref="multipleTable"
      class="userTab"
      highlight-current-row
      row-key='id'
      :data="tableData"      
      tooltip-effect="dark"
      :style="{'width':tableConfig.style.width}"
      :height="tableConfig.style.height"
      size="mini"
      @selection-change="handleSelectionChange"
      :default-sort="tableConfig.defaultSort"
    >
      <el-table-column
        v-if="tableConfig.status.isAllSet"
        type="selection"
        width="55"
        show-overflow-tooltip
      />
      <el-table-column
        v-for="(item,index) in tableConfig.tabHeadConfig"
        :key="index"
        :label="item['cn-name']"
        :sortable="item['method'].indexOf('1')>-1"
        :sort-method='_sortfn'
        :width="item.width"
        show-overflow-tooltip
        :fixed="item['key']=='operating'?'right':false"
      >
        <template slot-scope="scope">
          <span
            :class="'v-'+item['key']"
            @[MO[item.key]]="_tabEvns(item,scope.row)"
          >
            <span v-if="!tabsSlots[item.key]">{{ scope.row[item['key']] }}</span>
            <slot
              v-if="tabsSlots[item.key]"
              :name="item.key"
              v-bind="{[item.key]:scope.row}"
            />
          </span>
        </template>

      </el-table-column>

    </el-table>
  </div>
</template>

<script>
/**
 * tableMob:
 *
 * 组件介绍：通用表格模板
 * 当前版本：v1.2.0
 * 版本新增：完全打通 slot 组件 的 通信问题；已经实现直接通信
 * 版本优化：完全打通 slot 组件 的 通信问题；已经实现直接通信
 * 组件依赖：import  memTableConfig  from '@/tableConfigs/memTableConfig'
 *          tableConfigs : 表头静态配置文件；
 *          mock.js->new member().MemberList() :表格所需数据结构
 *
 * 详细文档 参阅 ./README.md -> tableMob
 *
 *
 */
// import { workFormMob, formMobStr } from '@/utils/index'
// import formMob from '@/components/GPMob/formMob' //该组件导入地址
export default {
  name: 'FormMob',
  components: {
  },
  props: {
    // tableData 表格依赖数据
    tableData: {
      type: Array,
      default() {
        return []
      }
    },
    // tableConfig 表格依赖配置文件
    tableConfig: {
      type: Object,
      default() {
        return {
          tabHeadConfig: [],
          style: {
            width: '100%',
            height: 600
          }
        }
      }
    },
    // 注入事件集合 tabsOnCList:[{k:'name',mT:'click'},],//该tab的事件集合 @ k:key; mT:methodsType
    tabsOnCList: {
      type: Array,
      default: () => {
        return []
      }
    },
    // s_tabsSlots ,插槽集合 注入插槽集合 使 tabMob 更具扩展性；
    tabsSlots: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  component: {
  },
  data() {
    return {
      formMobForm: {},
      formLabelWidth: '120px',
      MO: null, // methods Object  ,因为将 数组 转换成 对象后可以 更简练的提取到 对应key的方法;
      ensKeys: [], // 简易事件队列 ，只存储 事件的 key
      deBug: false

    }
  },
  computed: {},
  watch: {
    formMobForm(nv, ov) {
      console.log(ov, nv)
    },
    // 监听recoverType何时回收;
    recoverType(nv, ov) {
      console.log('监听recoverType何时回收', ov, nv)
      if (nv) {
        this._returnFormData()
      }
    }
  },
  created() {
    // this.tabsOnCList = this.tabsOnCList.length==0?this.tabsOnCList:[]
    // console.log('对 事件集 进行管理；', this.tabsOnCList)
    //对tabSot管理
    this._initDefaultSort()    
    
    // 对 事件集 进行管理；
    this._initTabsOnCList()
  },
  mounted() {
    if (this.deBug) {
      this._deBug()
    }
  },
  beforeDestroy() { },
  methods: {
    integralThis(data) {
      console.log(data)
    },
    _deBug() {
      console.log('_deBug___________ run')
      console.log('tableData', this.tableData)
      console.log('tabsSlots', this.tabsSlots)
      console.log('tableConfig', { ...this.tableConfig })
      console.log('tabsOnCList', { ...this.tabsOnCList })
      console.log('_deBug___________ end')
    },
    toggleSelection(rows) {
      if (rows) {
        rows.forEach(row => {
          this.$refs.multipleTable.toggleRowSelection(row)
        })
      } else {
        this.$refs.multipleTable.clearSelection()
      }
    },
    // _selectionChange
    handleSelectionChange(val) {
      this.multipleSelection = val
      this.$emit('_selectionChange', val)
    },
    /**
     * _initTabsOnCList 初始化事件队列
     * //挂在在每个 tab-v 上的事件;
     * @d.k 对应的key
     * @d.mt 对应的 事件关键字
     */
    _initTabsOnCList() {
      const ens = this.tabsOnCList
      const THS = this.tableConfig.tabHeadConfig // tabHeaders
      const _MO = {} // methods Object  ,因为将 数组 转换成 对象后可以 更简练的提取到 对应key的方法;
      const _ensKeys = [] // 简易事件队列 ，只存储 事件的 key
      THS.map((d, idx) => {
        _MO[ d.key ] = null
        ens.map(dd => {
          if (dd.k == d.key) {
            _MO[ dd.k ] = dd.mT
            _ensKeys.push(dd.k)
          }
        })
        // _MO[d.k][d.mT] = function(){}
      })
      console.log('初始化事件队列 _MO', { ..._MO })
      this.MO = _MO
      this.ensKeys = _ensKeys
    },
    /**
     * setIngV Tbs事件代理
     * //挂在在每个 tab-v 上的事件;
     * @item 当前选中值的 背景参数
     * @v 当前值的 值
     */
    _tabEvns(item, v) {
      // console.log('setIngV',item,v)
      const ens = this.ensKeys // 当前tabens 所支持的事件集
      console.log(ens, item.key)
      if (ens.indexOf(item[ 'key' ]) == -1) return // 不支持则return;
      this.$emit('_' + item[ 'key' ], item[ 'key' ], v)
      return
      // 以下为示例 其父级组件应该做的事情 onCn-1.1.x
      this[ 'onC' + item[ 'key' ] ](item, v) // 动态调用当前列表中的方法;
    },
    /**
     * onCname Tbs事件代理 中的具体代理事件；
     * //挂在在每个 tab-v 上的事件;
     * @item 当前选中值的 背景参数
     * @v 当前值的 值
     */
    // 以下为示例 其父级组件应该做的事情 onCn-1.1.y
    onCname(item, v) {
      console.log('onCname', item, v)
    },
    //对 列表的排序管理
    _initDefaultSort(){
      let defaultSort = this.tableConfig.defaultSort || {prop: 'id', order: 'descending'}
      this.$set(this.tableConfig,'defaultSort',defaultSort) 
      console.log('this.tableConfig',this.tableConfig)
    },
    //自定义排序
    _sortfn(a,b){
      // console.log('自定义排序',a,b)
    }
  }
}
</script>

<style lang="scss" scope>
</style>

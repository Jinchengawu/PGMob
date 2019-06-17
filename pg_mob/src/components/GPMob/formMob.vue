<template>
  <div class="formMob">

    <el-form :model="formMobForm" >
      <div v-for='(item,index) in formMobList' :key='index'>
        <!-- input -->
        <el-form-item  :label="$t(item.label)" :label-width="formLabelWidth" v-if="item.type=='input'">          
          <el-input  v-model="formMobForm[item.key]" :placeholder="$t(item.placeholder)" autocomplete="off"></el-input>
        </el-form-item> 
        <!-- select -->
        <el-form-item :label="$t(item.label)"   :label-width="formLabelWidth"  v-if="item.type=='select'">
          <el-select v-model="formMobForm[item.key]" :placeholder="$t(item.placeholder)">
            <el-option v-for='(itm,idx) in item.option' :key='idx' :label="itm.l" :value="itm.v"></el-option>  
          </el-select>
        </el-form-item>
        <!-- radio -->
        <el-form-item :label="$t(item.label)" :label-width="formLabelWidth" v-if="item.type=='radio'">
          <el-radio v-for='(itm,idx) in item.option' :key='idx' v-model="formMobForm[item.key]" :label="itm.v">{{itm.l}}</el-radio>
        </el-form-item>
        <!-- radio-group -->
        <el-form-item :label="$t(item.label)" :label-width="formLabelWidth" v-if="item.type=='radio-group'">
          <el-radio-group v-model="formMobForm[item.key]" size="small">
            <el-radio-button  v-for='(itm,idx) in item.option' :key='idx'  :label="itm.v">{{itm.l}}</el-radio-button>            
          </el-radio-group>
        </el-form-item>  
        <!-- time~hh-MM-ss -->
        <el-form-item :label="$t(item.label)" :label-width="formLabelWidth" v-if="item.type=='time~yy-mm-dd'">   
          <el-date-picker
            v-model="formMobForm[item.key]"
            type="daterange"
            range-separator="-"
            start-placeholder="开始日期"
            end-placeholder="结束日期">
          </el-date-picker>
        </el-form-item>  
        <slot :name='item.key' v-if="item.type=='slot'">定制化form</slot>                       
      </div>           
                 
    </el-form>
  </div>
</template>

<script>

/** 
 * formMob:
 * 
 * 组件介绍：通用表单模板
 * 当前版本：v1.2.0
 * 版本新增：支持了 slot 插槽 组件；
 * 版本优化：优化了国际化数据的处理，丢弃了之前通用性较差的 处理方式；
 * 组件依赖：import {workFormMob,formMobStr} from '@/utils/index'
 *          workFormMob : 对表单字段的 label , placeholder 进行国际化处理;
 * 
 * 详细文档 参阅 ./README.md -> formMob
 * 
 * 
*/
import {workFormMob,formMobStr} from '@/utils/index'
// import formMob from '@/components/GPMob/formMob' //该组件导入地址
export default {
  name:'formMob',
  props:{
    //form结构
    formMobList:{
      type:Array,
      default:[],      
    },
    //form回收状态
    recoverType:{
      type:Boolean,
      default:false
    }
  },
  data () {
    return {
      formMobForm:{},
      formLabelWidth: '120px',
    }
  },
  computed: {

  },
  watch:{
    formMobForm(nv,ov){
      console.log(ov,nv)
    },
    //监听recoverType何时回收;
    recoverType(nv,ov){
      console.log('监听recoverType何时回收',ov,nv)
      if(nv){
        this._returnFormData()
      }
    }
  },
  created () {
    // formMobList 国际化 Str 处理;
    this.formMobList = workFormMob(this.formMobList,'label','member.memList.filter.')
    this.formMobList = workFormMob(this.formMobList,'placeholder','member.memList.filter.')
    this._initForm()
    
    console.log('this.formMobList',this.formMobList)
    console.log('this.formMobForm',this.formMobForm)
  },
  mounted () {
  },
  beforeDestroy () {
  },
  methods: {
    //初始化form
    _initForm(){     
      let f = {}
      this.formMobList.map(d=>{       
       f[d.key]=null
      })
      this.formMobForm = f
    },
    //把表单数据返回至父级;
    _returnFormData(){
      let f = this.formMobForm
      console.log('把表单数据返回至父级 _returnFormData',f)
      this.$emit('_recoverFormData',f)
    }
  }  
}
</script>

<style lang="scss" scope>
.formMob{
  // background: #999;
}
</style>

# GPMob -- General purpose Mob
## 通用模板文件
#\====================================================================================================
#1.formMob:表单模板
#
#  v1.1.0
#  该模板 应用场景 : 冗杂单一表单页面，不包含定制样式，定制需求的特殊表单；仅用于简化通用表单的替代；
#  
#	 特性：具有 通用简单可扩展性；只需要配置 formMobList 参数 即可
#   
#   组件参数介绍：
#
#   
#		props:{
# 	  //form-Dom结构
# 	  formMobList:{
# 	    type:Array,
# 	    default:[],      
# 	  },
# 	  //form-Data回收状态
# 	  recoverType:{
# 	    type:Boolean,
# 	    default:false
# 	  }
# 	},
#
#-----------------------------------------------------------------------------------------------------
#
# 	v1.2.0
#   在1.2.0中
#   支持了定制化 item; 使用vue的slot  
#   <slot :name='item.key' v-if="item.type=='slot'">定制化form</slot>  
#   item.key 对应  其 HTML 模板中 template v-slot:address
#   例：  
#      <template v-slot:address>
#         <!--  地区 -->
#         <el-form-item  label="地区" :label-width="formLabelWidth" >          
#           <address-mob @getValue='form_getAddressMobValue' :addvalue="form.addressValue" />
#         </el-form-item>
#      </template>
#
#
#
#
#
#
#-----------------------------------------------------------------------------------------------------
#====================================================================================================/
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#\====================================================================================================
#2.tabsMob:Table模板
#  v1.1.0
#  该模板 应用场景 : 冗杂单一表单页面，不包含定制样式，定制需求的特殊表单；仅用于简化通用表单的替代；
#
#	 特性：具有 通用简单可扩展性；只需要配置 tbsList 参数 即可
#
#  版本新增：支持动态生成表头；动态生成表间数据；动态匹配添加单击事件；
#  版本优化：优化了国际化数据的处理，丢弃了之前通用性较差的 处理方式；
#
#
#   组件参数介绍：
#  props:{
#    //tableData 表格依赖数据         
#    tableData:{
#      type:Array,
#      default:[],      
#    },  
#    //tableConfig 表格依赖配置文件     //该数据结构详情可到  @/tableConfigs/memTableConfig 内查看；
#    tableConfig:{    
#      type:Object,
#      default:{
#        tabHeadConfig:[],
#        style:{
#          width:'100%',
#          height:600,
#        },
#      },  
#    },
#    //注入事件集合 tabsOnCList:['name'],//该tab的事件集合
#    tabsOnCList:{
#      type:Array,
#      default:[],  
#    }  
#
#
#   例：
#    <table-mob 
#     :tableData='tableData'        //tableData 表格依赖数据
#     :tableConfig='tableConfig'    //tableConfig 表格依赖配置文件
#     :tabsOnCList="f_tabsOnCList"  //注入事件集合 tabsOnCList:['name'],//该tab的事件集合
#     @_name='tabEvns'              //监听_name 
#     />
#
# 相关方法:
#
#   @@ _tabEvns  //该方法请到 tableMob文件内看详细文档
#   @@ onCname  //该方法请到 tableMob文件内看详细文档
# 
#-----------------------------------------------------------------------------------------------------
#  v1.1.1
# 
#
#	 特性：具有 通用简单可扩展性；只需要配置 tbsList 参数 即可
#
#  版本新增：动态事件匹配； 现在支持 所有定制化事件对 td 级的操作；
#  版本优化：优化了 对参数集 中  的 tabsOnCList 的结构要求，丢弃了之前通用性较差的 实现方式；
#  // tabsOnCList:[{k:'name',mT:'click'},],//该tab的事件集合 @ k:key; mT:methodsType
#
#  详细变更:
#  组件参数介绍：
#  props:{     
#  
#    //tabsOnCList:[{k:'name',mT:'click'},],//该tab的事件集合 @ k:key; mT:methodsType
#    tabsOnCList:{  
#      type:Array,
#      default:[],  
#    }  
#
#
#   例：
#    <table-mob 
#     :tableData='tableData'        //tableData 表格依赖数据
#     :tableConfig='tableConfig'    //tableConfig 表格依赖配置文件
#     :tabsOnCList="f_tabsOnCList"  //注入事件集合 tabsOnCList:[{k:'name',mT:'click'},{k:'sex',mT:'mouseover'}],//该tab的事件集合
#     @_name='tabEvns'              //监听_name 
#     />
#
# 相关方法:
#
#   @@ _tabEvns  //该方法请到 tableMob文件内看详细文档
#   @@ onCname  //该方法请到 tableMob文件内看详细文档
#-----------------------------------------------------------------------------------------------------
# ====================================================================================================/
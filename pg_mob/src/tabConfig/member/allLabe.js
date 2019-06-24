
 const tableConfig = {
    status:{
      isAllSet:true,      //全选
      change:true,        //            
      freeze:{            //冻结
        freezeTop:true,   //冻结头部  
        freezeLeft:false, //冻结首列
        freezeRight:true, //冻结尾列
      }            
    },
    style:{
      width:'100%',
      height:600,
    },
    operating:{           //操作字段
      lookThis:{},        //查看
      changeThis:{},      //编辑
      delThis:{},         //删除  
    },          
    tabHeadConfig:[{
      'cn-name':'标签',   //中文名称
      'type':'string',    //数据类型
      'en-name':'label',   //英文名称
      'method':'',        //该字段携带方法 :1.sort排序 , 2.冻结该列, 3...
      'key':'label',       //该字段的key值
    },{
      'cn-name':'创建时间',   //中文名称
      'type':'string',    //数据类型
      'en-name':'createTime',   //英文名称
      'method':'',     //该字段携带方法
      'key':'createTime',       //该字段的key值
    },{
      'cn-name':'标签类型',   //中文名称
      'type':'string',    //数据类型
      'en-name':'labelType',   //英文名称
      'method':'',     //该字段携带方法
      'key':'labelType',       //该字段的key值
     
    },{
      'cn-name':'所属标签组',   //中文名称
      'type':'string',    //数据类型
      'en-name':'labelArrey',   //英文名称
      'method':'',     //该字段携带方法
      'key':'labelArrey',       //该字段的key值
    },{
      'cn-name':'备注信息',   //中文名称
      'type':'string',    //数据类型
      'en-name':'remarks',   //英文名称
      'method':'',     //该字段携带方法
      'key':'remarks',       //该字段的key值
      'width':'200px',
    },{
      'cn-name':'操作',   //中文名称
      'type':'string',    //数据类型
      'en-name':'operating',   //英文名称
      'method':'',     //该字段携带方法
      'key':'operating',       //该字段的key值
      'width':'150px',
    },]
  }


export default tableConfig
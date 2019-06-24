
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
      'cn-name':'姓名',   //中文名称
      'type':'string',    //数据类型
      'en-name':'name',   //英文名称
      'method':'',        //该字段携带方法 :1.sort排序 , 2.冻结该列, 3...
      'key':'name',       //该字段的key值
    },{
      'cn-name':'性别',   //中文名称
      'type':'string',    //数据类型
      'en-name':'sex',   //英文名称
      'method':'',     //该字段携带方法
      'key':'sex',       //该字段的key值
    },{
      'cn-name':'地区',   //中文名称
      'type':'string',    //数据类型
      'en-name':'address',   //英文名称
      'method':'',     //该字段携带方法
      'key':'address',       //该字段的key值
      'width':'160px',
    },{
      'cn-name':'用户粘性',   //中文名称
      'type':'number',    //数据类型
      'en-name':'userStickiness',   //英文名称
      'method':'1,2',     //该字段携带方法
      'key':'userStickiness',       //该字段的key值
      'width':'120px',
    },{
      'cn-name':'会员价值',   //中文名称
      'type':'number',    //数据类型
      'en-name':'userValue',   //英文名称
      'method':'1,2',     //该字段携带方法
      'key':'userValue',       //该字段的key值
      'width':'120px',
    },{
      'cn-name':'会员ID',   //中文名称
      'type':'string',    //数据类型
      'en-name':'userID',   //英文名称
      'method':'',     //该字段携带方法
      'key':'id',       //该字段的key值
    },{
      'cn-name':'会员卡号',   //中文名称
      'type':'string',    //数据类型
      'en-name':'userCard',   //英文名称
      'method':'',     //该字段携带方法
      'key':'userCard',       //该字段的key值
    },{
      'cn-name':'积分',   //中文名称
      'type':'number',    //数据类型
      'en-name':'integral',   //英文名称
      'method':'1,2',     //该字段携带方法
      'key':'integral',       //该字段的key值
    },{
      'cn-name':'手机',   //中文名称
      'type':'string',    //数据类型
      'en-name':'phoneNumber',   //英文名称
      'method':'',     //该字段携带方法
      'key':'phone',       //该字段的key值
      'width':'120px',
    },{
      'cn-name':'生日',   //中文名称
      'type':'string',    //数据类型
      'en-name':'birthday',   //英文名称
      'method':'',     //该字段携带方法
      'key':'date',       //该字段的key值
      'width':'120px',
    },{
      'cn-name':'标签',   //中文名称
      'type':'string',    //数据类型
      'en-name':'label',   //英文名称
      'method':'',     //该字段携带方法 :1.sort排序 , 2.冻结该列, 3...
      'key':'label',       //该字段的key值
    },{
      'cn-name':'微信关注时间',   //中文名称
      'type':'string',    //数据类型
      'en-name':'weChatSetTime',   //英文名称
      'method':'',     //该字段携带方法
      'key':'weChatSetTime',       //该字段的key值
      'width':'120px',
    },{
      'cn-name':'系统注册时间',   //中文名称
      'type':'string',    //数据类型
      'en-name':'OSInitTime',   //英文名称
      'method':'',     //该字段携带方法
      'key':'OSInitTime',       //该字段的key值
      'width':'120px',
    },{
      'cn-name':'操作',   //中文名称
      'type':'string',    //数据类型
      'en-name':'operating',   //英文名称
      'method':'',     //该字段携带方法
      'key':'operating',       //该字段的key值
      'width':'150px',
    },]
  }

  tableConfig.tabHeadConfig.map((d,idx)=>{
    d.id = idx+1
  })
export default tableConfig
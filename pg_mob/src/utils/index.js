function isWeiXin() {
  const ua = window.navigator.userAgent.toLowerCase()
  if (ua.match(/MicroMessenger/i)=="micromessenger") {    
    console.log('isWeiXin() 微信环境')
    return true
  }
  console.log('isWeiXin() 不是微信环境')
  return false
}

function test() {
  console.log('test')
}
function formatDate(date, fmt) {
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (`${date.getFullYear()}`).substr(4 - RegExp.$1.length))
  }
  const o = {
    'M+': date.getMonth() + 1,
    'd+': date.getDate(),
    'h+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds(),
  }

  // eslint-disable-next-line no-restricted-syntax
  for (const k in o) {
    if (new RegExp(`(${k})`).test(fmt)) {
      const str = `${o[k]}`
      // eslint-disable-next-line no-use-before-define
      fmt = fmt.replace(RegExp.$1, RegExp.$1.length === 1 ? str : padLeftZero(str))
    }
  }
  return fmt
}
function padLeftZero(str) {
  return (`00${str}`).substr(str.length)
}


function  isNull(data){
  if (data == undefined  || data == null  || data == ''){
    return  true
  }
  return  false
}

function update(e) {
  let file = e.target.files[0]
  let userData = this.$store.getters.userData
  let fileName = userData.companyAbbreviation+'-'+userData.companyBusinessLicense+'-'+ formatDate(new Date(),'yyyyMMdd')
  let param = new FormData()
  param.append('file', file)
  // console.log(param.get('file'))
  let config = {
    headers: { 'Content-Type': 'multipart/form-data' }
  }
  upload(param, config)
    .then(res => {
      // console.log('上传文件', res.data)
      this.$notifySty('上传成功')
      this.newFile = res.data.url
      
      this.EventsData.fileUrl = res.data.url
      this.EventsData.fileName = fileName
    })
}
/**
 * formMob 组装 label , placeholder ...国际化文件的方法
 * @key     String;   key    例:'name'
 * @type    String;   type   例: ['label','placeholder'] 
 * @i18nT   String;   i18nT  例:'member.memList.filter.'
 * 
 * worker:wzy
 */
function formMobStr(key,type,i18nT){
  if(!(typeof key == 'string'&&typeof i18nT == 'string'&&typeof type == 'string'))return
  //1.将首字母大写
  let k=key.slice(0,1).toUpperCase()  
  key = k+key.slice(1,key.length)
  return i18nT+type+key
}
/**
 * workFormMob 加工form work
 * @formMob   Aerry;  formMob  例: [...formMob]=>[{label:'name'}] 
 * @i18nT     String; i18nT    例:'member.memList.filter.'
 * 
 * worker:wzy
 */
function workFormMob(formMob,type,i18nT){
  if(!Array.isArray(formMob))return
  formMob.map((d,idx)=>{
    d[type] = formMobStr(d.key,type,i18nT)
    // d.placeholder = formMobStr(d.key,'placeholder',i18nT)
  })
  return formMob
}
export {
  isWeiXin,
  test,
  isNull,
  formatDate,
  workFormMob,
  formMobStr
}

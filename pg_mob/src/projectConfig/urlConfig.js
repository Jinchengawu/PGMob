const urlType = 2

var baseUrl = '',
fileServiceUrl = ''

switch(urlType){
  case 1:
    {
      baseUrl= 'http://scrm.ocheng.me/v2/api/'
      fileServiceUrl= ''
    }
  break
  case 2:
    {
      baseUrl= ''
      fileServiceUrl= ''
    }
  break
  case 3:
      {
        baseUrl= ''
        fileServiceUrl= ''
      }
  break

}

export default {
  baseUrl,
  fileServiceUrl
}
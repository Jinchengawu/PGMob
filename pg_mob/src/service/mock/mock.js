import Mock from 'mockjs'
const Random = Mock.Random
var getUserListData = Mock.mock({
    'list|1-10': [{
        'id|+1': 1
    }]
});
/**
 * 会员列表
 */
class member {
  constructor(listData = {
    'code': 0,
    'msg': 'success',
    'data': [],
    total: 200
  }) {
    //返回的data的固定数据
    this.userList = listData;
    this.labelList = listData;
    this.methods = {

    }
  }
  //创造会员详细数据
  creatUserInfo(i = 0) {
    let info = {
      'id': i + 1,
      'date': Random.date('yyyy-MM-dd'),
      'name': Random.cname(),
      'address': Mock.mock('@county(true)'),
      'phone': Mock.mock(/^1[0-9]{10}$/),
      'status': Random.integer(0, 1),
      'label': Mock.mock(/^1[0-9]{3}$/),
      'sex': Mock.mock({
        "string|1": ['男', '女']
      }).string,
    }
    return info
  }
  //批量输出数据
  MemberList(n = 20) {
    console.log('___this', this)
    for (let i = 0; i < n; i++) {
      this.userList.data.push(this.creatUserInfo(i))
    }
    return this.userList
  }
  //
  //创造会员详细数据
  creatLabelInfo(i = 0) {
    let info = {
      'id': i + 1,
      'label': Mock.mock(/^1[0-9]{3}$/),
      'createTime': Random.date('yyyy-MM-dd'),
      'labelType': '微信标签',
      'labelArrey': '门店',
      'remarks': Mock.mock('@county(true)'),
    }
    return info
  }
  //批量输出数据
  labelsList(n = 20) {
    console.log('___this', this)
    for (let i = 0; i < n; i++) {
      this.labelList.data.push(this.creatLabelInfo(i))
    }
    return this.labelList
  }
}

Mock.mock('/member/userList', new member().MemberList())
Mock.mock('/member/labelList', new member().labelsList())

console.log(JSON.stringify(getUserListData, null, 4))

export default getUserListData
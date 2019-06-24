import Vue from 'vue'
const tbButton =  Vue.component('tbButton', {
    render: function (createElement) {
      return createElement(
        'h' + this.level,   // 标签名称
        //this.$slots.default ,// 子节点数组
        [
          '先写一些文字',
          createElement('h1', '一则头条'),
          // createElement(MyComponent, {
          //   props: {
          //     someProp: 'foobar'
          //   }
          // })
          this.$slots.default
        ]
      )
    },
    props: {
      level: {
        type: Number,
        required: true
      },
      str: {
        type: String,
        required: true
      },
    },
    created() {
      console.log('23333')
    },
  })
  export default tbButton
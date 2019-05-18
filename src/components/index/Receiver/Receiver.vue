<!-- 接收人 -->
<template>
  <div class="container-receiver">
    <van-nav-bar title="接收人">
      <span slot="left" class="el-icon-arrow-left _goback" @click="goback"></span>
      <span slot="right" class="determine" @click="Determine">确定</span>
    </van-nav-bar>
    <div class="wrapper">
      <ul class="content-ul">
        <li class="content-li">
          <van-checkbox-group v-model="checkbox" @change="handleCheck">
            <van-checkbox
              v-for="(item,index) in all_user_list"
              :key="index"
              :name="item.id"
            >{{ item.text }}</van-checkbox>
          </van-checkbox-group>
        </li>
      </ul>
    </div>
  </div>
</template>

<script type='textecmascript-6'>
export default {
  data() {
    return {
      all_user_list: [
        { id: 1, text: "李一一" },
        { id: 2, text: "李二二" },
        { id: 3, text: "李三三" },
        { id: 4, text: "李思思" },
        { id: 5, text: "李呜呜" },
        { id: 6, text: "李六六" },
        { id: 7, text: "李柒柒" },
        { id: 8, text: "李叭叭" },
        { id: 9, text: "李玖玖" },
        { id: 10, text: "李师师" },
        { id: 11, text: "李十一" },
        { id: 12, text: "李十二" },
        { id: 13, text: "李十三" },
        { id: 14, text: "李十四" },
        { id: 15, text: "李失误" }
      ], //所有人员列表
      checked: false, //是否勾选
      text: [], //名字
      checkbox: [],//默认选中
      userId: 1000000,
    };
  },
  created() {
    this.active = this.$route.query.active
  },
  methods: {
    //返回
    goback() {
      this.$router.push({path:"/riskDetails", query: {active: this.active}});
    },
    //选中
    handleCheck(id) {
      this.text = []
      this.checkbox = id;
      console.log(this.checkbox)
      this.all_user_list.forEach(i => {
        this.checkbox.forEach(j=>{
          if (i.id == j) {
            this.text.push(i.text);
          }
        })
      });
      console.log('text',this.text);
    },
    //确定接收人
    Determine() {
      // this.$router.push({path:"/riskDetails", query: {active: this.active, text: this.text}});
      // this.$Dialog
      //   .confirm({
      //     title: "温馨提示",
      //     message: "请确认接收人!"
      //   })
      //   .then(() => {
      //     // 确定
      //   })
      //   .catch(() => {
      //     // 取消
      //   });
    }
  }
};
</script>

<style lang='stylus' scoped  rel='stylesheet/stylus'>
.container-receiver
  width 100%
  height 100%
  .van-nav-bar
    height 88px
    line-height 88px
    border-bottom 1px solid #E5E5E5
    ._goback
      display block
      font-size 38px
      height 100%
      line-height 88px
      margin-left 24px
    .determine
      display block
      font-size 30px
      height 100%
      line-height 88px
      margin-right 36px
      color #2F78FF
  .wrapper
    .content-ul
      padding 0 32px
      .content-li
        height 88px
        line-height 88px
</style>
<style>
/* 顶部表头 */
.container-receiver .van-nav-bar .van-nav-bar__title {
  font-size: 36px;
}
/*选择接收人*/
.container-receiver .van-checkbox {
  border-bottom: 2px solid #e5e5e5;
}
.container-receiver .van-checkbox .van-checkbox__icon {
  height: 30px;
  width: 30px;
}
.container-receiver .van-checkbox .van-checkbox__icon .van-icon {
  border: 2px solid #d1d1d1;
  height: 30px;
  width: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.container-receiver .van-checkbox .van-checkbox__label {
  margin-left: 30px;
}
.container-receiver .van-dialog {
  width: 540px;
  height: 360px;
  background: #fff;
  border-radius: 24px;
}
.container-receiver .van-dialog .van-dialog__header {
  margin-top: 38px;
  font-size: 36px;
  line-height: 54px;
  font-weight: 400;
  padding: 0;
}
.container-receiver .van-dialog .van-dialog__content {
  margin-top: 42px;
}
.container-receiver .van-dialog .van-dialog__content .van-dialog__message {
  padding: 0;
  font-size: 34px;
  font-weight: 400;
  color: #000;
  height: 49px;
  line-height: 32px;
  overflow-y: visible;
}
.container-receiver .van-dialog .van-dialog__footer {
  margin-top: 86px;
  height: 86px;
}
.container-receiver .van-dialog .van-dialog__footer .van-button {
  line-height: 86px;
  height: 100%;
}
.container-receiver .van-dialog .van-dialog__footer .van-button__text {
  font-size: 34px;
}
</style>
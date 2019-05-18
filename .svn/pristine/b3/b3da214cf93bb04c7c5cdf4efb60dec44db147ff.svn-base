
<!-- 使用说明 instructions -->
<template>
  <div class="container-instructions">
    <van-nav-bar title="设置" left-arrow border @click-left="onClickLeft"></van-nav-bar>
    <van-cell title="个人信息" is-link to/>
    <div class="line"></div>
    <van-cell title="使用说明" is-link/>
    <div class="line"></div>
    <van-cell title="清除缓存" :value="cache"/>
    <van-button type="danger" @click="onExit">退出登陆</van-button>
  </div>
</template>

<script type='textecmascript-6'>
export default {
  data() {
    return {
      cache: "20.8M"
    };
  },
  methods: {
    onClickLeft() {
      this.$router.back(-1);
    },
    onExit() {
      console.log("退出登录");
    }
  }
};
</script>
<style lang='stylus' scoped rel='stylesheet/stylus'>

@import './user_assets/base.css';

.container-instructions {
  width: 100%;
  height: 100%;
  background: rgba(246, 248, 250, 1);

  .line {
    margin: 0 0.4rem 0 0.32rem;
    height: 0.027rem;
    background-color: #E5E5E5;
  }

  .van-cell {
    height: 1.17rem;
    background: rgba(255, 255, 255, 1);
    font-size: 15px;
    font-family: SourceHanSansCN-Regular;
    font-weight: 400;
    color: rgba(51, 51, 51, 1);
    align-items: center;
    padding: 0 0.4rem 0 0.32rem;
  }

  .van-button {
    display: block;
    height: 1.17rem;
    width: 9.34rem;
    color: rgba(255, 255, 255, 1);
    background: rgba(229, 75, 75, 1);
    border-radius: 0.11rem;
    font-size: 15px;
    font-family: SourceHanSansCN-Medium;
    font-weight: 500;
    margin-top: 1.2rem;
    margin-left: 0.32rem;
  }
}
</style>
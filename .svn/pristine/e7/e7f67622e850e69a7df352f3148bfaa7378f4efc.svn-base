<!-- 提交成功 set -->
<template>
  <div class="container-submitSuccess">
    <van-nav-bar title="提交成功" left-arrow border @click-left="onClickLeft"></van-nav-bar>
    <div class="submitSuccess-content flex-column-center-b">
      <img src="./user_assets/imgs/success.png">
      <div class="issue">问题已解决</div>
      <div class="back flex-row" @click="goBack">{{title}}</div>
    </div>
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
    },
    goBack(){
      this.$router.go(-1)
    }
  },
  computed: {
    title() {
      let v = this.$route.query.name;
      let title = "立即查看";
      if (v == "sponsorSee") {
        title = "返回发布";
      }
      return title;
    }
  }
};
</script>
<style lang='stylus' scoped rel='stylesheet/stylus'>
@import './user_assets/base.css';

.container-submitSuccess {
  width: 100%;
  height: 100%;
  background: rgba(246, 248, 250, 1);

  .van-nav-bar {
    background-color: #5892FF;
  }

  .van-nav-bar__title {
    color: rgba(255, 255, 255, 1);
  }

  .van-nav-bar .van-icon {
    color: #fff;
  }

  .van-nav-bar .van-nav-bar__title {
    font-size: 36px;
  }

  .submitSuccess-content {
    height: 6.4rem;
    background: rgba(255, 255, 255, 1);
    font-family: PingFang-SC-Medium;
    font-weight: 500;

    img {
      width: 1.862rem;
      height: 1.862rem;
      display: block;
    }

    .issue {
      font-size: 30px;
      color: rgba(51, 51, 51, 1);
      margin-top: 0.266rem;
      margin-bottom: 0.67rem;
    }

    .back {
      width: 2.13rem;
      height: 0.67rem;
      background: rgba(90, 145, 255, 1);
      border-radius: 0.11rem;
      font-size: 28px;
      color: rgba(255, 255, 255, 1);
    }
  }
}
</style>
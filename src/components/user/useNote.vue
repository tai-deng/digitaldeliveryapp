
<!-- 使用说明 useNote -->
<template>
  <div class="container-useNote">
    <van-nav-bar title="使用说明" left-arrow border @click-left="onClickLeft"></van-nav-bar>
    <div class="useNote-content">
      <div class="useNote-content-title">如有疑问请联系我们</div>
      <div class="useNote-content-tip">视频（包含新功能，程序的详细操作）</div>
      <div class="useNote-content-aodio flex-row">
        <img src="./user_assets/imgs/pause.png">
      </div>
    </div>
    <div class="useNote-relation flex">
      <div class="useNote-relation-phone flex">
        <img src="./user_assets/imgs/phone.png">
        0731-12345
      </div>
      <div class="useNote-relation-wechat flex">
        <img src="./user_assets/imgs/wechat.png">
        li12345678910
      </div>
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
    }
  }
};
</script>
<style lang='stylus' scoped rel='stylesheet/stylus'>

@import './user_assets/base.css';

.container-useNote {
  width: 100%;
  height: 100%;
  background: rgba(246, 248, 250, 1);

  .useNote-relation {
    font-size: 30px;
    font-family: SourceHanSansCN-Normal;
    font-weight: 400;
    color: rgba(102, 102, 102, 1);
    height: 1.18rem;
    margin-top: 0.27rem;
    background-color: #fff;
    padding-left: 0.27rem;

    .useNote-relation-phone {
      padding-right: 0.68rem;

      img {
        width: 0.4rem;
        height: 0.32rem;
        display: block;
        padding-right: 0.28rem;
      }
    }

    .useNote-relation-wechat {
      img {
        width: 0.4rem;
        height: 0.35rem;
        display: block;
        padding-right: 0.27rem;
      }
    }
  }

  .useNote-content {
    background: rgba(255, 255, 255, 1);
    box-shadow: 0px 0.014rem 0.06rem 0px rgba(220, 226, 237, 1);
    padding: 0.32rem;

    .useNote-content-title {
      font-size: 36px;
      font-family: SourceHanSansCN-Medium;
      font-weight: 500;
      font-weight: bold;
      color: rgba(51, 51, 51, 1);
      line-height: 1.18rem;
    }

    .useNote-content-tip {
      line-height: 1.18rem;
      font-size: 30px;
      font-family: SourceHanSansCN-Normal;
      font-weight: 400;
      color: rgba(102, 102, 102, 1);
    }

    .useNote-content-aodio {
      width: 9.34rem;
      height: 5.25rem;
      background: rgba(34, 40, 50, 1);

      img {
        width: 1.01rem;
        height: 0.99rem;
        display: block;
      }
    }
  }
}
</style>
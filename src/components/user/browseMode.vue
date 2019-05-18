<!-- 浏览模型 -->
<template>
  <div class="container-browseMode">
    <van-nav-bar
      title="浏览模型"
      left-arrow
      border
      @click-left="onClickLeft"
      @click-right="onClickRight"
    >
      <div class="projectBnt flex" slot="right">
        项目
        <img src="./user_assets/imgs/mode-seldown.png">
      </div>
    </van-nav-bar>
    <div class="project-sel" v-if="isProject">
      <div class="project-sel-i flex-between" @click="onItemShow">
        <div class="project-sel-i-l flex">
          <van-icon name="play"/>
          <div class="project-sel-i-l-title">A1栋</div>
        </div>
        <div class="project-sel-i-r flex">
          <div class="project-sel-i-r-sum">（1685）</div>
          <div class="project-sel-i-r-che">
            <van-checkbox v-model="checked">
              <img slot="icon" slot-scope="props" :src="props.checked ? icon.active : icon.normal">
            </van-checkbox>
          </div>
          <div class="project-sel-i-r-look">
            <img src="./user_assets/imgs/browseMode-look-b.png">
          </div>
        </div>
      </div>
      <div class="project-sel-i flex-between" @click="onItemShow">
        <div class="project-sel-i-l flex">
          <van-icon name="play"/>
          <div class="project-sel-i-l-title">A1栋</div>
        </div>
        <div class="project-sel-i-r flex">
          <div class="project-sel-i-r-sum">（1685）</div>
          <div class="project-sel-i-r-che">
            <van-checkbox v-model="checked">
              <img slot="icon" slot-scope="props" :src="props.checked ? icon.active : icon.normal">
            </van-checkbox>
          </div>
          <div class="project-sel-i-r-look">
            <img src="./user_assets/imgs/browseMode-look-b.png">
          </div>
        </div>
      </div>
      <div class="project-sel-i flex-between" @click="onItemShow">
        <div class="project-sel-i-l flex">
          <van-icon name="play"/>
          <div class="project-sel-i-l-title">A1栋</div>
        </div>
        <div class="project-sel-i-r flex">
          <div class="project-sel-i-r-sum">（1685）</div>
          <div class="project-sel-i-r-che">
            <van-checkbox v-model="checked">
              <img slot="icon" slot-scope="props" :src="props.checked ? icon.active : icon.normal">
            </van-checkbox>
          </div>
          <div class="project-sel-i-r-look">
            <img src="./user_assets/imgs/browseMode-look-b.png">
          </div>
        </div>
      </div>
      <div class="project-sel-i flex-between" @click="onItemShow">
        <div class="project-sel-i-l flex">
          <van-icon name="play"/>
          <div class="project-sel-i-l-title">A1栋</div>
        </div>
        <div class="project-sel-i-r flex">
          <div class="project-sel-i-r-sum">（1685）</div>
          <div class="project-sel-i-r-che">
            <van-checkbox v-model="checked">
              <img slot="icon" slot-scope="props" :src="props.checked ? icon.active : icon.normal">
            </van-checkbox>
          </div>
          <div class="project-sel-i-r-look">
            <img src="./user_assets/imgs/browseMode-look-b.png">
          </div>
        </div>
      </div>
      <div class="project-sel-i flex-between" @click="onItemShow">
        <div class="project-sel-i-l flex">
          <van-icon name="play"/>
          <div class="project-sel-i-l-title">A1栋</div>
        </div>
        <div class="project-sel-i-r flex">
          <div class="project-sel-i-r-sum">（1685）</div>
          <div class="project-sel-i-r-che">
            <van-checkbox v-model="checked">
              <img slot="icon" slot-scope="props" :src="props.checked ? icon.active : icon.normal">
            </van-checkbox>
          </div>
          <div class="project-sel-i-r-look">
            <img src="./user_assets/imgs/browseMode-look-b.png">
          </div>
        </div>
      </div>
    </div>
    <div class="project-bigimg flex-row">
      <img src="./user_assets/imgs/browseMode-big.png">
    </div>
    <div class="project-sponsor flex-row" v-if="!isProject" @click="onSponsor">
      <img src="./user_assets/imgs/browseMode-sponsor.png">
      发起
      <div class="project-sponsor-sel" v-if="isSponsor">
        <van-icon name="play" color="#222832" class="project-sponsor-sel-t"/>
        <div class="project-sponsor-sel-item flex-row" @click="onSponsorItem(1)">发起沟通</div>
        <div class="project-sponsor-sel-item flex-row" @click="onSponsorItem(2)">工程变更</div>
        <div class="project-sponsor-sel-item flex-row" @click="onSponsorItem(3)">风险控制</div>
      </div>
    </div>
  </div>
</template>

<script type='textecmascript-6'>
export default {
  data() {
    return {
      data: "browseMode",
      isProject: false,
      checked: false,
      isSponsor: false,
      icon: {
        normal: require("./user_assets/imgs/browseMode-check-b.png"),
        active: require("./user_assets/imgs/browseMode-check-a.png")
      }
    };
  },
  methods: {
    onClickLeft() {
      this.$router.back(-1);
    },
    onClickRight() {
      this.isProject = !this.isProject;
      this.isSponsor = false;
    },
    onItemShow(i) {
      console.log("项目子下拉", i);
      // 工程变更详情入口不确定--测试用
      this.$router.push({ path: "/projectChangeDetails" });
    },
    onSponsor() {
      this.isSponsor = !this.isSponsor;
    },
    onSponsorItem(i) {
      if (i == 1) {
        // 发起沟通
        this.$router.push({ path: "/sponsorSee" });
      } else if (i == 2) {
        // 工程变更路由
        this.$router.push({ path: "/projectChange" });
      } else if (i == 3) {
        // 风险控制路由
        // this.$router.push({ path: "/" });
      }
    }
  }
};
</script>
<style lang='stylus' scoped rel='stylesheet/stylus'>
@import './user_assets/base.css';

.container-browseMode {
  width: 100%;
  height: 100%;
  background: rgba(246, 248, 250, 1);

  .project-bigimg {
    height: 90%;
  }

  .project-bigimg img {
    width: 7.5rem;
    height: 7.75rem;
    display: block;
  }

  .project-sponsor {
    position: fixed;
    top: 1.7rem;
    right: 0.312rem;
    width: 2.1rem;
    height: 0.76rem;
    z-index: 10;
    background: rgba(89, 146, 255, 1);
    border-radius: 0.11rem;
    font-size: 30px;
    font-family: SourceHanSansCN-Medium;
    font-weight: 500;
    color: rgba(255, 255, 255, 1);

    .project-sponsor-sel {
      position: absolute;
      top: 0.76rem;
      left: 0;
      width: 1.63rem;
      margin-top: 0.16rem;
      background: rgba(34, 40, 50, 0.9);
      border-radius: 0.11rem;
      padding: 0 0.2rem;

      .project-sponsor-sel-t {
        position: absolute;
        top: -0.2rem;
        left: 0.1rem;
        transform: rotate(-90deg);
        z-index: -1;
      }

      .project-sponsor-sel-item {
        padding: 0.35rem 0;
        border-bottom: 0.0133rem solid #8A8A8A;
      }
    }

    img {
      width: 0.338rem;
      height: 0.338rem;
      display: block;
      margin-right: 0.2rem;
    }
  }

  .project-sel {
    position: fixed;
    top: 1.36rem;
    left: 0;
    width: 10rem;
    background-color: #ffffff;
    z-index: 10;

    .project-sel-i {
      padding: 0 0.312rem;
      height: 1.17rem;
      border-bottom: 0.0133rem solid #E5E5E5;
    }

    .project-sel-i-l {
      font-size: 30px;
      font-family: SourceHanSansCN-Regular;
      font-weight: 400;
      color: rgba(51, 51, 51, 1);

      .project-sel-i-l-title {
        margin-left: 0.364rem;
      }
    }

    .project-sel-i-r {
      font-size: 30px;
      font-family: SourceHanSansCN-Regular;
      font-weight: 400;
      color: rgba(51, 51, 51, 1);
    }

    .project-sel-i-r-che {
      margin: 0 0.266rem;
      height: 0.7rem;

      .van-checkbox {
        overflow: none !important;
        height: 0.7rem;
      }

      .van-checkbox__icon img {
        width: 0.56rem;
        height: 0.56rem;
        display: block;
      }
    }

    .project-sel-i-r-look img {
      width: 0.4rem;
      height: 0.29rem;
      display: block;
    }
  }

  .projectBnt {
    font-size: 30px;
    font-family: SourceHanSansCN-Normal;
    font-weight: 400;
    color: rgba(153, 153, 153, 1);

    img {
      width: 0.48rem;
      height: 0.32rem;
      display: block;
      margin-left: 0.32rem;
    }
  }
}
</style>
<style>
.van-nav-bar__right {
  height: 1.18rem;
  line-height: 1.18rem;
}
</style>

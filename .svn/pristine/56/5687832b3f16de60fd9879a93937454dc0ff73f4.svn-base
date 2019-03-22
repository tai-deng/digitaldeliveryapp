<!-- 首页 -->
<template>
  <div class="container-index">
    <div class="warpper">
      <div>
        <!-- 头部 -->
        <van-nav-bar
          title="标题"
          left-text="菜单"
          right-text="按钮"
          left-arrow
          @click-left="onClickLeft"
          @click-right="onClickRight"
        />

        <div class="wrapper">
          <!-- <span>{{demoIndex}}</span> -->
        </div>
        <transition name="layer-b">
          <div class="layer-bg" v-if="isShowMenu"></div>
        </transition>
      </div>
    </div>
  </div>
</template>

<script type='textecmascript-6'>
// vuex
import { mapMutations } from "vuex";
// 组件

export default {
  data() {
    return {
    };
  },
  computed: {
    isShowMenu() {
      return this.$store.getters.getIsShowMenu;
    }
  },
  methods: {
    onClickLeft() {
      //打开侧边栏
      this.upIsShowMenu(true);
    },
    onClickRight() {
      // Toast('按钮');
    },

    ...mapMutations({
      upIsShowMenu: "IS_SHOW_MENU"
    })
  },
  components: {
    // flooter
  }
};
</script>
<style lang='stylus' scoped rel='stylesheet/stylus'>
.container-index
  width 750px
  overflow hidden
  .warpper
    width 100%
    height 100%
    .layer-bg
      position absolute
      top 0
      left 0
      width 100%
      height 100%
      z-index 999
      background-color black
      opacity .3
</style>
<style>
.layer-b-enter,
.layer-b-leave-to {
  opacity: 0 !important;
}
.layer-b-enter-active,
.layer-b-leave-active {
  transition: opacity .3s;
}
.layer-b-enter-to,
.layer-b-leave {
  opacity: .3;
}

/* .menu-leave-active,
.menu-enter-active {
  transition: all 5s ease;
}
.menu-leave-active,
.menu-enter {
  width: 0px !important;
}
.menu-leave,
.menu-enter-active {
  width: 600px;
} */
</style>

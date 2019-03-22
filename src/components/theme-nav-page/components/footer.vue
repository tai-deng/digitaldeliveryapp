<!-- 导航栏 -->
<template>
  <div class="container-footer">
    <!-- 分包 -->
    <van-tabbar v-model="active" active-color="#07c160">
      <van-tabbar-item icon="home-o">工作台</van-tabbar-item>
      <van-tabbar-item icon="search">智慧工地</van-tabbar-item>
      <van-tabbar-item icon="plus" class="issue">发布</van-tabbar-item>
      <van-tabbar-item icon="search">AI报表</van-tabbar-item>
      <van-tabbar-item icon="setting-o">建造动态</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script type='textecmascript-6'>
// vuex
import {mapMutations} from 'vuex'
export default {
  data() {
    return {
      active: this.$store.getters.pageActive // tab导航下标
    };
  },
  watch: {
    /**
     * 侦听全局导航tab切换
     */
    active(index) {
      console.log("%c 导航下标:", "color:DimGray", index);
      this.re_index(index)
      //导航路由
      this.$router.push({
        path: [
          "index",
          "wisdom-site",
          "",
          "AI-report",
          "dynamic"
        ][index]
      });
    }
  },
  methods:{
    ...mapMutations({
      re_index:'GET_PAGE_ACTIVE'
    }),
  }
};
</script>
<style lang='stylus' scoped rel='stylesheet/stylus'>
.container-footer
  width 100%
  height 100%
  overflow hidden
  
</style>
<style>
.container-footer .van-tabbar-item{
  font-size: 24px
}
.container-footer .van-icon:before{
  font-size: 30px
}
.issue  .van-icon-plus:before{
  font-size:60px;
  position: absolute;
  top:-90px;
  left: -40px;
  text-align: center;
  background-color: white;
  border-radius: 50%;
  padding: 20px;
}
.van-tabbar-item__text{
  margin-top: 10px;
}
/* .issue .van-tabbar-item__text{
  margin-bottom: 80px;
} */

.container-footer .van-tabbar--fixed {
  height: 80px;
  width: 750px;
  position: absolute;
}
</style>

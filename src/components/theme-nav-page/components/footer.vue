<!-- 导航栏 -->
<template>
  <div class="container-footer">
    <!-- 发布-模态框 -->
    <div v-show='showMoune' class='footer_module' @click="closeModel" >
      <div class='footer_module_body'>
          <ul>
            <li @click="jump(1)">
                <img src="../../../assets/imgs/weixin.png" alt="">
                <p>扫码看模</p>
            </li>
            <li @click="jump(2)">
               <img src="../../../assets/imgs/talking.png" alt="">
                <p>沟通协调</p>
            </li>
            <li @click="jump(3)">
               <img src="../../../assets/imgs/dayChange.png" alt="">
                <p>风险管理</p>
            </li>
            <li @click="jump(4)">
               <img src="../../../assets/imgs/people.png" alt="">
                <p>人力资源</p>
            </li>
            <li @click="jump(5)">
               <img src="../../../assets/imgs/buyingAll.png" alt="">
                <p>物资采购</p>
            </li>
            <li @click="jump(6)">
               <img src="../../../assets/imgs/getThing.png" alt="">
                <p>材料出入库</p>
            </li>
            <li @click="jump(7)">
               <img src="../../../assets/imgs/resetAll.png" alt="">
                <p>整改认证</p>
            </li>
            <li @click="jump(8)">
               <img src="../../../assets/imgs/progress.png" alt="">
                <p>进度认证</p>
            </li>
          </ul>
      </div>
    </div>
    <!-- 分包 -->
    <van-tabbar v-model="active" active-color="#13161C">
      <van-tabbar-item>
        <span>工作台</span>
          <img
            slot="icon"
            slot-scope="props"
            :src="props.active ? icon.a1[0] : icon.a1[1]"
          >
      </van-tabbar-item>
      <van-tabbar-item>
        <span>人员考勤</span>
          <img
            slot="icon"
            slot-scope="props"
            :src="props.active ? icon.a2[0] : icon.a2[1]"
          >
      </van-tabbar-item>
      <van-tabbar-item  class="issue" @click="showMune">
        <span>发布</span>
          <img
            slot="icon"
            src="../assets/9.png"
          >
      </van-tabbar-item>
      <van-tabbar-item>
        <span>AI报表</span>
          <img
            slot="icon"
            slot-scope="props"
            :src="props.active ? icon.a3[0] : icon.a3[1]"
          >
      </van-tabbar-item>
      <van-tabbar-item>
        <span>建造动态</span>
          <img
            slot="icon"
            slot-scope="props"
            :src="props.active ? icon.a4[0] : icon.a4[1]"
          >
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script type='textecmascript-6'>
// vuex
import {mapMutations} from 'vuex'
export default {
  data() {
    return {
      showMoune:false,
      active: this.$store.getters.pageActive, // tab导航下标
      icon:{
         a1:[require('../assets/2.png'),require('../assets/1.png')],
         a2:[require('../assets/4.png'),require('../assets/3.png')],
         a3:[require('../assets/6.png'),require('../assets/5.png')],
         a4:[require('../assets/8.png'),require('../assets/7.png')],
      }
    };
  },
  watch: {
    /**
     * 侦听全局导航tab切换
     */
    active(index) {
      console.log("%c 导航下标:", "color:DimGray", index);
      this.re_index(index)
      if(index ==2){
        this.showMoune=true;
      }else{
        this.showMoune=false;
      }
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
    // 显示发布模态框
    showMune(){
        this.showMoune=!this.showMoune;
    },
    // 发布模态框路由
    jump(n){
      if(n==1){ //扫码看模
        //??
      }else if(n==2){ //沟通协调
        this.$router.push({ path: "/sponsorSee" });
      }else if(n==3){ //日常巡查
        this.$router.push({ path: "/daily" });
      }else if(n==4){ //人力资源
        this.$router.push({ path: "/manpower" });
      }else if(n==5){ //物资采购
        this.$router.push({ path: "/purchase" });
      }else if(n==6){  //材料出入库
        this.$router.push({ path: "/materials" });
      }else if(n==7){  //整改认证
        this.$router.push({ path: "/abarbeitung" });
      }else if(n==8){  //进度认证
        this.$router.push({ path: "/Progress" });
      }
    },
    //点击模态框--关闭发布
    closeModel(){
      this.showMoune=false;
    },
  }
};
</script>
<style lang='stylus' scoped rel='stylesheet/stylus'>
.container-footer
  width 100%
  height 98px

  
</style>
<style>
.container-footer .van-tabbar-item{
  font-size: 24px
}
.container-footer .van-icon:before{
  font-size: 30px
}
/* .issue  .van-icon-plus:before{
  font-size:60px;
  position: absolute;
  top:-40px;
  left: -33px;
  text-align: center;
  background-color: #5A92FF;
  border-radius: 50%;
  padding: 15px;
  z-index: 10;
  color: white
} */
.container-footer .van-tabbar-item__text{
  margin-top: 5px;
  font-size:20px;
font-family:SourceHanSansCN-Medium;
font-weight:500;
  /* border:2px solid #EBEEF5; */
  z-index: 120;

}
.container-footer .issue .van-tabbar-item__text{
  margin-bottom: 30px
}
.container-footer .van-tabbar--fixed {
  height: 98px;
  width: 750px;
  position: absolute;
  box-shadow: 0 -4px 6px rgba(0,0,0,.06)
}
.container-footer .van-tabbar-item__icon img{
   width: 48px;
   height: 46px;
} 
.container-footer .issue .van-tabbar-item__icon img{
  width: 76px;
  height: 76px;
  z-index: 300;
  position: relative;
  margin-top: -2px;
}
.container-footer .footer_module{
    position: absolute;
    width: 100%;
    height: 94%;
    background-color: rgba(121,121,121,0.6);
    left:0;
    bottom:90px;
    z-index: 200;
}
.container-footer .footer_module_body{
  height:350px;
  width: 100%;
  background-color: #ffffff;
  position: absolute;
  left:0;
  bottom:0;
  box-sizing: border-box;
}
.container-footer .van-hairline--top-bottom {
  z-index: 600 !important;
}
.footer_module_body li{
  display: block;
  float:left;
  width: 25%;
  height: 160px;
  box-sizing: border-box;
  padding-top:10px;
  text-align: center;
}
.footer_module_body li img{
  width: 80px;
  height: 80px;
}
.footer_module_body li p{
  padding-top:10px;
  color: #6A6A6A;
  font-size: 30px;
}
</style>

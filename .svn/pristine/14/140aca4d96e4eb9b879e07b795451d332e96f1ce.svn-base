<!-- 我的发布 -->
<template>
 <div class='container-my-issue'>
 <div class='wrapper'>
   <van-nav-bar
  :title="title"
  left-arrow
  @click-left="onClickLeft"
/>
<!-- 任务 -->
<issuetab bgColor="#5892ff" fontColor="#ffffff" tabStyle="2"></issuetab>

 </div>
 </div>
</template>

<script type='textecmascript-6'>
// 组件
import issuetab from '../components/issue'
export default {
 data() {
   return {
       title:'--',//页面标题
       active: 0,
      tableData: [
        {
          building: "A1栋",
          name: "3F主体结构",
          date: "2019.01.01",
          state: "正常"
        },
        {
          building: "A1栋",
          name: "3F主体结构",
          date: "2019.01.01",
          state: "滞后"
        },
        {
          building: "A1栋",
          name: "3F主体结构",
          date: "2019.01.01",
          state: "正常"
        },
        {
          building: "A1栋",
          name: "3F主体结构",
          date: "2019.01.01",
          state: "正常"
        }
      ],
   }
 },
 created(){
   console.log(this.$route)
   if(this.$route.query.id==0){
     this.title = '消息中心'
   }else if(this.$route.query.id == 1){
       this.title = '任务中心'
   }
 },
 methods:{
     onClickLeft(){
         this.$router.push({path:'/nav/to/index'})
     }
 },
  components:{issuetab},

}

</script>
<style lang='stylus' scoped rel='stylesheet/stylus'>
.container-my-issue
  width 100%
  height 100%
</style>
<style>
.container-my-issue .van-nav-bar{
  height: 88px;
}
.container-my-issue .van-nav-bar__title{
      height: 88px;
    line-height: 88px;
    font-size:36px;
font-family:PingFang-SC-Medium;
font-weight:bold;
color:rgba(51,51,51,1);
}
.container-my-issue .van-nav-bar .van-icon{
  font-size: 44px;
  color: #333333;
  vertical-align:initial;
  padding: 20px 40px 20px 0
}
</style>

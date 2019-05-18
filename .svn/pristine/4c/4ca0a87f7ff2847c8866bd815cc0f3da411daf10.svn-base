<!-- 人力资源详情页  -->
<template>
  <div class="container-manpower-detail">
    <van-nav-bar title="详情" fixed class="i-nav">
      <span class="el-icon-arrow-left fontsize" slot="left"></span>
    </van-nav-bar>

    <van-row class="md-top">
      <van-col span="5">
        <img src="" class="head-pic" alt="">
      </van-col>
      <van-col span="18" offset="1" class="md-top-txt">
        <van-row gutter="20">
          <van-col span="9">
            <span>姓名：</span>
            <span>王某某</span>
          </van-col>
          <van-col span="8">
            <span>性别：</span>
            <span>男</span>
          </van-col>
          <van-col span="7">
            <span>年龄：</span>
            <span>36</span>
          </van-col>
        </van-row>
        <div class="txt-id"><span>身份证：</span><span>43095867484759</span></div>
        <div class="txt-tel"><span>手机号：</span><span>1354643748</span></div>
      </van-col>
    </van-row>

    <div class="md-item"><span>民族：</span><span>汉</span></div>
    <div class="md-item"><span>工种：</span><span>混泥土工</span></div>
    <div class="md-item"><span>门禁卡号：</span><span>123456789</span></div>
    <div class="md-item"><span>家庭住址：</span><span>湖南省长沙市某区某楼某号</span></div>
    <div class="md-item"><span>特种作业证证号：</span><span>123466787898</span></div>
    <div class="md-item"><span>操作类别：</span><span>电工作业</span></div>
    <div class="md-item"><span>初次领证日期：</span><span>2019/02/02</span></div>
    <div class="md-item"><span>使用日期：</span><span>2年</span></div>
    <div class="md-item"><span>所属公司：</span><span>某某公司</span></div>
    <div class="md-item"><span>班组：</span><span>班组一</span></div>
    <div class="md-item"><span>工资卡号：</span><span>123456789789456123</span></div>
    <div class="md-item"><span>劳动合同签署状态：</span><span>已签署</span></div>
    <div class="md-item"><span>工资发放状态：</span><span>已发放</span></div>
    <div class="md-item-no">
        <div>本月考勤天数</div>
        <van-row type="flex" justify="space-around" class="item-small">
            <van-col span="6" class="normal">（正常）：26</van-col>
            <van-col span="6" class="be-late">（迟到）：4</van-col>
            <van-col span="6" class="leave-early">（早退）：4</van-col>
            <van-col span="6" class="absence">（缺勤）：4</van-col>
        </van-row>
    </div>
  </div>
</template>
<script type='textecmascript-6'>
export default {
  data() {
    return {};
  }
};
</script>
<style scoped>
/* 导航栏 begin */
.i-nav.van-nav-bar {
  height: 88px;
  line-height: 88px;
}
.i-nav .van-nav-bar__title {
  font-size: 36px;
  /* font-family: 'Microsoft YaHei'; */
  font-weight: 600;
}
.i-nav .van-nav-bar__left,
.i-nav .van-nav-bar__right {
  font-size: 42px;
}
/* 导航栏 end */

/* 上部 begin */
.md-top{
    background: #5A92FF;
    padding: 20px;
    margin-top: 88px;
    display: flex;
    justify-content: center;
}
.md-top .head-pic{
    width: 160px;
    height: 210px;
}
.md-top-txt{
    font-size: 28px;
    color: white;
    display: flex;
    justify-content: center;
    flex-direction: column;
}
.md-top-txt .txt-id, .md-top-txt .txt-tel{
    margin-top: 40px;
}
/* 上部end */
.md-item{
    font-size: 28px;
    height: 88px;
    line-height: 88px;
    background-color: white;
    position: relative;
    padding: 0 20px;
    border-bottom: 1px solid #f6f8fa;
}
.md-item-no{
    font-size: 28px;
    height: 44px;
    line-height: 44px;
    padding: 10px 20px 0 20px;
}
.md-item::after{
    position: absolute;
    bottom: 0;
    left: 20px;
    right: 20px;
    height: 1px;
    content: " ";
    -webkit-transform: scaleY(0.5);
    transform: scaleY(0.5);
    background-color: #f6f8fa;
}
.item-small{
    height: 88px;
    line-height: 88px;
    font-size: 22px;
}
.item-small .normal{
    color: #6593F7;
}
.item-small .be-late{
    color: #EF8061;
}
.item-small .leave-early{
    color: #56BC8B;
}
.item-small .absence{
    color: #9B9B9B;
}

</style>


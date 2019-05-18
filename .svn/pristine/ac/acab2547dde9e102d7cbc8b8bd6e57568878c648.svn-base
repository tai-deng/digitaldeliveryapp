<!-- 管控详情 -->
<template>
  <div class="container-control-details">
    <!-- 头部 -->
    <van-nav-bar title="管控详情" @click-left="goBack" fixed :border="false" :z-index="100">
      <span class="el-icon-arrow-left fontsize" slot="left"></span>
    </van-nav-bar>
    <div class="wrapper">
      <div v-if="detailsLists.length != 0">
        <div class="wrapper_box" v-for="detailsList in detailsLists" :key="detailsList.index" >
          <div class="box_title" >
            <i class="title_index">{{detailsList.Mode+1}}</i>
            <span class="programme" v-if="detailsList.Mode == 0">施工方案</span>
            <span class="programme" v-else-if="detailsList.Mode == 1">技术交底 </span>
            <span class="programme" v-else-if="detailsList.Mode == 2">工序验收</span>
          </div>
          <div class="box_content">
            <div class="content_row" :style="{'background-color': detailsList.FileName == '' || detailsList.FileName == null ? '#5A93FF': '#ddd' }">
              <span>{{detailsList.SchemeName}}</span>
              <img :src="imgUrl" alt="" @click="showImg(detailsList.FileUrl)">
            </div>
            <div class="box_footer">
              <span class="footer_title">上传人:<span> {{detailsList.Uploader}}</span></span>
              <span class="footer_title">认证时间:<span> {{detailsList.ConfirmDate | formatterTime}}</span></span>
            </div>
          </div>
        </div>
      </div>
      <div class="no-data" v-else>暂无数据</div>
    </div>
  </div>
</template>

<script type='textecmascript-6'>
import {GetQCManage} from '@/api/api.js'

export default {
  compenets:{
    GetQCManage
  },
  data() {
    return {
      imgUrl:require('../../../assets/imgs/control.png'),
      detailsLists: [],//详情列表
      disabledRow: true, //禁用状态
      TaskID:'', //查询id
      userid:'', //用户id
    };
  },
  mounted(){
    // 查询id
    this.TaskID = this.$route.query.TaskID
    this.userid = this.$route.query.userid
    this.load();
    //获取质量管理信息
    this.Request(GetQCManage({TaskID:this.TaskID,userid:this.userid})).then(res=>{
      // console.log('获取质量管理信息',res)
      this.$toast.clear();
      if(res.StatusCode===200){
        this.detailsLists = res.Detiel
      }else{
       this.$message({type:'error',message:res.Message,center:'true'})
      }
    })

  },
  methods: {
    //返回
    goBack() {
      this.$router.push({ path: "/quality" });
    },
    showImg(value){ //打开文件地址
      if(value){
        window.location.href = `http://view.officeapps.live.com/op/view.aspx?src=${value}`
      }else{
        this.$message({type:'error',message:'暂无文件',center:'true'})
      }
    },
  }
};
</script>
<style lang='stylus' scoped rel='stylesheet/stylus'>
.container-control-details
  width 100%
  height 100%
  .van-nav-bar
    height 88px
    line-height 88px
    border-bottom 1px solid #E5E5E5
    .fontsize
      font-size 42px
      color #333
      display inline-block
      vertical-align middle
  .wrapper
    margin-top 88px
    background:#f6f8fa
    .wrapper_box
      width 100%
      height auto
      padding 0 24px
      box-sizing border-box
      background-color #fff
      margin-bottom 20px
      .box_title
        height 80px
        line-height 80px
        .title_index
          font-style normal
          display inline-block
          width 40px
          height 40px
          background-color #5A93FF
          border-radius 50%
          text-align center
          font-size 30px
          color #fff
          vertical-align baseline
          line-height 40px
        .programme
          margin-left 20px
          font-size 36px
          color #333
      .box_content
        margin-top 8px
        .content_row
          height 88px
          line-height 88px
          font-size 32px
          border-radius 8px
          color #fff
          margin-top 20px
          span
            margin-left 40px
            display inline-block
            width 562px
            height 40px
            line-height 40px
            vertical-align middle
            border-right 2px dashed #C6DAFF
          img
            width 40px
            height 40px
            vertical-align middle
            margin-left 28px
        .content_row:first-child
          margin 0
        .disabled_row
          background:#ddd
      .box_footer
        height 90px
        line-height 90px
        font-size 30px
        display flex
        .footer_title
          color #333
          flex 1
          span 
            color #666
</style>
<style>
/* 顶部表头 */
.container-control-details .van-nav-bar .van-nav-bar__title {
  font-size: 36px;
}
.no-data{width: 100%;height: 80px;line-height: 80px;text-align: center;color: #999}
</style>

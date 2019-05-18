<!-- 消息中心 -->
<template>
  <div class="container-message-centre">
    <div class="vheader">
      <van-nav-bar
        title="消息中心"
        left-arrow
        @click-left="onClickLeft"
      />
    </div>
    <div class="wrapper">
      <div class="hold"></div>
      <!-- @load="onLoadMore" -->
      <van-list v-model="loading" :offset="30" :finished="finished" finished-text="没有更多了" @load="onLoadMore">
        <van-cell v-for="item in list" :key="item.index"><span class="message">{{item.Message}}</span><p class="time">{{item.Time}}</p></van-cell>
      </van-list>
    </div>
  </div>
</template>

<script type='textecmascript-6'>
//混入
import interfaces from "../modules/interfaces.js"

import {QueryNoticeList} from '@/api/api.js'
export default {
  mixins: [interfaces],
  data() {
    return {
      list: [],//公告列表
      loading: false,//加载中
      finished: false,//是否加载到了最后
      rows:10,//第次加载条数
      page:1,//第几页
    };
  },
  created(){
    this._initData()
  },
  methods: {
    _initData() {
      this.loadNotices()
    },
    loadNotices(){
      let params = {
        UserId: Number(localStorage.getItem("userId")),
        ProjectId: localStorage.getItem("projectid"),
        page: this.page,
        rows: this.rows
      };
      this.loading = true;
      this.queryNoticeList(params).then(res=>{
        this.list.push(...res.Detiel)
        console.log(this.list)
      // 加载状态结束
        this.loading = false;
        // 数据全部加载完成
        if (this.list.length >= res.Count) {
          this.loading = false;
          this.finished = true;
        }
      })
    },
    onLoadMore(){
      this.page++
      this.loadNotices()
    },
    onClickLeft(){this.$router.push({path:'/nav/to/index'})}
  }
};
</script>
<style lang='stylus' scoped rel='stylesheet/stylus'>
.container-message-centre
  width 100%
  height 100%
  .vheader
    width: 100%;
    height 88px
  .wrapper
    width 100%
    // height 200px
    overflow auto
    // height 100%
    // .hold
    //   height 88px
    //   width 100%
    .message
      display block
      line-height 40px
      margin-top 10px
    .time
      font-size 24px
      color #666
      // text-align right
</style>
<style>
.container-message-centre .van-nav-bar{
  height: 88px;
}
.container-message-centre .van-nav-bar__title{
      height: 88px;
    line-height: 88px;
    font-size:36px;
font-family:PingFang-SC-Medium;
font-weight:bold;
color:rgba(51,51,51,1);
}
.container-message-centre .van-nav-bar .van-icon{
  font-size: 44px;
  color: #333333;
  vertical-align:initial;
  padding: 20px 40px 20px 0
}
.container-message-centre .van-nav-bar .van-nav-bar__title {
  font-size: 36px;
}
.container-message-centre  .van-cell{
  font-size: 28px;
  line-height: 60px;
  border-bottom: 1px solid rgba(0,0,0,.1)
}
.container-message-centre .wrapper{
  height: calc(100% - 88px);
}
</style>
<template>
  <!-- 建造动态 评论模块 -->
  <div class="container-appraise" ref="offHeight">
    <div class="appraise">
      <div class="left">
        <img :src="iphoto?'http://47.112.21.206:8004'+iphoto:avater" alt="">
      </div>
      <div class="right">
        <p class="name">{{name}}&nbsp;&nbsp;
          <span class="labels" v-if="type==1">进度类</span>
          <span class="labels" v-if="type==2">质量类</span>
          <span class="labels" v-if="type==3">安全类</span>
          <span class="labels part" v-if="part">{{part}}</span>
          <span class="labels part" v-else>{{WorkArea}}</span>
        </p>
        <p class="content">{{content}}
          <span class="content-but" v-if="content.length>800">全文</span>
        </p>

        <div class="imgs" v-if="photolist.length>0">
          <div class="imgdiv" v-for="item in photolist" :key="item.index" @click="getPathImg(item.Path)">
            <img :src="item.SmallPath">
          </div>
          <div class="imgdiv"  style="height:0"></div>
          <div class="imgdiv"  style="height:0"></div>
          <!-- <span  style="border:1px solid #fff;height:0" > </span>
          <span  style="border:1px solid #fff;height:0"  v-if="photolist.length%3==1"></span> -->
        </div>

        <p class="time-or-like">{{time}}<img :src="liked?imgLike[0]:imgLike[1]"  @click="like(id,liked)"></p>
        <p class="like-perpon" v-if="names.length"><img src="./like.png">&nbsp;&nbsp; 
          <span v-for="(like,index) in names" :key="like.index">{{like.UserName}} <span v-if="index<likelist.length-1">,</span> </span>
        </p>
      </div>
    </div>
    <!-- 图片放大 -->
    <!-- <div class="look-img" v-if="onLookIMG">
       <div class="big-img-box">
         <img src="" alt="">
       </div>
    </div> -->

    
  </div>
</template>
<script>
// import { LikeSchedule } from '../../api/index.js'
// import res from '../../common/mixins/res.js'
// import { ImagePreview } from 'vant'
// import { Message } from 'element-ui';
export default {
  // mixins:[res],
  props: ["name", "content", "time",'type','part','photolist','iphoto','id','likelist','CurUserIsLiked','WorkArea','pathImages'],
  data() {
    return {
      avater: require('./avater.png'),
      liked:this.CurUserIsLiked,// 是否已点赞
      imgLike:[require('./like.png'),require('./notLike.png')],
      names:this.likelist,
      onLookIMG:true,//是否查看图片开关
      
    };
  },
  methods: {
    async like(dynamicId,liked){
      console.log(dynamicId,liked)
      // let myName = JSON.parse(localStorage.getItem('userInfo')).loginUserInfo.cName
      // console.log(dynamicId,liked,this.names)
      // this.liked=this.CurUserIsLike = !liked
      // console.log(this.liked)
      // let data = await this.Request(LikeSchedule({dynamicId,isLiked:this.CurUserIsLike}))
      // if(data.StatusCode==200){
      //   if(this.liked){
      //     Message({message:'点赞成功',type:'success'})
      //     this.names.push({
      //       UserName: myName
      //     })
      //   }else{
      //     Message({message:'已取消',type:'success'})
      //     let names = this.names
      //     names.forEach((i,index) => {
      //       console.log(i.UserName,index)
      //       if(i.UserName==myName) {
      //         this.names.splice(index,1)
      //         return
      //       }
      //     });
      //   }
        
      // }
      // console.log(data,this.CurUserIsLike)
    },
    // 点击放大图片
    getPathImg(id){
      console.log(id)
      // 仅看点击的动态 的几个图片
      // let images = []
      // let startPosition = 0
      // this.photolist.forEach((i,index)=>{
      //   images.push(i.Path)
      //   if(id==i.Path){
      //      console.log(index)
      //      startPosition=index
      //   }
      // })
      // console.log(images)
      
      // ImagePreview({
      //     images,
      //     startPosition,
      //     onClose() {
      //       // do something
      //     }
      //   });


      // 查看全部加载出来的图片列表
      //  ImagePreview({
      //     images: this.pathImages,
      //     startPosition: 1,
      //     onClose() {
      //       // do something
      //     }
      //   });
    },


  /***滑动限制***/
  stop(){
    var mo=function(e){e.preventDefault();};
    document.body.style.overflow='hidden';
    document.addEventListener("touchmove",mo,false);//禁止页面滑动
  },
  /***取消滑动限制***/
  move(){
    var mo=function(e){e.preventDefault();};
    document.body.style.overflow='';//出现滚动条
    document.removeEventListener("touchmove",mo,false);
  }






    
  }
};
</script>
<style lang="stylus" scoped>
.container-appraise
  width 100%
  margin-bottom 20px
  .appraise
    display flex
    margin 0 auto
    padding 20px 0
    width 690px
    background-color white
    .left
      width 80px
      margin-right 20px
      img
        width 80px
        height 80px
        border-radius 50%
    .right
      flex 1
      .name
        color #333333
        font-size 30px
        margin 15px 0
        .labels
          display inline-block
          padding 4px 20px
          background-color #2577E3
          color white
          font-size 22px
          margin 0 8px
          border-radius 10px
        .part
          padding 6px 20px
          margin-top 20px
      .content
        color #333333
        font-size 28px
        padding-bottom 20px
        .content-but
          float right
          color #999999
      .imgs
        display flex
        justify-content space-around
        flex-wrap wrap
        width 100%
        margin 10px 0 30px 0
        border none
        .imgdiv 
          width 190px
          height 190px
          margin-bottom 8px
          overflow hidden
          img  
            display block
            width 150%
            height auto
      .time-or-like
        color #999999
        font-size 26px
        img 
          width 34px
          height 34px
          float right
          border none
      .like-perpon
        width 100%
        padding 30px 18px
        background-color #f1f5f8
        vertical-align middle
        margin-top 14px
        img 
          display inline-block
          width 30px
          height 30px
          vertical-align: middle
          border-radius 10px

</style>

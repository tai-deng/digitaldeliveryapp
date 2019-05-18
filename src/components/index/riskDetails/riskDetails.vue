<!--  -->
<template>
  <div class="container-risk_details">
    <!-- 头部 -->
    <van-nav-bar title="风险管理详情" @click-left="goBack" fixed :border="false" :z-index="100" class="my-nav-bar">
      <span class="el-icon-arrow-left fontsize" slot="left"></span>
    </van-nav-bar>
    <!-- 待接收 -->
    <div class="wrapper">
      <div class="details_box">
        <div class="details">
          <span>
            主题：
            <span>{{theme}}</span>
          </span>
        </div>
        <div class="details">
          <span>
            问题类型：
            <span>{{problemType}}</span>
          </span>
        </div>
        <div class="details">
          <span>
            楼栋：
            <span>{{building}}</span>
          </span>
        </div>
        <div class="details">
          <span>
            楼层：
            <span>{{floor}}</span>
          </span>
        </div>
        <div class="details">
          <span>
            发起人：
            <span>{{initiator}}</span>
          </span>
        </div>
        <div class="details">
          <span>
            发起时间：
            <span>{{initiateTime}}</span>
          </span>
        </div>
        <div class="describe">
          <span>
            描述：
            <span class="describe_content">{{problem}}</span>
          </span>
        </div>
      </div>
      <div class="picture">
        <p class="photo">照片</p>
        <div class="photo_img">
          <img class="photoImg" v-for="(item, index) in photoList" :key="index" :src="item" alt>
        </div>
      </div>
      <div class="details_box">
        <div class="details">
          <span>
            接收人：
            <span v-for="(item, index) in receiverList" :key="index" style="margin-right:20px;">{{item.cName}}</span>
          </span>
        </div>
        <div class="details details_border">
          <span>
            整改截止时间：
            <span>{{eeadLine}}</span>
          </span>
        </div>
      </div>
      
      <div v-if="currentPersonState === 3">
        <div class="information">认证信息</div>
        <!-- <div class="completion_time" @click="is_show_picker">
          完成时间：
          <input type="text" placeholder="请选择完成时间" :value="valueTime">
          <span class="el-icon-arrow-right"></span>
        </div> -->
        <van-field
            placeholder="请选择认证时间"
            label="认证时间："
            right-icon="calender-o"
            readonly
            v-model="authTime"
            label-width="80"
            class="my-field"
            @click="showAouthTimePopup"
          />
        <div class="picture upload">
          <p class="photo">上传照片</p>
          <div class="photo_img">
            <!-- <img class="photoImg" src="../../../assets/imgs/storied_building.png" alt> -->
            <van-uploader :before-read="beforeRead" :after-read="afterRead" accept="image/*" :max-size="8388608" @oversize="oversize" class="photo-uploader">
              <van-icon name="photograph" />
            </van-uploader>
            <!-- <div class="Img">
              <img class="photoImg" src="../../../assets/imgs/storied_building.png" alt>
              <van-icon name="clear" />
            </div>
            <div class="img">
              <img class="upload_photos" src="../../../assets/imgs/upload_photos.png" alt="">
            </div> -->
            <span class="uploader-txt">最多上传3张</span>
          </div>
        </div>
      </div>

      <div v-if="currentPersonState === 4">
        <div class="information">认证信息</div>
        <div class="completion_time">
          认证时间：<span>{{authTime}}</span>
        </div>
        <div class="picture upload">
          <p class="photo">认证照片</p>
          <div class="photo_img">
            <div class="Img">
              <img class="photoImg" v-for="(item, index) in authPhotoList" :key="index" :src="item" alt>
            </div>
          </div>
        </div>
      </div>

      <div class="confirm" v-if="isShow && isMe && currentPersonState == 0">
        <van-button type="danger" block class="my-button rejection" @click="onSubmit(2)" :loading="rejectionLoading">拒收</van-button>
        <van-button type="info" block class="my-button receive" @click="onSubmit(3)" :loading="receiveLoading">接收</van-button>
      </div>
      <div class="confirm" v-if="isShow && isMe && currentPersonState == 3">
        <van-button type="info" block class="my-button authentication" @click="onSubmit(4)" :loading="authLoading">认证</van-button>
      </div>
    </div>
    <!-- 整改中 -->
    <div class="wrapper" v-if="active == 0" style="display:none">
      <div class="details_box">
        <div class="details">
          <span>
            主题:
            <span>A1栋地下室未清底</span>
          </span>
        </div>
        <div class="details">
          <span>
            问题类型:
            <span>基础施工</span>
          </span>
        </div>
        <div class="details">
          <span>
            发起人:
            <span>李三思</span>
          </span>
        </div>
        <div class="details">
          <span>
            发起时间:
            <span>2018.01.01</span>
          </span>
        </div>
        <div class="describe">
          <span>
            描述:
            <span class="describe_content">a1栋地下室存在较大砂砾，基坑底部不平整。</span>
          </span>
        </div>
      </div>
      <div class="picture">
        <p class="photo">照片</p>
        <div class="photo_img">
          <img class="photoImg" src="../../../assets/imgs/storied_building.png" alt>
          <img class="photoImg" src="../../../assets/imgs/storied_building.png" alt>
          <img class="photoImg" src="../../../assets/imgs/storied_building.png" alt>
          <img class="photoImg" src="../../../assets/imgs/storied_building.png" alt>
        </div>
      </div>
      <div class="details_box">
        <div class="details">
          <span>
            接收人:
            <span>李三思 ; 王思思 ;</span>
          </span>
        </div>
        <div class="details details_border">
          <span>
            整改截止时间:
            <span>2018.01.01</span>
          </span>
        </div>
      </div>
      <div class="information">完成信息</div>
      <div class="completion_time" @click="is_show_picker">
        完成时间 :
        <input type="text" placeholder="请选择完成时间" :value="valueTime">
        <span class="el-icon-arrow-right"></span>
      </div>
      <div class="picture upload">
        <p class="photo">上传照片</p>
        <div class="photo_img">
          <!-- <img class="photoImg" src="../../../assets/imgs/storied_building.png" alt> -->
          <div class="Img">
            <img class="photoImg" src="../../../assets/imgs/storied_building.png" alt>
            <van-icon name="clear" />
          </div>
          <div class="img">
            <img class="upload_photos" src="../../../assets/imgs/upload_photos.png" alt="">
          </div>
          <span>最多上传3张</span>
        </div>
      </div>
      <div class="confirm completion" @click="complete">确认完成</div>
    </div>
    <!-- 已整改 -->
    <div class="wrapper" v-if="active == 2" style="display:none">
      <div class="details_box">
        <div class="details">
          <span>
            主题:
            <span>A1栋地下室未清底</span>
          </span>
        </div>
        <div class="details">
          <span>
            问题类型:
            <span>基础施工</span>
          </span>
        </div>
        <div class="details">
          <span>
            发起人:
            <span>李三思</span>
          </span>
        </div>
        <div class="details">
          <span>
            发起时间:
            <span>2018.01.01</span>
          </span>
        </div>
        <div class="describe">
          <span>
            描述:
            <span class="describe_content">a1栋地下室存在较大砂砾，基坑底部不平整。</span>
          </span>
        </div>
      </div>
      <div class="picture">
        <p class="photo">照片</p>
        <div class="photo_img">
          <img class="photoImg" src="../../../assets/imgs/storied_building.png" alt>
          <img class="photoImg" src="../../../assets/imgs/storied_building.png" alt>
          <img class="photoImg" src="../../../assets/imgs/storied_building.png" alt>
          <img class="photoImg" src="../../../assets/imgs/storied_building.png" alt>
        </div>
      </div>
      <div class="details_box">
        <div class="details">
          <span>
            接收人:
            <span>李三思 ; 王思思 ;</span>
          </span>
        </div>
        <div class="details details_border">
          <span>
            整改截止时间:
            <span>2018.01.01</span>
          </span>
        </div>
      </div>
      <div class="information">完成信息</div>
      <div class="completion_time">
        完成时间 : <span>2018.01.01</span>
      </div>
      <div class="picture upload">
        <p class="photo">上传照片</p>
        <div class="photo_img">
          <div class="Img">
            <img class="photoImg" src="../../../assets/imgs/storied_building.png" alt>
            <van-icon name="clear" />
          </div>
          <div class="Img">
            <img class="photoImg" src="../../../assets/imgs/storied_building.png" alt>
            <van-icon name="clear" />
          </div>
        </div>
      </div>
    </div>
    <van-actionsheet v-model="show_picker">
      <van-datetime-picker
        v-model="currentDate"
        type="date"
        :min-date="minDate"
        @cancel="onCancel"
        @confirm="onConfirm"
      />
    </van-actionsheet>
    <van-popup v-model="popupShow" position="bottom">
      <van-datetime-picker
        type="date"
        :min-date="minDate"
        @confirm="onConfirm"
        @cancel="onCancel"
        class="my-picker"
      />
    </van-popup>
  </div>
</template>

<script type='textecmascript-6'>
import { GetRiskInfoByID, DoRiskWork, UploadImages } from "@/api/api.js";
// import { dotoRiskWork } from "./util/util.js";
export default {
  data() {
    return {
      popupShow: false,  //弹出层是否显示
      receiverID: "",  //接收人ID
      isShow: true,  //按钮是否显示
      isMe: false,  //当前登陆用户是否在接收人名单中
      // resultState: "",  //接口返回结果
      state: "", //状态
      currentPersonState: "",  //当前人的状态
      theme: "",  //主题
      receiverList: "",  //接收人
      problem: "",  //问题描述
      initiateTime: "",  //发起时间
      initiator: "",  //发起人
      problemType: "",  //问题类型
      photoList: [],  //现场照片
      eeadLine: "",  //整改截止时间
      listViewpoints: [],  //视点
      building: "",  //楼栋
      floor: "",  //楼层
      authTime: "",  //认证时间
      authPhotoList: [],  //认证照片
      authLoading: false,  //认证按钮加载状态
      receiveLoading: false,  //接收按钮加载状态
      rejectionLoading: false,  //拒收按钮加载状态

      show: false, //默认隐藏
      show_picker: false, //选择时间默认隐藏
      currentDate: new Date(), //当前时间
      minDate: new Date(), //最小选择时间
      valueTime: '',//选择的时间
      active: 100000000,//tab默认位置
      text: [],//接受人数组
      valueReceiver: '',//接收人字符串
    };
  },
  created() {
    this.active = this.$route.query.active
    this.riskid = this.$route.query.riskID;  //风险问题ID
    this.state = this.$route.query.state;  //风险问题状态
    if(this.riskid == ""){
      this.$router.push({
        path: "Risk"
      });
    }
    this.getBuildingData();
  },
  methods: {
    /**
     * @name 根据风险问题ID获取详情信息（含照片）
     * @param {integer} riskID 风险问题ID
     */
    getBuildingData(){
      this.load(); //调用加载中蒙层
      this.Request(
        GetRiskInfoByID({riskID: this.riskid}),
      ).then(data => {
        if (data.StatusCode === 200) {
          // console.log("风险问题详情",data)
          this.isMe = false;
          data.Detiel[0].ReceiverList.forEach((element, index) => {
            if (localStorage.getItem("userId") == element.UserID) {
              this.isMe = true;
              this.currentPersonState = element.Status
              this.receiverID = element.ID
            }
          })
          this.theme = data.Detiel[0].Risk.Subject;
          this.problem = data.Detiel[0].Risk.Problem;
          this.initiateTime = require('moment')(data.Detiel[0].Risk.InitiateTime).format('YYYY-MM-DD');
          this.initiator = data.Detiel[0].Risk.InitiatorName;
          this.problemType = data.Detiel[0].Risk.ProblemType;
          this.photoList = data.Detiel[0].PhotoList;
          this.listViewpoints = data.Detiel[0].listViewpoints;
          this.receiverList = data.Detiel[0].ReceiverList;
          this.eeadLine = data.Detiel[0].Risk.DeadLine.substring(0, data.Detiel[0].Risk.DeadLine.indexOf("T"));
          this.building = data.Detiel[0].Risk.Building;
          this.floor = data.Detiel[0].Risk.Floor;
          if(this.currentPersonState == 4){
            this.authPhotoList = data.Detiel[0].AuthPhotoList
            this.authTime = data.Detiel[0].ReceiverList[0].AuthTime.substring(0, data.Detiel[0].ReceiverList[0].AuthTime.indexOf("T"));
          }
        } else {
          this.$toast({
            type: "fail",
            className: "my-toast",
            message: data.Message
          });
        }
      });
      this.$toast.clear(); //关闭加载中蒙层
    },
    /**
     * @name 操作（接收、拒收、认证）
     */
    onSubmit(param){
      switch (param) {
        case 2:
          {
            this.rejectionLoading = true;
            dotoRiskWork(this, DoRiskWork, param);
            this.rejectionLoading = false;
          }
          break;
        case 3:
          {
            this.receiveLoading = true;
            dotoRiskWork(this, DoRiskWork, param);
            this.receiveLoading = false;
          }
          break;
        case 4:
          {
            // this.$refs['riskForm'].validate(valid => {
            //   if (valid) {
            //     dotoRiskWork(this, DoRiskWork, param)
            //   }
            // })
            this.authLoading = true;
            dotoRiskWork(this, DoRiskWork, param);
            this.authLoading = false;
          }
          break;
        default:
          break;
      }
    },
    showAouthTimePopup(){
      this.popupShow = true;
    },
    /**
     * @name 读取前的回调函数，返回false可终止文件读取
     * @param {Object} file 文件解析后的 file 对象
     * @param {Object} detail 额外信息，包含 name 字段
     */
    beforeRead(file, detail){
      let params = [
        {
          key: "files",
          value: file
        }
      ];
      this.Request(UploadImages(params)).then(res => {
        if(res.StatusCode === 200){
          if(res.Detiel.length > 0){
            this.authPhotoList.push({
              Id: res.Detiel[0].Id, //上传后的文件名
              URL: res.Detiel[0].URL, //文件地址
              smallPhotoURL: res.Detiel[0].smallPhotoURL, //如果存在小图则返回小图地址
              Type: res.Detiel[0].Type, //文件类型
              TokenUrL: res.Detiel[0].TokenUrL //域名地址
            });
          }else{
            this.$toast({
              type: "fail",
              message: res.message ? res.message : "图片上传失败",
              className: "my-toast"
            });
          }
        }else{
          this.$toast({type: 'fail', message: res.Message, className: "my-toast"});
        }
      })
      // let data = await this.Request(UploadImages(params));
      // if (data.StatusCode === 200) {
      //   if(data.Detiel.length > 0){
      //     this.authPhotoList.push({
      //       Id: data.Detiel[0].Id, //上传后的文件名
      //       URL: data.Detiel[0].URL, //文件地址
      //       smallPhotoURL: data.Detiel[0].smallPhotoURL, //如果存在小图则返回小图地址
      //       Type: data.Detiel[0].Type, //文件类型
      //       TokenUrL: data.Detiel[0].TokenUrL //域名地址
      //     });
      //   }else{
      //     this.$toast({
      //       type: "fail",
      //       message: data.message ? data.message : "图片上传失败",
      //       className: "my-toast"
      //     });
      //   }
      // } else {
      //   this.$toast({
      //     type: "fail",
      //     message: data.message ? data.message : "后台异常",
      //     className: "my-toast"
      //   });
      // }
    },
    /**
     * @name 读取完成后的回调函数
     * @param {Object} file 文件解析后的 file 对象
     * @param {Object} detail 额外信息，包含 name 字段
     */
    afterRead(file, detail) {
      console.log("==afterRead==", file, detail)
    },
    /**
     * @name 文件大小超过限制时触发
     * @param {Object} file 文件解析后的 file 对象
     */
    oversize(file){
      this.$toast({
        message: "文件大小不要超过1M",
        className: "my-toast"
      });
    },
    //返回
    goBack() {
      this.$router.push({ path: "/Risk", query: {active: this.active} });
    },
    //跳转接收人
    // goReceiver() {
    //   this.$router.push({ path: "/Receiver", query: {active: this.active} });
    // },
    //选择时间
    is_show_picker() {
      this.show_picker = true;
    },
    //时间选择确定取消
    onConfirm(value) {
      // console.log(`当前值：${value}`);
      this.authTime = require('moment')(value).format('YYYY-MM-DD')
      this.popupShow = false;
    },
    onCancel() {
      this.popupShow = false;
    },
    //点击确认接收
    receive() {
      this.active = 0
    },
    //点击确认完成
    complete() {
      this.active = 2
    }
  }
};
</script>
<style>
@import "~@/assets/css/resetVant.css";
</style>
<style lang='stylus' scoped rel='stylesheet/stylus'>
.container-risk_details
  width 100%
  height 100%
  .van-nav-bar
    // height 88px
    // line-height 88px
    // border-bottom 1px solid #E5E5E5
    .fontsize
      // font-size 42px
      // color #333
      // display inline-block
      // vertical-align middle
    .speed_of_progress
      // width 36px
      // height 36px
  .wrapper
    margin-top 88px
    .details_box
      box-sizing border-box
      padding 0 22px
      background-color #fff
      font-size 30px
      color #333
      .details
        height 88px
        line-height 88px
        border-bottom 2px solid #E5E5E5
      .details_border
        border 0
      .describe
        padding 25px 0 20px
        .describe_content
          display inline-block
          width 100%
          line-height 50px
    .picture
      box-sizing border-box
      padding 0 22px 25px
      font-size 30px
      font-weight 500
      color #333
      .photo
        line-height 90px
        font-weight bold
      .photo_img
        display flex
        flex-direction row
        align-items flex-end
        .uploader-txt
          margin-left 20px
        .photoImg
          margin-right 45px
          width 200px
          height 200px
        .photoImg:nth-child(3n)
          margin 0
        .Img
          display inline-block
          border-radius 8px
          margin-right 45px
          width 200px
          height 200px
          text-align center
          line-height 200px
          vertical-align bottom
          position relative
          .van-icon
            position absolute
            width 20px
            height 20px
            top -10px
            right 0
            color #FF3366
        .img
          display inline-block
          border 2px solid #BDC1C6
          border-radius 8px
          margin-right 8px
          width 200px
          height 200px
          text-align center
          line-height 200px
          vertical-align bottom
          .upload_photos
            width 36px
            height 36px
        span
          vertical-align bottom
          color #999
        .img:nth-child(3n)
          margin 0
    .confirm
      display flex
      justify-content space-around
      margin-top 40px
      // width 702px
      // height 88px
      // line-height 88px
      // font-size 30px
      // margin 60px auto 40px
      // text-align center
      // background-color #5A93FF
      // border-radius 8px
      // color #fff
      .rejection
        width 330px
      .receive
        width 330px
      .authentication
        width 702px
    .information
      padding 30px 24px
      font-size 30px
      font-weight bold
      background-color #F6F8FA
    .completion_time
      padding 30px 24px
      font-size 30px
      background-color #fff
      .el-icon-arrow-right
        float right
    .upload
      background-color #F6F8FA
</style>
<style>
/* 顶部表头 */
/* .container-risk_details .van-nav-bar .van-nav-bar__title {
  font-size: 36px;
} */
</style>

<!-- 时间管理timeManagement -->
<template>
  <div class='container-time-management' id="time-container" >
    <div class='wrapper' >
      <van-nav-bar
        title="时间管理"
        left-arrow
        @click-left="onClickLeft"
        @click-right="onClickRight"
      >
      <div class="nav_right" slot="right"><img src="../../../assets/imgs/screen.png" alt=""></div>
      </van-nav-bar>
      <!-- 整体进度表 -->
      <div class="progress_table">
        <div class="pro_title">
          <img src="../../../assets/imgs/totall_of_progress.png" alt="">
          <span>整体进度</span>
        </div>
        <div v-loading="loading" class="pro_content">
          <div class="pro_content_left">
            <!-- 进度 -->
            <div class="circle_big">
              <div class="circle_small">
               <!-- <van-circle
                v-model="currentRate"
                color="#07c160"
                fill="#fff"
                size="95px"
                layer-color="#EBF5FF"
                :text="text"
                :rate="75"
                :speed="100"
                :stroke-width="100"
              /> -->
              <div class="schedule-img">
                <el-progress type="circle" :percentage="projectOverview.allProgress" :width="104" :stroke-width="12"></el-progress>
                <!-- <img src="./1.png" class="img"> -->
                <div class="percent">
                  <!-- <span class="percent-num">{{projectOverview.allProgress}}</span> -->
                  <span class="title">工程进度</span>
                </div>
              </div>
              </div>
            </div>
  
          </div>
          <div class="pro_content_right">
            <div class="list">
              计划工期（天）：{{projectOverview.planDays}}
            </div>
            <div class="list">
              剩余工期（天）：{{projectOverview.actualDays}}
            </div>
            <div class="list">
              完工时间：{{projectOverview.completTime}}
            </div>
          </div>
        </div>
      </div>
      
      <!-- 列表信息 -->
      <div class="progress_info">
        <div class="progress_info_title">
          <span>任务</span>
          <span>完工时间</span>
          <span>状态</span>
        </div>
        <ul v-loading="loading" class="progress_info_items">
          <li v-for="(item, index) in porgressOptions" :key="index" @click="getSchedulItem(item)">
            <span>{{item.TaskName}}</span>
            <span>{{item.BaseFinishTime.substr(0,10)}}</span>
            <span>{{item.StatesInfo}}</span>
          </li>
        </ul>
      </div>
    </div>

 <!-- 筛选内容 -->
  <div class="modelStyle" v-show="sel_show" @click="sel_show = false">
    <div class="select_layer" >
      <ul>
        <li v-for="(item,index) in typeOptions" :key="index" @click="selectItem(item)">{{item.text}}</li>
      </ul>
    </div>
  </div>

  </div>
</template>

<script type='textecmascript-6'>
// import pregress from "./modules/pregress"
import {GetBuilding,
GetACSchedulePlanListAPP,
GetElementIDByInfo,
} from '@/api/api.js'

export default {
  data() {
    return {
      data: "time",
      sel_show: false,
      currentRate: 0,
      projectOverview:{
        allProgress: 0, //整体进度
        completTime: '', //完工时间
        planDays: 0, //计划天数
        actualDays: 0,  //剩余天数
      },
      loading: false,
      projectid: localStorage.getItem('projectid'), //项目ID
      typeOptions: [], //建筑列表
      type: '', // 所选的建筑模型  默认是‘全部’
      // ElementList: [], // 模型构建结构ID列表

      lagging: 0,  // 滞后天数
      /**[进度子任务所有数据] */
      porgressOptions: [],
    };
  },
  components: {
    // pregress
  },
  computed: {
    text() {
      return this.currentRate.toFixed(0) + '%'
    }
  },
  created(){
    this.GetBuildingInfo(this.projectid)  //获取建筑列表信息
  },
  methods: {
     onClickLeft() {
      this.$router.go(-1)
      // this.$route

    },
    onClickRight() {
      this.sel_show = !this.sel_show;
    },
    selectItem(e){
      this.type = e.text==="全部"?'':e.text
      this.sel_show = false
      console.log(e)
    },
    //点击跳转认证详情
    getSchedulItem(it){
      if(it.StatesInfo === "提前完成"){
        this.$toast({
          message: '任务已完成',
          duration: 800,
          className: 'my_toast'
        })
      }else {
        this.$router.push({path:'Progress', query: it})
      }
      
    },
    /**
     * API接口
     */
      //  获取建筑模型列表信息
      async GetBuildingInfo (projectid) {
        let res = await this.Request(GetBuilding({projectid}))
        if (res.StatusCode == 200) {
          this.typeOptions = res.Detiel
          this.typeOptions.unshift({
            id: "",
            text: "全部"
          })
          this.ACSchedulePlanList(this.type)
          // this.type = res.Detiel[0].text
        } else {
          this.$message({
            type: "error",
            message: res.Message,
            center: "true"
          })
        }
      },
      // 查看认证任务列表
      async ACSchedulePlanList (B_Name) {
        this.loading = true
        // if (!B_Name) return this.$toast('没有选择模型')
        let res = await this.Request(GetACSchedulePlanListAPP({ ProjectID: this.projectid, BuildingName: B_Name }))
        if (res.StatusCode === 200) {
          console.log(res)
          if(res.Detiel.length){
            this.projectOverview.allProgress = parseInt(res.Detiel[0].ActualPercentage)
            this.projectOverview.completTime = res.Detiel[0].BaseFinishTime
            this.projectOverview.planDays = res.Detiel[0].SurplusDuration
            this.projectOverview.actualDays = res.Detiel[0].TotalDuration
            this.porgressOptions = res.Detiel[0].TaskList
          } else {
            this.$message({ type: 'error', message: res.Message, center: "true" })
          }
          
          // this.porgressOptions = []
          // progressInfo.forEach((item) => {
          //   let option = {}
          //   option.TaskName = item.TaskName
          //   option.title = item.TaskName
          //   option.start_time = item.BaseStartTime.substr(0, 10)
          //   option.ElementList = item.ElementList

          //   if (!item.UploadTime) {
          //     option.message = "success add"
          //     option.isAdd = true
          //   } else if (item.states == "正常" || item.states == null) {
          //     option.message = "success reverse"
          //     option.isAdd = false
          //   } else {
          //     option.message = " error"
          //     option.isAdd = false
          //   }
          //   option.end_time = item.UploadTime ? item.UploadTime.substr(0, 10) : ''
          //   option.PicturePath = item.UploadTime ? item.PicturePath : ''
          //   option.TaskId = item.TaskId
          //   // option.message
          //   this.porgressOptions.push(option)
          // })
          this.loading = false
        } else {
          this.$message({ type: 'error', message: res.Message, center: "true" })
          this.loading = false
        }
      },
      // 根据楼栋获取当前楼栋下所有ElementID
      // ElementIDByInfo () {
      //   let param = {
      //     ProjectID: this.projectId,
      //     BuildName: this.type
      //   }
      //   GetElementIDByInfo(param).then(data => {
      //     this.ElementList = data.Detiel
      //   })
      // },
  },
  watch: {
    type(val){
      if(val){
        this.ACSchedulePlanList(val)
      }
    }
  },
};
</script>
<style lang='stylus' scoped rel='stylesheet/stylus'>
.container-time-management {
  width: 100%;
  height: 100%;
  background-color #fff;
}
</style>
<style lang='stylus' rel='stylesheet/stylus'>
@import '../../../assets/stylus/variable'
  #time-container {
    position: relative;
    .modelStyle {
      position: absolute;
      top: 0px;
      left: 0px;
      width: 100%;
      height: 100%
      background-color: rgba(255, 255, 255, 0)
      z-index: 100
    }
    .wrapper {
      width:100%;
      height: 100%
    }
    .van-nav-bar {
      width: 100%;  
      height: 88px;
      background-color: $color-bgc-1;

      .van-nav-bar__title,
      .van-nav-bar__left,
      .van-nav-bar__right {
        color: #fff;
        height: 87px;
        // padding-top: 41px;
        line-height: 87px;
        font-size $font-size-title;
        z-index 10000;
      }
    } 

    // 右上角点击筛选样式
    .select_layer {
      position: fixed;
      top: 86px;
      right: 24px;
      width 240px;
      box-sizing: border-box;
      background-color $color-bgc-2;
      opacity:0.9;
      border-radius:8px
      padding 10px 20px;
      z-index: 999
      ul {
        li {
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          height 86px;
          line-height 86px;
          font-size 36px;
          text-align center;
          color #fff;
          height 86px;
          border-bottom: 1px solid #737577;
        }
        li:last-child {
          border-bottom: none;
        }
      }
    
    }
    .select_layer:after {
      position: absolute;
      top: -0.379rem;
      right: 0.186667rem;
      content: '';
      width: 0px;
      height 0px;

      border: 15px solid transparent;
      border-bottom: 15px solid $color-bgc-2;
      z-index: 9999
    }

    // 整体进度样式
    .progress_table {
      margin: 20px 30px 30px 30px;
      width: 690px;
      height 320px;
      box-shadow:0px 3px 7px 0px rgba(222,234,246,1);
      border-radius:8px;
      .pro_title {
        margin: 24px 40px;
        padding-top: 24px;
        font-size $font-size-28;
        img {
          width: 41px;
          height 35px;
          
        }
        span {
          padding-left: 10px;
          font-size:30px;
          font-family:PingFang-SC-Medium;
          vertical-align: top;
          font-weight:500;
          color:rgba(51,51,51,1);
        }
      }
      .pro_content {
        display flex;
        justify-content center;
        flex-direction row;
        flex-flow: 1;
        flex-grow :0;
        
        .pro_content_left {
          margin-right: 40px;
          width: 208px;
          height 214px;
          .circle_big {
            width: 208px;
            //环形进度样式
             .schedule-img {
              position: relative;
              background-color white
              width 220px
              height 220px
              .percent {
                position:absolute
                top: 120px;
                left: 0px;
                width 220px
                span {
                  display block
                  text-align center
                  color: #333;
                }
                  
                .percent-num {
                  font-size:36px;
                  font-family:PingFang-SC-Heavy;
                  font-weight:800;
                  line-height 36px
                  color:rgba(37,119,227,1);
                }
                 
                .title {
                  font-size:24px;
                  font-family:PingFang-SC-Bold;
                  font-weight:bold;
                  color:rgba(51,51,51,1);
                }
                  
              }
              .el-progress__text {
                font-weight:bold;
                font-size: 36px!important;
                color:rgba(37,119,227,1);
              }
                
            }

          }

        }
        .pro_content_right {
          display: flex;
          flex-direction column;
          justify-content space-between;
          width: 354px;
          height 194px;
          .list {
            width 354px;
            height 50px;
            line-height 50px;
            color: #fff;
            text-align center;
            font-size $font-size-30;
            background-color $color-bgc-1;
            border-radius: 10px;
          }
        }

      }
    }

    // 任务进度信息样式
    .progress_info {
      height: calc( 100% - 500px )
      .progress_info_title {
        display: flex;
        justify-content space-between;
        width: 100%;
        height 88px;
        padding: 0 45px;
        box-sizing border-box;
        line-height 88px;
        color: #fff;
        font-size: $font-size-30;
        background-color $color-bgc-3;
          span {
            width: 33%;
            text-align: center;
          }
          span:first-child {
            text-align: left!important;
          }
          span:last-child {
              text-align: right!important; 
          }

      }
      .progress_info_items {
        height: calc(100% - 88px)
        overflow-y: auto;
        li {
          display: flex;
          justify-content: space-between;
          margin: 0 24px;
          height 88px;
          line-height 88px;
          font-size: $font-size-30;
          border-bottom: 1px solid #E5E5E5;
          span {
            width: 33%;
            text-align: center;
          }
          span:first-child {
            text-align: left!important;
          }
          span:last-child {
              text-align: right!important; 
          }
        }
      }
    }
  }
  .container-time-management .van-icon-arrow-left {
    color: #fff ;
    font-size $font-size-title;
  }
  .container-time-management .van-nav-bar__text {
    color: #fff;
    font-size $font-size-title;
  }
  //顶部导航右侧图标
  .nav_right {
        img {
            width: 41px;
          height 35px;
          
        }
      }
  .my_toast.van-toast {
      font-size: 30px;
  }
  .my_toast.van-toast--default{
      width: 180px;
      padding: 30px;
  }
  .my_toast.van-toast--text {
      padding: 40px 40px
  }
  .my_toast.van-toast--default .van-toast__icon{
      font-size: 96px;
  }
</style>

<!-- 成本管理 -->
<template>
  <div class="container-cost_control">
    <!-- 头部 -->
    <van-nav-bar
      title="成本管理"
      @click-left="goBack"
      @click-right="changeScreen"
      fixed
      :border="false"
      :z-index="100"
    >
      <span class="el-icon-arrow-left fontsize" slot="left"></span>
      <img src="../../../assets/imgs/screen.png" class="screen fontsize" slot="right">
    </van-nav-bar>
    <div class="Interlayer"></div>
    <div class="wrapper">

      <van-list
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        class="my-list"
      >
        <div
          class="cost_control_box"
          v-for="(item,index) in costControlLists"
          :key="item.index"
          @click="costControlDetails(item)"
        >
          <div class="cost_control_title">
            <span class="title_index">{{index + 1}}</span>
            <span class="title_content">{{item.ResorceName}}</span>
            <span class="el-icon-arrow-right"></span>
          </div>
          <div class="cost_control_content">
            <span class="content_details">
              施工图预算量:
              <span>{{item.BOQ}}</span>
            </span>
            <span class="content_details">
              系数:
              <span>{{item.Coefficient}}</span>
            </span>
            <span class="content_details">
              施工预算量:
              <span>{{item.AdjustBOQ}}</span>
            </span>
            <span class="content_details">
              实际消耗量:
              <span>{{item.RealConsume}}</span>
            </span>
            <span class="content_details">
              差额:
              <span>{{item.DiffValue}}</span>
            </span>
            <span class="content_details">
              偏差率:
              <span>{{item.DiffRate}}</span>
            </span>
          </div>
        </div>
      </van-list>


      <!-- <div
        class="cost_control_box"
        v-for="(item,index) in costControlLists"
        :key="item.index"
        @click="costControlDetails(item)"
      >
        <div class="cost_control_title">
          <span class="title_index">{{index + 1}}</span>
          <span class="title_content">{{item.ResorceName}}</span>
          <span class="el-icon-arrow-right"></span>
        </div>
        <div class="cost_control_content">
          <span class="content_details">
            施工图预算量:
            <span>{{item.BOQ}}</span>
          </span>
          <span class="content_details">
            系数:
            <span>{{item.Coefficient}}</span>
          </span>
          <span class="content_details">
            施工预算量:
            <span>{{item.AdjustBOQ}}</span>
          </span>
          <span class="content_details">
            实际消耗量:
            <span>{{item.RealConsume}}</span>
          </span>
          <span class="content_details">
            差额:
            <span>{{item.DiffValue}}</span>
          </span>
          <span class="content_details">
            偏差率:
            <span>{{item.DiffRate}}</span>
          </span>
        </div>
      </div> -->
    </div>
    <!-- 筛选内容 -->
    <div class="select_layer" v-show="shwoScreen">
      <van-collapse v-model="activeName" accordion @change="changeCollapseItem">
        <van-collapse-item title="整栋楼栋" name="1">
          <div slot="icon">
            <img class="icon_down" src="../../../assets/imgs/select_down.png">
          </div>
          <van-radio-group v-model="buildName">
            <van-radio v-for="(item,index) in buildingList" :key="index" @click="clickTung(item)" :name="item.value" class="my-radio">{{item.label}}</van-radio>
          </van-radio-group>
        </van-collapse-item>
        <van-collapse-item title="全部专业" name="2">
          <div slot="icon">
            <img class="icon_down" src="../../../assets/imgs/select_down.png">
          </div>
          <van-radio-group v-model="specialty">
            <van-radio v-for="(item,index) in specialtyList" :key="index" @click="clickMajor(item)" :name="item.value" class="my-radio">{{item.label}}</van-radio>
          </van-radio-group>
        </van-collapse-item>
        <van-collapse-item title="全部楼层" name="3">
          <div slot="icon">
            <img class="icon_down" src="../../../assets/imgs/select_down.png">
          </div>
          <van-radio-group v-model="floor">
            <van-radio v-for="(item,index) in floorList" :key="index" @click="clickFloor(item)" :name="item.value" class="my-radio">{{item.label}}</van-radio>
          </van-radio-group>
        </van-collapse-item>
        <van-collapse-item title="全部资源" name="4">
          <div slot="icon">
            <img class="icon_down" src="../../../assets/imgs/select_down.png">
          </div>
          <van-radio-group v-model="resourceName">
            <van-radio v-for="(item,index) in resourceList" :key="index" @click="clickResources(item)" :name="item.value" class="my-radio">{{item.label}}</van-radio>
          </van-radio-group>
        </van-collapse-item>
        <van-collapse-item title="进度节点" name="5">
          <div slot="icon">
            <img class="icon_down" src="../../../assets/imgs/select_down.png">
          </div>
          <van-radio-group v-model="taskId">
            <van-radio v-for="(item,index) in taskList" :key="index" @click="clickNode(item)" :name="item.value" class="my-radio">{{item.label}}</van-radio>
          </van-radio-group>
        </van-collapse-item>
      </van-collapse>
      <div class="btn">
        <button class="reset" @click=" resetFunc">重置</button>
        <div class="line"></div>
        <button class="check" @click="recordCheck">确认</button>
      </div>
    </div>
  </div>
</template>

<script type='textecmascript-6'>
import { QueryCostData, GetBuilding, GetSpecialtybyBuilding, GetFloorbyBuilding, GetResourceBySpInfo, GetTaskByInfo } from "@/api/api.js";
export default {
  data() {
    return {
      loading: false,  //是否处于加载状态
      finished: false,  //是否已加载完成
      ProjectID: localStorage.getItem('projectid'), //项目ID
      userID: localStorage.getItem("userId"), //用户ID
      activeName: "", //默认不展开
      shwoScreen: false, //默认不显示筛选
      buildName: '',//整栋模型
      specialty: '',//专业
      floor: '',//楼层
      taskId: '',//进度节点
      resourceName: '',//资源
      costControlLists: [],
      buildingList: [],//整栋模型列表
      specialtyList: [],//专业列表
      floorList: [],//楼层列表
      taskList: [],//进度节点列表
      resourceList: [],  //资源列表
      colorID: 0  //颜色ID
      // screen_list: [],//筛选列表
    };
  },
  created() {
    this.getCostData()
  },
  methods: {
    /**
     * @name 获取成本管理列表数据
     * @param {string} ProjectID 项目ID
     * @param {string} BuildName 楼栋
     * @param {string} Specialty 专业
     * @param {string} Floor 楼层
     * @param {string} ResourceName 资源名称
     * @param {string} TaskId 进度ID
     * @param {integer} ColorID 	颜色ID
     */
    async getCostData(){
      let params = {
        ProjectID: this.ProjectID,
        BuildName: this.buildName,
        Specialty: this.specialty,
        Floor: this.floor,
        TaskId: this.taskId,
        ResourceName: this.resourceName
        // ColorID: this.colorID
      }
      console.log("检索参数", params)
      try{
        let costData = await this.Request(QueryCostData(params))
        if(costData.StatusCode == 200){
          console.log("成本数据", costData)
          if(costData.Detiel.length > 0){
            this.costControlLists = costData.Detiel
          }else{
            this.$toast({
              message: "暂无数据",
              className: "my-toast"
            });
            this.costControlLists = [];
          }
          this.loading = false;
          this.finished = true;

          // 数据全部加载完成
          // if (this.list.length >= 40) {
          //   this.finished = true;
          // }
        }else{
          this.$toast({
            type: 'fail',
            message: costData.message ? costData.message : '后台异常',
            className: "my-toast"
          })
        }
      } catch (err) {
        console.log('%c函数 %s 抛出异常：%s', 'color: red;', 'getCostData', err);
      }
    },
    /**
     * @name 获取模型的楼栋数据
     */
    async getBuildingData(){
      let buildingData = await this.Request(GetBuilding({projectid: this.ProjectID}),)
      if(buildingData.StatusCode == 200){
        this.buildingList = [];
        this.buildingList.unshift({label: "整体楼栋", value: ""})
        for (let i = 0; i < buildingData.Detiel.length; i++) {
          let Option = {};
          Option.label = buildingData.Detiel[i].text;
          Option.value = buildingData.Detiel[i].id;
          this.buildingList.push(Option);
        }
      }else{
        this.$toast({
          type: 'fail',
          message: buildingData.message ? buildingData.message : '后台异常',
          className: "my-toast"
        })
      }
    },
    /**
     * @name 根据楼栋获取模型的专业
     */
    async getSpecialtyData(){
      let specialtyData = await this.Request(GetSpecialtybyBuilding({projectid: this.ProjectID, building: this.buildName}),)
      if(specialtyData.StatusCode == 200){
        this.specialtyList = [];
        if(specialtyData.Detiel.length > 0){
          for (let i = 0; i < specialtyData.Detiel.length; i++) {
            let Option = {};
            Option.label = specialtyData.Detiel[i].text;
            Option.value = specialtyData.Detiel[i].id;
            this.specialtyList.push(Option);
          }
        }else{
          this.specialtyList = []
        }
      }else{
        this.$toast({
          type: 'fail',
          message: specialtyData.message ? specialtyData.message : '后台异常',
          className: "my-toast"
        })
      }
    },
    /**
     * @name 根据楼栋获取模型的楼层
     */
    async getFloorData(){
      let floorData = await this.Request(
        GetFloorbyBuilding({
          projectid: this.ProjectID, 
          building: this.buildName,
          specialty: this.specialty
        })
      )
      if(floorData.StatusCode == 200){
        this.floorList = [];
        if(floorData.Detiel.length > 0){
          for (let i = 0; i < floorData.Detiel.length; i++) {
            let Option = {};
            Option.label = floorData.Detiel[i].text;
            Option.value = floorData.Detiel[i].id;
            this.floorList.push(Option);
          }
        }else{
          this.floorList = []
        }
      }else{
        this.$toast({
          type: 'fail',
          message: floorData.message ? floorData.message : '后台异常',
          className: "my-toast"
        })
      }
    },
    /**
     * @name 根据楼栋楼层专业获取物资名称
     */
    async getResourceData(){
      let resourceData = await this.Request(
        GetResourceBySpInfo({
          ProjectID: this.ProjectID, 
          BuildName: this.buildName,
          Specialty: this.specialty,
          Floor: this.floor
        })
      )
      if(resourceData.StatusCode == 200){
        this.resourceList = [];
        if(resourceData.Detiel.length > 0){
          for (let i = 0; i < resourceData.Detiel.length; i++) {
            let Option = {};
            Option.label = resourceData.Detiel[i].text;
            Option.value = resourceData.Detiel[i].id;
            this.resourceList.push(Option);
          }
        }else{
          this.resourceList = []
        }
      }else{
        this.$toast({
          type: 'fail',
          message: resourceData.message ? resourceData.message : '后台异常',
          className: "my-toast"
        })
      }
    },
    /**
     * @name 根据楼栋楼层专业获取任务（进度）名称
     */
    async getTaskData(){
      let taskData = await this.Request(
        GetTaskByInfo({
          ProjectID: this.ProjectID, 
          BuildName: this.buildName,
          Specialty: this.specialty,
          Floor: this.floor,
          ResourceName: this.resourceName
        })
      )
      if(taskData.StatusCode == 200){
        this.taskList = [];
        if(taskData.Detiel.length > 0){
          for (let i = 0; i < taskData.Detiel.length; i++) {
            let Option = {};
            Option.label = taskData.Detiel[i].text;
            Option.value = taskData.Detiel[i].id;
            this.taskList.push(Option);
          }
        }else{
          this.taskList = []
        }
      }else{
        this.$toast({
          type: 'fail',
          message: taskData.message ? taskData.message : '后台异常',
          className: "my-toast"
        })
      }
    },
    /**
     * @name 切换折叠面板时触发
     * @param {string | array} activeNames
     */
    changeCollapseItem(activeNames){
      console.log("==折叠面板 activeNames==", activeNames)
      switch (activeNames) {
        case "1":
          {
            this.getBuildingData()
          }
          break;
        case "2":
          {
            if(this.buildName === ""){
              this.$toast({
                message: '请先选择楼栋！',
                className: "my-toast"
              });
              return;
            }
          }
          break;
        case "3":
          {
            if(this.buildName === "" || this.specialty === ""){
              this.$toast({
                message: '请先选择楼栋和专业！',
                className: "my-toast"
              });
              return;
            }
          }
          break;
        case "4":
          {
            if(this.buildName === "" || this.specialty === "" || this.floor === ""){
              this.$toast({
                message: '请先选择楼栋、专业和楼层！',
                className: "my-toast"
              });
              return;
            }
          }
          break
        case "5":
          {
            if(this.buildName === "" || this.specialty === "" || this.floor === "" || this.resourceName === ""){
              this.$toast({
                message: '请先选择楼栋、专业、楼层和资源！',
                className: "my-toast"
              });
              return;
            }
          }
          break;
      
        default:
          break;
      }
    },
    //返回
    goBack() {
      this.$router.push({ path: "/nav/to/index" });
    },
    //查看详情
    costControlDetails(item) {
      console.log("item", item);
      this.$router.push({ 
        path: "/CostControlDetails",
        query:{
          BuildName: this.buildName,
          Specialty: this.specialty,
          Floor: this.floor,
          TaskId: this.taskId,
          ResourceName: item.ResorceName
          // AdjustBOQ: item.AdjustBOQ
        } 
      });
    },
    //右侧筛选
    changeScreen() {
      this.shwoScreen = !this.shwoScreen;
    },
    // 重置
    resetFunc() {
      this.buildName = ''
      this.specialty = ''
      this.floor = ''
      this.resourceName = ''
      this.taskId = ''
      // this.screen_list = []
    },
    //确认 
    recordCheck() {
      // console.log('确认',this.screen_list)
      this.getCostData()
      this.shwoScreen = false
    },
    //选中楼栋
    clickTung(item) {
      // console.log(item,'clickTung')
      // this.screen_list.push(item)
      this.buildName = item.value;
      this.specialty = ''
      this.floor = ''
      this.resourceName = ''
      this.taskId = ''
      this.getSpecialtyData()
    },
    //选中专业
    clickMajor(item) {
      this.specialty = item.value;
      this.floor = ''
      this.resourceName = ''
      this.taskId = ''
      this.getFloorData()
    },
    //选中楼层
    clickFloor(item) {
      this.floor = item.value;
      this.resourceName = ''
      this.taskId = ''
      this.getResourceData()
    },
    //选中资源
    clickResources(item) {
      this.resourceName = item.value;
      this.taskId = ''
      this.getTaskData()
    },
    //选中进度节点
    clickNode(item) {
      this.taskId = item.value;
    },
  }
};
</script>
<style lang='stylus' scoped rel='stylesheet/stylus'>
.container-cost_control
  width 100%
  height 100%
  .van-nav-bar
    height 88px
    line-height 88px
    border-bottom 1px solid #E5E5E5  /*no*/
    .fontsize
      font-size 42px
      color #333
      display inline-block
      vertical-align middle
    .screen
      width 41px
      height 35px
  .Interlayer
    height 88px
  .wrapper
    .cost_control_box
      height 250px
      padding 0 23px
      background-color #fff
      color #333
      margin-top 12px
      .cost_control_title
        height 88px
        padding 24px 0
        box-sizing border-box
        font-size 30px
        .title_index
          display inline-block
          width 40px
          height 40px
          background-color #5A92FF
          color #fff
          border-radius 50%
          text-align center
          line-height 40px
        .title_content
          margin-left 36px
        .el-icon-arrow-right
          float right
      .cost_control_content
        padding 0 20px
        .content_details
          display inline-block
          width 50%
          line-height 50px
          font-size 28px
</style>
<style>
@import "~@/assets/css/resetVant.css";
/* 顶部表头 */
.container-cost_control .van-nav-bar .van-nav-bar__title {
  font-size: 36px;
}
/*右上角点击筛选样式*/ 
.select_layer {
  position: fixed;
  top: 80px;
  right: 14px;
  width: 352px;
  box-sizing: border-box;
  background-color: #222832;
  opacity:0.9;
  border-radius:8px;
  padding: 10px 20px;
  z-index: 999;
}
.select_layer .van-hairline--top-bottom::after{
  border: none;
}
.select_layer .van-hairline--top::after {
  border-top: none;
  border-bottom: 1px solid #737577;  /*no*/
}
.select_layer .van-collapse  {
  max-height: 1109px;
}
.select_layer .van-collapse-item .van-collapse-item__title--expanded::after {
  visibility: hidden;
}
.select_layer .van-collapse-item:first-child {
  border-bottom: 1px solid #737577;  /*no*/
}
.select_layer .van-collapse-item__title {
  height: 80px;
  line-height: 80px;
  background-color: #222832;
}
.select_layer .van-cell__title{
  font-size: 30px;
  color: #fff;
  text-align: left;         
}
.select_layer .van-cell__right-icon {
  color: transparent;
}
.select_layer .icon_down {
  position: absolute;
  top: 45px;
  right: 30px;
  width: 16px;
  height: 11px;
}
.select_layer .van-collapse-item__content{
  padding: 0;
  background-color: #222832;
  color: #fff;
  overflow-y: auto;
  overflow-x: hidden;
  max-height: 500px;
}
.select_layer .van-cell {
  width: 100%;
  background-color: #222832;
  color: #fff;
}
.select_layer .van-radio {   
  height: 80px;
  line-height: 80px;
  height: 80px;
  /* padding-left:20px; */
  border-bottom: 1px solid #737577;  /*no*/
  font-size: 28px;
}
.select_layer .van-radio:last-child {
  border: 0;
}
.select_layer .van-radio .van-radio__label {
  color: #fff;
  vertical-align: baseline;
}
/* .select_layer .van-radio .van-radio__icon {
  vertical-align: baseline;
} */
/* .select_layer .van-radio .van-radio__icon .van-icon {
  border: 2px solid #fff;
  width: 25px;
  height: 25px;
} */
.select_layer .btn {
  width: 100%;
  height: 88px;
  padding: 19px 0;
  box-sizing: border-box;
}
.select_layer button {
  width:49%;
  height: 50px;
  line-height: 50px;
  background-color: #222934;
  color: #fff;
  font-size: 30px;
  text-align: center;
  border: none;
}
.select_layer .line {
  display: inline-block;
  width: 0px;
  height: 50px;
  border-left: 2px dashed #fff;
  vertical-align: top;
}
.select_layer:after {
  position: absolute;
  top: -0.379rem;
  right: 0.186667rem;
  content: '';
  width: 0px;
  height: 0px;
  border: 15px solid transparent;  /*no*/
  border-bottom: 15px solid #222832;  /*no*/
  z-index: 9999
}

.my-list .van-list__loading-text, .my-list .van-list__finished-text, .my-list .van-list__error-text{
    line-height: 80px
}
.container-cost_control .van-radio__icon, .container-cost_control .van-radio__label{
  display: inline;
}
</style>

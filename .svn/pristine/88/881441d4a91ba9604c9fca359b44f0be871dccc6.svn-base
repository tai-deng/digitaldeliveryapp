<!-- custom-report自定义报表 -->
<template>
 <div class='container-ai-report'>
    <!-- 返回键+自定义报表 -->
    <van-nav-bar title="自定义报表" @click-left="goBack"  fixed :border="true" :z-index="100" >
        <span class="el-icon-arrow-left fontsize" slot="left"></span>
    </van-nav-bar>
    <!-- 自定义列表 -->
    <div class="custom-report-list">
      <ul>
        <li>
          <span class="custom-report-list-span">资料名称：</span>
          <input type="text" class="custom-report-list-input" v-model="dataName" placeholder="请输入名称">
        </li>
        <li class="content-class">
          <van-cell title="内容配置：" :value="contentConfiguration" @click="showContentConfiguration = true" is-link/>
        </li>
        <li>
          <van-cell title="楼栋：" :value="storiedBuilding" @click="showStoriedBuilding = true" is-link/>
        </li>
        <li>
          <van-cell title="楼层：" :value="floor" @click="isShowFloor" is-link/>
        </li>
        <li>
          <van-cell title="开始时间：" :value="startTime" @click="showStartTime = true" readonly="readonly" is-link/>
        </li>
        <li>
          <van-cell title="结束时间：" :value="endTime" @click="showEndTime = true" readonly="readonly" is-link/>
        </li>
      </ul>
    </div>
    <!-- 标签 -->
    <div class="custom-report-tag">
      <p>标签：</p>
      <div class="custom-report-tag-list">
        <span v-for="(span,index) in defaultMarkList" :key="index+1" @click="setRemarkData(span)">{{span.LabelName}}</span>
        <span v-for="(span,index) in markList" :key="index" @click="setRemarkData(span)">{{span.LabelName}}</span>
      </div>
    </div>
    <!-- 确定检索 -->
    <van-button size="large" class="custom-report-bt" @click="submitRetrieval">确认检索</van-button>
    <div>
        <van-nav-bar
                fixed
                title="数据列表"
                right-text="退出登录"
        />
        <div class="list-content" id="list-content">
            <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
                <van-list
                    v-model="loading"
                    :finished="finished"
                    @load="onLoad"
                    :offset="10"
                >
 
                </van-list>
            </van-pull-refresh>
        </div>
 
    </div>
    <!-- 内容配置弹窗 -->
    <van-popup v-model="showContentConfiguration" position="bottom">
      <van-checkbox-group v-model="resultContent" class="content-class-popup">
        <van-cell-group>
          <van-cell
            v-for="(item, index) in contentConfigurationList"
            clickable
            :key="index+1"
            :title="item.text"
            @click="toggle(index,item)"
          >
          <van-checkbox :name="item.id" ref="checkboxes" />
          </van-cell>
        </van-cell-group>
      </van-checkbox-group>
      <!-- <van-picker
        show-toolbar
        :columns="contentConfigurationList"
        @confirm="confirmContentConfiguration"
        @cancel="showContentConfiguration = false"
      /> -->
    </van-popup>
    <!-- 楼栋弹窗 -->
    <van-popup v-model="showStoriedBuilding" position="bottom">
      <van-picker
        show-toolbar
        :columns="storiedBuildingList"
        @confirm="confirmStoriedBuilding"
        @cancel="showStoriedBuilding = false"
      />
    </van-popup>
    <!-- 楼层弹窗 -->
    <van-popup v-model="showFloor" position="bottom">
      <van-picker
        show-toolbar
        :columns="floorList"
        @confirm="confirmFloor"
        @cancel="showFloor = false"
      />
    </van-popup>
    <!-- 开始时间 -->
    <van-popup v-model="showStartTime" position="bottom" :overlay="true">
      <van-datetime-picker
        type="date"
        v-model="currentDate"
        @confirm="confirmStartTime"
        @cancel="showStartTime = false"
        @change="startTimeChange"
      />
    </van-popup>
    <!-- 结束时间 -->
    <van-popup v-model="showEndTime" position="bottom" :overlay="true">
      <van-datetime-picker
        type="date"
        v-model="currentDate"
        @confirm="confirmEndTime"
        @cancel="showEndTime = false"
        @change="endTimeChange"
      />
    </van-popup>
 </div>
</template>
<script type='textecmascript-6'>
import { AIReportTypeList,GetBuilding,GetFloorbyBuilding,GetReportLabelList,GetCustomFormExport } from '@/api/api.js'

export default{
  data(){
    return{
      resultContent: [],
      dataName:'', //资料名称
      contentConfiguration:'', //内容配置
      showContentConfiguration:false, //显示内容配置弹窗
      contentConfigurationList: [], //内容配置列表
      storiedBuilding:'全部', //楼栋
      showStoriedBuilding:false, //显示楼栋弹窗
      storiedBuildingList: [], //楼栋列表
      floor:'全部', //楼层
      showFloor:false, //显示楼层弹窗
      floorList: [], //楼层列表
      currentDate: new Date(),
      startTime:require('moment')().format('YYYY-MM-DD'), //开始时间
      showStartTime:false, //显示开始时间
      startTimeBox:'', //开始时间容器
      endTime:require('moment')().format('YYYY-MM-DD'), //结束时间
      showEndTime:false, //显示结束时间
      endTimeBox:'', //结束时间容器
      ProjectID: localStorage.getItem('projectid'),
      defaultMarkList: [
        {ID:1,LabelName:"质量管理",LabelValue:"8"},
        {ID:2,LabelName:"安全管理",LabelValue:"9"},
        {ID:3,LabelName:"三算对比",LabelValue:"10"}
      ], // 默认标签列表
      markList:[], //动态标签列表
    }
  },
  mounted(){
    this.ProjectID = localStorage.getItem('projectid')
    this.AIReportTypeList() //获取内容配置下拉
    this.GetBuilding()
    this.GetReportLabelList()
  },
  methods:{
    AIReportTypeList(){ //获取内容配置下拉
      this.load();
      this.Request(AIReportTypeList({})).then(res=>{
        // console.log('获取内容配置下拉',res)
        this.$toast.clear();
        if(res.StatusCode=='200'){
          this.contentConfigurationList = res.Detiel
        }else{
          this.$message({type:"error",message:res.Message,center:"true"});
        }
      })
    },
    async GetBuilding(){ //获取项目的楼栋信息
      this.load();
      let res = await this.Request(GetBuilding({projectid: this.ProjectID}))
      // console.log('获取项目的楼栋信息',res)
      this.$toast.clear();
      if(res.StatusCode=='200'){
        // 是否含有全部
        if(res.Detiel[0].text.indexOf('全部') > 0){
          this.storiedBuildingList = res.Detiel
        }else{
          let DetielAll = [{id: "全部", text: "全部"}]
          for(let item of res.Detiel){
            DetielAll.push(item)
          }
          this.storiedBuildingList = DetielAll
        }
      }else{
        this.$message({type:"error",message:res.Message,center:"true"});
      }
    },
    GetFloorbyBuilding(){ //根据楼栋获取楼层
      let params = {
        projectid: this.ProjectID,
        building: this.storiedBuilding
      }
      this.load();
      this.Request(GetFloorbyBuilding(params)).then(res=>{
        this.$toast.clear();
        // console.log('根据楼栋获取楼层',res)
        if(res.StatusCode=='200'){
          if(res.Detiel.length != 0){ //优化当楼栋选择全部
            if(res.Detiel[0].text.indexOf('全部') > 0){
              this.floorList = res.Detiel
            }else{
              let DetielAll = [{id: "全部", text: "全部"}]
              for(let item of res.Detiel){
                DetielAll.push(item)
              }
              this.floorList = DetielAll
            }
          }
        }else{
          this.$message({type:"error",message:res.Message,center:"true"});
        }
      })
    },
    async GetReportLabelList(){ //获取标签列表接口
      this.load();
      let res = await this.Request(GetReportLabelList({}))
      // console.log('获取标签列表接口',res)
      this.$toast.clear();
      if(res.StatusCode=='200'){
        this.markList = res.Detiel
      }else{
        this.$message({type:"error",message:res.Message,center:"true"});
      }
    },
    confirmStoriedBuilding(value,index){ //确定楼栋
      console.log(value)
      this.storiedBuilding = value.text
      this.showStoriedBuilding = false
      this.GetFloorbyBuilding()
    },
    isShowFloor(){ //选择楼层
      if(this.storiedBuilding == '全部'){
        this.$message({type:"warning",message:'请先选择楼栋',center:"true"});
      }else{
        this.showFloor = true
      }
    },
    confirmFloor(value,index){ //确定楼层
      this.floor = value.text
      this.showFloor = false
    },
    confirmStartTime(type, value){ //确定开始时间
      this.startTime = this.formatterTime(this.startTimeBox)
      this.showStartTime = false
    },
    confirmEndTime(){ //确定结束时间
      this.endTime = this.formatterTime(this.endTimeBox)
      this.showEndTime = false
    },
    startTimeChange(e){ //当值变化时触发的事件
      let endTimeArr = e.getValues();
      this.startTimeBox = `${endTimeArr[0]}-${endTimeArr[1]}-${endTimeArr[2]}  ${endTimeArr[3]}:${endTimeArr[4]}:00`
    },
    endTimeChange(e){ //当值变化时触发的事件
      let endTimeArr = e.getValues();
      this.endTimeBox = `${endTimeArr[0]}-${endTimeArr[1]}-${endTimeArr[2]}  ${endTimeArr[3]}:${endTimeArr[4]}:00`
    },
    // 默认设置标签数据
    setRemarkData(val){
      if(val){
        console.log(val)
        this.dataName = val.LabelName
        this.resultContent = []
        this.resultContent.push(val.LabelValue)
      }
    },
    submitRetrieval(){ //确定检索
      if(!this.dataName){
        this.$message({type:"warning",message:'请输入资料名称',center:"true"});
        return
      }
      if(this.resultContent == ''){
        this.$message({type:"warning",message:'请选择内容配置',center:"true"});
        return
      }
      let params = {
        ProjectID:this.ProjectID,
        ReportName: this.dataName,
        AIReportType: this.resultContent,
        BuildingName: this.storiedBuilding,
        LevelName: this.floor,
        StartTime: this.startTime,
        EndTime: this.endTime,
      }
      // console.log(params)
      this.load();
      this.Request(GetCustomFormExport(params)).then(res=>{
        this.$toast.clear();
        // console.log('自定义表格导出',res)
        if(res.StatusCode=='200'){
          this.$message({type:'success',message:res.Message,center:'true'})
          this.$router.push({path:'nav/index/AI-report',query:{'active':4}})
        }else{
          this.$message({type:"error",message:res.Message,center:"true"});
        }
      })
      
    },
    //返回
    goBack() {
      this.$router.back(-1)
    },
    /**
     * 格式化日期
     */
    formatterTime(time) {
      if (!time) return "";
      return time.substring(0, time.indexOf("u"));
    },
    toggle(index,item) { //复选框
      this.$refs.checkboxes[index].toggle();
      let contentVal = ''
      for(let item of this.resultContent){ // 返现对应的文字
        contentVal += this.contentConfigurationList[item].text
      }
      this.contentConfiguration = contentVal
    }
  }
}

</script>

<style>
.list-content{
        margin-top:46px;
        overflow:scroll;
    }
    .list-item{
        text-align:center;
    }
/* 顶部表头 */
.container-ai-report .van-nav-bar .van-nav-bar__title {
    font-size: 36px;
    font-weight: 400;
}
.container-ai-report  .van-nav-bar {
    height: 88px;
    line-height: 88px;
 }
/* 自定义表单列表 */
.custom-report-list{width: 100%;height: auto;margin-top: 100px;}
.custom-report-list ul{height: auto;border-top: 1px solid #e9e9e9;background: #fff;padding: 0 20px;}
.custom-report-list ul li{width: 100%;height: 80px;line-height: 80px;padding: 4px 0; border-bottom: 1px solid #e9e9e9;font-size: 26px;}
.custom-report-list ul li span{color: #323233;}
.custom-report-list-span{float: left;}
.custom-report-list-input{float: right;width: 80%;height: 80px;line-height: 80px; text-align: right;}
.custom-report-list ul li .van-cell{padding: 0;height: 80px;line-height: 80px;font-size: 26px;}
.custom-report-list ul li .van-cell .van-cell__right-icon{padding-top: 30px;font-size: 30px;}
.van-picker__toolbar{height: 60px;line-height: 60px;}
.van-picker__toolbar .van-picker__cancel,.van-picker__toolbar .van-picker__confirm{font-size: 26px;}
.custom-report-tag{padding:0 20px;}
.custom-report-tag p{width: 100%;height: 80px;line-height: 80px;font-size: 26px;color: #323233;}
.custom-report-tag-list{width: 90%; display: flex;flex-wrap: wrap}
.custom-report-tag-list span{display: inline-block;text-align: center; width: 136px;height: 47px;line-height: 47px; border:1px solid #5a92ff;border-radius: 10px;font-size: 26px;color: #5a92ff;margin:0 20px 20px 0;}
.custom-report-bt{width: 94%;margin: 40px auto 0;display: block;border: none;border-radius: 20px;height: 80px;font-size: 28px;background: #5a92ff;color: #fff;}
.content-class .van-cell__value span{width: 100%;display: inline-block;overflow: hidden;text-overflow: ellipsis;white-space: nowrap;}
.content-class-popup .van-cell{font-size: 26px;padding: 20px;}
</style>
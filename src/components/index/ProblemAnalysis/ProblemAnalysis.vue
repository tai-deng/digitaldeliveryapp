<!-- 问题类型分析 -->
<template>
  <div class="container-problem-analysis">
    <!-- 头部 -->
    <van-nav-bar title="问题类型分析" @click-left="goBack" fixed :border="false" :z-index="100" class="my-nav-bar">
      <span class="el-icon-arrow-left fontsize" slot="left"></span>
    </van-nav-bar>
    <div class="wrapper">
      <el-dropdown trigger="click" @visible-change="getBuildingData" @command="handleCommand" class="my-dropdown">
        <span class="el-dropdown-link">
          <img src="../../../assets/imgs/storied_building.png" alt>
          {{buildingName}}
          <i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown" class="my-dropdown-menu">
          <el-dropdown-item command="整体楼栋">整体楼栋</el-dropdown-item>
          <el-dropdown-item v-for="(item, index) in buildList" :key="index" :command="item.text">{{item.text}}</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <div class="cumulative">
        <span class="start active" @click="startCumulative">开工累计</span>
        <span class="year" @click="actionsheetYear">{{year}}年</span>
        <span class="month" @click="actionsheetMonth">{{month}}月</span>
        <span class="week" @click="actionsheetWeek">{{week}}周</span>
      </div>
      <div class="my_echarts">
        <div ref="myChartBar" class="chart_bar"></div>
      </div>
    </div>
    
    <van-popup v-model="popupShow" position="bottom">
      <van-picker
        show-toolbar
        :title="pickerTitle"
        :columns="columns"
        :loading="pickerLoading"
        :value-key="value_key"
        @cancel="popupShow = false"
        @confirm="onConfirm"
        class="my-picker"
      />
    </van-popup>

    <van-actionsheet v-model="showYear">
      <van-picker show-toolbar :columns="columnsYear" @cancel="onCancel" @confirm="onConfirm"/>
    </van-actionsheet>
    <van-actionsheet v-model="showMonth">
      <van-datetime-picker
        v-model="currentMonth"
        type="year-month"
        :max-date="maxDate"
        :formatter="formatter"
      />
    </van-actionsheet>
    <van-actionsheet v-model="showWeek">
      <div class="block">
        <!-- <span class="demonstration">周</span> -->
        <el-date-picker v-model="currentWeek" type="week" format="yyyy 第 WW 周" placeholder="选择周"></el-date-picker>
      </div>
    </van-actionsheet>
  </div>
</template>

<script type='textecmascript-6'>
import { GetTypeAnalysis, GetBuilding } from "@/api/api.js";
import echarts from "echarts";
export default {
  data() {
    return {
      ProjectID: localStorage.getItem('projectid'), //项目ID
      userID: localStorage.getItem("userId"), //用户ID
      buildingName: "整体楼栋",  //楼栋名称
      dateType: 1,  //数据查询类型（1：累计2：年3：月4：周）
      // year: new Date().getFullYear(),
      // month: new Date().getMonth() + 1,
      // week: 1,
      year: "",
      month: "",
      week: "",
      popupShow: false,  //弹出层是否显示
      pickerLoading: false,  //是否显示加载状态
      pickerTitle: "",  //顶部栏标题
      value_key: "",  //选项对象中，文字对应的 key
      columns: [],  //对象数组，配置每一列显示的数据

      showYear: false, //上拉框默认隐藏(年)
      showMonth: false, //上拉框默认隐藏(月)
      showWeek: false,//上拉框默认隐藏(周)
      columnsYear: ["2015年", "2016年", "2017年", "2018年", "2019年"], //时间选择年
      currentMonth: new Date(), //时间选择月
      currentWeek: new Date(), // 时间选择周
      maxDate: new Date(), //最大选择时间
      barData: [],
      category: [],
      buildList: []  //楼栋集合
    };
  },
  created(){
    this.getTypeAnalysis();
    // this.getBuildingData()
  },
  mounted() {
    
  },
  methods: {
    /**
     * @name 获取问题类型分析数据
     * @param {string} BuildingName 楼栋名称（值为空是查整体）
     * @param {integer} DateType 数据查询类型（1：累计2：年3：月4：周）
     * @param {integer} Year 年
     * @param {integer} Month 月
     * @param {integer} Week 周
     */
    async getTypeAnalysis(){
      let params = {
        ProjectID: this.ProjectID,
        BuildingName: this.buildingName == "整体楼栋" ? "" : this.buildingName,
        DateType: this.dateType,
        Year: this.year,
        Month: this.month,
        Week: this.week
      };
      let data = await this.Request(GetTypeAnalysis(params));
      this.category = []
      this.barData = []
      if (data.StatusCode === 200) {
        if(data.Detiel.length > 0){
          data.Detiel.forEach(item => {
            this.category.push(item.ProblemType)
            this.barData.push(item.Count)
          })
          this.barChart();
        }else{
          this.$toast({
            message: "暂无数据！",
            className: "my-toast"
          });
        }
        // console.log("==getTypeAnalysis==", this.category, this.barData)
      } else {
        this.$toast({
          type: "fail",
          message: data.message ? data.message : "后台异常",
          className: "my-toast"
        });
      }
    },
    /**
     * @name 获取模型的楼栋信息
     */
    getBuildingData() {
      this.Request(
        GetBuilding({ projectid: this.ProjectID })
      ).then(data => {
        if (data.StatusCode === 200) {
          if (data.Detiel.length > 0) {
            this.buildList = data.Detiel;
          }else{
            this.buildList = [];
          }
        } else {
          this.$toast({
            className: "my-toast",
            type: "fail",
            message: data.Message
          });
        }
      });
    },
    /**
     * @name 点击菜单项触发的事件回调，用户可以通过相应的菜单项key进行不同的操作
     * @param {dropdown-item 的指令} command key
     */
    handleCommand(command) {
      this.buildingName = command
      this.getTypeAnalysis()
    },
    //返回
    goBack() {
      this.$router.push({ path: "/Risk" });
    },
    startCumulative(){
      this.year = "";
      this.month = "";
      this.week = "";
      this.dateType = 1;
      this.getTypeAnalysis();
    },
    //点击年月周显示弹窗
    actionsheetYear() {
      this.pickerTitle = "年"
      this.popupShow = true;
      let date = new Date;
      let year = date.getFullYear();
      let years = []
      for(let i = 0; i < 6; i++){
        years.push(Number(year) - i)
      }
      this.dateType = 2;
      this.columns = years;
    },
    actionsheetMonth() {
      if(this.year == ""){
        this.$toast({
          message: "请选选择年份",
          className: "my-toast"
        });
        return;
      }
      this.pickerTitle = "月"
      this.popupShow = true;
      this.dateType = 3;
      this.columns = [1,2,3,4,5,6,7,8,9,10,11,12]
    },
    actionsheetWeek() {
      if(this.month == ""){
        this.$toast({
          message: "请选选择月份",
          className: "my-toast"
        });
        return;
      }
      this.pickerTitle = "周"
      this.popupShow = true;
      this.dateType = 4;
      this.columns = [1,2,3,4,5]
    },
    //对选项文字进行处理
    formatter(type, value) {
      if (type === "year") {
        return `${value}年`;
      } else if (type === "month") {
        return `${value}月`;
      }
      return value;
    },
    /**
     * @name 点击完成按钮时触发
     */
    onConfirm(value, index){
      switch (this.pickerTitle) {
        case "年":
          {
            this.year = value;
            this.popupShow = false;
            this.getTypeAnalysis();
          }
          break;
        case "月":
          {
            this.month = value;
            this.popupShow = false;
            this.getTypeAnalysis();
          }
          break;
        case "周":
          {
            this.week = value;
            this.popupShow = false;
            this.getTypeAnalysis();
          }
          break;
      
        default:
          break;
      }
    },
    onCancel() {
      console.log("取消");
      this.showYear = false;
      this.showMonth = false;
      this.showWeek = false;
    },
    //echart横向柱状图
    barChart() {
      var myChart = echarts.init(this.$refs.myChartBar);
      //初始化数据
      var option = {
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow"
          }
        },
        grid: {
          left: "3%",
          right: "8%",
          top: "1%",
          containLabel: true
        },
        xAxis: {
          type: "value",
          show: false,
          axisLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          splitLine: {
            show: false
          }
        },
        yAxis: {
          type: "category",
          data: this.category,
          splitLine: { show: false },
          axisLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          offset: 10,
          nameTextStyle: {
            fontSize: 24
          }
        },
        series: [
          {
            name: "数量",
            type: "bar",
            data: this.barData,
            barWidth: 16,
            barGap: 10,
            smooth: true,
            label: {
              normal: {
                show: true,
                position: "right",
                offset: [0, 0],
                textStyle: {
                  color: "#F68300",
                  fontSize: 13
                }
              }
            },
            itemStyle: {
              emphasis: {
                barBorderRadius: 7
              },
              normal: {
                barBorderRadius: 7,
                color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                  { offset: 0, color: "#3977E6" },
                  { offset: 1, color: "#37BBF8" }
                ])
              }
            }
          }
        ]
      };
      myChart.setOption(option);
    }
  }
};
</script>
<style lang='stylus' scoped rel='stylesheet/stylus'>
.container-problem-analysis
  width 100%
  height 100%
  background-color #fff
  .van-nav-bar
    // height 88px
    // line-height 88px
    // border-bottom 1px solid #E5E5E5
    // background-color #5892FF
    .fontsize
      // font-size 42px
      // color #fff
      // display inline-block
      // vertical-align middle
    .speed_of_progress
      // width 36px
      // height 36px
  .wrapper
    margin-top 88px
    .cumulative
      width 100%
      height 100px
      line-height 60px
      box-sizing border-box
      padding 20px
      text-align center
      color #4E8CF5
      display flex
      span
        flex 1
        border 1px solid #BDC1C6
        font-size 28px
      .year, .month, .week
        border-left 0
      .active
        background-color #4E8CF5
        color #fff
    .my_echarts
      padding 20px
      .chart_bar
        width 700px
        height 1000px
</style>
<style>
@import "~@/assets/css/resetVant.css";
/* 顶部表头 */
/* .container-problem-analysis .van-nav-bar .van-nav-bar__title {
  font-size: 36px;
  color: #fff;
} */
/*下拉菜单*/
.container-problem-analysis .el-dropdown {
  display: inline-block;
  height: 60px;
  line-height: 80px;
}
.container-problem-analysis .el-dropdown .el-dropdown-link {
  margin-left: 24px;
  /* font-size: 28px; */
}
.container-problem-analysis .el-dropdown .el-dropdown-link img {
  width: 30px;
  height: 30px;
}
.el-dropdown-menu {
  background-color: #222832;
  opacity: 0.9;
  border-radius: 8px;
  box-sizing: border-box;
  padding: 0 20px;
  border: 0;
}
.el-dropdown-menu__item {
  color: #fff;
  width: 140px;
  line-height: 85px;
  text-align: center;
  border-bottom: 1px solid #737577;
}
.container-problem-analysis .van-picker {
  font-size: 28px;
}
.container-problem-analysis .van-picker__toolbar {
  height: 82px;
  line-height: 82px;
}
.container-problem-analysis .block {
  line-height: 88px;
  text-align: center;
}
.container-problem-analysis .el-input__inner {
  font-size: 24px;
  color: #333;
}
.container-problem-analysis .el-input__prefix {
  width: 20px;
  height: 20px;
  /* line-height: 20px; */
}
.el-date-picker .el-date-table td span {
  width: 35px;
  height: 35px;
  line-height: 36px;
}
.el-date-picker .el-date-table td, .el-date-picker .el-date-table td div {
  height: 35px;
}
.el-picker-panel {
  width: 100%;
}
div.el-date-picker div.el-picker-panel__content {
  width: 96%;
}
</style>

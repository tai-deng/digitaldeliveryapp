<!-- 成本管理详情 -->
<template>
  <div class="container-cost_control_details">
    <!-- 头部 -->
    <van-nav-bar title="成本管理详情" @click-left="goBack" fixed :border="false" :z-index="100" class="my-nav-bar">
      <span class="el-icon-arrow-left fontsize" slot="left"></span>
    </van-nav-bar>
    <div class="Interlayer"></div>
    <div class="wrapper">
      <div class="wrapper_title">
        <span class="title_content">{{resourceName}}</span>
        <span class="title_content">
          楼栋：
          <span>{{buildName}}</span>
        </span>
        <span class="title_content">
          楼层：
          <span>{{floor}}</span>
        </span>
      </div>
      <el-table
        :data="tableData"
        :span-method="objectSpanMethod"
        border
        show-summary
        style="width: 100%; margin-top: 20px"
        class="my-table"
      >
        <el-table-column type="index" label="序号" width="36" align="center"></el-table-column>
        <el-table-column prop="AdjustBOQ" label="施工预算量" align="center">
          <!-- <template slot-scope="scope" :data-BOQ="scope.row.AdjustBOQ">{{adjustBOQ}}</template> -->
        </el-table-column>
        <el-table-column prop="InNum" label="入库" width="54" align="center">
          <template slot-scope="scope" v-if="scope.row.InNum">
            <div class="costnum">{{ scope.row.InNum }}</div>
            <div class="costdate">({{ scope.row.InDate | filterDate}})</div>
          </template>
        </el-table-column>
        <el-table-column prop="OutNum" label="出库" width="54" align="center">
          <template slot-scope="scope" v-if="scope.row.OutNum">
            <div class="costnum">{{ scope.row.OutNum }}</div>
            <div class="costdate">({{ scope.row.OutDate | filterDate}})</div>
          </template>
        </el-table-column>
        <el-table-column prop="BackNum" label="退还" width="54" align="center">
          <template slot-scope="scope" v-if="scope.row.BackNum">
            <div class="costnum">{{ scope.row.BackNum }}</div>
            <div class="costdate">({{ scope.row.BackDate | filterDate}})</div>
          </template>
        </el-table-column>
        <el-table-column prop="StoreNum" label="库存" width="51" align="center"></el-table-column>
        <el-table-column prop="OverNum" width="45" align="center">
          <template slot="header" slot-scope="scope">
            节超
            <img @click="rulePopup" class="question" src="../../../assets/imgs/question.png" :alt="scope.row">
          </template>
        </el-table-column>
      </el-table>
    </div>
    <van-popup v-model="showPopup">
      <span class="el-icon-close" @click="close"></span>
      <div>计算规则：</div>
      <p>
        1、该项资源在工序施工过程中时：<br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;节超 = 出库 - 退还 - 预算 * 进度百分比
      </p>
      <p>
        2、当该项资源所在工序完成后：<br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;节超 = 出库 - 退还 - 预算
      </p>
    </van-popup>
  </div>
</template>

<script type='textecmascript-6'>
import {QueryCostItem} from "@/api/api.js";
export default {
  data() {
    return {
      buildName: "",
      specialty: "",
      floor: "",
      taskId: "",
      resourceName: "",
      adjustBOQ: "",
      showPopup: false,//计算规则弹窗
      tableData: [
        // {
        //   budget_volume: "1000.00",
        //   warehousing: "100.00(2019.01.02)",
        //   out_stock: "100.00",
        //   Return: "100.00",
        //   Stock: "100.00",
        //   section_super: "10.00"
        // },
        // {
        //   budget_volume: "1000.00",
        //   warehousing: "100.00(2019.01.02)",
        //   out_stock: "100.00",
        //   Return: "/",
        //   Stock: "100.00",
        //   section_super: "10.00"
        // },
        // {
        //   budget_volume: "1000.00",
        //   warehousing: "100.00(2019.01.02)",
        //   out_stock: "100.00",
        //   Return: "/",
        //   Stock: "100.00",
        //   section_super: "10.00"
        // },
        // {
        //   budget_volume: "1000.00",
        //   warehousing: "100.00(2019.01.02)",
        //   out_stock: "/",
        //   Return: "/",
        //   Stock: "100.00",
        //   section_super: "10.00"
        // },
        // {
        //   budget_volume: "1000.00",
        //   warehousing: "100.00(2019.01.02)",
        //   out_stock: "/",
        //   Return: "/",
        //   Stock: "100.00",
        //   section_super: "10.00"
        // },
      ]
    };
  },
  created() {
    this.buildName = this.$route.query.BuildName; //楼栋
    this.specialty = this.$route.query.Specialty; //专业
    this.floor = this.$route.query.Floor; //楼层
    this.taskId = this.$route.query.TaskId; //进度ID
    this.resourceName = this.$route.query.ResourceName; //资源名称
    // this.adjustBOQ = this.$route.query.AdjustBOQ; //施工预算量
    if (this.resourceName == "") {
      this.$router.push({
        path: "CostControl"
      });
    }
    this.getCostDetail()
  },
  methods: {
    /**
     * @name 成本管理详情
     */
    async getCostDetail(){
      let params = {
        ProjectID: localStorage.getItem("projectid"),
        BuildName: this.buildName,
        Specialty: this.specialty,
        Floor: this.floor,
        TaskId: this.taskId,
        ResourceName: this.resourceName
      };
      let costDetailData = await this.Request(QueryCostItem(params))
      if(costDetailData.StatusCode == 200){
        if(costDetailData.Detiel.length > 0){
          this.tableData = costDetailData.Detiel
          console.log("详情：",costDetailData)
        }else{
          this.$toast({
            message: "没有数据",
            className: "my-toast"
          })
          this.tableData = []
        }
      }else{
        this.$toast({
          type: 'fail',
          message: costData.message ? costData.message : '后台异常',
          className: "my-toast"
        })
      }
    },
    warehousing(row, column){
      return row.InDate == null ? "" : row.InNum + "(" + row.InDate.substring(0, row.InDate.indexOf("T")) + ")"
    },
    outofstock(row, column){
      return row.OutDate == null ? "" : row.OutNum + "(" + row.OutDate.substring(0, row.OutDate.indexOf("T")) + ")"
    },
    returns(row, column){
      return row.BackDate == null ? "" : row.BackNum + "(" + row.BackDate.substring(0, row.BackDate.indexOf("T")) + ")"
    },
    //返回
    goBack() {
      this.$router.push({ path: "/CostControl" });
    },
    //计算规则弹窗
    rulePopup() {
      this.showPopup = true
    },
    //关闭弹窗
    close() {
      this.showPopup = false
    },
    //表格合并
    objectSpanMethod({ rowIndex, columnIndex }) {
      if (columnIndex === 1 || columnIndex === 5 || columnIndex === 6) {
        if (rowIndex === 0) {
          return {
            rowspan: this.tableData.length + 1,
            colspan: 1
          };
        } else {
          return {
            rowspan: 0,
            colspan: 0
          };
        }
      }
    },
    //表格合计
    getSummaries(param) {
      const { columns, data } = param;
      const sums = [];
      columns.forEach((column, index) => {
        if (index === 0) {
          sums[index] = "合计";
          return;
        } else if (index === 1 || index === 5 || index === 6) {
          sums[1] = data[0].AdjustBOQ;
          sums[5] = data[0].StoreNum;
          sums[6] = data[0].OverNum;
          return;
        }
        const values = data.map(item => parseInt(item[column.property]));
        if (!values.every(value => isNaN(value))) {
          sums[index] = values.reduce((prev, curr) => {
            const value = Number(curr);
            if (!isNaN(value)) {
              return prev + curr;
            } else {
              return prev;
            }
          }, 0);
          sums[index] += "";
        } else {
          sums[index] = "";
        }
      });
      return sums;
    }
  },
  filters: {
    filterDate(v) {
      return require("moment")(v).format("YY.MM.DD")
    }
  }
};
</script>
<style lang='stylus' scoped rel='stylesheet/stylus'>
.container-cost_control_details
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
  .Interlayer
    height 88px
  .wrapper
    .wrapper_title
      display flex
      height 88px
      line-height 88px
      box-sizing border-box
      padding 0 25px
      font-size 30px
      margin-top 22px
      background-color #5A92FF
      color #fff
      .title_content
        flex 1
        text-align center
    .el-table
      color #333
      margin-top 0 !important
  .van-popup
    width 568px
    height 300px
    line-height 46px
    div
      font-size 28px
      font-weight bold
      margin 43px 0 0 52px
    p
      margin-left 52px
    .el-icon-close
      position absolute
      top 24px
      right 24px
      width 21px
      height 21px
</style>
<style>
@import "~@/assets/css/resetVant.css";
/* 顶部表头 */
/* .container-cost_control_details .van-nav-bar .van-nav-bar__title {
  font-size: 36px;
} */
/*表格*/
.container-cost_control_details .el-table__header-wrapper thead tr .cell {
  line-height: 87px;
  color: #333;
  /* font-size: 30px; */
  padding: 0;
}
.container-cost_control_details .el-table tr .cell .costnum{
  font-size: 22px;
  font-weight: 400;
}
.container-cost_control_details .el-table tr .cell .costdate{
  font-size: 16px;
  font-weight: 400;
}
.container-cost_control_details .el-table__header-wrapper thead tr .cell .question {
  position: absolute;
  top: 4px;
  right: 10px;
  width: 17px;
  height: 17px;
}
.container-cost_control_details .el-table__body-wrapper tbody tr td .cell {
  /* height: 107px;
  line-height: 107px; */
  font-size: 22px;
  padding: 0;
}
.container-cost_control_details .el-table__body-wrapper tbody tr:first-child td:nth-child(3) .cell, .container-cost_control_details .el-table__body-wrapper tbody tr td:nth-child(2) .cell {
  /* width: 90px;
  margin: 0 auto;
  line-height: 40px; */
}
.container-cost_control_details .el-table__footer-wrapper tbody td {
  background-color: #fff;
  color: #333;
}
.container-cost_control_details .el-table__footer-wrapper tbody td .cell {
  /* line-height: 105px;
  font-size: 30px;
  padding: 0; */
}
.container-cost_control_details .el-table__footer .cell{
  font-size: 26px;
}
</style>

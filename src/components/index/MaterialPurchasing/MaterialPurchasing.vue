<!-- MaterialPurchasing物资采购 -->
<template>
  <div class="container-material-purchasing">
    <div class="wrapper" id="pur_wrapper">
      <!-- 头部 -->
      <van-nav-bar
        title="范围管理"
        right-text="按钮"
        left-arrow
        @click-left="onClickLeft"
        @click-right="onClickRight"
      >
        <div class="nav_right" slot="right">
          <img src="../../../assets/imgs/screen.png" alt>
        </div>
      </van-nav-bar>
      <!--  -->
      <!-- tab栏 -->
      <van-tabs v-model="active" :line-width="186" :line-height="3">
        <van-tab class="purchasing_table_list" title="物资采购总览">
          <!-- 采购列表 -->
          <el-table
            :data="purchase_tableData"
            :row-style="{'height': '40px'}"
            :cell-style="{'text-align': 'center'}"
          >
            <el-table-column prop="itemName" label="物资名称"></el-table-column>
            <el-table-column prop="constructionBudget" label="施工预算量"></el-table-column>
            <el-table-column prop="pro_total" label="采购总量"></el-table-column>
            <el-table-column prop="stock" label="库存" width="67"></el-table-column>
            <el-table-column prop="overstep" label="节超" width="67"></el-table-column>
          </el-table>
        </van-tab>
        <van-tab title="物资采购分析">
          <div class="purcharsing_analysis">
            <div class="purcharsing_analysis_item">
              <div class="anay_title">
                <div class="title_icon"></div>
                <div class="title_text">C20混凝土</div>
              </div>
              <div class="anay_content_first">
                数据
                <!-- <line-charts></line-charts> -->
                <div class="center-chart">
                  <div class="chart" id="charts"></div>
                </div>
              </div>
            </div>
            <div class="purcharsing_analysis_item">
              <div class="anay_title">
                <div class="title_icon"></div>
                <div class="title_text">材料出入库情况</div>
              </div>
              <div class="anay_content_second">
                <!-- 材料出入库情况 -->
                <el-table :data="table_data" :span-method="arraySpanMethod" width="100%">
                  <el-table-column label="入库">
                    <el-table-column prop="in_time" label="时间" width="77"></el-table-column>
                    <el-table-column prop="in_count" label="数量" width="55"></el-table-column>
                  </el-table-column>
                  <el-table-column label="出库">
                    <el-table-column prop="out_time" label="时间" width="77"></el-table-column>
                    <el-table-column prop="out_count" label="数量" width="55"></el-table-column>
                  </el-table-column>
                  <el-table-column prop="stock" label="库存" width="54"></el-table-column>
                  <el-table-column prop="overstep" label="节超" width="54"></el-table-column>
                </el-table>
              </div>
            </div>
          </div>
        </van-tab>
      </van-tabs>
    </div>
  </div>
</template>

<script type='textecmascript-6'>
// import lineCharts from './lineCharts'
export default {
  data() {
    return {
      sel_show: false,
      active: 0,
      activeNames: ["0"],
      // 入库出库列表数据
      table_data: [
        {
          in_time: "2018.05.01",
          in_count: "10.00m³",
          out_time: "2018.05.01",
          out_count: "10.00m³",
          stock: "14.00m³",
          overstep: "14.00m³"
        },
        {
          in_time: "2018.05.01",
          in_count: "10.00m³",
          out_time: "2018.05.01",
          out_count: "10.00m³",
          stock: "14.00m³",
          overstep: "14.00m³"
        },
        {
          in_time: "2018.05.01",
          in_count: "10.00m³",
          out_time: "2018.05.01",
          out_count: "10.00m³",
          stock: "14.00m³",
          overstep: "14.00m³"
        },
        {
          in_time: "2018.05.01",
          in_count: "10.00m³",
          out_time: "2018.05.01",
          out_count: "10.00m³",
          stock: "14.00m³",
          overstep: "14.00m³"
        },
        {
          in_time: "2018.05.01",
          in_count: "10.00m³",
          out_time: "2018.05.01",
          out_count: "10.00m³",
          stock: "14.00m³",
          overstep: "14.00m³"
        },
        {
          in_time: "2018.05.01",
          in_count: "10.00m³",
          out_time: "2018.05.01",
          out_count: "10.00m³",
          stock: "14.00m³",
          overstep: "14.00m³"
        }
      ],
      // 采购物资列表数据
      purchase_tableData: [
        {
          itemName: "C20混凝土",
          constructionBudget: "44.00m³",
          pro_total: "50.00m³",
          stock: "10.00m³",
          overstep: "14.00m³"
        },
        {
          itemName: "C20混凝土",
          constructionBudget: "44.00m³",
          pro_total: "50.00m³",
          stock: "10.00m³",
          overstep: "14.00m³"
        },
        {
          itemName: "C20混凝土",
          constructionBudget: "44.00m³",
          pro_total: "50.00m³",
          stock: "10.00m³",
          overstep: "14.00m³"
        },
        {
          itemName: "C20混凝土",
          constructionBudget: "44.00m³",
          pro_total: "50.00m³",
          stock: "10.00m³",
          overstep: "14.00m³"
        },
        {
          itemName: "C20混凝土",
          constructionBudget: "44.00m³",
          pro_total: "50.00m³",
          stock: "10.00m³",
          overstep: "14.00m³"
        },
        {
          itemName: "C20混凝土",
          constructionBudget: "44.00m³",
          pro_total: "50.00m³",
          stock: "10.00m³",
          overstep: "14.00m³"
        },
        {
          itemName: "C20混凝土",
          constructionBudget: "44.00m³",
          pro_total: "50.00m³",
          stock: "10.00m³",
          overstep: "14.00m³"
        },
        {
          itemName: "C20混凝土",
          constructionBudget: "44.00m³",
          pro_total: "50.00m³",
          stock: "10.00m³",
          overstep: "14.00m³"
        },
        {
          itemName: "C20混凝土",
          constructionBudget: "44.00m³",
          pro_total: "50.00m³",
          stock: "10.00m³",
          overstep: "14.00m³"
        }
      ],
    };
  },
  methods: {
    // 返回按钮
    onClickLeft() {
      this.$router.go(-1);
    },
    // 筛选按钮
    onClickRight() {
      this.sel_show = !this.sel_show;
    },

    // 重置函数
    resetFunc() {
      console.log("chongzhi");
    },
    //确认函数
    recordCheck() {
      console.log("queren");
    },
    // 表格合并单元格
    arraySpanMethod({ rowIndex, columnIndex }) {
      if (columnIndex === 5) {
        if (rowIndex % 6 === 0) {
          return [6, 1];
        } else {
          return [0, 0];
        }
      } else if (columnIndex === 4) {
        if (rowIndex % 6 === 0) {
          return [6, 1];
        } else {
          return [0, 0];
        }
      } else {
        return [1, 1];
      }
    }
  },

  //图标数据函数
  chart(data) {
    console.log(data);
    // 此处跟产值有些不同
    let mPalnOutput = [], //已发现
      mTureOutput = [], //已整改
      person = [], //班组人数
      Punish = [], //累计罚款
      month = [
        "01",
        "02",
        "03",
        "04",
        "05",
        "06",
        "07",
        "08",
        "09",
        "10",
        "11",
        "12"
      ]; //月份
    month.forEach(i => {
      mPalnOutput.push(0);
      mTureOutput.push(0);
      person.push(0);
      Punish.push(0);
      data.forEach(j => {
        if (Number(i) == Number(j.monthDynamic)) {
          mPalnOutput[mPalnOutput.length - 1] = Number(j.cAll);
          mTureOutput[mTureOutput.length - 1] = Number(j.cSolveAll);

          person[person.length - 1] = Number(j.personCount);
          Punish[Punish.length - 1] = Number(j.totalPunish);
          // mTureOutput.push(Number(j.cSolveAll))
        }
      });
    });
    console.log(mPalnOutput, mTureOutput, month);

    let myChart = this.$echarts.init(document.getElementById("charts"));
    // 绘制图表
    myChart.setOption({
      grid: {
        top: "6%",
        bottom: "12%",
        right: "2%",
        left: "8%"
      },

      dataZoom: [
        {
          type: "inside",
          realtime: true,
          start: 0,
          end: 60
        }
      ],
      xAxis: {
        data: month,
        boundaryGap: false,
        axisTick: {
          show: false
        }
      },
      yAxis: {
        axisLine: {
          lineStyle: {
            color: "#98cdfc",
            type: "dashed"
          }
        },
        axisTick: {
          show: false
        },
        axisLabel: {
          color: "#333",
          fontSize: 10,
          margin: 8
        },
        splitLine: {
          show: false
        }
      },
      series: [
        {
          name: "实际产值",
          type: "line",
          symbol: "circle", //折线点设置为实心点
          data: mTureOutput,
          markLine: {
            // 设置警戒线（图表标线）
            silent: true, // 图形是否不响应和触发鼠标事件
            lineStyle: {
              normal: {
                type: "solid"
              }
            },
            data: []
          },
          lineStyle: {
            color: "#FF9913"
          },
          itemStyle: {
            color: "#FF9913",
            borderColor: "rgba(0,0,0,0)",
            borderWidth: 50
          },
          areaStyle: {
            color: {
              type: "linear",
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [
                {
                  offset: 0,
                  color: "#FF9913" // 0% 处的颜色
                },
                {
                  offset: 1,
                  color: "white" // 100% 处的颜色
                }
              ],
              globalCoord: false // 缺省为 false
            }
          }
        },
        {
          name: "计划产值",
          type: "line",
          symbol: "circle", //折线点设置为实心点
          data: mPalnOutput,

          lineStyle: {
            color: "#2577E3"
          },
          itemStyle: {
            color: "#2577E3",
            borderColor: "rgba(0,0,0,0)",
            borderWidth: 50
          },
          areaStyle: {
            color: {
              type: "linear",
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [
                {
                  offset: 0,
                  color: "#2577E3" // 0% 处的颜色
                },
                {
                  offset: 1,
                  color: "white" // 100% 处的颜色
                }
              ],
              globalCoord: false // 缺省为 false
            }
          }
        }
      ]
    });
    this.ytVal = person[0];
    this.btVal = Punish[0];
    // 监听滑动事件
    myChart.on("datazoom", e => {
      let start = Math.round(e.batch[0].start);
      if (start < 5) {
        console.log("第一月");
        this.ytVal = person[0];
        this.btVal = Punish[0];
      } else if (start >= 5 && start < 15) {
        console.log("第二月");
        this.ytVal = person[1];
        this.btVal = Punish[1];
      } else if (start >= 15 && start < 25) {
        console.log("第三月");
        this.ytVal = person[2];
        this.btVal = Punish[2];
      } else if (start >= 25 && start < 35) {
        console.log("第四月");
        this.ytVal = person[3];
        this.btVal = Punish[3];
      } else if (start >= 35 && start < 45) {
        console.log("第五月");
        this.ytVal = person[4];
        this.btVal = Punish[4];
      } else if (start >= 45 && start < 55) {
        console.log("第六月");
        this.ytVal = person[5];
        this.btVal = Punish[5];
      } else if (start >= 55 && start < 65) {
        console.log("第七月");
        this.ytVal = person[6];
        this.btVal = Punish[6];
      } else if (start >= 65 && start < 75) {
        console.log("第八月");
        this.ytVal = person[7];
        this.btVal = Punish[7];
      } else if (start >= 75 && start < 85) {
        console.log("第九月");
        this.ytVal = person[8];
        this.btVal = Punish[8];
      } else if (start >= 85 && start < 95) {
        console.log("第十月");
        this.ytVal = person[9];
        this.btVal = Punish[9];
      } else if (start >= 95 && start < 105) {
        console.log("第十一月");
        this.ytVal = person[10];
        this.btVal = Punish[10];
      } else if (start >= 105 && start < 115) {
        console.log("第十二月");
        this.ytVal = person[11];
        this.btVal = Punish[11];
      }
    });
    /**
     * 点击折点事件
     */
    myChart.on("click", e => {
      console.log(e);
      let index = e.dataIndex;
      switch (index) {
        case 0:
          console.log("第1月");
          this.ytVal = person[0];
          this.btVal = Punish[0];
          break;
        case 1:
          console.log("第2月");
          this.ytVal = person[1];
          this.btVal = Punish[1];
          break;
        case 2:
          console.log("第3月");
          this.ytVal = person[2];
          this.btVal = Punish[2];
          break;
        case 3:
          console.log("第4月");
          this.ytVal = person[3];
          this.btVal = Punish[3];
          break;
        case 4:
          console.log("第5月");
          this.ytVal = person[4];
          this.btVal = Punish[4];
          break;
        case 5:
          console.log("第6月");
          this.ytVal = person[5];
          this.btVal = Punish[5];
          break;
        case 6:
          console.log("第7月");
          this.ytVal = person[6];
          this.btVal = Punish[6];
          break;
        case 7:
          console.log("第8月");
          this.ytVal = person[7];
          this.btVal = Punish[7];
          break;
        case 8:
          console.log("第9月");
          this.ytVal = person[8];
          this.btVal = Punish[8];
          break;
        case 9:
          console.log("第10月");
          this.ytVal = person[9];
          this.btVal = Punish[9];
          break;
        case 10:
          console.log("第11月");
          this.ytVal = person[10];
          this.btVal = Punish[10];
          break;
        case 11:
          console.log("第12月");
          this.ytVal = person[11];
          this.btVal = Punish[11];
          break;
      }
    });
  }
};
</script>
<style lang='stylus' scoped rel='stylesheet/stylus'>
.container-material-purchasing {
  width: 100%;
  height: 100%;
}
</style>
<style lang="stylus" rel='stylesheet/stylus'>
@import '../../../assets/stylus/variable';

#pur_wrapper {
  // 头部样式
  .van-nav-bar {
    width: 100%;
    height: 128px;
    border-bottom: 1px solid #E5E5E5;

    .van-nav-bar__title, .van-nav-bar__left, .van-nav-bar__right {
      color: #000;
      height: 87px;
      padding-top: 41px;
      line-height: 87px;
      font-size: $font-size-title;
      z-index: 10000;
    }

    .van-icon-arrow-left {
      color: #000;
      font-size: $font-size-title;
    }

    .van-nav-bar__text {
      color: #000;
      font-size: $font-size-title;
    }

    .nav_right {
      img {
        width: 41px;
        height: 35px;
      }
    }
  }

  .van-tabs {
    height: 100%;

    .van-tabs__content {
      padding-top: 2px;
    }

    .van-tabs__wrap {
      height: 88px;

      .van-tabs__line {
        background-color: $color-bgc-1;
      }

      .van-tab {
        line-height: 88px;
        color: #333;
        font-size: $font-size-28;
      }

      .van-tab--active {
        color: #5892FF;
      }
    }

    // tab栏内容样式
    .van-tabs__content {
      height: 100%;

      .van-tab__pane {
        height: 100%;

        .purcharsing_analysis {
          .purcharsing_analysis_item {
            padding-top: 25px;
            background-color: #fff;

            .anay_title {
              padding: 0 24px;
              height: 55px;
              border-bottom: 1px solid #E9ECF1;
              background-color: #fff;

              .title_text {
                margin-left: 19px;
                height: 29px;
                float: left;
                font-size: 30px;
                font-family: PingFang-SC-Medium;
                font-weight: bold;
                color: #333;
              }

              .title_icon {
                float: left;
                height: 29px;
                width: 8px;
                background-color: #5A92FF;
              }
            }

            .anay_content_first {
              background-color: #fff;
              width: 100%;
              height: 491px;

              // 图标数据样式
              .center-chart {
                overflow: auto;
                background-color: white;
                vertical-align: middle;

                .chart {
                  width: 720px;
                  height: 380px;

                  img {
                    width: 720px;
                    height: 400px;
                  }
                }
              }
            }

            .anay_content_second {
              background-color: #fff;
              width: 100%;
              height: 484px;

              // 采购出库入库样式
              .el-table__header {
                width: 100% !important;
                table-layout: automatic !important;

                .is-group {
                  tr, th {
                    background-color: #5892FF;

                    .cell {
                      height: 66px;
                      line-height: 66px;
                      color: #fff;
                      text-align: center;
                    }
                  }
                }
              }

              .el-table__body {
                td {
                  height: 66px;
                  // color: #fff;
                  text-align: center;
                }
              }
            }
          }

          .purcharsing_analysis_item:last-child {
            background-color: #E9ECF1;

            .anay_title {
              padding-top: 19px;
            }
          }
        }
      }
    }
  }

  .van-tabs--line {
    padding-top: 88px;
  }

  .search_model {
    position: absolute;
    top: 233px;
    left: 24px;
    z-index: 10;

    .search_text {
      float: left;
      width: 564px;
      height: 64px;
      padding-left: 65px;
      color: #999999;
      background-color: #F5F5F5;
      box-sizing: border-box;
    }

    .search_btn {
      float: right;
      width: 120px;
      height: 64px;
      color: #fff;
      background-color: #5892FF;
      border: none;
      border-radius: 8px;
    }
  }

  // 物资采购样式
  .purchasing_table_list {
    padding-top: 26px;

    .el-table {
      .el-table__header-wrapper {
        tr {
          th {
            height: 30px;
            background-color: #5892FF;
            font-size: 24px;
            color: #fff;
            text-align: center;

            .cell {
              height: 100%;
              line-height: 30px;
            }
          }
        }
      }

      .el-table__body-wrapper {
        tr {
          td {
            font-size: 24px;
            color: #333;
          }
        }
      }
    }
  }
}
</style>

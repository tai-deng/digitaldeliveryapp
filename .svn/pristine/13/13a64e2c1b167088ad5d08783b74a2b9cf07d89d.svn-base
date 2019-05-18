<!-- 整改认证 abarbeitung -->
<template>
  <div class="container-abarbeitung">
    <van-nav-bar title="沟通管理详情" left-arrow border @click-left="onClickLeft"></van-nav-bar>
    <div class="content">
      <template>
        <div class="abarbeitung-type flex-between item-s">
          <div class="abarbeitung-type-l flex">
            <div class="abarbeitung-type-l-name text-font-have">主题：</div>
            <div
              class="abarbeitung-type-l-v"
              :class="[form.Subject?'text-font-have':'text-font-none']"
            >{{form.Subject}}</div>
          </div>
        </div>

        <div class="abarbeitung-type flex-between item-s">
          <div class="abarbeitung-type-l flex">
            <div class="abarbeitung-type-l-name text-font-have">类型：</div>
            <div
              class="abarbeitung-type-l-v"
              :class="[form.ComType?'text-font-have':'text-font-none']"
            >{{form.ComType}}</div>
          </div>
        </div>

        <div class="abarbeitung-type flex-between item-s">
          <div class="abarbeitung-type-l flex">
            <div class="abarbeitung-type-l-name text-font-have">描述：</div>
            <div
              class="abarbeitung-type-l-v"
              :class="[form.Description?'text-font-have':'text-font-none']"
            >{{form.Description}}</div>
          </div>
        </div>

        <div class="project-title flex">工程部位</div>
        <div class="project-content">
          <div class="abarbeitung-type flex-between item-s">
            <div class="abarbeitung-type-l flex">
              <div class="abarbeitung-type-l-name text-font-have">楼栋：</div>
              <div
                class="abarbeitung-type-l-v"
                :class="[form.BuildName?'text-font-have':'text-font-none']"
              >{{form.BuildName?form.BuildName:'暂无信息'}}</div>
            </div>
          </div>

          <div class="abarbeitung-type flex-between item-s">
            <div class="abarbeitung-type-l flex">
              <div class="abarbeitung-type-l-name text-font-have">楼层：</div>
              <div
                class="abarbeitung-type-l-v"
                :class="[form.Floor?'text-font-have':'text-font-none']"
              >{{form.Floor?form.Floor:'暂无信息'}}</div>
            </div>
          </div>

          <div class="abarbeitung-type flex-between item-s">
            <div class="abarbeitung-type-l flex">
              <div class="abarbeitung-type-l-name text-font-have">构件名称：</div>
              <div
                class="abarbeitung-type-l-v"
                :class="[form.ElementName?'text-font-have':'text-font-none']"
              >{{form.ElementName?form.ElementName:'暂无信息'}}</div>
            </div>
          </div>

          <div class="abarbeitung-type flex-between item-s">
            <div class="abarbeitung-type-l flex">
              <div class="abarbeitung-type-l-name text-font-have">专业：</div>
              <div
                class="abarbeitung-type-l-v"
                :class="[form.Specialty?'text-font-have':'text-font-none']"
              >{{form.Specialty?form.Specialty:'暂无信息'}}</div>
            </div>
          </div>
        </div>

        <div class="project-title flex">上传凭证</div>
        <div v-if="PhotoList.length" class="uploader flex">
          <div class="van-uploader" v-for="(item,index) in PhotoList" :key="index">
            <img :src="item">
          </div>
        </div>
        <div v-else class="uploader flex">
          <div class="van-uploader" >
            无图片
            <!-- <img :src="item"> -->
          </div>
        </div>

        <div class="project-title flex">工作流程</div>
        <div class="flow-content">
          <div class="flow-content-item" v-for="(item,index) in listFlow" :key="index">
            <div class="flow-content-item-l flex-row" :class="[item.Status === 4?'action-b':'action-a']">
              {{index+1}}
              <div
                class="line"
                :class="[item.Status===4? 'line-b':'line-a']"
                v-if="index !== listFlow.length-1"
              ></div>
            </div>

            <div class="flow-content-item-c">
              <div class="flow-content-item-c-w flex">
                <div class="flow-content-item-c-l flex-row flow-content-item-border">{{item.PersonName}}</div>
                <div class="flow-content-item-c-l flex-row flow-content-item-border">{{item.OrgName}}</div>
                <div class="flow-content-item-c-l flex-row">{{item.DeptName}}</div>
              </div>
              <div class="flow-content-item-c-triangle">
                <div class="flow-content-item-c-triangle-b"></div>
              </div>
              <div class="flow-content-item-c-pic flex-row" v-if="item.Status===4">
                <template v-if="item.listAuthPhoto">
                  <img :src="item.listAuthPhoto">
                </template>
                <template v-else>
                  <div class="pic-warp flex-row">
                    <img src="./user_assets/imgs/up-proof.png">
                  </div>
                </template>
              </div>
            </div>

            <div class="flow-content-item-r"></div>
          </div>
        </div>
      </template>
      <div v-if="isMe" class="btn-warp">
        <div v-show="WorkStatus === 0 && routeFlag">
          <van-button class="btn" square type="primary" block @click="onPrimary">
            拒收
          </van-button>
          <van-button class="btn" square type="primary" block @click="onPrimary">
            接收
          </van-button>
        </div>

        <div v-show="WorkStatus === 3 && routeFlag" >
          <van-button class="oneBtn" square type="primary" block @click="onPrimary">
            认证
          </van-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script type='textecmascript-6'>
import {GetDetail} from '@/api/api.js'
export default {
  data() {
    return {
      // 单选
      //   isRadio: "1",
      // radio 图标
      radioIcon: {
        normal: require("./user_assets/imgs/radio-a.png"),
        active: require("./user_assets/imgs/radio-b.png")
      },
      //   日常巡检
      // 主题
      rc_themeValue: "A1地下室未清底",
      // 问题类型
      rc_issueValue: "基础施工",
      // 发起人
      rc_startValue: "李三四",
      // 发起时间
      rc_startDateValue: "2018.01.01",
      // 描述
      rc_describeValue: "a1栋地下室存在较大砂砾，基坑底部不平整",
      // 接收人
      rc_receiveValue: "李三四；王五",
      // 整改截止时间
      rc_rectifyValue: "2018.01.01",
      // 照片
      rc_voucherData: [
        require("./user_assets/imgs/user-portrait.png"),
        require("./user_assets/imgs/browseMode-big.png")
      ],

      //   工程变更数据
      // 编码
      codeValue: "20190322001",
      // 主题
      themeValue: "某某变更文字",
      // 类型
      typeValue: "某某变更类型",
      // 楼栋
      buildingValue: "1栋",
      // 楼层
      levelValue: "2层",
      // 构件
      drivenValue: "构件名称",
      // 专业
      majorValue: "某某专业",
      // 详细位置
      positionValue: "某某详细位置描述",
      // 发起时间
      startDateValue: "2018-01-01",
      // 发起人
      startPersonValue: "张三",
      // 变更内容
      changeContentValue: "某某变更内容文字描述",
      // 凭证
      voucherData: [
        require("./user_assets/imgs/user-portrait.png"),
        require("./user_assets/imgs/browseMode-big.png")
      ],
      // 物料清单数据
      buyThingTable: [
        {
          name: "c20混凝土",
          building: "A1",
          level: "1F",
          befor: "10000.00m³",
          after: "678.21m³",
          difference: "678.21m³"
        },
        {
          name: "c20混凝土",
          building: "A2",
          level: "2F",
          befor: "10000.00m³",
          after: "678.21m³",
          difference: "678.21m³"
        },
        {
          name: "门",
          building: "A3",
          level: "1F",
          befor: "15扇",
          after: "10扇",
          difference: "10扇"
        },
        {
          name: "门",
          building: "A4",
          level: "3F",
          befor: "15扇",
          after: "10扇",
          difference: "10扇"
        }
      ],
      // 流程数据
      flowData: [
        {
          id: 1,
          name: "王海洋",
          unit: "建设单位",
          department: "工程部",
          done: true,
          img: require("./user_assets/imgs/browseMode-big.png")
        },
        {
          id: 1,
          name: "某某某",
          unit: "建设单位",
          department: "工程部",
          done: true
        },
        {
          id: 1,
          name: "某某某",
          unit: "建设单位",
          department: "工程部",
          done: false
        },
        {
          id: 1,
          name: "某某某",
          unit: "建设单位",
          department: "工程部",
          done: false
        }
      ],

      //   沟通管理数据

      // 主题
      gt_themeValue: "某某变更文字",
      // 类型
      gt_typeValue: "某某变更类型",
      // 描述
      gt_describeValue: "某某描述文字某某描述文字某某描述文字某某描述文字",
      // 楼栋
      gt_buildingValue: "1栋",
      // 楼层
      gt_levelValue: "2层",
      // 构件
      gt_drivenValue: "构件名称",
      // 专业
      gt_majorValue: "某某专业",
      // 凭证
      gt_voucherData: [
        require("./user_assets/imgs/user-portrait.png"),
        require("./user_assets/imgs/browseMode-big.png")
      ],
      // 流程数据
      gt_flowData: [
        {
          id: 1,
          name: "王海洋",
          unit: "建设单位",
          department: "工程部",
          done: true,
          img: "./user_assets/imgs/browseMode-big.png"
        },
        {
          id: 1,
          name: "某某某",
          unit: "建设单位",
          department: "工程部",
          done: true
        },
        {
          id: 1,
          name: "某某某",
          unit: "建设单位",
          department: "工程部",
          done: false
        },
        {
          id: 1,
          name: "某某某",
          unit: "建设单位",
          department: "工程部",
          done: false
        }
      ],
      communicateId: null, // 沟通项ID
      flowActive: 0,  //流程在哪一步
      WorkStatus: 2 ,  // 0 待接收， 3 进行中 4 完成
      WorkFlowId: '',
      projectId: localStorage.getItem('projectid'),  //项目Id
      userID: localStorage.getItem('userId'), //用户ID
      isMe: true,  //判断是否是本人
      par: {
        Priority: "",
        OrgId: "",
        DepId: "",
        Person: "",
        Status: 1
      },
      form: {},
      PhotoList: [], //图片详情
      listFlow: [], //工作流
      routeFlag: true,  //从集成管理跳转过来，待定
      screenHeight: null,  //屏幕高度
    };
  },
  created(){
    this.screenHeight = window.screen.height;
    this.getCommunicatItem()
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    // 确认
    onPrimary() {
      console.log("确认");
    },
     //获取沟通具体项
    getCommunicatItem(){
      this.communicateId = this.$route.query.id
      console.log(this.communicateId)
      this.GetCommunicationDetail()
    },
    /**
     * api接口
     */
    //获取沟通管理详情
    async GetCommunicationDetail(){
      let id = this.communicateId
      if(id){
        let Com_Detail = await this.Request(GetDetail({communicateId: id}))
        console.log(Com_Detail)
        if(Com_Detail.StatusCode === 200){
           this.flowActive = 0;
           Com_Detail.Detiel[0].listFlow.forEach((item)=>{
             if(item.ID === Com_Detail.Detiel[0].Communicate.CurrentStepIndex){
              this.WorkStatus = item.Status
             }
           })
          Com_Detail.Detiel[0].listFlow.forEach((el, index)=>{
            if (this.flowActive == 0 && el.ID == Com_Detail.Detiel[0].Communicate.CurrentStepIndex) {
              if(this.WorkStatus !== 4){
                this.flowActive = index;
              }else {
                this.flowActive = index +1    // 和所有的步骤不相等 表示取消闪烁
              }
              // this.Person = el.Person;
              this.WorkFlowId = el.ID;
              if (this.userID == el.Person) {
                this.isMe = true;
              } else {
                this.isMe = false;
              }
              this.par = {
                Priority: el.Priority,
                OrgId: el.OrgId,
                DepId: el.DepId,
                Person: el.Person,
                ID: el.ID
              };
            }
          })
          //  this.data = res.Result;
          this.form = Com_Detail.Detiel[0].Communicate
          console.log(this.form)
          // this.getRelation()
         
          this.PhotoList = Com_Detail.Detiel[0].PhotoList
          this.listFlow = Com_Detail.Detiel[0].listFlow 

        }else{
          this.$message({
            type: 'error',
            message: Com_Detail.Message,
            center: 'true'
          })
        }
      }

    },
  }
};
</script>
<style >
.container-abarbeitung .p15 .van-cell .van-cell__title {
  max-width: 1.7rem;
}
.container-abarbeitung .van-nav-bar {
  position: fixed;
  left: 0;
  top: 0;
  /* padding-top: 40px; */
  width: 100%;
}
.container-abarbeitung .content {
  margin-top: 88px;
}
.container-abarbeitung .van-nav-bar .van-nav-bar__title {
 
  height: 88px;
}

/* 表格样式更改 */
.container-abarbeitung .materials_table .el-table .cell {
  height: 0.78rem;
  line-height: 0.78rem;
  font-size: 30px;
}
.container-abarbeitung .materials_table .el-table .table_input {
  border: 0.04rem solid #eeeeee;
}
.container-abarbeitung .materials_table_largin .el-table .cell {
  height: 0.78rem;
  line-height: 0.78rem;
  font-size: 30px;
}
.container-abarbeitung .materials_table_largin .el-table .table_input {
  border: 0.04rem solid #eeeeee;
}
.container-abarbeitung .materials_table_largin {
  width: 100%;
  overflow: scroll;
}
</style>

<style lang='stylus' scoped rel='stylesheet/stylus'>
@import './user_assets/base.css';

.mt20 {
  margin-top: 0.27rem;
}

.container-abarbeitung {
  width: 100%;
  height: 100%;
  background: rgba(246, 248, 250, 1);

  .m20 {
    margin: 0 0.32rem;
  }

  .p15 {
    padding: 0.4rem 0.32rem !important;
  }

  .btn-warp {
    
    margin-top: 50px;
    padding: 0.4rem 0.32rem;
    background: rgba(246, 248, 250, 1);
    >div{
      display: flex;
      justify-content: space-between;
      .btn {
        width:330px;
        height:88px;
        border-radius:4px;
      }
      .oneBtn{
        width: 100%
        height: 88px
        border-radius:4px;
        background:rgba(90,147,255,1)
      }
      .btn:first-child {
        background:rgba(229,75,75,1);
      }
      .btn:last-child {
        background:rgba(90,147,255,1)
      }
    }
   
  }

  .group-warp {
    padding: 0 0.32rem;

    .item-s-b {
      height: 1.18rem;
      font-size: 30px;
      font-family: SourceHanSansCN-Regular;
      font-weight: 400;
      color: rgba(51, 51, 51, 1);
      border-bottom: 0.017rem solid #E5E5E5;
    }
  }

  .content {
    background-color: #fff;

    .abarbeitung-content-radio {
      margin: 0 0.32rem;
      border-bottom: 0.017rem solid #e5e5e5;
      height: 1.18rem;
      font-size: 30px;
      font-family: SourceHanSansCN-Regular;
      font-weight: 400;
      color: rgba(51, 51, 51, 1);

      .abarbeitung-content-radio-l {
        width: 1.2rem;
      }

      .abarbeitung-content-radio-r {
        flex: 1;
      }

      .van-radio {
        overflow: visible;
        flex: 1;
        display: flex;
        justify-content: center;

        .van-radio__icon {
          img {
            width: 30px;
            height: 30px;
            display: block;
          }
        }
      }
    }

    .flow-content {
      padding: 0 0.32rem;
      padding-bottom: 40px;
      background: rgba(246, 248, 250, 1);

      .flow-content-item {
        padding-top: 0.4rem;
        display: flex;

        .action-a {
          background: rgba(221, 221, 221, 1);
        }

        .action-b {
          background: rgba(90, 147, 255, 1);
        }

        .flow-content-item-l {
          width: 0.53rem;
          height: 0.53rem;
          border-radius: 50%;
          font-size: 30px;
          font-family: SourceHanSansCN-Medium;
          font-weight: 500;
          color: rgba(255, 255, 255, 1);
          position: relative;
          margin-right: 0.55rem;
          margin-top: 0.33rem;

          .line {
            position: absolute;
            width: 0.05rem;
            background-color: #979797;
            top: 0.64rem;
            left: 0.23rem;
          }

          .line-a {
            height: 0.83rem;
          }

          .line-b {
            height: 4.5rem;
          }
        }

        .flow-content-item-c {
          flex: 1;
          font-size: 30px;
          font-family: SourceHanSansCN-Medium;
          font-weight: 500;
          color: rgba(51, 51, 51, 1);
          background: rgba(255, 255, 255, 1);
          box-shadow: 0px 0.0133rem 0.11rem 0px rgba(220, 226, 237, 1);
          border-radius: 0.0532rem;
          position: relative;

          .flow-content-item-c-w {
            height: 1.18rem;
          }

          .flow-content-item-c-pic {
            padding-bottom: 0.27rem;

            .pic-warp {
              width: 6.69rem;
              height: 3.86rem;
              background: rgba(238, 238, 238, 1);

              img {
                width: 0.67rem;
                height: 0.67rem;
                display: block;
              }
            }

            img {
              width: 6.69rem;
              height: 3.86rem;
              display: block;
            }
          }

          .flow-content-item-c-triangle {
            top: 0;
            left: -0.3rem;
            position: absolute;
            height: 1.18rem;
            width: 0.3rem;
            overflow: hidden;

            .flow-content-item-c-triangle-b {
              position: absolute;
              transform: rotate(45deg) !important;
              -ms-transform: rotate(45deg) !important;
              -moz-transform: rotate(45deg) !important;
              -webkit-transform: rotate(45deg) !important;
              -o-transform: rotate(45deg) !important;
              background: rgba(255, 255, 255, 1);
              box-shadow: 0px 1px 4px 0px rgba(220, 226, 237, 1);
              height: 0.4rem;
              width: 0.4rem;
              top: 0.39rem;
              left: 0.15rem;
            }
          }

          .flow-content-item-c-l {
            flex: 1;
          }

          .flow-content-item-border {
            border-right: 0.03rem dashed #979797;
          }
        }

        .flow-content-item-r {
          margin-left: 1.06rem;
        }
      }
    }

    .van-cell {
      padding: 0;
    }

    .uploader {
      background-color: rgba(246, 248, 250, 1);
      padding: 0 0.32rem;

      .van-uploader {
        width: 2.66rem;
        height: 2.66rem;
        background: rgba(255, 255, 255, 1);
        border-radius: 0.11rem;
        border: 0.027rem solid rgba(189, 193, 198, 1);
        display: flex;
        align-items: center;
        justify-content: center;
        margin-right: 0.266rem;
        overflow: hidden;
        color: #666

        img {
          width: 2.66rem;
          height: 2.66rem;
          display: block;
        }
      }

      .uploader-tip {
        font-size: 26px;
        font-family: SourceHanSansCN-Regular;
        font-weight: 400;
        color: rgba(153, 153, 153, 1);
        align-self: flex-end;
        margin-left: 0.16rem;
      }
    }

    .abarbeitung-type-l-name {
      width: 2rem;
    }

    .abarbeitung-type-arrow img {
      width: 0.24rem;
      height: 0.43rem;
      display: block;
    }

    .flow-work {
      font-size: 26px;
      font-family: SourceHanSansCN-Regular;
      font-weight: 400;
      color: rgba(153, 153, 153, 1);
      height: 2.13rem;
      background: rgba(255, 255, 255, 1);
      padding: 0 0.32rem;

      img {
        width: 0.8rem;
        height: 0.76rem;
        display: block;
        margin-bottom: 0.16rem;
      }
    }

    .van-button--primary {
      height: 1.18rem;
      background: rgba(90, 147, 255, 1);
      border-radius: 0.15rem;
      font-size: 30px;
      font-family: SourceHanSansCN-Medium;
      font-weight: 500;
      color: rgba(255, 255, 255, 1);
    }

    .item-s {
      height: 1.18rem;
      font-size: 30px;
      font-family: SourceHanSansCN-Regular;
      font-weight: 400;
      color: rgba(51, 51, 51, 1);
      border-bottom: 0.017rem solid #E5E5E5;
      margin: 0 0.32rem;
    }

    .project-title {
      font-size: 30px;
      font-family: SourceHanSansCN-Medium;
      font-weight: 500;
      color: rgba(51, 51, 51, 1);
      height: 1.18rem;
      padding: 0 0.32rem;
      background-color: rgba(246, 248, 250, 1);
    }

    .project-title-r {
      height: 1.18rem;
      font-size: 30px;
      font-family: SourceHanSansCN-Regular;
      font-weight: 400;
      color: rgba(90, 146, 255, 1);
      line-height: 1.18rem;
    }

    .project-content {
      background-color: #fff;
    }
  }

  .text-font-have {
    font-size: 30px;
    font-family: SourceHanSansCN-Regular;
    font-weight: 400;
    color: rgba(51, 51, 51, 1);
  }

  .text-font-none {
    font-size: 30px;
    font-family: SourceHanSansCN-Regular;
    font-weight: 400;
    color: rgba(153, 153, 153, 1);
  }

  .van-popup .van-actionsheet__item {
    height: 1.18rem !important;
    line-height: 1.18rem !important;
    font-size: 30px;
  }
}
</style>

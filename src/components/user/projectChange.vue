<!-- 工程变更 projectChange -->
<template>
  <div class="container-projectChange">
    <template v-if="isFlow">
      <van-nav-bar title="工程变更" left-arrow border @click-left="onClickLeft"></van-nav-bar>
      <div class="content">
        <van-cell-group>
          <!-- <div class="group-warp">
          <van-field
            class="item-s-b"
            v-model="codeValue"
            clearable
            label="编码："
            placeholder="请输入编码"
            readonly
          />
          </div>-->

          <div class="group-warp">
            <van-field
              class="item-s-b"
              v-model="options.Theme"
              clearable
              label="主题："
              placeholder="请输入主题"
            />
          </div>

          <div class="projectChange-type flex-between item-s" @click="onChangeType">
            <div class="projectChange-type-l flex">
              <div class="projectChange-type-l-name text-font-have">变更类型：</div>
              <div
                class="projectChange-type-l-v"
                :class="[options.Type.name?'text-font-have':'text-font-none']"
              >{{options.Type.name?options.Type.name:'请选择类型'}}</div>
            </div>
            <div class="projectChange-type-arrow">
              <img src="./user_assets/imgs/arrow-right.png">
            </div>
          </div>
        </van-cell-group>
        <div class="project-title flex">位置</div>
        <div class="project-content">
          <div class="projectChange-type flex-between item-s" @click="onBuilding">
            <div class="projectChange-type-l flex">
              <div class="projectChange-type-l-name text-font-have">楼栋：</div>
              <div
                class="projectChange-type-l-v"
                :class="[options.BuildName?'text-font-have':'text-font-none']"
              >{{options.BuildName?options.BuildName:'请选择楼栋'}}</div>
            </div>
            <div class="projectChange-type-arrow">
              <img src="./user_assets/imgs/arrow-right.png">
            </div>
          </div>

          <div class="projectChange-type flex-between item-s" @click="onMajor">
            <div class="projectChange-type-l flex">
              <div class="projectChange-type-l-name text-font-have">专业：</div>
              <div
                class="projectChange-type-l-v"
                :class="[options.Specialty?'text-font-have':'text-font-none']"
              >{{options.Specialty?options.Specialty:'请选择专业'}}</div>
            </div>
            <div class="projectChange-type-arrow">
              <img src="./user_assets/imgs/arrow-right.png">
            </div>
          </div>

          <div class="projectChange-type flex-between item-s" @click="onLevel">
            <div class="projectChange-type-l flex">
              <div class="projectChange-type-l-name text-font-have">楼层：</div>
              <div
                class="projectChange-type-l-v"
                :class="[options.Floor?'text-font-have':'text-font-none']"
              >{{options.Floor?options.Floor:'请选择楼层'}}</div>
            </div>
            <div class="projectChange-type-arrow">
              <img src="./user_assets/imgs/arrow-right.png">
            </div>
          </div>

          <div class="projectChange-type flex-between item-s" @click="onDriven">
            <div class="projectChange-type-l flex">
              <div class="projectChange-type-l-name text-font-have">构件名称：</div>
              <div
                class="projectChange-type-l-v"
                :class="[options.element?'text-font-have':'text-font-none']"
              >{{options.element?options.element:'请选择构件'}}</div>
            </div>
            <div class="projectChange-type-arrow">
              <img src="./user_assets/imgs/arrow-right.png">
            </div>
          </div>

          <div class="group-warp p15">
            <van-field
              v-model="options.DetailPoint"
              label="详细位置："
              type="textarea"
              placeholder="请输入详细位置"
              rows="3"
              autosize
              clearable
            />
          </div>
        </div>

        <div class="project-content mt20">
          <div class="projectChange-type flex-between item-s" @click="onStartDate">
            <div class="projectChange-type-l flex">
              <div class="projectChange-type-l-name text-font-have">发起时间：</div>
              <div
                class="projectChange-type-l-v"
                :class="[options.StartTime?'text-font-have':'text-font-none']"
              >{{options.StartTime?options.StartTime:'请选择发起时间'}}</div>
            </div>
            <div class="projectChange-type-arrow">
              <img src="./user_assets/imgs/arrow-right.png">
            </div>
          </div>
          <div class="group-warp">
            <van-field
              class="item-s-b"
              v-model="options.StartPerson"
              clearable
              label="发起人："
              readonly
            />
          </div>
          <div class="group-warp p15">
            <van-field
              v-model="options.Content"
              label="变更内容："
              type="textarea"
              placeholder="请输入变更内容"
              rows="3"
              autosize
            />
          </div>
        </div>

        <div class="project-title flex">上传凭证</div>
        <div class="uploader flex">
          <template v-if="photoList.length">
            <div
              v-for="(item,index) in photoList"
              :key="index"
              class="van-uploader-list"
              @click="cancelPhoto(index)"
            >
              <img :src="item.TokenUrL+item.smallPhotoURL">
            </div>
          </template>
          <div v-if="photoList.length<3" class="van-uploader" @click="selectPhoto">
            <img src="../user/user_assets/imgs/up-proof.png">
          </div>
          <div v-if="photoList.length<2" class="uploader-tip">最多上传3张</div>
        </div>

        <div class="project-title flex-between">
          工作流程
          <h3 v-if="listFlow.length>0" class="project-title-r" @click="isFlow=false">重置</h3>
        </div>
        <div class="flow-content" v-if="listFlow.length>0">
          <div class="flow-content-item flex" v-for="(item,index) in listFlow" :key="index">
            <div class="flow-content-item-l flex-row">
              {{index+1}}
              <div class="line" v-if="index !== listFlow.length-1"></div>
            </div>

            <div class="flow-content-item-c flex">
              <div class="flow-content-item-c-l flex-row flow-content-item-border">{{item.Person.name}}</div>
              <div class="flow-content-item-c-l flex-row flow-content-item-border">{{item.OrgId.name}}</div>
              <div class="flow-content-item-c-l flex-row">{{item.DepId.name}}</div>
              <div class="flow-content-item-c-triangle">
                <div class="flow-content-item-c-triangle-b"></div>
              </div>
            </div>

            <!-- <div class="flow-content-item-r" @click="onDelete(index)">
              <img src="./user_assets/imgs/delete.png">
            </div> -->
          </div>
        </div>
        <div class="flow-work flex" v-else>
          <div class="flow-work-c flex-column-center-b" @click="isFlow=false">
            <img src="./user_assets/imgs/add.png">
            新增
          </div>
        </div>
        <div class="btn-warp">
          <van-button class="btn" square type="primary" block @click="onPrimary">确认发起</van-button>
        </div>
      </div>
      <van-actionsheet v-model="isSelect" :actions="actions" @select="onSelect"/>
      <div class="container-projectChange-warp">
        <van-popup v-model="isSelectDate" position="bottom" :overlay="true">
          <van-datetime-picker
            v-model="options.StartTime"
            type="date"
            @confirm="onDateConfirm"
            @cancel="onDateCancel"
            @change="onDateChange"
          />
        </van-popup>
      </div>
      <van-actionsheet v-model="phone_show">
        <van-uploader
          :after-read="onRead"
          accept="image/jpeg"
          capture="camera"
          class="upload-file-item"
        >
          <div>拍摄</div>
        </van-uploader>
        <van-uploader :after-read="onRead" class="upload-file-item">
          <div>从手机相册选择</div>
        </van-uploader>
        <div class="upload-file-item cancel" @click="uploadCancel">取消</div>
      </van-actionsheet>
    </template>
    <template v-else>
      <flowComp @onDone="onDone" :origin="1"></flowComp>
    </template>
  </div>
</template>

<script type='textecmascript-6'>
import { getSomeMonthLast } from "./user_assets/util.js";
import {
  uploadingPic,
  getChangeTypeList,
  getBuildList,
  getSpecialtyList,
  getFloorList,
  getChangeElementList,
  submitSaveChange,
  getUserInfo,
  getElementID
} from "../../assets/js/scopeManage";

import flowComp from "./addFlow";

export default {
  components: { flowComp },
  data() {
    return {
      photoList: [],
      phone_show: false,
      workFormSelect: [],
      BuildNameList: [],
      SpecialtyList: [],
      FloorbyList: [],
      elementSelect: [],
      isFlow: true,
      userInfo:null,
      isSelect: false,
      actions: [],
      selAction: null,
      isSelectDate: false,
      userInfo: null,
      // 流程数据
      listFlow: [],
      RelationModel:[],
      options: {
        Code: "",
        Theme: "",
        Type: {
          id: "",
          name: ""
        },
        BuildName: "", // 楼栋
        Specialty: "", // 专业
        Floor: "", // 楼层
        element: "",
        DetailPoint: "",
        StartTime: require("moment")(new Date()).format("YYYY-MM-DD"),
        StartPerson: "",

        Content: "",
        flowList: [],
        Priority: 1,
        OrgId: { OrgId: "" }, // 单位
        DepId: { DepId: "" }, // 部门
        Person: { Person: "" } // 人员
      }
    };
  },
  created() {
    // 变更类型
    getChangeTypeList(this, res => {
      this.workFormSelect = res.map(item => {
        return {
          id: item.ID,
          name: item.cDIName
        };
      });
    });
    // 楼栋
    getBuildList(this, res => {
      this.BuildNameList = res.map(item => {
        return {
          name: item.text,
          id: item.id
        };
      });
      this.BuildNameList.splice(0, 1);
    });
    // 用户信息
    getUserInfo(this);
  },
  methods: {
    onClickLeft() {
      this.$router.back(-1);
    },
    //删除照片
    cancelPhoto(index) {
      this.$dialog
        .confirm({
          title: "删除确认",
          message: "确认删除照片？",
          className: "delecet_photo"
        })
        .then(() => {
          // on confirm
          this.photoList.splice(index, 1);
        })
        .catch(() => {
          // on cancel
        });
    },
    //获取照片
    selectPhoto() {
      if (!this.phone_show) {
        this.phone_show = true;
      } else {
        this.phone_show = false;
      }
    },
    uploadCancel() {
      this.phone_show = false;
    },
    // 上传图片
    onRead(file, detail) {
      uploadingPic(this, file, detail);
    },
    // 变更类型事件
    onChangeType() {
      this.isSelect = true;
      this.actions = this.workFormSelect;
      this.selAction = "typeValue";
    },
    // 楼栋事件
    onBuilding() {
      this.isSelect = true;
      this.actions = this.BuildNameList;
      this.selAction = "buildingValue";
    },
    // 楼层事件
    onLevel() {
      this.isSelect = true;
      this.actions = this.FloorbyList;
      this.selAction = "levelValue";
    },
    // 构件事件
    onDriven() {
      this.isSelect = true;
      this.actions = this.elementSelect;
      this.selAction = "drivenValue";
    },
    // 专业事件
    onMajor() {
      this.isSelect = true;
      this.actions = this.SpecialtyList;
      this.selAction = "majorValue";
    },
    // 发起时间
    onStartDate() {
      this.isSelectDate = true;
    },
    // 时间-确认时间
    onDateConfirm() {
      this.isSelectDate = false;
    },
    // 时间-取消时间
    onDateCancel() {
      this.isSelectDate = false;
    },
    // 时间-改变事件
    onDateChange(e) {
      this.options.StartTime = require("moment")(this.options.StartTime).format(
        "YYYY-MM-DD"
      );
    },
    // 上拉菜单
    onSelect(v) {
      this.isSelect = false;
      let action = this.selAction;
      if (action == "typeValue") {
        this.options.Type = v;
      } else if (action == "buildingValue") {
        this.options.BuildName = v.name;
      } else if (action == "levelValue") {
        this.options.Floor = v.name;
      } else if (action == "drivenValue") {
        this.options.element = v.name;
      } else if (action == "majorValue") {
        this.options.Specialty = v.name;
      }
    },
    // 新增
    onDone(d) {
      this.isFlow = true;
      this.listFlow = d;
    },
    // 发起
    onPrimary() {
      if (this.listFlow.length == 0) {
        this.$message({
          type: "warning",
          message: "工作流程不能为空！"
        });
        return;
      }
      let listFlow = this.listFlow.map(item => {
        return {
          Priority: item.Priority,
          OrgId: item.OrgId.id,
          DepId: item.DepId.id,
          Person: item.Person.id,
          Status: item.Status
        };
      });
      let par  = {
        // ID: 1, //ID
        Code: "", //编码
        Theme: this.options.Theme, //主题
        Type: this.options.Type.id, //类型
        Building: this.options.BuildName, //楼栋
        Specialty: this.options.Specialty, //专业
        Floor: this.options.Floor, //楼层
        DetailPoint: this.options.DetailPoint, //详细地址
        StartTime: this.options.StartTime, //启动时间

        StartPerson: '', //发起人
        Content: this.options.Content, //内容
        iCreator: '', //创建人

        listFlow, //工作流列表
        listFile: this.photoList, //现场照片, //上传凭证照片列表
        listViewPoint: '', //视点列表

        RelationModel: this.RelationModel.join(","), //关联构件（多个构件ID用英文逗号分隔）
        dCreateTime: require("moment")().format("YYYY-MM-DD"), //创建时间
        dUpdateTime: require("moment")().format("YYYY-MM-DD"), //修改时间
        iUpdator: '' //修改人
      };

      submitSaveChange(this, par, (res) => {
      console.log(res);
        this.$router.go(-1)
      });
    },
    // 删除
    onDelete(i) {
      console.log(i);
    }
  },
  watch: {
    "options.BuildName"(val) {
      if (val != "") {
        this.options.Specialty = "";
        this.options.Floor = "";
        this.options.element = "";
        this.SpecialtyList = [];
        this.FloorbyList = [];
        this.elementSelect = [];
        getSpecialtyList(this, res => {
          this.SpecialtyList = res.map(item => {
            return {
              name: item.text,
              id: item.id
            };
          });
          this.SpecialtyList.splice(0, 1);
        });
      }
    },
    "options.Specialty"(val) {
      if (val != "") {
        this.options.Floor = "";
        this.options.element = "";
        this.FloorbyList = [];
        this.elementSelect = [];

        getFloorList(this, res => {
          this.FloorbyList = res.map(item => {
            return {
              name: item.text,
              id: item.id
            };
          });
          this.FloorbyList.splice(0, 1);
        });
      }
    },
    "options.Floor"(val) {
      if (val != "") {
        this.options.element = "";
        this.elementSelect = [];

        getChangeElementList(this, res => {
          this.elementSelect = res.map(item => {
            return {
              name: item.code,
              id: item.id
            };
          });
          this.elementSelect.splice(0, 1);
        });
      }
    },
    "options.element"(val){
      if(val!==''){
        getElementID(this,{})
      }
    }
  }
};
</script>
<style >
.container-projectChange .p15 .van-cell .van-cell__title {
  max-width: 1.7rem;
}
.container-projectChange-warp .van-picker .van-picker__cancel,
.container-projectChange-warp .van-picker .van-picker__confirm {
  height: 1.18rem;
  line-height: 1.18rem;
  font-size: 30px;
  font-family: SourceHanSansCN-Regular;
}
.container-projectChange-warp .van-hairline--top-bottom {
  height: 1.18rem;
}
</style>

<style lang='stylus' scoped rel='stylesheet/stylus'>
@import './user_assets/base.css';

.mt20 {
  margin-top: 0.27rem;
}

.container-projectChange {
  width: 100%;
  height: 100%;
  background: rgba(246, 248, 250, 1);

  .upload-file-item {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 88px;
    font-size: 32px;
    color: #333;
  }

  .van-uploader-list {
    margin-right: 10px;
    width: 200px;
    height: 200px;
    background: rgba(255, 255, 255, 1);
    border-radius: 0.11rem;
    border: 0.027rem solid rgba(189, 193, 198, 1);
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      width: 200px;
      height: 200px;
      display: block;
    }
  }

  .cancel {
    color: #666 !important;
  }

  .m20 {
    margin: 0 0.32rem;
  }

  .p15 {
    padding: 0.4rem 0.32rem !important;
  }

  .btn-warp {
    padding: 0.4rem 0.32rem;
    background: rgba(246, 248, 250, 1);
    font-size: 30px;
    font-family: SourceHanSansCN-Regular;
    font-weight: 400;
  }

  .group-warp {
    padding: 0 0.32rem;

    .item-s-b {
      height: 1.18rem;
      line-height: 1.18rem;
      font-size: 30px;
      font-family: SourceHanSansCN-Regular;
      font-weight: 400;
      color: rgba(51, 51, 51, 1);
      border-bottom: 0.017rem solid #E5E5E5;
    }
  }

  .content {
    .flow-content {
      padding: 0 0.32rem;
      background: rgba(246, 248, 250, 1);

      .flow-content-item {
        padding-top: 0.4rem;

        .flow-content-item-l {
          width: 0.53rem;
          height: 0.53rem;
          border-radius: 50%;
          background: rgba(59, 72, 95, 1);
          font-size: 30px;
          font-family: SourceHanSansCN-Medium;
          font-weight: 500;
          color: rgba(255, 255, 255, 1);
          position: relative;
          margin-right: 0.55rem;

          .line {
            position: absolute;
            top: 0.64rem;
            left: 0.23rem;
            width: 0.05rem;
            height: 0.83rem;
            background-color: #979797;
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
          border-radius: 2px;
          height: 1.18rem;
          position: relative;

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
              box-shadow: 0px 0.0133rem 0.11rem 0px rgba(220, 226, 237, 1);
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
          margin-left: 0.56rem;

          img {
            width: 0.46rem;
            height: 0.46rem;
            display: block;
          }
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

        img {
          width: 0.9rem;
          height: 0.9rem;
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

    .projectChange-type-arrow img {
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
      line-height: 1.18rem;
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

<!-- 工程变更详情 projectChangeDetails -->
<template>
  <div class="container-projectChangeDetails">
    <van-nav-bar title="工程变更详情" left-arrow border @click-left="onClickLeft"></van-nav-bar>
    <div class="content">
      <van-cell-group>
        <div class="projectChangeDetails-type flex-between item-s">
          <div class="projectChangeDetails-type-l flex">
            <div class="projectChangeDetails-type-l-name text-font-have">编码：</div>
            <div
              class="projectChangeDetails-type-l-v"
              :class="[data.Code?'text-font-have':'text-font-none']"
            >{{data.Code}}</div>
          </div>
        </div>

        <div class="projectChangeDetails-type flex-between item-s">
          <div class="projectChangeDetails-type-l flex">
            <div class="projectChangeDetails-type-l-name text-font-have">主题：</div>
            <div
              class="projectChangeDetails-type-l-v"
              :class="[data.Theme?'text-font-have':'text-font-none']"
            >{{data.Theme}}</div>
          </div>
        </div>

        <div class="projectChangeDetails-type flex-between item-s">
          <div class="projectChangeDetails-type-l flex">
            <div class="projectChangeDetails-type-l-name text-font-have">变更类型：</div>
            <div
              class="projectChangeDetails-type-l-v"
              :class="[data.TypeName?'text-font-have':'text-font-none']"
            >{{data.TypeName}}</div>
          </div>
        </div>
      </van-cell-group>
      <div class="project-content mt20">
        <div class="projectChangeDetails-type flex-between item-s">
          <div class="projectChangeDetails-type-l flex">
            <div class="projectChangeDetails-type-l-name text-font-have">楼栋：</div>
            <div
              class="projectChangeDetails-type-l-v"
              :class="[data.Building?'text-font-have':'text-font-none']"
            >{{data.Building}}</div>
          </div>
        </div>

        <div class="projectChangeDetails-type flex-between item-s">
          <div class="projectChangeDetails-type-l flex">
            <div class="projectChangeDetails-type-l-name text-font-have">楼层：</div>
            <div
              class="projectChangeDetails-type-l-v"
              :class="[data.Floor?'text-font-have':'text-font-none']"
            >{{data.Floor}}</div>
          </div>
        </div>

        <div class="projectChangeDetails-type flex-between item-s">
          <div class="projectChangeDetails-type-l flex">
            <div class="projectChangeDetails-type-l-name text-font-have">构件名称：</div>
            <div
              class="projectChangeDetails-type-l-v"
              :class="[data.ElementName?'text-font-have':'text-font-none']"
            >{{data.ElementName}}</div>
          </div>
        </div>

        <div class="projectChangeDetails-type flex-between item-s">
          <div class="projectChangeDetails-type-l flex">
            <div class="projectChangeDetails-type-l-name text-font-have">专业：</div>
            <div
              class="projectChangeDetails-type-l-v"
              :class="[data.Specialty?'text-font-have':'text-font-none']"
            >{{data.Specialty}}</div>
          </div>
        </div>

        <div class="projectChangeDetails-type flex-between item-s">
          <div class="projectChangeDetails-type-l flex">
            <div class="projectChangeDetails-type-l-name text-font-have">详细位置：</div>
            <div
              class="projectChangeDetails-type-l-v"
              :class="[data.DetailPoint?'text-font-have':'text-font-none']"
            >{{data.DetailPoint}}</div>
          </div>
        </div>
      </div>

      <div class="project-content mt20">
        <div class="projectChangeDetails-type flex-between item-s">
          <div class="projectChangeDetails-type-l flex">
            <div class="projectChangeDetails-type-l-name text-font-have">发起时间：</div>
            <div
              class="projectChangeDetails-type-l-v"
              :class="[data.StartTime?'text-font-have':'text-font-none']"
            >{{data.StartTime}}</div>
          </div>
        </div>

        <div class="projectChangeDetails-type flex-between item-s">
          <div class="projectChangeDetails-type-l flex">
            <div class="projectChangeDetails-type-l-name text-font-have">发起人：</div>
            <div
              class="projectChangeDetails-type-l-v"
              :class="[data.StartPersonName?'text-font-have':'text-font-none']"
            >{{data.StartPersonName}}</div>
          </div>
        </div>

        <div class="projectChangeDetails-type flex-between item-s">
          <div class="projectChangeDetails-type-l flex">
            <div class="projectChangeDetails-type-l-name text-font-have">变更内容：</div>
            <div
              class="projectChangeDetails-type-l-v"
              :class="[data.Content?'text-font-have':'text-font-none']"
            >{{data.Content}}</div>
          </div>
        </div>
      </div>

      <div class="project-title flex">上传凭证</div>
      <div class="uploader m20 flex">
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

      <div class="project-title flex">物料清单</div>
      <div class="materials_table">
        <el-table
          :data="data.listElementList"
          border
          style="width:100%;font-size:30px;box-sizing:border-box;"
          :header-cell-style="{'background-color':'#5A92FF','color':'#ffffff'}"
        >
          <el-table-column prop="ResourceName" label="物资名称" align="center"></el-table-column>
          <el-table-column prop="BuildName" label="楼栋" align="center"></el-table-column>
          <el-table-column prop="Floor" label="楼层" align="center"></el-table-column>
          <el-table-column prop="BOQ" label="变更前施工预算量" align="center"></el-table-column>
          <el-table-column prop="AdjustBOQ" label="变更后施工预算量" align="center"></el-table-column>
          <el-table-column prop="DiffBOQ" label="差额" align="center"></el-table-column>
        </el-table>
      </div>

      <div class="project-title flex">工作流程</div>
      <div class="flow-content">
        <div
          class="flow-content-item"
          v-for="(item,index) in data.listFlow"
          :key="index"
          :style="index==0?'padding-top:0px':''"
        >
          <div
            class="flow-content-item-l flex-row"
            :class="[active >= index?'action-b':'action-a']"
          >
            {{index+1}}
            <div
              class="line"
              :class="[active > index || (isMe && active == index)? 'line-b':'line-a']"
              v-if="index !== data.listFlow.length-1"
            ></div>
          </div>

          <div class="flow-content-item-c">
            <div class="flow-content-item-c-w flex">
              <div
                class="flow-content-item-c-l flex-row flow-content-item-border"
              >{{item.PersonName}}</div>
              <div class="flow-content-item-c-l flex-row flow-content-item-border">{{item.OrgName}}</div>
              <div class="flow-content-item-c-l flex-row">{{item.DeptName}}</div>
            </div>
            <div class="flow-content-item-c-triangle">
              <div class="flow-content-item-c-triangle-b"></div>
            </div>
            <div class="flow-content-item-c-pic flex-row">
              <template v-if="active > index || WorkStatus== 4">
                <img :src="'http://47.112.21.206:8006'+item.photoList">
              </template>
              <template v-else-if="(WorkStatus == 3 || WorkStatus == 0)&& isMe && active == index">
                <div class="pic-warp flex-row" @click="phone_show=true">
                  <img src="../user/user_assets/imgs/up-proof.png">
                </div>
              </template>
            </div>
          </div>

          <div class="flow-content-item-r"></div>
        </div>
      </div>

      <div class="btn-warp" v-if="isMe">
        <div class="btn-check" v-if="WorkStatus == 3">
          <van-button
            style="background: rgba(229, 75, 75, 1);"
            square
            type="primary"
            block
            @click="onReceive(2)"
          >拒收</van-button>
          <van-button
            style="background: rgba(90,147,255,1);"
            square
            type="primary"
            block
            @click="onReceive(1)"
          >接收</van-button>
        </div>
        <van-button
          class="btn"
          square
          type="primary"
          block
          @click="onPrimary"
          v-if="WorkStatus == 0"
        >确认完成</van-button>
      </div>
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
  </div>
</template>

<script type='textecmascript-6'>
import { getChangeInfo, chanageCheck,uploadingPic  } from "../../assets/js/scopeManage.js";
export default {
  data() {
    return {
      userID: localStorage.getItem("userId"), //用户ID
      active: 0,
      WorkStatus: "",
      isMe: false,
      par: {
        ID: "",
        Theme: "",
        Content: "",
        Priority: "",
        OrgId: "",
        Person: "",
        WorkFlowId: ""
      },
      data: "",
      voucherData: [],
      photoList:[],
      phone_show: false
    };
  },
  created() {
    // 获取详情
    this.getDetil();
  },
  methods: {
    getDetil() {
      getChangeInfo({ id: this.$route.query.id }, res => {
        this.par.ID = res.ID;
        this.par.Theme = res.Theme;
        this.par.Content = res.Content;
        this.voucherData = [];
        res.listFlow.forEach((element, index) => {
          this.voucherData.push(element.listAuthPhoto[0]);
          if (this.active == 0 && element.ID == res.CurrentStepIndex) {
            this.active = index;
            this.Person = element.Person;
            this.WorkFlowId = element.ID;
            this.WorkStatus = element.Status;
            if (this.userID == element.Person) {
              this.isMe = true;
            } else {
              this.isMe = false;
            }
            this.par.Priority = element.Priority;
            this.par.OrgId = element.OrgId;
            this.par.Person = element.Person;
            this.par.WorkFlowId = element.ID;
          }
        });
        this.data = res;
      });
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
    // 接收/拒收
    onReceive(flag) {
      // 接收
      let par = "";
      if (flag == 1) {
        par = Object.assign(this.par, {
          listAuthPhoto: this.photoList,
          Status: 3
        });
      } else {
        par = Object.assign(this.par, {
          listAuthPhoto: this.photoList,
          Status: 2
        });
      }
      chanageCheck(this, par);
    },
    onClickLeft() {
      this.$router.back(-1);
    },
    // 确认完成
    onPrimary() {
      let par = Object.assign(this.par, {
        listAuthPhoto: this.photoList,
        Status: 4
      });
      chanageCheck(this, par);
    }
  }
};
</script>
<style >
.container-purchaseDetails {
  width: 100vw;
  height: 100vh;
}
.content {
  height: calc(100vh - 90px);
  width: 100vw;
  overflow-y: auto;
}
.content .el-table__empty-text {
  font-size: 15px;
}

.btn-check {
  display: flex;
  justify-content: space-between;
}
.btn-check button {
  width: 330px;
  height: 44px;
  border-radius: 4px;
}

.container-projectChangeDetails .p15 .van-cell .van-cell__title {
  max-width: 1.7rem;
}

/* 表格样式更改 */
.container-projectChangeDetails .materials_table .el-table .cell {
  height: 0.78rem;
  line-height: 0.78rem;
  font-size: 30px;
}
.container-projectChangeDetails .materials_table .el-table .table_input {
  border: 0.04rem solid #eeeeee;
}
.container-projectChangeDetails .materials_table_largin .el-table .cell {
  height: 0.78rem;
  line-height: 0.78rem;
  font-size: 30px;
}
.container-projectChangeDetails .materials_table_largin .el-table .table_input {
  border: 0.04rem solid #eeeeee;
}
.container-projectChangeDetails .materials_table_largin {
  width: 100%;
  overflow: scroll;
}
</style>

<style lang='stylus' scoped rel='stylesheet/stylus'>
@import './user_assets/base.css';

.uploader-warp {
  width: 100%;
}

.mt20 {
  margin-top: 0.27rem;
}

.container-projectChangeDetails {
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
    padding: 0.4rem 0.32rem;
    background: rgba(246, 248, 250, 1);
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

  .upload-file-item {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 88px;
    font-size: 32px;
    color: #333;
  }

  .cancel {
    color: #666 !important;
  }

  .content {
    .flow-content {
      padding: 10px 0.32rem;
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

    .uploader {
      background-color: rgba(246, 248, 250, 1);
      padding: 0 0.32rem;
      overflow-x: auto;
      overflow-y: hidden;
      height: 2.76rem;

    .van-uploader {
      margin-right: 10px;
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

    .projectChangeDetails-type-arrow img {
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

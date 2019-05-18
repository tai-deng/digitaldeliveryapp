<!-- 发起沟通 sponsorSee -->
<template>
  <div class="container-sponsorSee">
    <van-nav-bar title="发起沟通" left-arrow border @click-left="onClickLeft"></van-nav-bar>
    <div class="content">
      <van-cell-group>
        <div class="group-warp">
          <van-field
            class="item-s-b"
            v-model.trim="themeValue"
            clearable
            label="主题："
            placeholder="请输入主题文字"
          />
        </div>

        <div class="sponsorSee-type flex-between item-s" @click="onSponsorSeeType">
          <div class="sponsorSee-type-l flex">
            <div class="sponsorSee-type-l-name text-font-have">类型：</div>
            <div
              class="sponsorSee-type-l-v"
              :class="[typeValue?'text-font-have':'text-font-none']"
            >{{typeValue?typeValue:'请选择类型'}}</div>
          </div>
          <div class="sponsorSee-type-arrow">
            <img src="./user_assets/imgs/arrow-right.png">
          </div>
        </div>

        <div class="group-warp p15">
          <van-field
            v-model.trim="issueValue"
            label="描述"
            type="textarea"
            placeholder="请输入问题描述"
            rows="4"
            autosize
          />
        </div>
      </van-cell-group>
      <div class="project-title flex">工程部位</div>
      <div class="project-content">
        <div class="sponsorSee-type flex-between item-s" @click="onBuilding">
          <div class="sponsorSee-type-l flex">
            <div class="sponsorSee-type-l-name text-font-have">楼栋：</div>
            <div
              class="sponsorSee-type-l-v"
              :class="[buildingValue?'text-font-have':'text-font-none']"
            >{{buildingValue?buildingValue:'请选择楼栋'}}</div>
          </div>
          <div class="sponsorSee-type-arrow">
            <img src="./user_assets/imgs/arrow-right.png">
          </div>
        </div>

        <div class="sponsorSee-type flex-between item-s" @click="onMajor">
          <div class="sponsorSee-type-l flex">
            <div class="sponsorSee-type-l-name text-font-have">专业：</div>
            <div
              class="sponsorSee-type-l-v"
              :class="[majorValue?'text-font-have':'text-font-none']"
            >{{majorValue?majorValue:'请选择专业'}}</div>
          </div>
          <div class="sponsorSee-type-arrow">
            <img src="./user_assets/imgs/arrow-right.png">
          </div>
        </div>

        <div class="sponsorSee-type flex-between item-s" @click="onLevel">
          <div class="sponsorSee-type-l flex">
            <div class="sponsorSee-type-l-name text-font-have">楼层：</div>
            <div
              class="sponsorSee-type-l-v"
              :class="[levelValue?'text-font-have':'text-font-none']"
            >{{levelValue?levelValue:'请选择楼层'}}</div>
          </div>
          <div class="sponsorSee-type-arrow">
            <img src="./user_assets/imgs/arrow-right.png">
          </div>
        </div>

        <div class="sponsorSee-type flex-between item-s" @click="onDriven">
          <div class="sponsorSee-type-l flex">
            <div class="sponsorSee-type-l-name text-font-have">构件名称：</div>
            <div
              class="sponsorSee-type-l-v"
              :class="[drivenValue?'text-font-have':'text-font-none']"
            >{{drivenValue?drivenValue:'请选择构件'}}</div>
          </div>
          <div class="sponsorSee-type-arrow">
            <img src="./user_assets/imgs/arrow-right.png">
          </div>
        </div>

        
      </div>

      <div class="project-title flex">上传凭证</div>
      <div class="uploader m20 flex">
        <template v-if="photoList.length">
          <div v-for="(item,index) in photoList" :key="index" class="van-uploader-list" @click="cancelPhoto(index)" >
            <img :src="item.TokenUrL+item.smallPhotoURL">
          </div>
        </template>
        <div v-if="photoList.length<3" class="van-uploader" @click="selectPhoto">
          <img src="./user_assets/imgs/up-proof.png">
        </div>
        <div  v-if="photoList.length<2"  class="uploader-tip">最多上传3张</div>
      </div>

      <div class="project-title flex-between">
        工作流程
        <h3 v-if="done" class="project-title-r" @click="onEdit(flowList)">编辑</h3>
      </div>
      <div class="flow-content" v-if="done">
        <div class="flow-content-item flex" v-for="(item,index) in flowList" :key="index">
          <div class="flow-content-item-l flex-row">
            {{index+1}}
            <div class="line" v-if="index !== flowList.length-1"></div>
          </div>

          <div class="flow-content-item-c flex">
            <div class="flow-content-item-c-l flex-row flow-content-item-border">{{item.Person.name}}</div>
            <div class="flow-content-item-c-l flex-row flow-content-item-border">{{item.OrgId.name}}</div>
            <div class="flow-content-item-c-l flex-row">{{item.DepId.name}}</div>
            <div class="flow-content-item-c-triangle">
              <div class="flow-content-item-c-triangle-b"></div>
            </div>
          </div>

          <div class="flow-content-item-r" @click="onDelete(index)">
            <img src="./user_assets/imgs/delete.png">
          </div>
        </div>
      </div>
      <div class="flow-work flex" v-else>
        <div class="flow-work-c flex-column-center-b" @click="onAdd">
          <img src="./user_assets/imgs/add.png">
          新增
        </div>
      </div>
      <div class="btn-warp">
        <van-button class="btn" square type="primary" block @click="GetSaveCommunicate">确认发起</van-button>
      </div>
    </div>
    <van-actionsheet v-model="isSelect" :actions="actions" @select="onSelect"/>
    <van-actionsheet
      v-model="phone_show"
    >
      <van-uploader :after-read="onRead" accept="image/jpeg" capture="camera" class="upload-file-item">
        <div>
          拍摄
        </div>
      </van-uploader>
      <van-uploader :after-read="onRead" class="upload-file-item">
        <div>
          从手机相册选择
        </div>
      </van-uploader>
      <div class="upload-file-item cancel" @click="uploadCancel">
        取消
      </div>
    </van-actionsheet>
  </div>
</template>

<script type='textecmascript-6'>
import {GetComTypeList,
GetBuilding,
GetSpecialtybyBuilding,
GetFloorbyBuilding,
QueryAllElementNameByInfo,
GetElementIDByInfo,
SaveCommunicate,
UploadBase64Img} from '@/api/api.js'
export default {
  data() {
    return {
      isSelect: false,
      actions: [],
      selAction: null,
      done: false,
      // 主题
      themeValue: null,
      // 类型
      typeValue: null,
      // 问题描述
      issueValue: null,
      // 楼栋
      buildingValue: null,
      // 楼层
      levelValue: null,
      // 构件
      drivenValue: null,
      // 专业
      majorValue: null,
      // 类型数据
      sponsorSeeTypeData: [],
      // 楼栋数据
      uildingData: [],
      // 楼层数据
      levelData: [],
      // 构件数据
      drivenData: [],
      // 专业数据
      majorData: [],
      // 流程数据
      flowData: [],
      ProjectID: localStorage.getItem('projectid'), //项目ID
      userID: localStorage.getItem("userId"), //用户ID
      flowList: [],
      elementIDS: [],  //构建ID
      photoList: [],  //上传照片
      phone_show: false 
    };
  },
  created(){
    this.ComTypeList()
    this.GetBuildingInfo(this.ProjectID)
    this.getSavedData()
    this.getParams()
  },
  watch: {
    buildingValue(val){
      //获取专业和楼层
      this.SpecialtybyBuilding(this.ProjectID,val)
      this.FloorbyBuilding(this.ProjectID,val)
    },
    levelValue(val){
      //获取构件名称
      this.AllElementNameByInfo()
    },
    drivenValue(val){
      //获取构建ID
      this.ElementIDByInfo()
    }
    
  },
  methods: {
    onClickLeft() {
      this.$router.push('nav/to/index');
    },
    // 选类型事件
    onSponsorSeeType() {
      this.isSelect = true;
      this.actions = this.sponsorSeeTypeData;
      this.selAction = "typeValue";
    },
    // 楼栋事件
    onBuilding() {
      this.isSelect = true;
      this.actions = this.uildingData;
      this.selAction = "buildingValue";
    },
    // 楼层事件
    onLevel() {
      if(this.majorValue){
        this.isSelect = true;
        this.actions = this.levelData;
        this.selAction = "levelValue";
      }else {
        this.$toast({
          message: '请选择专业！',
          duration: 800,
          className: 'my-toast'
        })
      }
    },
    // 构件事件
    onDriven() {
     if(this.leveValue){
        this.isSelect = true;
        this.actions = this.drivenData;
        this.selAction = "drivenValue";
     }else {
       this.$toast({
         message: '请选择楼层！',
         duration: 800,
         className: 'my-toast'
       })
     }
    },
    // 专业事件
    onMajor() {
      if(this.buildingValue){
        this.isSelect = true;
        this.actions = this.majorData;
        this.selAction = "majorValue";
      }else {
        this.$toast({
          message: '请选择楼栋！',
          duration: 800,
          className: 'my-toast'
        })
      }
      
    },
    // 上拉菜单
    onSelect(v) {
      this.isSelect = false;
      let action = this.selAction;
      if (action == "typeValue") {
        this.typeValue = v.name;
      } else if (action == "buildingValue") {
        this.buildingValue = v.name;
      } else if (action == "levelValue") {
        this.levelValue = v.name;
      } else if (action == "drivenValue") {
        this.drivenValue = v.name;
      } else if (action == "majorValue") {
        this.majorValue = v.name;
      }
    },
    //删除照片
    cancelPhoto(index){
      this.$dialog.confirm({
        title: '删除确认',
        message: '确认删除照片？',
        className: 'delecet_photo'
      }).then(() => {
        // on confirm
        this.photoList.splice(index, 1)
      }).catch(() => {
        // on cancel

      });
      
    },
    //获取照片
     selectPhoto(){
      if(!this.phone_show){
        this.phone_show = true
      }else {
        this.phone_show = false
      }
    },
    uploadCancel(){
      this.phone_show = false
    },
    // 上传图片
    async onRead(file, detail) {
      console.log(file);
      console.log(detail);
      let params = {
        Base64Photo: file.content,
        fileext: file.file.name
      }
      let res = await this.Request(UploadBase64Img(params))
      console.log(res)
      if(res.StatusCode === 200){
        this.photoList.push(res.Detiel[0])
        this.phone_show = false
      }else {
        this.$message({
          type: 'error',
          message: res.Message,
          center: 'true'
        })
      }
    },
    // 新增
    onAdd() {
      this.saveData()
      this.$router.push({ path: "/addFlow" });
    },
    //编辑
    onEdit(dataList){
      this.saveData()
      this.$router.push({ path: "/addFlow", query: {flowList: dataList}});
    },
   
    // 删除
    onDelete(i) {
      console.log(i);
    },
    //获取路由的参数
    getParams(){
      let done = this.$route.query.done
      let flowList = this.$route.query.flowList
      console.log(flowList)
      if(done === true){
        this.done = done
        this.flowList = flowList
      }
    },
    //缓存数据
    saveData(){
      let selectedData = {
        photoList: this.photoList,//上传凭证照片列表
        themeValue: this.themeValue,//主题
        typeValue: this.typeValue,//类型
        issueValue: this.issueValue,//描述
        buildingValue: this.buildingValue, //楼栋
        majorValue: this.majorValue, //专业
        levelValue: this.levelValue, //楼层
        drivenValue: this.drivenValue, //楼层
        elementIDS: this.elementIDS//关联构件
      }
      this.$store.commit('COMMUNICATE_DATA', selectedData)
    },
    //获取缓存数据
    getSavedData(){
      let selectedData = this.$store.getters.getCommunicateData
      if(selectedData){
        this.photoList = selectedData.photoList
        this.themeValue = selectedData.themeValue
        this.typeValue = selectedData.typeValue
        this.issueValue = selectedData.issueValue
        this.buildingValue = selectedData.buildingValue
        this.majorValue = selectedData.majorValue
        this.levelValue = selectedData.levelValue
        this.drivenValue = selectedData.drivenValue
        this.elementIDS = selectedData.elementIDS
      }
    },
    getflowListData(){
      this.flowList.forEach((item) => {
        item.DepId = Number(item.DepId.id)
        item.OrgId = Number(item.OrgId.id)
        item.Person = Number(item.Person.id)
      })
    },
    //API接口
    //获取沟通类型列表
    async ComTypeList(){
      let res = await this.Request(GetComTypeList())
      console.log(res)
      if(res.StatusCode === 200){
        let dataArr = res.Detiel
        this.sponsorSeeTypeData= JSON.parse(JSON.stringify(dataArr).replace(/text/g,'name'))
        console.log(this.sponsorSeeTypeData)
      }else {
        this.$message({
          type: 'error',
          message: res.Message,
          center: 'true'
        })
      }
    },
      //获取楼栋信息
    async GetBuildingInfo(ProjectID){
      let res = await this.Request(GetBuilding({ProjectID}))
      console.log(res)
      if(res.StatusCode == 200){
        let dataArr = res.Detiel
        this.uildingData = JSON.parse(JSON.stringify(dataArr).replace(/text/g,'name'))
      }else{
          this.$message({
              type: "error",
              message: res.Message,
              center: "true"
          });
        }
    },
      //根据楼栋获取模型的专业
    async SpecialtybyBuilding(ProjectID,Building){
      let res = await this.Request(GetSpecialtybyBuilding({projectid: ProjectID, building:Building}))
      console.log(res)
      if(res.StatusCode == 200){
        let dataArr = res.Detiel
        this.majorData = JSON.parse(JSON.stringify(dataArr).replace(/text/g,'name'))
      }else{
          this.$message({
              type: "error",
              message: res.Message,
              center: "true"
          });
        }
    },
    
    //根据楼栋获取楼层
    async FloorbyBuilding(ProjectID,Building){
      let res = await this.Request(GetFloorbyBuilding({projectid: ProjectID, building:Building}))
      console.log(res)
      if(res.StatusCode == 200){
        let dataArr = res.Detiel
        this.levelData = JSON.parse(JSON.stringify(dataArr).replace(/text/g,'name'))
      }else{
          this.$message({
              type: "error",
              message: res.Message,
              center: "true"
          });
        }
    },
    // 根据参数获取构件名称
    async AllElementNameByInfo(){
      console.log('222')
      let data = {
        ProjectID: this.ProjectID,
        BuildName: this.buildingValue,
        Specialty: this.majorValue,
        Floor: this.levelValue,

      }
      let res = await this.Request(QueryAllElementNameByInfo(data))
      console.log(res)
      if(res.StatusCode == 200){
        let dataArr = res.Detiel
        if(dataArr.length){
          this.drivenData = JSON.parse(JSON.stringify(dataArr).replace(/code/g,'name'))
        } else {
          this.$toast({
            message: '无相关数据！',
            duration: 800
          })
        }

      }else{
          this.$message({
              type: "error",
              message: res.Message,
              center: "true"
          });
        }
    },
    // 根据构件参数获取所有ElementID
     async ElementIDByInfo(){
      console.log('222')
      let data = {
        ProjectID: this.ProjectID,
        BuildName: this.buildingValue,
        Specialty: this.majorValue,
        Floor: this.levelValue,
        ElementName: this.drivenValue
      }
      let res = await this.Request(GetElementIDByInfo(data))
      console.log(res)
      if(res.StatusCode == 200){
        // let dataArr = res.Detiel
        this.elementIDS = res.Detiel
      }else{
          this.$message({
              type: "error",
              message: res.Message,
              center: "true"
          });
        }
    },
       // 保存沟通管理数据
    async GetSaveCommunicate (){
        console.log("添加");
      // if (this.isAudit == 0 && this.flowList.length == 4) {
      //   this.$message({
      //     type: "warning",
      //     message: "该流程为4个人",
      //     center: "true"
      //   });
      //   return;
      // }
      if (!this.themeValue) {
        this.$message({
          type: "warning",
          message: "主题不能为空!",
          center: "true"
        });
        return;
      } else if (!this.typeValue) {
        this.$message({
          type: "warning",
          message: "类型不能为空!",
          center: "true"
        });
        return;
      } else if (!this.issueValue) {
        this.$message({
          type: "warning",
          message: "描述不能为空!",
          center: "true"
        });
        return;
      }
      this.getflowListData()
      let prams = {
        listFlow: this.flowList, //工作流列表
        PhotoList: this.photoList,//上传凭证照片列表
        listViewpoints: [],   //视点列表
        ID: 1,//风险ID
        ProjectID: this.ProjectID,//项目ID
        Subject: this.themeValue,//主题
        ComType: this.typeValue,//类型
        Description: this.issueValue,//描述
        Status: 1,//状态 0： 待接收 1： 处理中 2： 已处理
        CurrentStep: 1,//当前步骤
        StepCount: this.flowList.length,//工作流总步骤
        BuildName: this.buildingValue, //楼栋
        Floor: this.levelValue, //楼层
        Specialty: this.majorValue, //专业
        ElementName: this.drivenValue, //构建名称
        ElementIDS: this.elementIDS.join(','),//关联构件（多个构件ID用英文逗号分隔）
        dCreateTime: require('moment')().format('YYYY-MM-DD'), //创建时间
        iCreator: this.userID,   //创建人
        dUpdateTime: require('moment')().format('YYYY-MM-DD'), //修改时间
        iUpdator: this.userID,   //修改人
        bDelFlag: true, //是否删除
      }
      console.log(prams)
      let save_communicate = await this.Request(SaveCommunicate(prams));
      console.log(save_communicate)
      if(save_communicate.StatusCode == 200){
        this.$message({type:'success',message:save_communicate.Message,center:'true'})
        this.$store.commit('COMMUNICATE_DATA', null)
        this.$router.push({
          path: "/submitSuccess",
          query: { name: "sponsorSee" }
        });
      }else{
        this.$message({type:'error',message:save_communicate.Message,center:'true'})
      }
    },
  }
};
</script>
<style>
.container-sponsorSee .content .van-cell__value {
  overflow: visible;
  font-size: 28px;
}
.container-sponsorSee .upload-file-item {
  display: flex;
  justify-content: center;
  align-items: center;
  width:100%;
  height: 88px;
  font-size: 32px;
  color: #333;
}
.container-sponsorSee .cancel {
  color: #666!important;
}
.delecet_photo.van-dialog {
  width: 50%!important;
  font-size: 32px;
}
/* toast begin */
.my-toast.van-toast {
    font-size: 30px;
}
.my-toast.van-toast--default{
    width: 180px;
    padding: 30px;
}
.my-toast.van-toast--text {
    padding: 40px 40px
}
.my-toast.van-toast--default .van-toast__icon{
    font-size: 96px;
}
/* toast end */
</style>

<style lang='stylus' scoped rel='stylesheet/stylus'>
@import './user_assets/base.css';

.container-sponsorSee {
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
      font-size: 28px;
      font-family: SourceHanSansCN-Regular;
      font-weight: 400;
      color: rgba(51, 51, 51, 1);
      border-bottom: 0.017rem solid #E5E5E5;
    }
  }

  .content {
    width: 100%;
    height: calc(100% - 88px)
    overflow-y: auto;
    .flow-content {
      padding: 0 0.32rem;
      background: rgba(246, 248, 250, 1);

      .flow-content-item {
        margin-top: 0.4rem;

        .flow-content-item-l {
          width: 0.53rem;
          height: 0.53rem;
          border-radius: 50%;
          background: rgba(59, 72, 95, 1);
          font-size: 28px;
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
          font-size: 28px;
          font-family: SourceHanSansCN-Medium;
          font-weight: 500;
          color: rgba(51, 51, 51, 1);
          background: rgba(255, 255, 255, 1);
          box-shadow: 0px 0.0133rem 0.11rem 0px rgba(220, 226, 237, 1);
          border-radius: 0.0532rem;
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
      font-size: 28px;
      overflow: visible;
    }

    .uploader {
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

      .uploader-tip {
        font-size: 26px;
        font-family: SourceHanSansCN-Regular;
        font-weight: 400;
        color: rgba(153, 153, 153, 1);
        align-self: flex-end;
        margin-left: 0.16rem;
      }
    }

    .sponsorSee-type-arrow img {
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
      font-size: 28px;
      font-family: SourceHanSansCN-Medium;
      font-weight: 500;
      color: rgba(255, 255, 255, 1);
    }

    .item-s {
      height: 1.18rem;
      line-height: 1.18rem;
      font-size: 28px;
      font-family: SourceHanSansCN-Regular;
      font-weight: 400;
      color: rgba(51, 51, 51, 1);
      border-bottom: 0.017rem solid #E5E5E5;
      margin: 0 0.32rem;
    }

    .project-title {
      font-size: 28px;
      font-family: SourceHanSansCN-Medium;
      font-weight: 500;
      color: rgba(51, 51, 51, 1);
      height: 1.18rem;
      margin: 0 0.32rem;
    }

    .project-title-r {
      height: 1.18rem;
      font-size: 28px;
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
    font-size: 28px;
    font-family: SourceHanSansCN-Regular;
    font-weight: 400;
    color: rgba(51, 51, 51, 1);
  }

  .text-font-none {
    font-size: 28px;
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

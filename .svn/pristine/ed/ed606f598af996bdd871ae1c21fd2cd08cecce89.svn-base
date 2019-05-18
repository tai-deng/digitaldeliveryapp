<!-- 编辑工作流程 addFlow -->
<template>
  <div class="container-addFlow">
    <van-nav-bar
      title="编辑工作流程"
      left-arrow
      border
      @click-left="onClickLeft"
      @click-right="onClickRight"
    >
      <div class="projectBnt" slot="right">完成</div>
    </van-nav-bar>
    <div class="content">
      <div class="project-content">
        <div class="addFlow-type flex-between item-s" @click="onpriority">
          <div class="addFlow-type-l flex">
            <div class="addFlow-type-l-name text-font-have">优先级：</div>
            <div
              class="addFlow-type-l-v"
              :class="[priorityValue?'text-font-have':'text-font-none']"
            >{{priorityValue?priorityValue:'请选择优先级'}}</div>
          </div>
          <div class="addFlow-type-arrow">
            <img src="./user_assets/imgs/arrow-right.png">
          </div>
        </div>

        <div class="addFlow-type flex-between item-s" @click="onduty">
          <div class="addFlow-type-l flex">
            <div class="addFlow-type-l-name text-font-have">责任单位：</div>
            <div
              class="addFlow-type-l-v"
              :class="[dutyValue?'text-font-have':'text-font-none']"
            >{{dutyValue?dutyValue:'请选择责任单位'}}</div>
          </div>
          <div class="addFlow-type-arrow">
            <img src="./user_assets/imgs/arrow-right.png">
          </div>
        </div>

        <div class="addFlow-type flex-between item-s" @click="ondepartment">
          <div class="addFlow-type-l flex">
            <div class="addFlow-type-l-name text-font-have">岗位/部门：</div>
            <div
              class="addFlow-type-l-v"
              :class="[departmentValue?'text-font-have':'text-font-none']"
            >{{departmentValue?departmentValue:'请选择岗位/部门'}}</div>
          </div>
          <div class="addFlow-type-arrow">
            <img src="./user_assets/imgs/arrow-right.png">
          </div>
        </div>

        <div class="addFlow-type flex-between item-s" @click="onMajor">
          <div class="addFlow-type-l flex">
            <div class="addFlow-type-l-name text-font-have">人员：</div>
            <div
              class="addFlow-type-l-v"
              :class="[majorValue?'text-font-have':'text-font-none']"
            >{{majorValue?majorValue:'请选择人员'}}</div>
          </div>
          <div class="addFlow-type-arrow">
            <img src="./user_assets/imgs/arrow-right.png">
          </div>
        </div>
      </div>

      <div class="btn-warp">
        <van-button class="btn" square type="primary" block @click="onPrimary">添加流程</van-button>
      </div>

      <div class="flow-content">
        <div class="flow-content-item flex" v-for="(item,index) in flowList" :key="index">
          <div class="flow-content-item-l flex-row">
            {{index+1}}
            <div class="line" v-if="index !== flowList.length-1"></div>
          </div>

          <div class="flow-content-item-c flex">
            <div
              class="flow-content-item-c-l flex-row flow-content-item-border"
            >{{item.Person.name}}</div>
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
    </div>
    <van-actionsheet v-model="isSelect" :actions="actions" @select="onSelect"/>
  </div>
</template>

<script type='textecmascript-6'>
import {
  GetOrgList,
  GetDeptList,
  GetUserListByDept,
  GetLoginUserInfo
} from "@/api/api.js";
export default {
  data() {
    return {
      isSelect: false,
      actions: [],
      selAction: null,
      // 优先级
      priorityValue: null,
      // 责任单位
      dutyValue: null,
      //责任单位ID
      OrgID: null,
      // 岗位/部门
      departmentValue: null,
      // 岗位/部门ID
      departmentID: null,
      // 人员
      majorValue: null,
      // 优先级数据
      uildingData: [
        { id: 1, name: "优先级1" },
        { id: 2, name: "优先级2" }
      ],
      // 责任单位数据
      dutyData: [],
      // 岗位/部门数据
      departmentData: [],
      // 人员数据
      majorData: [],
      // 流程数据
      flowData: [],
      userID: localStorage.getItem("userId"), //用户ID
      userInfo: null,
      ProjectID: localStorage.getItem("projectid"), //项目ID
      /**按进度计划是否为审核0/1 */
      isAudit: {
        type: String,
        default: "1"
      },
      flowList: [],
      editFlag: false //true 表示编辑  false 表示新增
      // 添加表单对象
      // filterForm: {
      //   flowList: [],
      //   Priority: 1,
      //   OrgId: { id: "", text: "", OrgId: "" }, // 单位
      //   DepId: { id: "", text: "", DepId: "" }, // 部门
      //   Person: { id: "", text: "", Person: "" } // 人员
      // }
    };
  },
  props: { origin: null },
  created() {
    this.OrgList(this.ProjectID);
    this.LoginUserInfo(this.userID);
    this.getParams();
  },
  methods: {
    onClickLeft() {
      this.$router.back(-1);
    },
    // 完成
    onClickRight() {
      this.flowList.forEach((item, index) => {
        //没有创建时间 是创建
        item.ID = 1;
        item.MasterID = 1;
        item.Type = 1;
        item.bDelFlag = true;
        item.dCreateTime = require("moment")().format("YYYY-MM-DD");
        item.dUpdateTime = require("moment")().format("YYYY-MM-DD");
        item.iCreator = this.userInfo.Person.id;
        item.iUpdator = this.userInfo.Person.id;
        item.Priority = index + 1;
        // item.OrgId = item.OrgId.id
        // item.DepId = item.DepId.id
        // item.Person = item.Person.id
      });
      if (this.origin) {
        this.$emit("onDone", this.flowList);
      } else {
        this.$router.push({
          path: "/sponsorSee",
          query: { done: true, flowList: this.flowList }
        });
      }
    },
    // 优先级事件
    onpriority() {
      this.isSelect = true;
      this.actions = this.uildingData;
      this.selAction = "priorityValue";
    },
    // 责任单位事件
    onduty() {
      this.isSelect = true;
      if (this.dutyData.length) {
        this.actions = this.dutyData;
      } else {
        this.actions = [];
      }
      this.selAction = "dutyValue";
    },
    // 岗位/部门事件
    ondepartment() {
      if (this.departmentValue === "无数据") {
        return false;
      }
      this.isSelect = true;
      if (this.departmentData.length) {
        this.actions = this.departmentData;
      } else {
        // this.departmentValue = '无数据'
        this.actions = [];
      }
      this.selAction = "departmentValue";
    },
    // 人员事件
    onMajor() {
      if (this.majorValue === "无数据") {
        return false;
      }
      this.isSelect = true;
      if (this.majorData.length) {
        this.actions = this.majorData;
      } else {
        // this.majorValue = '无数据'
        this.actions = [];
      }
      // this.actions = this.majorData;
      this.selAction = "majorValue";
    },
    // 上拉菜单
    onSelect(v) {
      this.isSelect = false;
      let action = this.selAction;
      if (action == "typeValue") {
        this.typeValue = v.name;
      } else if (action == "priorityValue") {
        this.priorityValue = v.name;
      } else if (action == "dutyValue") {
        this.dutyValue = v.name;
      } else if (action == "departmentValue") {
        this.departmentValue = v.name;
      } else if (action == "majorValue") {
        this.majorValue = v.name;
      }
    },
    // 添加
    onPrimary() {
      console.log("添加");
      if (this.isAudit == 0 && this.flowList.length == 4) {
        this.$message({
          type: "warning",
          message: "该流程为4个人",
          center: "true"
        });
        return;
      }
      if (!this.dutyValue) {
        this.$message({
          type: "warning",
          message: "单位不能为空!",
          center: "true"
        });
        return;
      } else if (!this.departmentValue) {
        this.$message({
          type: "warning",
          message: "部门不能为空!",
          center: "true"
        });
        return;
      } else if (!this.majorValue) {
        this.$message({
          type: "warning",
          message: "人员不能为空!",
          center: "true"
        });
        return;
      }
      let OrgId = {
        id: this.OrgID,
        name: this.dutyValue,
        OrgId: this.dutyValue
      }; //责任单位
      let DepId = {
        id: this.departmentID,
        name: this.departmentValue,
        DepId: this.departmentValue
      }; //岗位部门
      const majorId = this.searchID(this.majorData, this.majorValue);
      let Person = {
        id: majorId,
        name: this.majorValue,
        Person: this.majorValue
      };
      let priority = this.searchID(this.uildingData, this.priorityValue);
      let item = {
        Priority: 0, //优先级
        OrgId, //责任单位
        DepId, //岗位部门
        Person, //人员
        Status: 0
      };
      console.log(priority);
      if (priority === 1) {
        //  priority -= 1
        let num = -1;
        this.flowList.forEach((it, index) => {
          let per = JSON.stringify(it.Person);
          let p = JSON.stringify(item.Person);
          if (p === per) {
            num = index;
          }
        });
        console.log(num);
        if (num != -1) {
          this.flowList.splice(num, 1);
          this.uildingData.pop(this.uildingData.length - 1);
        }
        this.flowList.splice(priority, 0, item);
      } else {
        let num = -1;
        this.flowList.forEach((it, index) => {
          let per = JSON.stringify(it.Person);
          let p = JSON.stringify(item.Person);
          if (p === per) {
            num = index;
          }
        });
        console.log(num);
        if (num != -1) {
          this.flowList.splice(num, 1);
          this.uildingData.pop(this.uildingData.length - 1);
        }
        this.flowList.splice(priority - 1, 0, item);
      }

      // this.flowList.forEach((item,index)=>{
      //   item.Priority = index+1
      // })
      let id = this.flowList.length + 1;

      this.uildingData.push({
        id,
        name: `优先级${id}`
      });
      console.log(this.flowList);
    },
    // 删除
    onDelete(i) {
      console.log(i);
      if (i) {
        this.flowList.splice(i, 1);
        this.uildingData.pop(this.uildingData.length - 1);
      }
      // this.flowList.forEach((item,index)=>{
      //   item.Priority = index+1
      // })
    },
    //查询对应ID函数
    searchID(dataList, val) {
      let id = null;
      if (dataList.length) {
        dataList.forEach(item => {
          if (item.name === val) {
            id = item.ID || item.id;
          }
        });
      }
      return id;
    },
    //获取路由的参数
    getParams() {
      let flowList = this.$route.query.flowList;
      console.log(flowList);
      if (flowList) {
        // 编辑进入
        this.flowList = flowList;
        this.editFlag = true;
        this.uildingData = []
        for(let i = 0; i<=this.flowList.length; i++){
          let uildIts = {
            id: i+1,
            name: `优先级${i+1}`
          }
          this.uildingData.push(uildIts)
        }
      }
    },
    /**
     * api接口
     */
    // 获取单位列表 type为单位类型(1:建设单位,2:勘察单位,3:设计单位,4:监理单位,5:施工单位,6:其他单位)
    async OrgList(ProjectID) {
      let res = await this.Request(GetOrgList({ projectId: ProjectID }));
      console.log(res);
      if (res.StatusCode === 200) {
        let dataArr = res.Detiel;
        this.dutyData = JSON.parse(
          JSON.stringify(dataArr).replace(/Name/g, "name")
        );
        if (this.dutyData.length === 0) {
          this.dutyValue = "无数据";
          this.departmentValue = "无数据";
          this.majorValue = "无数据";
        } else {
          this.dutyValue = null;
        }
        console.log(this.dutyData);
      } else {
        this.$message({
          type: "error",
          message: res.Message,
          center: "true"
        });
      }
    },
    // 按公司获取部门数据列表
    async DeptList(orgId) {
      let res = await this.Request(GetDeptList({ orgId }));
      console.log(res);
      if (res.StatusCode === 200) {
        let dataArr = res.Detiel;
        this.departmentData = JSON.parse(
          JSON.stringify(dataArr).replace(/text/g, "name")
        );
        console.log(this.departmentData);
        if (this.departmentData.length === 0) {
          this.departmentValue = "无数据";
          this.majorValue = "无数据";
        } else {
          this.departmentValue = null;
        }
      } else {
        this.$message({
          type: "error",
          message: res.Message,
          center: "true"
        });
      }
    },
    // 根据项目ID和单位ID以及部门ID获取人员列表
    async UserListByDept() {
      let data = {
        projectId: this.ProjectID,
        orgId: this.OrgID,
        deptId: this.departmentID
      };
      let res = await this.Request(GetUserListByDept(data));
      console.log(res);
      if (res.StatusCode === 200) {
        let dataArr = res.Detiel;
        this.majorData = JSON.parse(
          JSON.stringify(dataArr).replace(/text/g, "name")
        );
        console.log(this.majorData);
        if (this.majorData.length === 0) {
          this.majorValue = "无数据";
        } else {
          this.majorValue = null;
        }
      } else {
        this.$message({
          type: "error",
          message: res.Message,
          center: "true"
        });
      }
    },
    // 获取当前登录用户详情接口
    async LoginUserInfo(userID) {
      let res = await this.Request(GetLoginUserInfo({ curUserId: userID }));
      console.log(res);
      if (res.StatusCode === 200) {
        let item = res.Detiel[0].loginUserInfo;
        this.userInfo = {
          OrgId: { name: item.WeChatNo, id: item.iSys_Company_ID },
          DepId: { name: item.cDepName, id: item.iSys_Dep_ID },
          Person: { name: item.cName, id: item.ID },
          Status: 4
        };
        if (this.editFlag) {
          return false;
        } else {
          this.flowList.push(this.userInfo);
          console.log(this.flowList);
        }

        // let dataArr = res.Detiel
        // this.majorData= JSON.parse(JSON.stringify(dataArr).replace(/text/g,'name'))
        // console.log(this.majorData)
      } else {
        this.$message({
          type: "error",
          message: res.Message,
          center: "true"
        });
      }
    }
  },
  watch: {
    dutyValue(val) {
      if(val === '无数据'|| val === null){
        return false
      }
      //根据选择责任单位获取部门列表数据
      this.OrgID = this.searchID(this.dutyData, val);
      this.DeptList(this.OrgID);
    },
    departmentValue(val) {
      console.log(val);
      if(val === '无数据'|| val === null){
        return false
      }
      // 根据项目ID和单位ID以及部门ID获取人员列表
      this.departmentID = this.searchID(this.departmentData, val);
      console.log(this.departmentID);
      this.UserListByDept();
    }
  }
};
</script>
<style lang='stylus' scoped rel='stylesheet/stylus'>
@import './user_assets/base.css';

.container-addFlow {
  width: 100%;
  height: 100%;
  background: rgba(246, 248, 250, 1);

  .projectBnt {
    height: 1.18rem;
    line-height: 1.18rem;
    font-size: 26px;
    font-family: SourceHanSansCN-Regular;
    font-weight: 400;
    color: rgba(90, 146, 255, 1);
  }

  .btn-warp {
    padding: 0.4rem 0.32rem;
    background: rgba(246, 248, 250, 1);
    border-bottom: 0.03rem solid #E5E5E5;
  }

  .content {
    width: 100%;
    height: calc(100% - 88px)
    overflow-y: auto;
    .flow-content {
      padding: 0 0.32rem;

      .flow-content-item {
        margin-top: 0.4rem;

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
          box-shadow: 0px 1px 4px 0px rgba(220, 226, 237, 1);
          border-radius: 0.03;
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
          margin-left: 0.56rem;

          img {
            width: 0.46rem;
            height: 0.46rem;
            display: block;
          }
        }
      }
    }

    .addFlow-type-arrow img {
      width: 0.24rem;
      height: 0.43;
      display: block;
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
  .addFlow-type-l {
    width: 100%;
  }
  .addFlow-type-l-v {
    
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .addFlow-type-l-name {
    width: 170px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
}
</style>

<!-- 侧边栏 用户 -->
<template>
  <div class="container-user">
    <div class="user-top flex-between">
      <div class="user-top-userinfo flex">
        <div class="user-top-userinfo-l" @click="onMyself">
          <img src="./user_assets/imgs/user-portrait.png">
        </div>
        <div class="user-top-userinfo-r flex-column-center">
          <div class="user-top-userinfo-r-name">{{cName}}</div>
          <div class="user-top-userinfo-l-technical">{{position}}</div>
        </div>
      </div>
      <div class="user-top-set" @click="onSetting">
        <img src="./user_assets/imgs/user-setting.png">
      </div>
    </div>
    <div class="user-theme">
      <div class="user-theme-title flex">
        <div class="user-theme-icon">
          <img class="icon-a" src="./user_assets/imgs/user-construction.png">
        </div>
        <div class="user-theme-name">建设单位</div>
      </div>
      <div class="user-theme-item" v-for="item in building"  v-bind:key="item.ID" @click.stop="onRoadWork(item,building,'建设单位')">
        {{item.Name}}
      </div>
    </div>
    <div class="line">
      <div class="i"></div>
    </div>
    <div class="user-theme">
      <div class="user-theme-title flex">
        <div class="user-theme-icon">
          <img class="icon-b" src="./user_assets/imgs/user-design.png">
        </div>
        <div class="user-theme-name">设计单位</div>
      </div>
      <div class="user-theme-item" v-for="item in drawbuilding"  v-bind:key="item.ID" @click.stop="onRoadWork(item,drawbuilding,'设计单位')">
        {{item.Name}}
      </div>
    </div>
    <div class="line">
      <div class="i"></div>
    </div>
    <div class="user-theme">
      <div class="user-theme-title flex">
        <div class="user-theme-icon">
          <img class="icon-c" src="./user_assets/imgs/user-road.png">
        </div>
        <div class="user-theme-name">施工单位</div>
      </div>
      <div class="user-theme-item" v-for="item in doingCom"  v-bind:key="item.ID" @click.stop="onRoadWork(item,doingCom,'施工单位')">
        {{item.Name}}
      </div>
    </div>
    <div class="line">
      <div class="i"></div>
    </div>
    <div class="user-theme">
      <div class="user-theme-title flex">
        <div class="user-theme-icon">
          <img class="icon-e" src="./user_assets/imgs/user-scale.png">
        </div>
        <div class="user-theme-name">建设规模</div>
      </div>
      <div class="user-theme-item">共{{BuildMon}}栋，总建筑面积{{TotalArea}}m²</div>
    </div>
    <div class="line">
      <div class="i"></div>
    </div>
    <div class="user-theme">
      <div class="user-theme-title flex">
        <div class="user-theme-icon">
          <img class="icon-d" src="./user_assets/imgs/user-model.png">
        </div>
        <div class="user-theme-name">模型浏览</div>
      </div>
      <div class="user-theme-item" v-for="item in detailList"  v-bind:key="item.BuildingID" @click.stop="onBrowse(item.ID,item.BuildingID)">
        {{item.BuildName}}
      </div>
     
    </div>
  </div>
</template>

<script type='textecmascript-6'>
import {GetOrgList,GetEngingConfigByTypeId} from '@/api/api.js'
export default {
  data() {
    return {
      cName:'',//登录人的姓名
      position:'',//用户角色
      building:[],//建设单位
      drawbuilding:[],//设计单位
      doingCom:[],//施工单位
      BuildMon:'',//楼栋
      TotalArea:'',//面积
      detailList:[],//模型浏览

    };
  },
  created(){
    var text=localStorage.getItem('loginUserInfo');
    var post=JSON.parse(text);
    console.log('post',post);
    this.cName=post.loginUserInfo.cName;   //用户名字
    this.position=post.loginUserRoles[0].cRoleName; //用户角色
    this.getOrg(localStorage.getItem('projectid'));   //公司
    this.GetEnging(localStorage.getItem('projectid')); //获取信息配置，共多少栋，面积
    // this.
  },
  methods: {
    // 个人信息
    onMyself() {
      this.$router.push({ path: "/Modify" });
    },
    // 设置
    onSetting() {
      this.$router.push({ path: "/set" });
    },
    // 浏览模型
    onBrowse(id,BuildingID) {
      this.$router.push({ path: "/browseM",query:{id:id,BuildingID:BuildingID} });
    },
    // 施工单位
    onRoadWork(item,arr,text) {
      this.$router.push({ path: "/addressList" ,query:{item:item,arr:arr,text:text}});
    },
    //根据项目id获取公司列表
    getOrg(projectID){
      this.Request(GetOrgList({projectId:projectID})).then(res=>{
        if(res.StatusCode=='200'){
          this.building=[];
          this.doingCom=[];
          this.drawbuilding=[];
          for(var i=0;i<res.Detiel.length;i++){
            if(res.Detiel[i].OrgTypeID=='1'){
              this.building.push(res.Detiel[i])
            }else if(res.Detiel[i].OrgTypeID=='3'){
              this.drawbuilding.push(res.Detiel[i])
            }else if(res.Detiel[i].OrgTypeID=='5'){
              this.doingCom.push(res.Detiel[i])
            }
          }
        }else{
          this.$dialog.alert({message:res.Message});
        }
      });
    },
    //获取信息配置
    GetEnging(id){
      this.Request(GetEngingConfigByTypeId({ProjectID:id})).then(res=>{
        if(res.StatusCode=='200'){
          if(res.Detiel.length){
            this.BuildMon = res.Detiel[0].BuildMon; //建筑
            this.TotalArea = res.Detiel[0].TotalArea; //建筑面积
            this.detailList = res.Detiel[0].StoriedBuildlList; //浏览模型
          }
        }else{
          this.$dialog.alert({message:res.Message});
        }
      })

    },
  }
};
</script>
<style lang='stylus' scoped rel='stylesheet/stylus'>
@import './user_assets/base.css';

.container-user {
  width: 100%;
  height: 100%;
  background: rgba(34, 40, 50, 1);
  overflow-y:scroll;
  white-space: nowrap;

  .line {
    padding: 0 0.32rem;
    margin-bottom: 0.37rem;
  }

  .line .i {
    background-color: #3D4C64;
    height: 0.03rem;
  }

  .icon-a {
    width: 0.4rem;
    height: 0.35rem;
  }

  .icon-b {
    width: 0.3rem;
    height: 0.32rem;
  }

  .icon-c {
    width: 0.4rem;
    height: 0.35rem;
  }

  .icon-d {
    width: 0.35rem;
    height: 0.35rem;
  }

  .icon-e {
    width: 0.37rem;
    height: 0.37rem;
  }

  .user-top {
    padding: 0.532rem 0.4rem 0.67rem 0.32rem;

    .user-top-userinfo {
      font-family: SourceHanSansCN-Regular;
      font-weight: 400;

      .user-top-userinfo-l img {
        width: 1.6rem;
        height: 1.6rem;
        border-radius: 50%;
        display: block;
      }

      .user-top-userinfo-r {
        margin-left: 0.27rem;

        .user-top-userinfo-r-name {
          font-size: 32px;
          color: rgba(255, 255, 255, 1);
          margin-bottom: 0.32rem;
        }

        .user-top-userinfo-l-technical {
          font-size: 28px;
          color: rgba(217, 217, 217, 1);
        }
      }
    }

    .user-top-set img {
      width: 0.532rem;
      height: 0.532rem;
      display: block;
    }
  }

  .user-theme {
    font-size: 30px;
    font-family: SourceHanSansCN-Medium;

    .user-theme-item {
      margin-left: 0.88rem;
      color: rgba(221, 221, 221, 1);
      margin-bottom: 0.3rem;
    }

    .user-theme-title {
      margin-left: 0.32rem;
      font-weight: 500;
      color: rgba(255, 255, 255, 1);
      margin-bottom: 0.37rem;

      .user-theme-icon {
        width: 0.532rem;

        img {
          display: block;
        }
      }
    }
  }
}
</style>

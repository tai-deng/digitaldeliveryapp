<!-- 任务tab组件 -->
<template>
 <div class='container-issue'>
   <!-- 首页的样式 -->
   <div class="index-message" v-if="tabStyle==1">
    <div class='message'>
      <van-tabs  v-model="active" @change="activeChange" swipeable>
        <van-tab title="我的发布" >
          <el-table @row-click="rowClick"  :header-cell-style="{'background-color':bgColor,'color':fontColor}" :data="lists" style="width: 100%" v-loading="loadingTable">
            <el-table-column  type="index" label="序号" width="50"></el-table-column>
            <el-table-column prop="NAME" label="名称"></el-table-column>
            <el-table-column prop="TypeName" label="类型名称"></el-table-column>
            <el-table-column prop="dCreateTime" label="创建时间">
              <template slot-scope="scope">
                {{scope.row.dCreateTime.split('T')[0]}}
              </template>
            </el-table-column>
          </el-table>
        </van-tab>
        <van-tab title="待接收">
          <el-table @row-click="rowClick"  :data="lists"  :header-cell-style="{'background-color':bgColor,'color':fontColor}" style="width: 100%" v-loading="loadingTable">
            <el-table-column  type="index" label="序号" width="50"></el-table-column>
            <el-table-column prop="NAME" label="名称"></el-table-column>
            <el-table-column prop="TypeName" label="类型名称"></el-table-column>
            <el-table-column prop="dCreateTime" label="创建时间">
              <template slot-scope="scope">
                {{scope.row.dCreateTime.split('T')[0]}}
              </template>
            </el-table-column>
          </el-table>
        </van-tab>
        <van-tab title="进行中">
          <el-table @row-click="rowClick"  :data="lists" :header-cell-style="{'background-color':bgColor,'color':fontColor}"  style="width: 100%" v-loading="loadingTable">
            <el-table-column  type="index" label="序号" width="50"></el-table-column>
            <el-table-column prop="NAME" label="名称"></el-table-column>
            <el-table-column prop="TypeName" label="类型名称"></el-table-column>
            <el-table-column prop="dCreateTime" label="创建时间">
              <template slot-scope="scope">
                {{scope.row.dCreateTime.split('T')[0]}}
              </template>
            </el-table-column>
          </el-table>
        </van-tab>
        <van-tab title="已完成">
          <el-table @row-click="rowClick"  :data="lists"  :header-cell-style="{'background-color':bgColor,'color':fontColor}" style="width: 100%" v-loading="loadingTable">
            <el-table-column  type="index" label="序号" width="50"></el-table-column>
            <el-table-column prop="NAME" label="名称"></el-table-column>
            <el-table-column prop="TypeName" label="类型名称"></el-table-column>
            <el-table-column prop="dCreateTime" label="创建时间">
              <template slot-scope="scope">
                {{scope.row.dCreateTime.split('T')[0]}}
              </template>
            </el-table-column>
          </el-table>
        </van-tab>
      </van-tabs>
              
    </div>
   </div>
   <!-- 任务中心的样式 -->
   <div class="my-issue-message" v-if="tabStyle==2">
     <div class='message'>
      <van-tabs  v-model="active" @change="activeChange" swipeable>
        <van-tab title="我的发布" >
          <el-table @row-click="rowClick"  :header-cell-style="{'background-color':bgColor,'color':fontColor}" :data="lists" style="width: 100%" v-loading="loadingTable">
            <el-table-column  type="index" label="序号" width="50"></el-table-column>
            <el-table-column prop="NAME" label="名称"></el-table-column>
            <el-table-column prop="TypeName" label="类型名称"></el-table-column>
            <el-table-column prop="dCreateTime" label="创建时间">
              <template slot-scope="scope">
                {{scope.row.dCreateTime.split('T')[0]}}
              </template>
            </el-table-column>
          </el-table>
        </van-tab>
        <van-tab title="待接收">
          <el-table @row-click="rowClick" :data="lists"  :header-cell-style="{'background-color':bgColor,'color':fontColor}" style="width: 100%" v-loading="loadingTable">
            <el-table-column  type="index" label="序号" width="50"></el-table-column>
            <el-table-column prop="NAME" label="名称"></el-table-column>
            <el-table-column prop="TypeName" label="类型名称"></el-table-column>
            <el-table-column prop="dCreateTime" label="创建时间">
              <template slot-scope="scope">
                {{scope.row.dCreateTime.split('T')[0]}}
              </template>
            </el-table-column>
          </el-table>
        </van-tab>
        <van-tab title="进行中">
          <el-table @row-click="rowClick"  :data="lists" :header-cell-style="{'background-color':bgColor,'color':fontColor}"  style="width: 100%" v-loading="loadingTable">
            <el-table-column  type="index" label="序号" width="50"></el-table-column>
            <el-table-column prop="NAME" label="名称"></el-table-column>
            <el-table-column prop="TypeName" label="类型名称"></el-table-column>
            <el-table-column prop="dCreateTime" label="创建时间">
              <template slot-scope="scope">
                {{scope.row.dCreateTime.split('T')[0]}}
              </template>
            </el-table-column>
          </el-table>
        </van-tab>
        <van-tab title="已完成">
          <el-table @row-click="rowClick"  :data="lists"  :header-cell-style="{'background-color':bgColor,'color':fontColor}" style="width: 100%" v-loading="loadingTable">
            <el-table-column  type="index" label="序号" width="50"></el-table-column>
            <el-table-column prop="NAME" label="名称"></el-table-column>
            <el-table-column prop="TypeName" label="类型名称"></el-table-column>
            <el-table-column prop="dCreateTime" label="创建时间">
              <template slot-scope="scope">
                {{scope.row.dCreateTime.split('T')[0]}}
              </template>
            </el-table-column>
          </el-table>
        </van-tab>
      </van-tabs>
              
    </div>
   </div>
  
 </div>
</template>

<script type='textecmascript-6'>
//混入
import interfaces from "../modules/interfaces.js";
export default {
  mixins: [interfaces],
  props:['bgColor','fontColor','tabStyle'],
 data() {
   return {
     active: 0,
     qwParam: {//首页待接收，进行中，已完成 接口参数
        Type: 1,//类型 查询类型 1.待接收 2.进行中 3.已完成 4.我的发布
        UserId: Number(localStorage.getItem('userId')),
        ProjectId: localStorage.getItem('projectid'),
        page: 1,
        rows: 4
      },
      lists:[],
      loadingTable:false,//加载中
   }
 },
 created(){
   this.lists = this.tableData
   this.activeChange(0)//我的发布
 },
 methods:{
   /**
    * tab切换事件
    */
   activeChange(active){
      this.loadingTable = true
      console.log('切换到',active)
        this.qwParam.Type = active
        if(active==0){ //如果序号为0，则对应4 为我的发布
          this.qwParam.Type = 4
        }
        this.queryWorkList(this.qwParam).then(res=>{
          console.log(res)
          this.lists = res.Detiel
          this.loadingTable = false
        })
      
    },
    /**
     * 点击任务跳转详情
     * WorkType 类型 1.变更 2.采购 3.沟通 4.风险
     */
    rowClick(e){
      console.log(e)
      switch(e.WorkType){
        case 1:
        console.log('跳转到变更')
        this.$router.push({path:'/projectChange',query:{id:e.WorkType}})
        break
        case 2:
        console.log('跳转到采购')
        this.$router.push({path:'/purchaseDetails',query:{id:e.WorkType}})
        break
        case 3:
        console.log('跳转到沟通')
        this.$router.push({path:'/talking',query:{communicateId:e.WorkType}})
        break
        case 4:
        console.log('跳转到风险')
          this.$router.push({path:'/riskDetails',query:{riskID:e.WorkType}})
        break
      }
    }
 }

}

</script>
<style lang='stylus' scoped rel='stylesheet/stylus'>
.container-issue
  width 100%
  height 100%
</style>
<style>
/* 首页的样式 */
.index-message .message .van-tabs--line .van-tabs__wrap {
  height: 58px;
}
.index-message .message .van-tab span {
  font-size: 30px;
  font-family: SourceHanSansCN-Medium;
  font-weight: 500;
  color: rgba(38, 38, 38, 1);
  line-height: 58px;
}
.index-message .message .van-tabs__line {
  background-color: #5a92ff;
  height: 4px;
}
.index-message .message .van-tabs .van-tab__pane {
  /* padding: 15px 0; */
}
.index-message .message .van-tabs__content{
  /* min-height: 590px; */
  margin-bottom: 20px;
  background-color: white
}
.index-message .message .el-table th > .cell {
  font-size: 30px;
  font-family: SourceHanSansCN-Normal;
  font-weight: 400;
  line-height: 46px;
}
.index-message .message .el-table .cell {
  text-align: center;
  font-size: 30px;
  font-family: SourceHanSansCN-Normal;
  font-weight: 400;
  /* color: rgba(38, 38, 38, 1); */
  line-height: 46px;
  padding: 20px 0;
    white-space: nowrap;
}
/* .message .el-table th {
  background: rgba(238, 238, 238, 1);
} */
.container-issue .van-actionsheet__cancel,
.van-actionsheet__item {
  height: 88px;
  line-height: 88px;
  font-size: 32px;
  font-family: SourceHanSansCN-Medium;
  font-weight: 500;
  color: rgba(51, 51, 51, 1);
}
.container-issue .van-actionsheet__cancel {
  color: #666666;
}
.index-message .message .el-table{
  height: 100%
}
.index-message .message .el-table__header{
      margin-top: 10px;
}
</style>
<style>
/* 任务中心的样式 */
.my-issue-message .message .van-tabs--line .van-tabs__wrap {
  height: 88px;
}
/* .my-issue-message .message .van-tab span {
  font-size: 30px;
  font-family: SourceHanSansCN-Medium;
  font-weight: 500;
  color: rgba(38, 38, 38, 1);
  line-height: 58px;
} */
.my-issue-message .message .van-tabs__line {
  background-color: #5a92ff;
  height: 4px;
}
.my-issue-message .message .van-tabs__content{
  /* min-height: 590px; */
  margin-bottom: 20px;
  background-color: white
}
.my-issue-message .message .el-table th > .cell {
  font-size: 30px;
  font-family: SourceHanSansCN-Normal;
  font-weight: 400;
  line-height: 46px;
}
.my-issue-message .message .el-table .cell {
  text-align: center;
  font-size: 30px;
  font-family: SourceHanSansCN-Normal;
  font-weight: 400;
  /* color: rgba(38, 38, 38, 1); */
  line-height: 46px;
  padding: 20px 0;
    white-space: nowrap;
}
.my-issue-message .message .el-table{
  height: 100%
}
.my-issue-message .message .el-table__header{
      margin-top: 10px;
}
.my-issue-message .message .van-ellipsis{
font-size:28px;
font-family:PingFang-SC-Bold;
font-weight:bold;
color:#666666;
height:88px;
line-height: 88px;
background:rgba(255,255,255,1);
}
.my-issue-message .message .van-tabs--line{
  padding-top: 80px;
}
.el-table td, .el-table th.is-leaf{
  border-bottom: 2px solid #E5E5E5;
  padding-bottom: 10px
}
</style>

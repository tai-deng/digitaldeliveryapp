<template>
    <div class='ai_allTable'>
        <ul class='ai_table_title'>
<!--             <li style="width:12%;text-align:center;">
                <van-checkbox v-model="buildChecked" shape="square" @change="allBuildingChange()"></van-checkbox>
            </li> -->
            <li style="width:20%;text-align:center;">序号</li>
            <li style="width:60%;text-align:center;">资料名称</li>
            <li style="width:20%;text-align:center;">预览</li>
        </ul>
        <div class="ai_table_expand" @click="showBuildingClick()" >
            <!-- 点击时候，（已生成表格）显示与不显示的小图标  alredyBuilding1已生成的总数-->
            <van-icon v-if="showbuilding1" name="arrow-down"/>
            <van-icon v-if="!showbuilding1" name="arrow"/>
            已生成（{{alredyBuilding1}}）
        </div>
        <el-table v-if="showbuilding1" style="width:100%;font-size:28px;" ref="multipleTable" :show-header="false"
                :data="buildingDay" @selection-change="handleSelectionChange" >
            <el-table-column type="index" label="序号" width="60" align="center" :index="indexMethod"></el-table-column>
            <el-table-column prop="name" label="资料名称" align="center"></el-table-column>
            <el-table-column label="预览"  align="center" width="60" >
                <template slot-scope="scope">
                <img src="../../../assets/imgs/blue_eye.png"
                    @click="buildingClick(scope.$index, scope.row)" alt='图片' >
                </template>
            </el-table-column>
        </el-table>
        <div class="ai_table_expand" @click="shownoBuildingClick()">
            <!-- 点击时候，（已生成表格）显示与不显示的小图标  alredyBuilding1已生成的总数-->
            <van-icon v-if="shownobuilding1" name="arrow-down"/>
            <van-icon v-if="!shownobuilding1" name="arrow"/>
            未生成（{{noBuilding}}）
        </div>
        <el-table v-if="shownobuilding1" style="width:100%;font-size:28px;" ref="nomultipleTable" :show-header="false"
                :data="nobuildingDay" @selection-change="handleSelectionChange1">
            <el-table-column type="index" label="序号" width="60" align="center" :index="indexMethod"></el-table-column>
            <el-table-column prop="name" label="资料名称"  align="center"></el-table-column>
            <el-table-column label="预览"  align="center" width="60" >
                <template slot-scope="scope">
                <img src="../../../assets/imgs/blue_eye.png"
                    @click="nobuildingClick(scope.$index, scope.row)" alt='图片' >
                </template>
            </el-table-column>
                
                
        </el-table>
    </div>
</template>
<script>
import {GetReportFormList} from '@/api/api.js'

export default {
    props: {
        activeTableIndex: {
          type: Number,
        }
    },
  data() {
    return {
        buildChecked:false,//全选中
        showbuilding1:true,//已生成上下展开的图标
        alredyBuilding1:'12',//已生成的总数量
        buildingDay:[      //已生成表格数据
            { id: 1, name: "施工日志2019/01/01" },
            { id: 3, name: "施工日志2019/01/01" },
            { id: 4, name: "施工日志2019/01/01" },
            { id: 5, name: "施工日志2019/01/01" },
            { id: 2, name: "施工日志2019/01/01" }
        ],
        multipleSelection:[],//已生成表格--全选单选的集合
        noBuilding:'3',//已生成的总数量
        shownobuilding1:true,//未生成上下展开的图标
        nomultipleTable:[],//未生成表格--全选单选的集合
        nobuildingDay:[      //未生成表格数据
            { id: 1, name: "施工日志2019/01/01" },
            { id: 3, name: "施工日志2019/01/01" },
            { id: 4, name: "施工日志2019/01/01" },
            { id: 5, name: "施工日志2019/01/01" },
            { id: 2, name: "施工日志2019/01/01" }
        ],
        bigAllSelected:false,//大小表格是否已经全部选中
        smallAllSelected:false,
        ReportType:6, //table 类型
        pageIndex:1,
        pageSize:10,
    };
  },
  mounted(){
    this.GetReportFormList()
    console.log('父组件中的值',this.activeTableIndex)
  },
  methods:{
    GetReportFormList(){
        let params = {
            ProjectID:localStorage.getItem('projectid'),
            ReportType:this.ReportType,
            pageIndex: this.pageIndex,
            pageSize: this.pageSize,
        }
        this.Request(GetReportFormList(params)).then(res=>{
          console.log(res)
          if(res.StatusCode=='200'){

          }else{
            this.$message({type:"error",message:res.Message,center:"true"});
          }
        })
    },
    //点击已生成的折叠栏
    showBuildingClick(){
        this.showbuilding1=!this.showbuilding1;
    },
    //施工日志--已生成-查看
    buildingClick(index,row){
      console.log(index);
      console.log(row);
    },
    indexMethod(index){
        return index+1;
    },
    //已生成的表格的select的事件集合
    handleSelectionChange(val) {
        this.multipleSelection = val;
        if(this.multipleSelection.length == this.buildingDay.length){
            //如果相等的话，那么就是--已生成的表格全选中(如果大小表格全选中的话，那么buildChecked选中)
            this.bigAllSelected=true;
            this.smallAllSelected==true?this.buildChecked=true:this.buildChecked=false
        }else{
            this.bigAllSelected=false;
            this.buildChecked=false;
        }
    },
    //点击-未生成-表格的折叠栏
    shownoBuildingClick:function(){
      console.log('点击了-未生成上的div');
      this.shownobuilding1=!this.shownobuilding1;
    },
    //施工日志-未生成--查看
    nobuildingClick(index,row){
      console.log(index);
      console.log(row);
    },
    //未生成的表格的select的事件集合
    handleSelectionChange1(val){
        this.nomultipleTable = val;
        if(this.nomultipleTable.length == this.nobuildingDay.length){
            //如果相等的话，那么就是--未生成的表格全选中
            this.smallAllSelected=true
            this.bigAllSelected==true?this.buildChecked=true:this.buildChecked=false
        }else{
            this.smallAllSelected=false;
            this.buildChecked=false;
        }
    },
    //点击施工日志的全选
    // allBuildingChange(){
    //   if(this.buildChecked==true){
    //       this.$refs.multipleTable.clearSelection();
    //       this.$refs.nomultipleTable.clearSelection();
    //   }else{
    //       this.$refs.multipleTable.toggleAllSelection();
    //       this.$refs.nomultipleTable.toggleAllSelection();
    //   }
    // },
  
    

  },

};
</script>
<style lang="stylus" scoped>
.ai_allTable
    font-size 28px
    .ai_table_title li 
        display inline-block
        height 88px
        line-height 88px
        font-size:30px;
        font-family PingFang-SC-Bold
        font-weight bold
        color rgba(255,255,255,1)
        background-color #5A92FF
        float left
        border 0
        list-style none
    .ai_table_title
        width 100%
        height 88px
    .ai_table_expand
        width 100%
        
        height 44px
        line-height 44px
        background rgba(232,240,255,1)
        padding-left 20px




</style>
<style>
/* 表格样式更改 */
.ai_allTable .el-table .cell{
    height: 60px;
    line-height: 60px;
    font-size:24px
}
</style>




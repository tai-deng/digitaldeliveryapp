<template>
    <div class='purchaseTable'>
        <van-nav-bar title="物资采购" @click-left="goBack" fixed :border="true" :z-index="100" >
            <span class="el-icon-arrow-left fontsize" slot="left"></span>
        </van-nav-bar>
        <div class='purchaseTable_list' style='margin-top:44px;'>
            采购批次：{{purchaseNumber}}
        </div>
        <div class='purchaseTable_list'>
            发起人：{{purchaseMan}}
        </div>
        <div class='purchaseTable_list'>
            申请时间：{{purchaseTime}}
        </div>
        <div class='purchaseTable_list'>
            需要时间：{{getTime}}
        </div>
        <div class="purchaseTable_margin">
            <el-table style="width:100%;font-size:28px;box-sizing:border-box;"  
                  :data="buyThingTable" :header-cell-style="{'background-color':'#5A92FF','color':'#ffffff'}">
                <el-table-column prop="name" label="物资名称"  align="center"></el-table-column>
                <el-table-column prop="allnumber"  label="施工预算量" align="center" > </el-table-column>
                <el-table-column prop="already"  label="已采购" align="center" > </el-table-column>
                <el-table-column  label="本次采购" prop="number"  align="center"> 
                </el-table-column>
            </el-table>
        </div>
        <div class='purchaseTable_all_list'>
            <div>工作流程</div>
            <ul class='purchaseTable_list_ul'>
                <li v-for="(item,index) in purchaseTable_list" v-bind:key='index'>
                        <div>
                            <span class='purchaseTable_list_number'>{{item.number}}</span>
                        </div>
                        <div class="purchaseList_div">
                            <span class="purchaseList_span purchaseList_span_border">{{item.name}}</span>
                            <span class="purchaseList_span purchaseList_span_border">{{item.company}}</span>
                            <span class="purchaseList_span">{{item.class}}</span>
                        </div>
                  
                </li>
                
            </ul>
        </div>
        <div class='purchaseTable_btn'>
                <button class='purchaseTable_button' @click='searchAllTable()'>确认提交</button>
        </div>
        
    </div>
</template>
<script  type='textecmascript-6'>
export default {
    data(){
        return{
            purchaseNumber:'20190302212345',
            purchaseMan:'李小白',
            purchaseTime:'20190302',
            getTime:'20190307',
            buyThingTable:[
                {name:'c20混凝土',allnumber:'10000.00m³',already:'5000.00m³',number:'8850m³'},
                {name:'c20混凝土',allnumber:'10000.00m³',already:'5000.00m³',number:'8850m³'},
                {name:'c20混凝土',allnumber:'10000.00m³',already:'5000.00m³',number:'8850m³'},
                {name:'c20混凝土',allnumber:'10000.00m³',already:'5000.00m³',number:'8850m³'},
                {name:'c20混凝土',allnumber:'10000.00m³',already:'5000.00m³',number:'8850m³'}
            ],
            purchaseTable_list:[{number:'1',name:'李小白',company:'中国交建',class:'设计部'},{number:'2',name:'李太白',company:'中国交建',class:'设计部'}],
        }
    },
    methods:{
        goBack(){
            this.$router.push({ path: "../purchase" });
        },
    }
}
</script>
<style>
/* 顶部表头 */
.purchaseTable .van-nav-bar .van-nav-bar__title {
  font-size: 36px;
}
.purchaseTable  .van-nav-bar {
    height: 88px;
    line-height: 88px;
 }


.purchaseTable{
    width: 100%;
    height: inherit;
    padding:20px;
    box-sizing:border-box;
    background-color: #F6F8FA;
}
 /* 表格样式更改 */
  .purchaseTable .el-table .cell{
    height: 60px;
    line-height: 60px;
    font-size:24px
  }
  .purchaseTable  .el-table .table_input{
    border:2px solid #5893FF;
  }
  .purchaseTable_btn{
      padding-top:80px;
      text-align: center;
      background-color: #F6F8FA;
      margin-top :20px;
      padding-bottom :20px;
  }
  .purchaseTable_button{
    background: rgba(100,155,255,1);
    box-shadow: 0px 3px 7px 0px rgba(91,140,237,0.13);
    border-radius: 8px;
    font-size: 28px;
    font-family: PingFang-SC-Bold;
    font-weight :bold;
    color :rgba(255,255,255,1);
    padding :17px  53px;
    border: 0;
  }
  .purchaseTable_list{
      width: 100%;
      height: 88px;
      line-height: 88px;
      font-size: 30px;
      border:2px solid #F5F5F5;
      color:#686868;
      background-color: #ffffff;
      padding-left: 20px;
      box-sizing: border-box;
  }
  .purchaseTable_all_list{
      width: 100%;
      height:200px;
      font-size: 30px;
      background-color: #F6F8FA;
  }
 
  .purchaseTable_all_list>div:first-child{
      width: 100%;
      height: 50px;
      line-height: 50px;
      font-size: 24px;
  }
  .purchaseTable_list_ul li{
       width: 100%;
       height: 88px;
       line-height: 88px;
       font-size: 30px;
       display: block;
  }
  .purchaseTable_margin{
      margin-top: 20px;
  }

  .purchaseTable_list_number{
      display: block;
      width: 40px;
      height:40px;
      border-radius:50%;
      background-color: #6297FE;
      color:#ffffff;
      text-align: center;
      line-height: 40px;
      float: left;
      position:relative;
      top:30px;
      margin-right: 30px
     
  }
   .purchaseTable_list_ul li>div:first-child{
        width: 30%;
   }
  .purchaseList_div{
      display: block;
      float:left;
      border-radius: 8px;
      background-color:#ffffff;
      width: 70%;
      padding:10px 0;
      font-size: 20px;
  }
  .purchaseList_span{
      display: block;
      width: 33%;
      float:left;
      text-align: center;
     
      
  }
  .purchaseList_span_border{
      border-right:2px dashed #D2D2D2;
  }
</style>



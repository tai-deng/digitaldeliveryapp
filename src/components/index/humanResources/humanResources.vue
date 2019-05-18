<!-- human resources 人力资源 -->
<template>
    <div class='human_resources'>
        <div class='wrapper' id="hum_wrapper">
            <!-- 头部 -->
            <van-nav-bar
                    title="人力资源"
                    right-text="按钮"
                    left-arrow
                    @click-left="onClickLeft"
                    @click-right="onClickRight"
            >
                <div class="nav_right" slot="right"><img src="../../../assets/imgs/screen.png" alt=""/></div>
            </van-nav-bar>
            <!-- 人力资源列表 -->
            <div class='table-box'>
                <div class="table-title">
                    <div>序号</div>
                    <div>所属公司</div>
                    <div>班组</div>
                    <div>手机号</div>
                </div>
                <div class="table-body" v-for='(n, i) in purchase_tableData' :key='i' @click='humanDetails(n)'>
                    <div :class='{tag: n.HasSpecialPermit}'>{{i + 1}}</div>
                    <div>{{n.OrgName}}</div>
                    <div>{{n.GroupName}}</div>
                    <div>{{n.Mobile}}</div>
                </div>
            </div>

            <!-- 筛选内容 -->
            <div class="select_layer" v-show="sel_show">
                <ul>
                    <li @click='select(0)'>全部（{{total}}）</li>
                    <li v-for='(n, i) in selectList' :key='i' @click='select(n.GroupId)'>
                        {{n.GroupName}}（{{n.GroupPersonCount}}）
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    import {GetGroupListWithPersonCount, GetMemberList} from '@/api/api'

    export default {
        data() {
            return {
                sel_show: false,
                active: 0,
                activeNames: ['0'],
                // 人力物资列表数据
                purchase_tableData: [],
                selectList: [],
                total: 0
            }
        },
        created() {
            this.init()
        },
        methods: {
            async init() {
                let res = await this.Request(GetGroupListWithPersonCount({
                    projectId: localStorage.getItem('projectid'),
                    isBlackList: false,
                    keyword: ''
                }))
                if (res.StatusCode === 200) {
                    this.selectList = res.Detiel
                    this.total = res.Message - 0
                    this.select(0)
                } else {
                    this.$message({
                        type: "error",
                        message: res.Message,
                        center: "true"
                    });
                }
            },
            // 返回按钮
            onClickLeft() {
                this.$router.go(-1)
            },
            // 筛选按钮
            onClickRight() {
                this.sel_show = !this.sel_show;
            },
            async select(n) {
                this.sel_show = false
                let res = await this.Request(GetMemberList({
                    projectId: localStorage.getItem('projectid'),
                    groupId: n,
                    isBlackList: false,
                    keyword: '',
                    pageIndex: 1,
                    pageSize: 999
                }))
                if (res.StatusCode === 200) {
                    this.purchase_tableData = res.Detiel
                } else {
                    this.$message({
                        type: "error",
                        message: res.Message,
                        center: "true"
                    });
                }
            },
            humanDetails(n) {
                this.$router.push({
                    path: '/humanDetails',
                    query: {
                        id: n
                    }
                })
            }
        }

    }

</script>
<style lang='stylus' scoped rel='stylesheet/stylus'>
    .human_resources
        width 100%
        height 100%
</style>
<style lang="stylus" rel='stylesheet/stylus'>
    @import '../../../assets/stylus/variable'
    #hum_wrapper {
        //头部样式
        .van-nav-bar {
            width: 100%;
            height: 128px;
            border-bottom: 1px solid #E5E5E5;

            .van-nav-bar__title,
            .van-nav-bar__left,
            .van-nav-bar__right {
                color: #000;
                height: 87px;
                padding-top: 41px;
                line-height: 87px;
                font-size $font-size-title;
                z-index 10000;
            }
            .van-icon-arrow-left {
                color: #000;
                font-size $font-size-title;
            }
            .van-nav-bar__text {
                color: #000;
                font-size $font-size-title;
            }
            .nav_right {
                img {
                    width: 41px;
                    height 35px;

                }
            }
        }
        // 人力资源列表样式
        .table-box {
            width 100%
            .table-title, .table-body {
                width 100%
                height 88px
                background #5A92FF
                color white
                font-size 30px
                display flex
                align-items center
                > div {
                    text-align center
                    line-height 1.3
                    padding 0 5px
                }
                > div:nth-child(1) {
                    width 80px
                }
                > div:nth-child(2) {
                    flex 1
                }
                > div:nth-child(3) {
                    width 180px
                }
                > div:nth-child(4) {
                    width 180px
                }
            }
            .table-body {
                background white
                color #333333
                font-size 28px
                position relative
            }
            .table-body::after {
                content: ' ';
                position: absolute;
                pointer-events: none;
                box-sizing: border-box;
                left: 0;
                right: 0;
                bottom: 0;
                -webkit-transform: scaleY(0.5);
                transform: scaleY(0.5);
                border-bottom: 2px solid #ebedf0;
            }
            .tag {
                width 100%
                height 100%
                display flex
                align-items center
                justify-content center
                position relative
            }
            .tag:after {
                position absolute
                top 0
                left 0
                content: '';
                width: 60px
                height: 60px;
                color: #fff;
                background url('../../../assets/imgs/table_list.png') center center no-repeat;
            }
        }

        // 筛选样式
        .select_layer {
            position: fixed;
            top: 126px;
            right: 24px;
            width 352px;
            box-sizing: border-box;
            background: rgba(34, 40, 50, 1)
            border-radius: 8px
            padding 10px 20px;
            z-index: 999
            ul {
                li {
                    display flex
                    align-items center
                    justify-content flex-start
                    padding-left 20px
                    height 80px
                    color white
                    font-size 30px
                    border-bottom 1px solid rgba(115, 117, 119, 1);
                }
                li:last-child {
                    border-bottom 0
                }
            }
            .btn {
                width: 100%
                height 88px;
                padding: 19px 0;
                box-sizing border-box;
                button {
                    width: 49%;
                    height 50px;
                    line-height 50px;
                    background-color #222934;
                    color: #fff;
                    font-size: 30px;
                    text-align: center;
                    border: none;
                }
                .line {
                    display inline-block;
                    width: 0px;
                    height 50px
                    border-left: 2px dashed #fff;
                    vertical-align top;
                }
            }

        }
        .select_layer:after {
            position: absolute;
            top: -0.379rem;
            right: 0.186667rem;
            content: '';
            width: 0px;
            height 0px;

            border: 15px solid transparent;
            border-bottom: 15px solid $color-bgc-2;
            z-index: 9999
        }
    }
</style>

<!-- 智慧工地 -->
<template>
    <div class='container-wisdom-site'>
        <div class='content-box'>
            <div class='top'>
                <img src="./imgs/icon1.png" width=20>
                <p>核对班组人员情况</p>
            </div>
            <div class='clock-box'>
                <Clock :type='1' @addClock='addClock'/>
            </div>
        </div>
        <div class="team-box">
            <van-collapse v-model="activeName" accordion>
                <van-collapse-item :title="n.GroupName" :name="i"
                                   v-for='(n,i) in selectList' :key='i'>

                    <div class='member-box'>
                        <ul>
                            <li v-for='(k,index) in n.userList' :key='index'>
                                <div class='img-box'>
                                    <img :src="k.Photo">
                                </div>
                                <div class='info-box'>
                                    <p>{{k.UserName}}</p>
                                    <p>{{k.Mobile}}</p>
                                </div>
                                <div class='select-box' @click='actionsheetShow(i,index)'>
                                    <span :class='filterState(k._state)'>
                                        {{k._state}}
                                    </span>
                                    <i class='sx-arrow-down'/>
                                </div>
                            </li>
                        </ul>
                    </div>
                </van-collapse-item>
            </van-collapse>
        </div>
        <div>
            <van-actionsheet
                    v-model="show"
                    :actions="actions"
                    cancel-text="取消"
                    @select="onSelect"
                    @cancel="onCancel"
            />
        </div>
    </div>
</template>

<script>
    import {GetGroupListWithPersonCount, GetMemberList, AddClock} from '@/api/api'
    import Clock from './components/clock'
    export default {
        data() {
            return {
                activeName: '',
                selectList: [],
                userList: [],
                show: false,
                actions: [
                    {
                        name: '选择人员考勤状态'
                    },
                    {
                        name: '正常',
                    },
                    {
                        name: '迟到',
                    },
                    {
                        name: '请假',
                    },
                    {
                        name: '旷工',
                    }
                ],
                index:{
                    a: 0,
                    b: 0
                },
                count: 0
            }
        },
        components: {
            Clock
        },
        created() {
            this.init()
        },
        mounted() {
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
                    var timer = setInterval(() => {
                        if (this.count >= this.selectList.length) {
                            clearInterval(timer);
                            return;
                        }
                        this.select(this.selectList[this.count].GroupId, this.count)
                        this.count++
                    }, 300);
                } else {
                    this.$message({
                        type: "error",
                        message: res.Message,
                        center: "true"
                    });
                }
            },
            async select(n, i) {
                let res = await this.Request(GetMemberList({
                    projectId: localStorage.getItem('projectid'),
                    groupId: n,
                    isBlackList: false,
                    keyword: '',
                    pageIndex: 1,
                    pageSize: 999
                }))
                if (res.StatusCode === 200) {
                    res.Detiel.map(v => {
                        v._state = '正常'
                        v._SignType = 1
                    })
                    this.selectList[i]['userList'] = res.Detiel
                } else {
                    this.$message({
                        type: "error",
                        message: res.Message,
                        center: "true"
                    });
                }
            },
            async addClock() {
                let user = JSON.parse(localStorage.getItem('loginUserInfo')).loginUserInfo
                let listMemberClock = []
                this.selectList.forEach(v => {
                    v.userList.forEach(u => {
                        listMemberClock.push({
                            UserType: 2,
                            MemberID: u.ID,
                            ClockPerson: user.ID,
                            SignType: u._SignType,
                            ProjectID: localStorage.getItem('projectid')
                        })
                    })
                })
                let data = {
                    listMemberClock: listMemberClock,
                    ProjectID: localStorage.getItem('projectid')
                }
                let res = await this.Request(AddClock(data))
                if (res.StatusCode === 200) {
                    this.$message({
                        type: "success",
                        message: "签到成功",
                        center: "true"
                    });
                } else {
                    this.$message({
                        type: "error",
                        message: res.Message,
                        center: "true"
                    });
                }
            },
            onSelect(item) {
                if (item.name === '选择人员考勤状态') return
                let _SignType = 1
                switch (item.name) {
                    case "正常":
                        _SignType = 1
                        break
                    case "迟到":
                        _SignType = 2
                        break
                    case "请假":
                        _SignType = 3
                        break
                    case "旷工":
                        _SignType = 4
                        break
                }
                this.$set(this.selectList[this.index.a].userList[this.index.b], `_state`, item.name)
                this.$set(this.selectList[this.index.a].userList[this.index.b], `_SignType`, _SignType)
                this.show = false;
            },
            onCancel () {
                this.show = false;
            },
            actionsheetShow (i,index) {
                this.index.a = i
                this.index.b = index
                this.show = true
            },
            filterState (e){
                switch (e){
                    case "正常":
                        return 'a'
                    case "迟到":
                        return 'b'
                    case "请假":
                        return 'c'
                    case "旷工":
                        return 'd'
                }
            }
        }
    }

</script>
<style lang='stylus' scoped rel='stylesheet/stylus'>
    .container-wisdom-site
        height calc(100% - 200px)
        overflow auto
    .content-box
        height 360px
        background white
        box-shadow: 0px 4px 8px 0px rgba(180, 180, 180, 0.5);
        border-radius 20px
        margin 0 24px 22px
        text-align center
        position relative
        .top
            position absolute
            top 40px
            left 50%
            transform translateX(-50%)
            display flex
            align-items center
            > p
                font-size: 34px;
                color: rgba(78, 79, 81, 1)
                margin 20px 12px
        .clock-box
            position: absolute;
            left 50%
            top 140px
            transform translateX(-50%)
            width: 160px;
            height: 160px;
    .team-box
        .member-box
            ul
                li
                    height 150px
                    border-top 1px solid #E5E5E5
                    display flex
                    align-items center
                    .img-box
                        width 100px
                        height 100px
                        img
                            width 100%
                            height 100%
                            border-radius 50%
                    .info-box
                        flex 1
                        display flex
                        flex-direction column
                        margin-left 20px
                        p:nth-child(1)
                            font-size:32px;
                            color:rgba(51,51,51,1);
                        p:nth-child(2)
                            font-size:28px;
                            color:rgba(102,102,102,1);
                    .select-box
                        display flex
                        align-items center
                        span
                            font-size:32px;
                        .sx-arrow-down
                            border-style:solid dashed dashed dashed;
                            border-width:11px;
                            border-color:#9C9A9B transparent transparent transparent;
                            width:0;
                            height:0;
                            margin-top: 6px;
                            margin-left 16px
    .team-box /deep/
        padding 0 20px
        .van-collapse-item__content
            padding-top 0
        .van-cell:not(:last-child)::after
            border 0
        .van-collapse.van-hairline--top-bottom
            .van-collapse-item
                margin-bottom 20px
                box-shadow: 0px 4px 8px 0px rgba(180, 180, 180, 0.5);
                .van-collapse-item__title
                    border-radius 10px
                .van-collapse-item__title.van-collapse-item__title--expanded
                    border-radius 10px 10px 0 0
                .van-collapse-item__wrapper
                    border-radius 0 0 10px 10px
                .van-cell
                    color: #323233;
                    font-size: 28px;
                    line-height: 48px;
                    padding: 20px 30px;
                .van-cell__right-icon
                    margin-left: 10px;
                    color: #969799;
                .van-cell__left-icon, .van-cell__right-icon {
                    min-width: 1em;
                    height: 48px;
                    font-size: 32px;
                    line-height: 48px;
                }
    .van-popup--bottom
        width calc(100% - 32px)
        bottom 16px
        border-radius 26px
        background-color: transparent
    .van-actionsheet__item.van-hairline--top:not(:first-child)
        .van-actionsheet__name
            font-size:36px;
            color:rgba(142,142,147,1)
    .van-actionsheet__item.van-hairline--top:nth-child(5)
        border-radius 0 0 26px 26px
    .van-actionsheet__cancel
        margin-top 20px
        border-radius 26px 26px 0 0
        font-size:36px;
        color:rgba(0,122,255,1);
    .van-actionsheet__cancel::before
        height 0
    .van-actionsheet__item
        height: 100px;
    .van-actionsheet__item, .van-actionsheet__cancel
        font-size: 32px;
        line-height: 100px;
    .a
        color #04C087;
    .b
        color #FF7958
    .c
        color #FCC01B
    .d
        color #6A9FFE
</style>

<template>
    <div id="clock">
        <div v-if='clockStatus.Type === 1'>
            <div v-if='clockStatus.Status && !clockStatus.IsLate' class="btn-box normal">
                <div class="circle an"></div>
                <div class="circle an"></div>
                <div class='btn' @click='addClock'>
                    <span>{{time}}</span>
                    <span>点击打卡</span>
                </div>
            </div>
            <div v-if='!clockStatus.Status && clockStatus.IsLate' class="btn-box late">
                <div class="circle an"></div>
                <div class="circle an"></div>
                <div class='btn' @click='addClock'>
                    <span>迟到</span>
                </div>
            </div>
            <div v-if='!clockStatus.Status  && !clockStatus.IsLate' class="btn-box prohibit">
                <div class="circle"></div>
                <div class="circle"></div>
                <div class='btn'>
                    <span>{{time}}</span>
                </div>
            </div>
        </div>
        <div v-else>
            <div class="btn-box normal">
                <div class="circle an"></div>
                <div class="circle an"></div>
                <div class='btn' @click='addClock'>
                    <span>{{time}}</span>
                    <span>点击打卡</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {QueryCurrentSysTime, AddClock} from '@/api/api'
    import '@/utils/dateFormat'

    export default {
        name: 'clock',
        components: {},
        props: {
            clockStatus: {
                default: () => {
                    return {
                        IsLate: 0,
                        Status: 0,
                        Time: "08:00",
                        Type: 2
                    }
                },
                type: Object
            },
            type: {
                default: 0,
                type: Number
            }
        },
        beforeDestroy() {
            clearInterval(this.timeInterval)
        },
        data() {
            return {
                time: new Date().Format('hh:mm'),
                timeInterval: null
            }
        },
        created() {
            this.init()
        },
        mounted() {
        },
        methods: {
            async init() {
                let res = await this.Request(QueryCurrentSysTime())
                let time = new Date(res.Result.SysDateTime)
                this.timeInterval = setInterval(_ => {
                    this.time = new Date(time.setSeconds(time.getSeconds() + 1)).Format('hh:mm')
                }, 1000)
            },
            async addClock() {
                if (this.type === 1) {
                    this.$emit('addClock')
                    return
                }
                let user = JSON.parse(localStorage.getItem('loginUserInfo')).loginUserInfo
                let data = {
                    listMemberClock: [{
                        UserType: user.UserType - 0,
                        MemberID: user.ID,
                        ClockPerson: user.ID,
                        ProjectID: localStorage.getItem('projectid')
                    }],
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
            }
        }
    }
</script>

<style lang='stylus' scoped rel='stylesheet/stylus'>
    #clock
        width: 100%;
        height: 100%;
        >div
            width: 100%;
            height: 100%;
        .btn-box.normal
            .circle
                background: #FCBF1C
            .btn
                background: linear-gradient(40deg, #fcbf1c 0%, #ffcb6e 100%);
        .btn-box.late
            .circle
                background: #fe7858
            .btn
                background: linear-gradient(40deg, #ff7858 0%, #fe7858 100%);
        .btn-box.prohibit
            .circle
                background: #7e8592
            .circle:nth-child(1)
                opacity: .2;
                transform: scale(1.1);
            .circle:nth-child(2)
                opacity: .1;
                transform: scale(1.2);
            .btn
                background: #7e8592
            .btn:active
                opacity 1
        .btn-box
            width: 100%;
            height: 100%;
            text-align: center;
            .circle
                width: 100%;
                height: 100%;
                position: absolute;
                border-radius: 50%;
                opacity: 0;
            .an.circle:nth-child(1)
                animation: circle-opacity 2s infinite
            .an.circle:nth-child(2)
                animation: circle-opacity2 2s infinite
            .btn
                width: 100%;
                height: 100%;
                border-radius 50%
                color white
                display flex
                flex-direction column
                align-items center
                justify-content center
                position relative
                > span:nth-child(1)
                    font-size: 48px;
                    color: rgba(255, 255, 255, 1);
                    line-height: 68px;
                > span:nth-child(2)
                    font-size: 28px;
                    color: rgba(255, 255, 255, 1)
            .btn:active
                opacity .8

    @keyframes circle-opacity
        from
            opacity: .4;
            transform scale(1)
        to
            opacity: 0;
            transform scale(1.3)

    @keyframes circle-opacity2
        from
            opacity: .4;
            transform: scale(1);
        to
            opacity: 0;
            transform: scale(1.2);
</style>


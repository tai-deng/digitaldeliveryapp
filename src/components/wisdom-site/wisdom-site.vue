<!-- 智慧工地 -->
<template>
    <div class='container-wisdom-site'>
        <div class='content-box'>
            <div class='top'>
                <img src="./imgs/icon1.png" width=28>
                <p>{{clockStatus.Status || clockStatus.Type === 2?"当前已在打卡时间":"当前不在打卡时间"}}</p>
                <p>请在{{clockStatus.Time}}之前打卡</p>
            </div>
            <div class='clock-box'>
                <Clock :clockStatus='clockStatus'/>
            </div>
            <div v-if='(clockStatus.Status && !clockStatus.IsLate) || (!clockStatus.Status && clockStatus.IsLate)'
                 class='bottom-btn'
                @click='addClock(1)'>
                已请假点击此处打卡
            </div>
        </div>
    </div>
</template>

<script>
    import Clock from './components/clock'
    import { QueryMemberCurrentClockStatus, AddClock } from '@/api/api'
  export default {
    data() {
      return {
          userInfo: {
              MemberID:localStorage.getItem('userId'),
              ProjectID:localStorage.getItem('projectid')
          },
          clockStatus: {
              IsLate: 0,
              Status: 1,
              Time: "08:00",
              Type: 1
          }
      }
    },
    components: {
      Clock
    },
    created() {
        this.init()
    },
    mounted() {},
    methods: {
        async init () {
            let res = await this.Request(QueryMemberCurrentClockStatus(this.userInfo))
            if(res.StatusCode === 200){
                this.clockStatus = res.Result
            } else {
                this.$message({
                    type: "error",
                    message: res.Message,
                    center: "true"
                });
            }
        },
        async addClock(e) {
            let user = JSON.parse(localStorage.getItem('loginUserInfo')).loginUserInfo
            let data = {
                listMemberClock: [{
                    UserType: user.UserType - 0,
                    MemberID: user.ID,
                    ClockPerson: user.ID,
                    SignType: e ? 3 : '',
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
    .container-wisdom-site
        height 100%
        display flex
        flex-direction column
        .content-box
            flex 1
            background white
            box-shadow: 0px 4px 8px 0px rgba(180, 180, 180, 0.5);
            border-radius 20px
            margin 0 24px 230px
            text-align center
            position relative
            .top
                position absolute
                top 164px
                left 50%
                transform translateX(-50%)
                > p:nth-child(2)
                    font-size: 34px;
                    color: rgba(78, 79, 81, 1)
                    margin 20px 0
                > p:nth-child(3)
                    font-size: 28px;
                    color: rgba(102, 102, 102, 1);
            .clock-box
                position: absolute;
                left 50%
                top 548px
                transform translateX(-50%)
                width: 200px;
                height: 200px;
        .bottom-btn
            position: absolute;
            bottom 60px
            left 50%
            transform translateX(-50%)
            font-size: 30px;
            color: rgba(90, 146, 255, 1);
</style>

<template>
    <div id='index'>
        <div class="title">
            <span @click='role = "wisdom-site"' :class='{native: role === "wisdom-site"}'>我的考勤</span>
            <span v-if='auth === 2' @click='role = "wisdom-site2"' :class='{native: role === "wisdom-site2"}'>人员考勤</span>
        </div>
        <div style='height: 100%'>
            <component :is="role"></component>
        </div>
    </div>
</template>

<script>
  import WisdomSite from './wisdom-site'
  import WisdomSite2 from './wisdom-site2'

  export default {
    name: 'index',
    data() {
      return {
        role: 'wisdom-site',
        auth: 1
      }
    },
    components: {
      'wisdom-site': WisdomSite,
      'wisdom-site2': WisdomSite2
    },
    created() {
      let user = JSON.parse(localStorage.getItem('loginUserInfo')).loginUserInfo
      if (user.cRoleName === '劳资员') {
        this.auth = 2
      } else {
        this.auth = 1
      }
    },
    mounted() {},
    methods: {}
  }
</script>

<style lang='stylus' scoped>
    #index
        width 100%
        height 100%
        background: linear-gradient(180deg, rgba(105, 159, 255, 1) 0%, rgba(90, 146, 255, 0) 50%);
        .title
            height 88px
            line-height 88px
            text-align center
            span
                margin 0 41px
                font-size: 30px;
                color: #d7e6fd;
            span.native
                font-size: 36px;
                color: rgba(255, 255, 255, 1);
</style>

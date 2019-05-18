
import {QueryNoticeList,QueryWorkList,GetLoginUserInfo} from '@/api/api.js'
export default {
  methods: {
    // 首页消息中心获取公告
    queryNoticeList(params){
      return new Promise(resolve=>{
        this.Request(QueryNoticeList(params)).then(res=>{
          console.log(res)
          if(res.StatusCode===200){
            resolve(res)
          }
        })
      })
    },
    // 首页消息中心获取公告
    queryWorkList(params){
      return new Promise(resolve=>{
        this.Request(QueryWorkList(params)).then(res=>{
          console.log(res)
          if(res.StatusCode===200){
            resolve(res)
          }
        })
      })
    },
    // 获取当前登录用户详情
    // getLoginUserInfo(params){
    //   return new Promise(resolve=>{
    //     this.Request(GetLoginUserInfo(params)).then(res=>{
    //       console.log(res)
    //       if(res.StatusCode===200){
    //         resolve(res)
    //       }
    //     })
    //   })
    // },

    // interfaces(interfaceName,params){
    //   return new Promise(resolve=>{
    //     this.Request(interfaceName(params)).then(res=>{
    //       console.log(res)
    //       if(res.StatusCode===200){
    //         resolve(res)
    //       }
    //     })
    //   })
    // }
  }
}
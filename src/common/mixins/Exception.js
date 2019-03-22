//异常处理类
export default {
  // 200,300,400,401,405,415,404,500
  methods: {
    // 返回对象数组
    async Request(functionName) {
      try {
        let arr = await functionName
        // 处理 response状态码，与后台约定
        if (arr.StatusCode == 401) {
          console.error('token过期或未认证')
          localStorage.removeItem('token')
          // this.$toast.fail('请重新登录');
          this.$message({ message: '请重新登录', type: 'error' ,center:'true'})
          this.$toast.clear(); // 清除蒙层
          this.$store.commit('upisLogined', false)
        } else {
          // 返回的情况就只有300失败 和 200成功 再具体根据业务去判断
          // 如果返回值为null，也转成数组
          if (arr.Detiel == null) {
            arr.Detiel = []
          }
          if (arr.StatusCode === 300) {
            this.$message({ type: 'error', message: arr.Message, center: 'true' })
          }
          // console.log('请求成功,返回成功数据：', arr)
          // 帐号密码输入出错
          if ( arr.Message =='账号或密码错误...'){
            this.$message({ type: 'error', message: '账号或密码错误...', center: 'true'})
          }
          // 如果失效，则重新登录
          if (arr.Message == '提交失败！当前用户登录状态已失效，请重新登录' || arr.Message == "当前用户未登录成功或登录超时，请重新登录！" || arr.Message == "您尚未登录或登录已超时，请重新登录！") {
            this.$message({ message: '请重新登录', type: 'error', center: 'true'})
            this.$toast.clear(); // 清除蒙层
            console.log('$c token无效','color:red')
            this.$store.commit('upisLogined', false)
            return
          }
          
          return arr
        }
      } catch (error) {
        console.log('HTTP错误代码',error)
        // 处理HTTP状态
        switch (error) {
          case 400:
            console.error('由于语法格式有误，服务器无法理解此请求。不作修改，客户程序就无法重复此请求')
            this.$toast.clear(); // 清除蒙层
            this.$message({ message: '请求失败', type: 'error' })
            break;
          case 401:
            this.$message({ message: '请重新登录', type: 'error',center:'true' })
            localStorage.removeItem('token')
            this.$store.commit('upisLogined', false)
            this.$toast.clear(); // 清除蒙层
            break;
          case 404:
            console.error('404错误,返回上一层')
            break;
          case 408:
            this.$toast.clear(); // 清除蒙层
            this.$message({ message: '请求超时', type: 'error', center: 'true'})
            break;
          case 415:
            console.error('请求头报错，刷新页面')
            break;
          case 500:
            this.$toast.clear(); // 清除蒙层
            this.$message({ message: '服务器错误', type: 'error', center: 'true'})
            break;
          default:
            console.error('返回错误信息：', error)
        }
      }
    }
  }
}

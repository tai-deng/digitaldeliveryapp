/**
 * 公共请求
 */
export default {
  methods:{
    /**
     * 存状态管理方式
     * @param {接口} Interface 
     * @param {状态管理的方法名} vuexMethods 
     * @param {状态管理的属性} vuexValue 
     * @param {刷新} refresh 
     */
    async getDataByVuex(Interface, params, vuexMethods, vuexValue,refresh = false) {
      let data = this.$store.state[vuexValue]
      // console.log(data)
      if (data.length==0 || data === null || data === '' || data === undefined || refresh) { // 没有则重新请求
        data = await this.Request(Interface(params))
        if (data.StatusCode === 200) {
          // console.log(data)
          this.$store.commit(vuexMethods, data.Detiel)
          return data.Detiel
        } else {
          this.$store.commit(vuexMethods, null)
          this.$message({ type: 'error', message: data.Message, center: 'true' })
          return null
        }
      } else {
        return data
      }
    },
    /**
     * sessionStorage缓存方式
     * 单条存储数据最大不超过2M
     * @param {接口} Interface
     * @param {缓存KEY} sessionName 
     * @param {刷新} refresh
     */
    async getDataBySessionStorage(Interface,params, sessionName, refresh = false) {
      let data=null
      try{
        data= JSON.parse(sessionStorage.getItem(sessionName))
      }catch(e){
        console.log('session为非对象字符串')
        data = sessionStorage.getItem(sessionName)
      }
      // console.log(data, data === '' , data === null , data === undefined , refresh)
      if (data == '' || data == null || data == undefined || refresh) {
        let list = await this.Request(Interface(params))
        if (list.StatusCode === 200) {
          sessionStorage.setItem(sessionName, JSON.stringify(list.Detiel))
          return list.Detiel
        } else {
          this.$message({ type: 'error', message: list.Message, center: 'true' })
          return null
        }
      } else {
        return data
      }
    },
    /**
     * 第二种方式 ，只是返回list
     * sessionStorage缓存方式
     * 单条存储数据最大不超过2M
     * @param {接口} Interface
     * @param {缓存KEY} sessionName 
     * @param {刷新} refresh
     */
    async getDataBySessionStorageAll(Interface, params, sessionName, refresh = false) {
      let data = null
      try {
        data = JSON.parse(sessionStorage.getItem(sessionName))
      } catch (e) {
        console.log('session为非对象字符串')
        data = sessionStorage.getItem(sessionName)
      }
      // console.log(data, data === '' , data === null , data === undefined , refresh)
      if (data == '' || data == null || data == undefined || refresh) {
        let list = await this.Request(Interface(params))
        if (list.StatusCode === 200) {
          sessionStorage.setItem(sessionName, JSON.stringify(list))
          return list
        } else {
          this.$message({ type: 'error', message: list.Message, center: 'true' })
          return null
        }
      } else {
        return data
      }
    },

    /**
     * localStorage缓存方式
     * 单条存储数据最大不超过2M
     * @param {接口} Interface
     * @param {缓存KEY} localName
     * @param {刷新} refresh
     * 
     * 注意：缓存中可能存放非对象字符串。
     */
    async getDataByLocalStorage(Interface, localName, refresh = false) {
      let data = null
      try {
        data = JSON.parse(localStorage.getItem(localName))
      } catch (e) {
        console.log('localName为非对象字符串')
        data = localStorage.getItem(localName)
      }
      if (data === '' || data === null || data === undefined || refresh) {
        let list = await this.Request(Interface)
        if (list.StatusCode === 200) {
          localStorage.setItem(localName, JSON.stringify(list.Detiel))
          return list.Detiel
        } else {
          this.$message({ type: 'error', message: list.Message, center: 'true' })
          return null
        }
      } else {
        return data
      }
    },

  }
}
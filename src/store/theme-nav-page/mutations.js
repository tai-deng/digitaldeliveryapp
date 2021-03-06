/**
 * 同步
 */
import types from './mutation-types.js'
export default{
  //主导航下标
  [types.GET_PAGE_ACTIVE](state,active){
    console.log('%c 状态：','color:gold','原下标：',state.pageActive,'改变：',active)
    state.pageActive = active
  },
  //侧边栏用户中心是否打开
  [types.IS_SHOW_MENU](state,isShowMenu){
    console.log('%c 状态更改：','color:gold','old：',state.isShowMenu,'new：',isShowMenu)
    state.isShowMenu = isShowMenu
  },
  //发起沟通缓存数据
  [types.COMMUNICATE_DATA](state,communicateData){
    console.log('%c 状态更改',state.communicateData,'new：',communicateData)
    state.communicateData = communicateData
  }
}
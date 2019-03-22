import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex/dist/logger'
import themeNavPage from '@/store/theme-nav-page/index.js'
Vue.use(Vuex)
const debug = process.env.NODE_ENV !== 'production'
const themeNav = {
  ...themeNavPage
}
export default new Vuex.Store({
  modules: {
    themeNav
  },
  strict: debug,
  plugins: debug ? [createLogger()] : []
})

/**
 * 主导航路由
 */

//主导航页面
const themeNavPage = () => import('@/components/theme-nav-page/theme-nav-page.vue')
//工作台
const index = () => import('@/components/index/index')
//智慧工地
const wisdomSite = () => import('@/components/wisdom-site/wisdom-site.vue')
//AI报表
const AIReport = () => import('@/components/AI-report/AI-report.vue')
//建造动态
const dynamic = () => import('@/components/dynamic/dynamic.vue')
export default [
  {
    path:'/',
    redirect: '/nav/to/index',
  },
  {
    path: '/nav/:id',
    component:themeNavPage,
    children:[
      {
        path:'index',
        name:'工作台',
        component:index,
        meta: {
          keepAlive: true // 需要缓存
        },
      },
      {
        path:'wisdom-site',
        name:'智慧工地',
        component:wisdomSite,
        meta: {
          keepAlive: true // 需要缓存
        },
      },
      {
        path:'AI-report',
        name:'AI报表',
        component:AIReport,
        meta: {
          keepAlive: true // 需要缓存
        },
      },
      {
        path:'dynamic',
        name:'建造动态',
        component:dynamic,
        meta: {
          keepAlive: true // 需要缓存
        },
      },
    ]
  }

]
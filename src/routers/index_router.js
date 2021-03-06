/**
 * 首页路由
 */
// const index = () => import('@/components/index/index')
const schedule = () => import('@/components/index/schedule/schedule')
const timemanagement = () => import('@/components/index/time/timeManagement')
const rangemanagement = () => import('@/components/index/Range/rangeManagement')
const AIstatement = () => import('@/components/index/AIstatement/AIstatement')
const MaterialPurchasing = () => import('@/components/index/MaterialPurchasing/MaterialPurchasing')
const Risk = () => import('@/components/index/Risk/Risk')
const quality = () => import('@/components/index/quality/quality')
const ControlDetails = ()=> import('@/components/index/ControlDetails/ControlDetails')
const ProblemAnalysis = ()=> import('@/components/index/ProblemAnalysis/ProblemAnalysis')
const myMessage = () => import('@/components/index/my-message/messageCentre')
const myIssue = () => import('@/components/index/my-issue/my-issue')
const humanresources = () => import('@/components/index/humanResources/humanResources')
const humanDetails = () => import('@/components/index/humanResources/humanDetails')
const riskDetails = () => import('@/components/index/riskDetails/riskDetails')
const Receiver = () => import('@/components/index/Receiver/Receiver')
const CostControl = () => import('@/components/index/CostControl/CostControl')
const CostControlDetails = () => import('@/components/index/CostControlDetails/CostControlDetails')
const CustomReport = () => import('@/components/AI-report/custom-report')

const talking = () => import('@/components/user/talking')
const communicateDetail = () => import('@/components/user/communicateDetail')
export default [
  // {
  //   path: '/',
  //   redirect: '/index'
  // },
  //提交前需要改回/index
  // {
  //   path: '/index',
  //   name: '首页',
  //   component: index
  // },
  {
    path: '/schedule',
    name: '进度',
    component: schedule
  },
  {
    path: '/AIstatement',
    name: 'AI报表',
    component: AIstatement
  },
  {
    path: '/MaterialPurchasing',
    name: '物资采购',
    component: MaterialPurchasing
  },
  {
    path: '/Risk',
    name: '风险管理',
    component: Risk
  },
  {
    path: '/riskDetails',
    name: '风险管理详情',
    component: riskDetails
  },
  {
    path: '/Receiver',
    name: '接收人',
    component: Receiver
  },
  {
    path:'/ProblemAnalysis',
    name:'问题类型分析',
    component:ProblemAnalysis
  },
  {
    path: '/quality',
    name: '质量管理',
    component: quality
  },
  {
    path: '/timeManagement',
    name: '时间管理',
    component: timemanagement
  },
   {
     path: '/rangeManagement',
     name: '范围管理',
     component: rangemanagement
   },
   {
    path:'/CostControl',
    name:'成本管理',
    component:CostControl
  },
  {
    path:'/CostControlDetails',
    name:'成本管理详情',
    component:CostControlDetails
  },
  {
    path:'/ControlDetails',
    name:'管控详情',
    component:ControlDetails
  },
  {
    path:'/myMessage',
    name:'消息中心',
    component:myMessage
  },
  {
    path:'/my-issue',
    name:'我的发布',
    component:myIssue
  },
  {
    path:'/humanResources',
    name:'人力资源',
    component:humanresources
  },
  {
    path:'/humanDetails',
    name:'人力详情',
    component:humanDetails
  },
  {
    path:'/talking',
    name:'沟通管理详情',
    component:talking
  },
  {
    path:'/custom-report',
    name:'未定义表单',
    component:CustomReport
  },
  {
    path:'/communicateDetail',
    name: '沟通管理列表',
    component:communicateDetail
  }

]

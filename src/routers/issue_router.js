/**
 * 发布路由
 */
const Communication = ()=> import('@/components/issue/Communication/Communication')
const daily = ()=> import('@/components/issue/daily/daily')
const manpower = ()=> import('@/components/issue/manpower/manpower')
const manpowerDetail = ()=> import('@/components/issue/manpower/manpowerDetail')
const purchase = ()=> import('@/components/issue/purchase/purchase')
const materials = ()=> import('@/components/issue/materials/materials')
const rectify = ()=> import('@/components/issue/rectify/rectify')
const Progress = ()=> import('@/components/issue/Progress/Progress')

const purchaseTable = ()=> import('@/components/issue/purchase/modules/purchaseTable')
const allPurchase = ()=> import('@/components/issue/purchase/modules/allPurchase')
export default[
    {
        path:'/Communication',
        name:'沟通协调',
        component:Communication
    },
    {
        path:'/daily',
        name:'日常巡检',
        component:daily
    },
    {
        path:'/manpower',
        name:'人力资源',
        component:manpower
    },
    {
        path:'/manpowerdetail',
        name:'人力资源详情',
        component:manpowerDetail
    },
    {
        path:'/purchase',
        name:'物资-采购',
        component:purchase
    },
    {
        path:'/modules/purchaseTable',
        name:'物资-采购表格',
        component:purchaseTable
    }
    ,{
        path:'/modules/allPurchase',
        name:'物资-采购统计',
        component:allPurchase
    },
    {
        path:'/materials',
        name:'材料出入库',
        component:materials
    },
    {
        path:'/rectify',
        name:'整改认证',
        component:rectify
    },
    {
        path:'/Progress',
        name:'进度认证',
        component:Progress
    }
]
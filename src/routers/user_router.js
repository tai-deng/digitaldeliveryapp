/**
 * 个人中心路由
 */
const set = ()=> import('@/components/user/set.vue')
const Modify = ()=> import('@/components/user/Modify')
const note = ()=> import('@/components/user/useNote')
export default[
    {
        path:'/set',
        name:'设置',
        component:set
    },
    {
        path:'/Modify',
        name:'修改个人信息',
        component:Modify
    },
    {
        path:'/note',
        name:'使用说明',
        component:note
    },
]
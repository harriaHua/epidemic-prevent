/**
 * @Description:暂时用的假数据
 * @Version: 0.1
 * @Author: Harria
 * @Date: 2021-12-10 11:29:40
 * @LastEditors: Harria
 * @LastEditTime: 2022-01-16 14:34:48
 */
import { Router } from 'vue-router'
let d = []
export default d = []
export const data = [
  {
    path: '/Home',
    redirect: 'Home',
    name: 'Home',

    component: '/Home.vue',
    children: [],
    meta: {
      id: '1',
      name: '首页',
      icon: 'aim',
    },
  },
  {
    path: '/LeaveSystem',
    name: 'LeaveSystem',

    component: '',
    meta: {
      id: '2',

      name: '请假系统',
      icon: 'aim',
    },
    children: [
      {
        path: '/LeaveApplication',
        name: 'LeaveApplication',

        component: '/LeaveSystem/LeaveApplication/LeaveApplication.vue',
        meta: {
          id: '2-1',

          name: '请假申请',
          icon: 'aim',
        },
        children: [],
      },
      {
        path: '/LeaveApproval',
        name: 'LeaveApproval',

        component: '/LeaveSystem/LeaveApproval/LeaveApproval.vue',
        meta: {
          id: '2-2',

          name: '请假审批',
          icon: 'aim',
        },
        children: [],
      },
    ],
  },
  {
    path: '/SystemManage',
    name: 'SystemManage',

    component: '',
    meta: {
      id: '3',
      name: '系统管理',
      icon: 'aim',
    },
    children: [
      {
        path: '/RoleManage',
        name: 'RoleManage',

        component: '/SystemManage/RoleManage/RoleManage.vue',
        meta: {
          id: '3-1',

          name: '角色管理',
          icon: 'aim',
        },
        children: [],
      },
      {
        path: '/UserManage',
        name: 'UserManage',

        component: '/SystemManage/UserManage/UserManage.vue',
        meta: {
          id: '3-2',

          name: '用户管理',
          icon: 'aim',
        },
        children: [],
      },
      {
        path: '/InstituteManage',
        name: 'InstituteManage',

        component: '/SystemManage/InstituteManage/InstituteManage.vue',
        meta: {
          id: '3-3',

          name: '学院管理',
          icon: 'aim',
        },
        children: [],
      },
      {
        path: '/ModuleManage',
        name: 'ModuleManage',

        component: '/SystemManage/ModuleManage/ModuleManage.vue',
        meta: {
          id: '3-2',

          name: '模块管理',
          icon: 'aim',
        },
        children: [],
      },
    ],
  },
  {
    path: '/InformationStatistic',
    name: 'InformationStatistic',

    component: '/InformationStatistic/InformationStatistic.vue',
    meta: {
      id: '4',

      name: '信息统计',
      icon: 'aim',
    },
    children: [],
  },
  // {
  //   id: '5',
  //   name: '404',
  //   path: '/404',
  //   icon: 'aim',
  //   component: '',

  //   children: [],
  //   hidden: true,
  // },
]

// console.log(filterAsyncRouter(data))

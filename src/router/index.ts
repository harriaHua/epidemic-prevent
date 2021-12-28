/**
 * @Description:
 * @Version: 0.1
 * @Author: Harria
 * @Date: 2021-12-07 17:28:52
 * @LastEditors: Harria
 * @LastEditTime: 2021-12-28 23:27:55
 */

import { resolveDirective } from 'vue'
import { RouteRecordRaw, createRouter, createWebHashHistory } from 'vue-router'
import NProgress from 'nprogress'
const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'GlobalLayout',
    component: () => import('@/components/page/GlobalLayout.vue'),
    children: [
      {
        path: '/ModuleManage1',
        name: 'ModuleManage1',
        component: () => import('@/views/Home.vue'),
      },
    ],
  },
  {
    path: '/Login',
    name: 'Login',
    component: () => import('@/components/page/login/Login.vue'),
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})
router.beforeEach((to, from, next) => {
  // 每次切换页面时，调用进度条
  NProgress.start()
  console.log(from.name, 'to', to.name)

  // 这个一定要加，没有next()页面不会跳转的。这部分还不清楚的去翻一下官网就明白了
  next()
})
router.afterEach(() => {
  NProgress.done()
  console.log('done')

  // 在即将进入新的页面组件前，关闭掉进度条
})

export default router

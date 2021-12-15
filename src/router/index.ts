/**
 * @Description:
 * @Version: 0.1
 * @Author: Harria
 * @Date: 2021-12-07 17:28:52
 * @LastEditors: Harria
 * @LastEditTime: 2021-12-10 15:13:11
 */

import { resolveDirective } from "vue";
import { RouteRecordRaw, createRouter, createWebHashHistory } from "vue-router";
const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "GlobalLayout",
    component: () => import("@/components/page/GlobalLayout.vue"),
    children: [
      {
        path: "/ModuleManage1",
        name: "ModuleManage1",
        component: () => import("@/views/Home.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
export default router;

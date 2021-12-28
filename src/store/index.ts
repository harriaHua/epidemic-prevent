/**
 * @Description:
 * @Version: 0.1
 * @Author: Harria
 * @Date: 2021-12-07 17:29:06
 * @LastEditors: Harria
 * @LastEditTime: 2021-12-15 22:53:20
 */
import { defineStore } from "pinia";

export const useMainStore = defineStore({
  id: "main",
  state: () => ({
    name: "超级管理员",
  }),
});

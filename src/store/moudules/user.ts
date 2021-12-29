/**
 * @Description:
 * @Version: 0.1
 * @Author: Harria
 * @Date: 2021-12-29 23:12:19
 * @LastEditors: Harria
 * @LastEditTime: 2021-12-29 23:18:31
 */
import { defineStore } from 'pinia'

export const useUserStore = defineStore({
  id: 'user',
  state: () => ({
    token: '这是token',
  }),
})

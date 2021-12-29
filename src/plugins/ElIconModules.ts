/**
 * @Description:
 * @Version: 0.1
 * @Author: Harria
 * @Date: 2021-12-29 23:40:55
 * @LastEditors: Harria
 * @LastEditTime: 2021-12-29 23:44:11
 */
import type { App } from 'vue'
import 'vite-plugin-svg-icons/register'
import svgIcon from '@/components/SvgIcon.vue' // 全局svg图标组件
import * as ElIconModules from '@element-plus/icons'

export function setupElIconModules(app: App<Element>) {
  app.component('svg-icon', svgIcon)
  // 统一注册Icon图标
  for (const iconName in ElIconModules) {
    if (Reflect.has(ElIconModules, iconName)) {
      const item = ElIconModules[iconName]
      app.component(iconName, item)
    }
  }
}

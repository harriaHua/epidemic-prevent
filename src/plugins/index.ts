/**
 * @Description:
 * @Version: 0.1
 * @Author: Harria
 * @Date: 2021-12-28 23:37:43
 * @LastEditors: Harria
 * @LastEditTime: 2021-12-29 23:46:10
 */
import type { App } from 'vue'
import { setupElIconModules } from './ElIconModules'

import './NProgress'

export function setupPlugins(app: App<Element>) {
  setupElIconModules(app)
}

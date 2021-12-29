/**
 * @Description:
 * @Version: 0.1
 * @Author: Harria
 * @Date: 2021-12-07 17:29:06
 * @LastEditors: Harria
 * @LastEditTime: 2021-12-29 23:05:40
 */
import { App } from 'vue'
import { createPinia } from 'pinia'

const store = createPinia()
export function setupStore(app: App<Element>) {
  app.use(store)
}

export { store }

/**
 * @Description:
 * @Version: 0.1
 * @Author: Harria
 * @Date: 2021-12-07 11:02:01
 * @LastEditors: Harria
 * @LastEditTime: 2021-12-30 13:01:21
 */
// TODO  commit 🧐
import App from './App.vue'
import ElementPlus from 'element-plus'
import { createApp } from 'vue'
import { setupStore } from '@/store'
import { setupRouter } from '@/router'
import { setupPlugins } from '@/plugins'

// 需要全局引入再添加

import '@/design/index.scss'

import '@/plugins'

function bootstrap() {
  const app = createApp(App)

  app.use(ElementPlus)

  setupStore(app)
  setupRouter(app)
  setupPlugins(app)

  app.mount('#app', true)
}

bootstrap()

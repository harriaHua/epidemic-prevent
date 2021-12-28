/**
 * @Description:
 * @Version: 0.1
 * @Author: Harria
 * @Date: 2021-12-07 11:02:01
 * @LastEditors: Harria
 * @LastEditTime: 2021-12-28 23:53:24
 */
// import 'nprogress/nprogress.css' //这个样式必须引入
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import { createApp } from 'vue'

// import { createPinia } from 'pinia'

// 需要全局引入再添加
import App from './App.vue'
import router from './router'

import 'element-plus/theme-chalk/index.css'
import 'ant-design-vue/dist/antd.css'
import '@/assets/less/theme/default.less'
import '@/assets/less/common.css'
import '@/plugins'

import 'vite-plugin-svg-icons/register'
import svgIcon from '@/components/SvgIcon.vue' // 全局svg图标组件
import * as ElIconModules from '@element-plus/icons'
const app = createApp(App)

app.use(ElementPlus).use(router).mount('#app')

app.component('svg-icon', svgIcon)

// 统一注册Icon图标
for (const iconName in ElIconModules) {
  if (Reflect.has(ElIconModules, iconName)) {
    const item = ElIconModules[iconName]
    app.component(iconName, item)
  }
}

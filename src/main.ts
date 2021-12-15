/**
 * @Description:
 * @Version: 0.1
 * @Author: Harria
 * @Date: 2021-12-07 11:02:01
 * @LastEditors: Harria
 * @LastEditTime: 2021-12-12 15:36:57
 */

import { createApp } from "vue";
import ElementPlus from "element-plus";
import App from "./App.vue";
import router from "./router";
import * as ElIconModules from "@element-plus/icons";
import "vite-plugin-svg-icons/register";
// 需要全局引入再添加
import svgIcon from "@/components/SvgIcon.vue"; // 全局svg图标组件
import "element-plus/dist/index.css";
import "@/assets/less/common.css";
import "@/assets/less/theme/default.less";

const app = createApp(App);
app.use(router).use(ElementPlus).mount("#app");

app.component("svg-icon", svgIcon);

// 统一注册Icon图标
for (const iconName in ElIconModules) {
  if (Reflect.has(ElIconModules, iconName)) {
    const item = ElIconModules[iconName];
    app.component(iconName, item);
  }
}

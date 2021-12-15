/*
 * @Description:
 * @Version: 0.1
 * @Author: Harria
 * @Date: 2021-12-07 17:29:06
 * @LastEditors: Harria
 * @LastEditTime: 2021-12-08 19:26:27
 */
import { createStore, createLogger } from "vuex";

const debug: boolean = import.meta.env.MODE === "development";
const plugins = debug ? [createLogger({ collapsed: true })] : [];
export default createStore({
  state: {},
  mutations: {},
  actions: {},
  modules: {},
  strict: debug,
  plugins: plugins,
});

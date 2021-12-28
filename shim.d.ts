/*
 * @Description:
 * @Version: 0.1
 * @Author: Harria
 * @Date: 2021-12-08 00:33:36
 * @LastEditors: Harria
 * @LastEditTime: 2021-12-08 01:01:32
 */
// .d.ts文件是ts用来声明变量，模块，type，interface等等的

// 在.d.ts声明变量或者模块等东西之后，在其他地方可以不用import导入这些东西就可以直接用，用，而且有语法提示。
// 在编辑ts文件的时候，如果你想导入一个.css/.less/.png格式的文件，如果没有经过declare的话是会提示语法错误的
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}
declare module 'nprogress'

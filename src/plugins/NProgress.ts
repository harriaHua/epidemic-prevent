/**
 * @Description:
 * @Version: 0.1
 * @Author: Harria
 * @Date: 2021-12-28 23:38:06
 * @LastEditors: Harria
 * @LastEditTime: 2021-12-28 23:38:07
 */
import NProgress from 'nprogress' // 进度条
import 'nprogress/nprogress.css'
NProgress.configure({
  easing: 'ease', // 动画方式
  speed: 500, // 递增进度条的速度
  showSpinner: false, // 是否显示加载ico
  trickleSpeed: 200, // 自动递增间隔
  minimum: 0.3, // 初始化时的最小百分比
})

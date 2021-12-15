<!--
 * @Description: 右上角的一坨工具栏
 * @Version: 0.1
 * @Author: Harria
 * @Date: 2021-12-11 15:31:32
 * @LastEditors: Harria
 * @LastEditTime: 2021-12-12 20:06:44
-->
<template>
  <div>
    <!-- 用上了间距 挺方便的  -->
    <el-space alignment="center" :size="30" class="wrap">
      <!-- 全屏状态切换图标 -->
      <el-icon class="icon-container hover"
        ><SvgIcon
          :name="isFullscreen ? 'fullscreen-exit' : 'fullscreen'"
          class="header-icon"
          @click="fullScreen"
        />
      </el-icon>
      <!-- 消息图标 -->
      <el-icon class="icon-container hover">
        <el-badge is-dot> <bell-filled class="header-icon" /></el-badge
      ></el-icon>
      <!-- 头像 -->
      <div class="icon-container">
        <el-avatar
          shape="circle"
          :size="35"
          src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
        ></el-avatar>
      </div>
      <!-- 设置 图标 -->
      <el-icon class="icon-container hover"
        ><tools class="header-icon"
      /></el-icon>
      <!-- 退出图标 -->
      <el-icon class="icon-container hover"
        ><SvgIcon name="export" class="header-icon" /></el-icon
    ></el-space>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "@vue/runtime-core";
import { ElMessage } from "element-plus";
import screenfull from "screenfull";
export default defineComponent({
  name: "UserTools",
  setup(props, context) {
    let isFullscreen = ref(false);
    /**
     * @description: 全屏点击事件触发
     * @param {*}
     * @return {void}
     * @author: Harria
     */
    const fullScreen = () => {
      if (screenfull.isEnabled) {
        //能用就切换全屏状态
        screenfull.toggle();
        isFullscreen.value = !isFullscreen.value;
      } else {
        //不能用就发个消息
        // TODO 去封装个全局方法
        ElMessage({
          message: "浏览器不支持全屏",
          type: "error",
        });
      }
    };
    return {
      isFullscreen,
      fullScreen,
    };
  },
});
</script>

<style lang="less" scoped>
@iconWH: 33px;

.wrap {
  display: flex;
  align-items: center;
  .header-icon {
    width: @iconWH;
    height: @iconWH;
  }
  .icon-container {
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
  }
}
</style>

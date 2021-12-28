<!--
 * @Description: 右上角的一坨工具栏
 * @Version: 0.1
 * @Author: Harria
 * @Date: 2021-12-11 15:31:32
 * @LastEditors: Harria
 * @LastEditTime: 2021-12-17 17:39:10
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
      <el-icon class="icon-container hover"><tools class="header-icon" /></el-icon>
      <!-- 退出图标 -->
      <el-icon class="icon-container hover" @click="logout()"
        ><SvgIcon name="export" class="header-icon" /></el-icon
    ></el-space>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from '@vue/runtime-core'
import { error, infoNotification } from '@/utils/message'
import screenfull from 'screenfull'
import { useRouter } from 'vue-router'
export default defineComponent({
  name: 'UserTools',
  setup(props, context) {
    const router = useRouter()
    let isFullscreen = ref(false)
    /**
     * @description: 全屏点击事件触发
     * @param {*}
     * @return {void}
     * @author: Harria
     */
    const fullScreen = () => {
      if (screenfull.isEnabled) {
        //能用就切换全屏状态
        screenfull.toggle()

        isFullscreen.value = !isFullscreen.value
      } else {
        //不能用就发个消息
        error('该浏览器不支持全屏')
      }
    }
    const logout = () => {
      router.push('/login')
    }
    onMounted(() => {
      // infoNotification('提示', '出错了')
    })
    return {
      isFullscreen,
      fullScreen,
      logout,
    }
  },
})
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

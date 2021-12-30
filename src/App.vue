<!--
 * @Description: 
 * @Version: 0.1
 * @Author: Harria
 * @Date: 2021-12-07 11:02:01
 * @LastEditors: Harria
 * @LastEditTime: 2021-12-28 23:12:19
-->
<template>
  <!-- <div></div> -->
  <router-view> </router-view>
</template>

<script lang="ts">
import { onMounted } from '@vue/runtime-core'
export default {
  name: 'App',
  components: {},
  setup() {
    onMounted(() => {
      // alertBox('Warning', '欣赏欣赏下', '确定', 'warning')
      // confirmBox('2asad', '23s', 'queding', 'fanhui1', 'error')
      // error('This is an error message')
      // infoNotification('提示', '出错了')
    })
    if (document.getElementById('loading')) {
      document.getElementById('loading').remove()
    }
  },
}
</script>
<style>
#app {
  height: 100%;
}
</style>

<!--
 * @Description: 
 * @Version: 0.1
 * @Author: Harria
 * @Date: 2021-12-07 11:02:01
 * @LastEditors: Harria
 * @LastEditTime: 2022-01-16 18:44:34
-->
<template>
  <!-- <div></div> -->
  <router-view> </router-view>
</template>

<script lang="ts">
import { onMounted } from '@vue/runtime-core'
import axios from 'axios'
export default {
  name: 'App',
  components: {},
  setup() {
    axios.get('/api/getUser').then((res) => {
      console.log(res)
    })
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

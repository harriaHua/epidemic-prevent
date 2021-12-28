<!--
 * @Description: 
 * @Version: 0.1
 * @Author: Harria
 * @Date: 2021-12-18 09:58:03
 * @LastEditors: Harria
 * @LastEditTime: 2021-12-28 23:41:16
-->
<template>
  <div class="registerTable">
    <el-row class="row"><el-input v-model="userName" placeholder="" /></el-row>
    <el-row><el-input v-model="userName" placeholder="Type something" /></el-row>
    <el-row><el-input v-model="userName" placeholder="Type something" /></el-row>
    <el-row><el-button type="warning">注册</el-button></el-row>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from '@vue/runtime-core'
export default defineComponent({
  name: 'RegisterTable',
  setup(props, context) {
    let userName = ref('')

    return { userName }
  },
})
</script>

<style lang="less" scoped>
.registerTable {
  width: 300px;
  // height: 300px;
  .el-row {
    margin-bottom: 20px;
    .el-button {
      width: 100%;
    }
  }
}
</style>

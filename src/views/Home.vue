<!--
 * @Description: 
 * @Version: 0.1
 * @Author: Harria
 * @Date: 2021-12-07 17:34:47
 * @LastEditors: Harria
 * @LastEditTime: 2022-01-15 11:51:26
-->
<template>
  <div>
    这里是home
    <el-button>{{ ss }}</el-button>
  </div>
</template>

<script setup lang="ts">
const ss = import.meta.env.VITE_APP_TITLE

console.log('🚀 ~ file: Home.vue ~ line 18 ~ ss', ss)
</script>

<style></style>

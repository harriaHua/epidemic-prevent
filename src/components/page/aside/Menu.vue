<!--
 * @Description: 菜单树组件
 * @Version: 0.1
 * @Author: Harria
 * @Date: 2021-12-10 11:53:18
 * @LastEditors: Harria
 * @LastEditTime: 2022-01-16 13:58:47
-->
<template>
  <!-- 这里要用template而不是div，用div的话会导致组件一场，菜单闭合的时候名称仍然显示 -->
  <template v-for="item in data" :key="item.meta.id">
    <!-- 有孩子就用下拉菜单 -->
    <el-sub-menu v-if="item.children.length != 0" :index="item.meta.id">
      <template #title>
        <el-icon><component :is="item.meta.icon" /> </el-icon>
        <span>{{ item.meta.name }}</span>
      </template>
      <!-- 递归调用，可无限生成子菜单 -->
      <Menu :data="item.children"></Menu>
    </el-sub-menu>
    <!-- 没孩子就用普通菜单项 -->
    <el-menu-item v-else :index="item.meta.id" :route="item.path">
      <el-icon><component :is="item.meta.icon" /> </el-icon>
      <template #title>{{ item.meta.name }}</template>
    </el-menu-item>
  </template>
</template>

<script lang="ts">
import { defineComponent, onMounted } from '@vue/runtime-core'

export default defineComponent({
  name: 'Menu',
  props: {
    data: {
      type: Array,
      default: () => [],
    },
  },
  setup(props, context) {
    onMounted(() => {})
  },
})
</script>

<style scoped></style>

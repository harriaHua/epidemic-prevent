<!--
 * @Description: header
 * @Version: 0.1
 * @Author: Harria
 * @Date: 2021-12-09 17:05:26
 * @LastEditors: Harria
 * @LastEditTime: 2022-01-14 22:10:42
-->
<template>
  <el-header class="header">
    <!-- 控制菜单开关的icon -->
    <component
      :is="iconDirectionLeft ? 'fold' : 'expand'"
      class="header-icon hover"
      @click="changeIsCollapse"
    ></component>
    <UserTools></UserTools>
  </el-header>
</template>

<script lang="ts">
import { defineComponent, ref } from '@vue/runtime-core'
import MenuAction from './components/MenuAction.vue'
import UserTools from './components/UserTools.vue'
export default defineComponent({
  name: 'GlobalHeader',
  components: {
    MenuAction,
    UserTools,
  },
  emits: ['change-is-collapse'],
  setup(props, context) {
    const iconDirectionLeft = ref(true) // 现在是朝左吗
    /**
     * @description: 调用父组件 改变IsCollapse的方法，控制菜单闭合的同时改变一下icon朝向
     * @param {*}
     * @return {void}
     * @author: Harria
     */
    const changeIsCollapse = () => {
      iconDirectionLeft.value = !iconDirectionLeft.value
      context.emit('change-is-collapse')
    }
    return { iconDirectionLeft, changeIsCollapse }
  },
})
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  .header-icon {
    width: 40px;
    height: 40px;
  }
}
</style>

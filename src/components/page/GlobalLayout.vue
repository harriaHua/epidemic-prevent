<!--
 * @Description: 大布局，分出header,main,footer,aside
 * @Version: 0.1
 * @Author: Harria
 * @Date: 2021-12-09 17:02:02
 * @LastEditors: Harria
 * @LastEditTime: 2021-12-17 11:05:29
-->
<template>
  <div style="height: 100%">
    <!-- 整个屏幕的容器 -->
    <el-container style="height: 100%">
      <!-- 侧边栏用抽屉伸缩 -->
      <el-aside class="aside">
        <!-- <el-drawer
          v-model="menuDrawerState"
          size="250px"
          direction="ltr"
          custom-class="drawer-class"
          :with-header="false"
          :show-close="false"
          :modal="false"
          :modal-class="'modal-class'"
          :append-to-body="true"
        >
          </el-drawer > -->
        <!-- 侧边栏 -->
        <GlobalAside :isCollapse="isCollapse" :isShow="isShow"></GlobalAside>
      </el-aside>

      <!-- 右边的大容器 -->
      <el-container>
        <!-- 头部 header -->
        <GlobalHeader @changeIsCollapse="changeIsCollapse"></GlobalHeader>

        <!-- 主要内容 main -->
        <el-main class="main">
          <router-view />
          <SvgIcon name="xia" class="xia-icon" />
        </el-main>

        <!-- 底部 footer -->
        <el-footer class="footer"
          ><span>
            Copyright &copy; 2021 无侠 &nbsp;
            <SvgIcon name="xia" class="xia-icon" />&nbsp; 出品</span
          >
        </el-footer>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, Ref } from '@vue/runtime-core'
import GlobalAside from './aside/GlobalAside.vue'
import GlobalHeader from './header/GlobalHeader.vue'
export default defineComponent({
  name: 'GlobalLayout',
  components: {
    GlobalAside,
    GlobalHeader,
  },
  setup() {
    let isCollapse = ref(false)
    let isShow = ref(true)

    /**
     * @description: 由子组件调用，改变isCollapse和isShow的值，控制菜单的伸缩和标题的出现
     * @param {Void}
     * @return {void}
     * @author: Harria
     */
    const changeIsCollapse = () => {
      isCollapse.value = !isCollapse.value
      if (isCollapse.value) {
        //如果菜单关闭就让标题立即消失
        isShow.value = false
      } else {
        // 标题突然出现会撑开aside，延迟出现更流畅
        // TODO 待优化
        setTimeout(() => {
          isShow.value = true
        }, 300)
      }
    }
    return {
      isCollapse,
      isShow,
      changeIsCollapse,
    }
  },
})
</script>

<style scoped lang="less">
.aside {
  height: 100%;
  width: auto !important;
  max-width: 280px;
}
/deep/ .el-drawer__body {
  padding: 0;
  // background-color: @backgroundColor;
}
.modal-class {
  width: 0;
  height: 0;
}
.footer {
  height: 30px;
  line-height: 30px;
  display: flex;
  justify-content: space-evenly;
  font-style: italic;
  font-size: 3px;
  span {
    display: flex;
    align-items: center;
    .xia-icon {
      width: 25px;
      height: 25px;
    }
  }
}
</style>

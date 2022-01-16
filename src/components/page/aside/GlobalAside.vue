<!--
 * @Description: 侧边栏内容，放置logo和菜单
 * @Version: 0.1
 * @Author: Harria
 * @Date: 2021-12-09 17:05:48
 * @LastEditors: Harria
 * @LastEditTime: 2022-01-16 14:08:01
-->
<template>
  <!-- logo -->
  <router-link to="/">
    <div class="logo">
      <img src="~@/assets/img/logo_light.png" alt="logo" />
      <!-- 标题 -->
      <h1 v-if="isShow">
        {{ VITE_APP_TITLE }}
      </h1>
    </div>
  </router-link>

  <!-- 菜单 -->
  <!-- // TODO 想让菜单宽度和应用标题自适应 -->
  <el-scrollbar :max-height="menuMaxHeight" :view-class="'view-class'">
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      :active-text-color="color.activeTextColor"
      :background-color="color.backgroundColor"
      :text-color="color.textColor"
      :router="true"
      :collapse="isCollapse"
    >
      <!-- 递归组件生成菜单树 -->
      <Menu :data="data" />
    </el-menu>
  </el-scrollbar>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from '@vue/runtime-core'
import { data } from './menu'
console.log('🚀 ~ file: GlobalAside.vue ~ line 42 ~ data', data)
import Menu from './Menu.vue'
// 从环境变量中引用应用名
const { VITE_APP_TITLE } = import.meta.env
export default defineComponent({
  name: 'GlobalAside',
  components: { Menu },
  props: {
    isCollapse: {
      // 菜单是否关闭
      type: Boolean,
      default: true,
      required: true,
    },
    isShow: {
      // 标题是否显示
      type: Boolean,
      default: true,
      required: true,
    },
  },
  setup() {
    interface ThemeColor {
      // 一个接口，用来根据主题切换菜单颜色
      // HACK 试试用css切换？ 不然这个页面好复杂
      readonly activeTextColor: string
      readonly backgroundColor: string
      readonly textColor: string
    }
    const defaultThemeColor: ThemeColor = {
      activeTextColor: 'var(--main-color)',
      backgroundColor: 'var(--quote-background-color)',
      textColor: 'var(--word-color)',
    }
    // XXX 之后会换成localstorage
    const theme = import.meta.env.VITE_APP_THEME

    const menuMaxHeight = ref(window.innerHeight - 70)
    /**
     * @description: 根据主题名匹配菜单颜色
     * @param { string } theme 主题名
     * @return {}
     * @author: Harria
     */
    const switchTheme = (theme: string): ThemeColor => {
      switch (theme) {
        case 'default':
          return defaultThemeColor

        default:
          return defaultThemeColor
      }
    }
    const color = ref(switchTheme(theme))

    // 监视浏览器窗口变化，每变一次就重新计算一下菜单高度，保证aside不会出现原生滚动条
    window.onresize = () =>
      (() => {
        menuMaxHeight.value = window.innerHeight - 70
      })()
    return {
      data,
      color,
      menuMaxHeight,
      VITE_APP_TITLE,
    }
  },
})
</script>

<style scoped lang="scss">
$height: 45px;
$width: 220px;

.logo {
  width: auto;
  display: flex;
  justify-items: start;
  align-items: center;
  img {
    margin: 7.5px 10px;
    width: $height;
    height: $height;
  }
  h1 {
    height: 22px;
    margin-right: 15px;
  }
}

.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 220px;
  border: none;
}
.el-menu--collapse {
  border: none;
}
.el-scrollbar {
  height: auto;
}
</style>

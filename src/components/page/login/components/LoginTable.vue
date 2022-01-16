<!--
 * @Description:
 * @Version: 0.1
 * @Author: Harria
 * @Date: 2021-12-18 09:57:35
 * @LastEditors: Harria
 * @LastEditTime: 2022-01-14 20:01:19
-->
<template>
  <div class="loginTable">
    <el-row>
      <div class="logo">
        <svg-icon name="xia" class="icon" />
      </div>
    </el-row>
    <el-row>
      <el-input v-model="userName" placeholder="请输入用户名">
        <template #prefix>
          <el-icon class="el-input__icon">
            <avatar />
          </el-icon>
        </template>
      </el-input>
    </el-row>
    <el-row>
      <el-input v-model="password" placeholder="请输入密码">
        <template #prefix>
          <el-icon class="el-input__icon">
            <svg-icon name="password" />
          </el-icon>
        </template>
      </el-input>
    </el-row>

    <el-row>
      <el-button @click="login()"> 登录 </el-button>
    </el-row>
  </div>
</template>

<script lang="ts">
import { useRouter } from 'vue-router'
import { defineComponent, ref } from '@vue/runtime-core'
import { successNotification } from '@/utils/message'
import SvgIcon from '@/components/SvgIcon.vue'

export default defineComponent({
  name: 'LoginTable',
  components: { SvgIcon },
  setup(props, context) {
    const router = useRouter()
    const userName = ref('')
    const password = ref('')
    const login = () => {
      successNotification('登录成功', '')
      router.push('/')
    }

    return { userName, password, login }
  },
})
</script>

<style lang="scss" scoped>
.loginTable {
  width: 360px;
  padding: 30px;
  background-color: var(--quote-background-color);
  border-radius: 5px;
  box-shadow: var(--quote-shadow-color) -1px 9px 20px 2px;
  .logo {
    width: 100px;
    height: 100px;
    margin: 0 auto;
    .icon {
      width: 100%;
      height: 100%;
    }
  }
}

.el-row {
  margin: 20px 0 20px 0;
  .el-button {
    width: 100%;
  }
}
</style>

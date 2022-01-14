<!--
 * @Description: 
 * @Version: 0.1
 * @Author: Harria
 * @Date: 2021-12-17 14:28:50
 * @LastEditors: Harria
 * @LastEditTime: 2022-01-14 12:46:26
-->
<template>
  <div :class="loginMainClass">
    <!--功能区-->
    <div class="switchWrapper flexCenter">
      <div class="introduce">
        <div class="title">
          Welcome to
          <div class="name">Epidemic-prevent</div>

          <el-divider></el-divider>
          <div class="content">
            If you find a path with no obstacles, it probably doesn’t lead anywhere.<br />
            Getting out of bed in winter is one of life’s hardest mission.
          </div>
        </div>
        <transition name="s-fade" appear>
          <div v-show="!loginShow" class="to-login" @click="changeTable">&lt;&lt; Login</div>
        </transition>
        <transition name="s-fade" appear>
          <div v-show="loginShow" class="to-register" @click="changeTable">Register >></div>
        </transition>
      </div>
    </div>
    <DotBackground></DotBackground>
    <el-tooltip placement="bottom-start" effect="light">
      <template #content>
        <img src="@/assets/img/QRcode.png" alt="" style="width: 200px; height: 200px" />
      </template>
      <div class="angle">
        <img src="@/assets/img/QRcode.png" alt="" />
      </div>
    </el-tooltip>
    <transition name="slide-left" appear>
      <div v-show="!loginShow" class="register">
        <RegisterTable></RegisterTable>
      </div>
    </transition>
    <transition name="slide-right" appear>
      <div v-show="loginShow" class="login">
        <LoginTable></LoginTable>
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from '@vue/runtime-core'
import SvgIcon from '@/components/SvgIcon.vue'
import LoginTable from './components/LoginTable.vue'
import RegisterTable from './components/RegisterTable.vue'
import DotBackground from './components/DotBackground.vue'
export default defineComponent({
  name: 'Login',
  component: { LoginTable, RegisterTable, DotBackground },
  setup(props, context) {
    const loginMainClass = ref('loginMain')
    const loginShow = ref(true)
    const changeTable = () => {
      loginShow.value = !loginShow.value
      // setTimeout(() => {
      // }, 800)
      if (loginMainClass.value.indexOf('active') !== -1) {
        loginMainClass.value = 'loginMain'
      } else {
        loginMainClass.value = 'loginMain active'
      }
    }

    return { loginMainClass, loginShow, changeTable }
  },
})
</script>

<style lang="scss" scoped>
.angle {
  $originLength: 3em;
  $length: 80px;
  position: absolute;
  z-index: 50;
  width: $originLength;
  height: $originLength;
  // background-color: yellow;
  left: calc(100% - $originLength);
  background: linear-gradient(-135deg, #fff 50%, #ebedf1);
  border-bottom-left-radius: 5px;
  -webkit-transition: all 0.4s ease-out;
  transition: all 0.4s ease-out;
  overflow: hidden;
  &:hover {
    width: $length;
    height: $length;
    left: calc(100% - $length);
    &::after {
      content: '';
      position: absolute;
      width: $length;
      height: $length;
      // background-color: yellow;
      left: calc(100% - $length);

      border-bottom-left-radius: 5px;
    }
  }
  &::after {
    content: '';
    position: absolute;
    width: $originLength;
    height: $originLength;
    // background-color: yellow;
    left: calc(100% - $originLength);
    background: linear-gradient(
      -135deg,
      transparent 38%,
      rgb(0 0 0 / 15%) 49%,
      #b1adad 50%,
      #dbdbdb
    );
    border-bottom-left-radius: 5px;
    -webkit-transition: all 0.4s ease-out;
    transition: all 0.4s ease-out;
  }
  img {
    position: absolute;
    right: 0;
    top: 0;
    width: 50px;
    height: 50px;
  }
}
.login {
  position: absolute;
  z-index: 10;
  right: 0;
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.register {
  @extend .login;
  left: 0;
}

.flexCenter {
  display: flex;
  align-items: center;
  justify-content: center;
}

.loginMain {
  width: 100vw;
  height: 100vh;
  margin: auto;
  overflow: hidden;
  background-color: var(--background-color);
}

.switchWrapper {
  position: absolute;
  z-index: 99;
  left: 0;
  overflow: hidden;
  width: 50%;
  min-width: 300px;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.4);
  transition: transform 1s ease-in-out;
  .introduce {
    position: absolute;
    width: 100%;
    padding: 50px;
    color: white;
    font-size: 20px;
    .name {
      width: max-content;
      font-size: 30px;
      font-weight: bolder;
      transition: all 0.3s linear;
      color: var(--main-color);
      background-image: linear-gradient(
        90deg,
        rgb(50, 145, 113),
        rgb(0, 122, 204) 50%,
        rgb(255, 0, 0)
      );
      background-position: 0 100%;

      background-size: 0 3px;
      background-repeat: no-repeat;

      &:hover {
        background-size: 100% 3px;
        color: white;
      }
    }
    .content {
      font-size: 14px;
    }
    .to-register {
      float: right;
      width: max-content;
      font-weight: bolder;
      color: whitesmoke;
      background-clip: text;
      -webkit-background-clip: text;
      background-image: linear-gradient(90deg, var(--main-color), var(--main-color));
      background-repeat: no-repeat;
      background-size: 0 100%;
      transition: all 0.5s linear;
      cursor: pointer;
      &:hover {
        background-size: 100% 100%;
        color: transparent;
      }
    }
    .to-login {
      @extend .to-register;
      float: left;
      background-position: 100% 100%;
    }
  }
}
.btn {
  position: absolute;
}

.active .switchWrapper {
  transform: translateX(calc(100vw - 100%));
}

.switchWrapper::before {
  content: '';
  display: block;
  background-image: url('@/assets/img/mountain.jpeg');

  background-position: top left;
  background-size: auto 100%;
  width: 100%;
  height: 100%;
  overflow: hidden;
  transition: all 1s ease-in-out;
  filter: blur(3px) grayscale(80%);
}
.active .switchWrapper::before {
  background-position: top right;
}

.slide-right-enter-active,
.slide-left-enter-active {
  animation: slide-in 0.5s;
  transition: transform 0.5s linear;
}
.slide-left-leave-active,
.slide-right-leave-active {
  transition: transform 0.5s linear;
}

.slide-right-enter-from {
  transform: translateX(calc(-50%));
}
.slide-left-leave-to {
  transform: translateX(calc(50%));
}
// .slide-right-enter-to,
// .slide-right-leave-from {
//   transform: translateX(calc(0));
// }
.slide-left-enter-from {
  transform: translateX(calc(50%));
}
.slide-right-leave-to {
  transform: translateX(calc(-50%));
  // opacity: 0.5;
}
@keyframes slide-in {
  0% {
    opacity: 0;
  }
  49.9% {
    opacity: 0;
  }
  75% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
.s-fade-enter-active {
  transition: all 0.5s linear;
}
.s-fade-leave-active {
  transition: all 0.5s linear;
}
.s-fade-enter-from,
.s-fade-leave-to {
  transform: translateX(calc(-50%));
  opacity: 0;
}
</style>

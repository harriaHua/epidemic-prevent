<!--
 * @Description: 封装的一个icon组件，在name属性中输入@assets/svg相应名字
 * @Version: 0.1
 * @Author: Harria
 * @Date: 2021-12-12 15:02:27
 * @LastEditors: Harria
 * @LastEditTime: 2021-12-12 19:43:32
-->
<template>
  <svg aria-hidden="true">
    <use :xlink:href="symbolId" :fill="color" />
  </svg>
</template>

<script>
import { defineComponent, computed } from "vue";

export default defineComponent({
  name: "SvgIcon",
  props: {
    prefix: {
      type: String,
      default: "icon",
    },
    name: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      default: "",
    },
  },
  setup(props) {
    const symbolId = computed(() => `#${props.prefix}-${props.name}`);
    return { symbolId };
  },
});
</script>

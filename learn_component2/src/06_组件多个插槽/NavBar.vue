<template>
  <div class="nav-bar">
    <div class="left">
      <!-- 具名插槽 -->
      <slot name="left">left</slot>
    </div>
    <div class="center">
      <slot name="center">center</slot>
    </div>
    <div class="right">
      <slot name="right">right</slot>
    </div>
  </div>

  <div class="other">
    <!-- 没有设置名字，默认名字为default -->
    <slot></slot>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
  .nav-bar {
    display: flex;
    height: 44px;
    line-height: 44px;
    /* 一般导航的高度都为44px */
    text-align: center;
  }
  .left {
    width: 80px;
    background-color: orange;

  }
  .center {
    flex: 1;
    background-color: skyblue;
  }
  .right {
    width: 80px;
    background-color: aquamarine;
  }
</style>
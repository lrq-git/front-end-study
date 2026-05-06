<template>
 <div class="banner">
  <button @click="bannerBtnClick">banner按钮</button>
 </div>
</template>

<script>
import eventBus from './utils/event-bus'
export default {
  methods: {
    // 这里点击了以后，需要别的组件做出响应
    bannerBtnClick() {
      // 点击这个事件后会发送一个事件
      eventBus.emit("whyEvent", "why", 18, 1.88)
    }
  }
}
</script>

<style scoped>

</style>

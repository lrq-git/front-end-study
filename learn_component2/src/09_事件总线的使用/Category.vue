<template>
  <div>
    <h2>Category</h2>
  </div>
</template>

<script>
import eventBus from './utils/event-bus';
export default {
  methods: {
    whyEventHandler() {
      // 把监听的逻辑放在这里面
      console.log("whyEvent在category中监听")

    }
  },
  // 这个函数是当回调的时候执行的
  created() {
    // 监听到事件以后执行逻辑
    eventBus.on("whyEvent",this.whyEventHandler)
  },
  // 当组件被移除以后，事件监听也要移除
  unmounted() {
    // 监听事件移除（最好移除）
    console.log("category unmounted")
    eventBus.off("whyEvent", this.whyEventHandler)
  }
}
</script>

<style scoped>

</style>
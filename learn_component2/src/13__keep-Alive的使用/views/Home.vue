<template>
  <!-- 如果一个组件频繁切换，不保持存活会有很大问题，并且性能会很低 -->
  <div>
    <h2>home组件</h2>
    <h2>当前计数： {{ counter }}</h2>
    <button @click="counter++">+1</button>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      counter: 0
    }
  },
  created() {
    console.log("created")
  },
  unmounted() {
    console.log("unmounted")
  },
  // 对于保持alive组件，监听有没有进行切换
  activated() {
    console.log("actived")
  },
  deactivated() {
    console.log("deactived")
  }
}
</script>

<style scoped>

</style>
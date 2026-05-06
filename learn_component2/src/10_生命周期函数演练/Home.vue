<template>
  <div>home</div>
</template>

<script>
export default {
   // 6.准备卸载VDOM -> DOM 元素
  // 6.1卸载之前
  beforeUnmount() {
    console.log("home deforeUnmount")
  },
  // 6.2 卸载成功（DOM元素被卸载完成）
unmounted() {
  console.log("home unmounted")
}

}
</script>

<style scoped>

</style>
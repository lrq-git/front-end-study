<template>
  <!-- 当子组件里面发生了点击事件，父组件需要有响应 -->
  <div class="add">
      <button @click="btnClick(1)">+1</button>
      <button @click="btnClick(5)">+5</button>
      <button @click="btnClick(10)">+10</button>
  </div>
</template>

<script>
export default {
  // 专门有一个属性放自定义事件
  // 1.emits的数组语法
  // emits: ["add"],
    // 2.emits的对象语法（用的少）
    emits: {
      // 可以验证（会报告一个警告），用的少
      add: function(count) {
        if(counter <= 10) {
          return true
        }
        return false
      }
    },
  methods: {
    // 对按钮监听，然后发出一个事件
    btnClick(count) {
      console.log("btnclick", count)
      // 让子组件发出一个自定义事件
      // 第一个参数是自定义的事件名称
      // 第二个参数是传递的参数
      this.$emit("add",count)
      // 传递事件（子传父）
    }
  }
}
</script>

<style scoped>

</style>
<template>
  <h2>Message:{{ message }} - {{ counter }}</h2>
  <button @click="message = 'hello world'">修改Message</button>
  <button @click="counter++">+1</button>

  <div>
    <button @click="isShowHome = !isShowHome">显示home</button>
    <home v-if="isShowHome"></home>
  </div>
</template>

<script>
import Home from './Home.vue'

export default {
  components: {
    Home
  },
  data() {
    return {
      message: "hello App",
      counter: 0,
      isShowHome: true
    }
  },
  // 1.组件背创建之前
  beforeCreate() {
    console.log("beforeCreate")
  },
  // 2.组件被创建完成
  created() {
    console.log("created")
    console.log("1.发送网络请求，请求数据给data(此时data和methods已经初始化完成)")
    console.log("2.监听eventbus事件")
    console.log("3.监听watch数据")
    // 此时组件的实例已经被创建出来了
  },
  // 3.组件template准备被挂载
  beforeMount() {
    console.log("beforeMount")
    // 一般很少在这里做事情
  },
// 4.组件template被挂载：虚拟Dom->真实DOM
  mounted() {
    console.log("mounted")
    console.log("1.获取DOM")
    console.log("2.使用DOM")
  },
  // 5.数据发生改变
  // 5.1 准备更新DOM（虚拟和真实）
  beforeUpdate() {
    console.log("beforeUpdate")
  },
  // 5.2更新DOM成功后（会调用下面的函数）
  updated() {
    console.log("updated")
  },
  // 6.准备卸载VDOM -> DOM 元素
  // 6.1卸载之前
  beforeUnmount() {
    console.log("deforeUnmount")
  },
  // 6.2 卸载成功（DOM元素被卸载完成）
unmounted() {
  console.log("unmounted")
}

}
</script>

<style scoped>

</style>
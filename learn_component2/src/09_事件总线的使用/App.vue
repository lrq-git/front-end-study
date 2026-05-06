<template>
  <div class="app">
    <h2>App Message:{{ message }}</h2>
    <home></home>
    <button @click="isShowCategory = false">是否显示category</button>
    <!-- 想要实现组件是否显示，可以用v-if,这个能够让组件是否存在（组件移除） -->
    <category v-if="isShowCategory"></category>
</div>
</template>

<script>
import eventBus from './utils/event-bus';
import Home from './Home.vue';
import Category from './Category.vue';

export default {
  components: {
    Home,
    Category
  },
  data() {
    return {
      message: "hello App",
      isShowCategory: true
    }
  },
  created() {
    // fetch()网咯请求


    // 事件监听
    eventBus.on("whyEvent", (name, age, height) => {
      console.log("whyEvent事件在app中监听",name, age, height)
      this.message = `name:${name}, age:${age}, height:${height}`
    })
    // 这里用了箭头函数，this会绑定created
  }
 
}
</script>

<style scoped>

</style>
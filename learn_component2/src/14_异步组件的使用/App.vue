<template>
  <div class="app">
    <div class="tabs">
      <template v-for="(item, index) in tabs " :key="item" >
        <button :class="{ active:  currentIndex === index }" @click="itemClick(index)">{{ item }}</button>
      </template>
    </div>
    <div class="view">
      <!-- 保持存活,include：组件名称来自于组件定义时name的选项, -->
       <keep-alive include="home, about">
        <component :is="tabs[currentIndex]" ></component>
       </keep-alive>
    </div>
  </div>
</template>

<script>
// 定义异步组件
import { defineAsyncComponent } from 'vue';
import Home from './views/Home.vue'
import About from './views/About.vue'
// import Category from './views/Category.vue'
const AsyncCategory = defineAsyncComponent(() => import("./views/Category.vue"))
// 会进行分包的处理，import("./views/Category.vue")返回的是promise对象

export default {
  components: {
    Home,
    About,
    Category: AsyncCategory
  },
  data() {
    return {
      tabs: ["home", "about", "category"],
      currentIndex: 0
    }
  },
  methods: {
      itemClick(index) {
        this.currentIndex = index
      },
      
    }
}
</script>

<style scoped>
  .active {
    color: red;
  }
</style>
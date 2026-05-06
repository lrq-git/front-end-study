<template>
  <div class="app">
    <div class="tabs">
      <template v-for="(item, index) in tabs " :key="item" >
        <button :class="{ active:  currentIndex === index }" @click="itemClick(index)">{{ item }}</button>
      </template>
    </div>
    <div class="view">
      <!-- 1.第一种做法：v-if进行判断逻辑，决定要显示哪一个组件 -->
      <!-- <template v-if="currentIndex === 0">
        <home></home>
      </template>
      <template v-else-if="currentIndex === 1">
        <about></about>
      </template>
      <template v-else-if="currentIndex === 2">
        <category></category>
      </template> -->

      <!-- 2.第二种：动态组件component -->
       <!-- component是内置组件 -->
       <!-- is 中的组件需要来自两个地方：1.全局注册的组件2.局部注册的组件 -->
        <component name="why" :age="18" :is="tabs[currentIndex]" @homeClick="homeClick"></component>
    </div>
  </div>
</template>

<script>
import Home from './views/Home.vue'
import About from './views/About.vue'
import Category from './views/Category.vue'

export default {
  components: {
    Home,
    About,
    Category
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
      homeClick(pyload) {
        console.log("homeClick:",pyload)
      }
    }
}
</script>

<style scoped>
  .active {
    color: red;
  }
</style>
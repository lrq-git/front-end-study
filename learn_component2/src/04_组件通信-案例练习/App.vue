<template>
  <div class="app">
    <!-- 1.Tab-control -->
    <tab-control :titles="['衣服', '鞋子', '裤子'] " @tabItemClick="tabItemClick"/>
  <!-- :titles,这里必须加冒号，如果不加冒号会看成一个字符串，因此除了字符串以外的数据类型，传递其他类型的时候都要加冒号 -->
    
    <!-- 2.展示内容 -->
     <h1>{{ pageContent[currentIndex] }}</h1>
  </div>
</template>

<script>
import TabControl from './TabControl.vue';


export default {
  components: {
    TabControl
  },
  data() {
    return {
      pageContent: ["衣服列表", "鞋子列表", "裤子列表"],
      currentIndex: 0
    }
  },
  methods: {
    tabItemClick(index) {
      console.log("app", index)
      this.currentIndex = index
    }
  }
}
</script>

<style scoped>

</style>
<template>
  <div class="app">
    <h2 class="title">我是App.vue中的h2元素</h2>

    <!-- AppHeader -->
    <app-header></app-header>
    <AppHeader></AppHeader>
  </div>
</template>

<script>
import AppHeader from './components/AppHeader';

export default {
  name: 'App',
  // 局部注册
  components: {
    AppHeader
  }
}
</script>

<style scoped>
/*  这里的样式设置的是全局样式，会让所有组件里面的title样式都改变*/
 .title {
  color: red
 }
</style>

<template>
  <div class="app">
    <!-- app-header -->
    <app-header></app-header>

    <!-- app-content -->
    <app-content></app-content>

     <!-- app-footer -->
    <app-footer></app-footer>
  </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue'
import AppContent from './components/AppContent.vue';
import AppFooter from './components/AppFooter.vue';

export default {
  // 1.建立vue文件2.注册3.使用
  components: {
    AppHeader,
    AppContent,
    AppFooter
  }
}
</script>

<style>

</style>

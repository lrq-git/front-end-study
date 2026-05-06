<template>
  <div class="app">
    <h2>当前计数：{{ counter }}</h2>
    <!-- 监听自己定义的事件 ,v-on - > @ -->
    <add-counter @add="addBtnClick"></add-counter>
    <!--  emits: ["add"]如果在子组件写了这个，就会提示 -->
    <sub-counter @sub="subBtnClick"></sub-counter>
    
  </div>
</template>

<script>
import AddCounter from './AddCounter.vue';
import SubCounter from './SubCounter.vue';

export default {
  data() {
    return {
      counter: 0,
    }
  },
  components: {
    AddCounter,
    SubCounter
  },
  methods: {
    addBtnClick(count) {
      this.counter += count
    },
    subBtnClick(count) {
      this.counter -= count
    }
  }
}
</script>

<style scoped>

</style>
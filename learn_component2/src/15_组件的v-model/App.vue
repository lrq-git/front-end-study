<template>
  <!-- 同时子传父与父传子 -->
  <div class="app">
    <!-- 1.input的v-model -->
    <!-- <input type="text" v-model="message"> -->
    <!-- v-model双向绑定做的事情 -->
     <!-- <input type="text" :value="message" @input="message = $event.target.value"> -->

    <!-- 2.组件的v-model -->
     <!-- <counter v-model="appcounter"></counter> -->
     <counter v-bind:modelValue="appcounter" @update:modelValue="appcounter = $event"></counter>
     <!-- $event是子传给父的参数 -->
    <!-- modelValue名称是固定的 -->

    <!-- 3.自定义名称counter -->
     <!-- 可以同时绑定多个v-Model -->
     <counter v-model:counter="appcounter"></counter>
  </div>
</template>

<script>
import Counter from './Counter.vue';


export default {
  components: {
    Counter
  },
  data() {
    return {
      message: "hello world",
      appcounter:100
    }
  }
}
</script>

<style scoped>

</style>
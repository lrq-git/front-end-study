<template>
  <div class="show-message">
    <h2>{{ title }}</h2>
    <!-- 这里组件的元素是写死的 -->
    <!-- <p>{{ content }}</p> -->
     <div class="content">
      <!-- 这个插槽完全由外部决定 ，可以使不仅组件里面的内容以及元素都可以由外部决定-->
      <slot>
        <!-- 插槽里面的元素就是默认元素 -->
        <p>我是默认内容</p>
      </slot>
     </div>
  </div>
</template>

<script>
export default {
  props:{
    title:{
      type: String,
      default: "我是title的默认值"
    }
  }
}
</script>

<style scoped>

</style>
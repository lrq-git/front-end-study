<template>
  <div class="app">
    <!-- 1.内容是一个按钮 -->
    <show-message title="jjjj" >
      <button>我是按钮</button>
      <!-- show_message标签里面 放的元素就会替换slot -->
    </show-message>

    <!-- 2.内容是一个超链接 -->
    <show-message >
      <a href="#">百度一下</a>
    </show-message>

    <!-- 3.内容是一张图片 -->
     <show-message>
      <img src="@/img/image.png" alt="">
     </show-message>

     <!-- 4.内容没有传递 -->
      <show-message></show-message>
  </div>
</template>

<script>
import ShowMessage from './ShowMessage.vue';


export default {
components: {
  ShowMessage
}
}
</script>

<style scoped>

</style>
<template>
  <!-- 渲染作用域：父级模板里的所有内容都是在父级作用域中编译的；子模板里面的所有内容都是在子作用域中编译 -->
  <nav-bar>
    <!-- 如果一个组件有多个插槽，这样放只会让三个元素全部都放在每个插槽里面 -->
     <!-- 这里的v-slot: 的语法糖是# -->
    <template #left>
      <button>{{ leftText }}</button>
      <!-- 渲染作用域 -->
      <!-- 这个编写在template文件里面，要看这个template在哪个文件里面，然后数据就要在哪个文件里面的data找 -->
    </template>
    <template v-slot:center>
      <span>内容</span>
    </template>
    <template v-slot:right>
      <a href="#">登录</a>
    </template>
  </nav-bar>

  <!-- nav-bar只给一个插槽传入数据 -->
   <nav-bar>
    <!-- 动态插槽，这里的名字v-slot后面要用： -->
<!-- 这里的变量要放在[]里面 -->
    <template v-slot:[position]>
      <a href="#">注册</a>
    </template>
   </nav-bar>
   <!-- 内联事件处理器：
它的含义： @click 等号后面的双引号 "" 里，其实可以直接写一段简单的 JavaScript 可执行代码。
它是怎么运作的： 当你点击“左边”这个按钮时，Vue 就会直接在底层帮你执行 position = 'left' 这个赋值操作。这里的position定义在data里面 -->
   <button @click=" position = 'left' ">左边</button>
   <button @click=" position = 'center' ">中间</button>
   <button @click=" position = 'right' ">右边</button>

</template>

<script>
import NavBar from './NavBar.vue';


export default {
  components: {
    NavBar
  },
  data() {
    return {
      position: "center",
      leftText: "呵呵呵"
    }
  }
}
</script>

<style scoped>

</style>
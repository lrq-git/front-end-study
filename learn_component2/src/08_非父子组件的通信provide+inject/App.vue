<template>
  <!-- 需求：app里面的数据传递给homebanner -->
   <!-- 使用provide和inject是比较少的，以后会经常用外部状态管理库 ,provide需要有层级关系之间的传递-->
  <div class="app">
    <home></home>
<h2>App: {{ message }}</h2>
<!-- 真实开发里面不要在绑定事件里面写赋值语句 ，阅读性差-->
    <button @click=" message = 'hello world'">改变message</button>
    <!-- 发现：点击以后message发生了改变，但是共享的message没有发生改变 -->
  </div>
</template>

<script>
// computed函数从vue中引入，计算属性就是处理data里面的数据
import { computed } from 'vue'
import Home from './Home.vue'

export default {
  components: {
    Home
  },
  data() {
    return {
      message: "hello App"
    }
  },
  // options api
  /* provide: {
    name: "why",
    age: 18,
    // provide里面的数据通常来自于data，但这样的写法不对
    message: this.message
  } */
  provide() {
    // 把provide写成函数（一般都这样）
    // 注意：provide里面原本的数据不会发生响应式
    return {
      name: "why",
      age: 18,
      message: computed(() => {
          return this.message
          // 当data里面的message改变时，computed里面的message会响应式的改变
          // 这里用的箭头函数，this指向的是外面一层，也就是provide的this
      })
      // message: this.message
      // 此时已经将message赋值过来了，后面发生改变以后，这里不会发生改变
      // methods里面有this,是因为它里面有函数，与函数进行了绑定
      // 对象字面量 {} 是不会创造单独的作用域的
      /* 如果provide是一个函数时候，JavaScript 引擎在解析时，只会把这个函数“存”起来，并不会立刻去执行它里面的代码。ue 的介入： 等到页面加载，Vue 框架开始真正创建这个组件实例。Vue 会先初始化 data、methods 等。绑定 this 并调用： 等到组件实例完全准备好之后，Vue 会在底层偷偷做一个操作：强行把 provide 函数的 this 绑在刚刚建好的组件实例上，然后再调用这个函数。（底层类似于执行了 provide.call(组件实例)）。 */
    }
  }
  /* created: {
    // 发出网络请求，数据都是由服务器发送过来的
    this.message =  ""

  } */
}
</script>

<style scoped>

</style>
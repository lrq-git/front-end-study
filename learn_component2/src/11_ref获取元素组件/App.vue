<template>
  <div class="app">
    <h2 ref="title" class="title" :style="{ color: titleColor}">{{ message }}</h2>
    <button ref="btn" @click="changeTitle">修改title</button>

    <banner ref="banner" />
  </div>
</template>

<script>
import Banner from './Banner.vue'
// 在vue开发里面，不要操作原生DOM（实现修改数据，让界面自动更新）
export default {
  components: {
    Banner
  },
  data() {
    return {
      message: "hello",
      titleColor: "red"
    }
  },
  methods: {
    changeTitle() {
      // 1.不要主动的去获取DOM，并且修改DOM内容
      // this.message = "你好"
      // this.titleColor = "blue"

      // 2.获取h2/button元素
      // vue在当前的组件实例里面设置了$refs这个属性,当template有ref,会把元素引入refs对象里面
      console.log(this.$refs.title)
      console.log(this.$refs.btn)
      
      // 3.获取banner组件：组件实例
      console.log(this.$refs.banner)
      // this.$refs.banner拿到的是由export default创建出来的组件实例

      // 3.1在父组件中可以主动的调用子组件的对象方法
      // this.$refs.banner.bannerClick()

      // 3.2获取banner组件实例，获取banner中的元素
      console.log(this.$refs.banner.$el)
      // 可以拿到根元素（一个组件最好只有一个根元素），

      // 3.3如果有多个根，拿到的是第一个node节点
      // 开发中不推荐有一个组件的template有多个根
      //  console.log(this.$refs.banner.$el.nextElementSibling)

      // 4.组件实例还有两个属性
      console.log(this.$parent)//获取父组件
      console.log(this.$root)//获取根组件

    }
  }
}
</script>

<style scoped>

</style>
<template>
  <div class="app">
    <!-- 1.Tab-control -->
    <tab-control :titles="['衣服', '鞋子', '裤子'] " @tabItemClick="tabItemClick"/>
  <!-- :titles,这里必须加冒号，如果不加冒号会看成一个字符串，因此除了字符串以外的数据类型，传递其他类型的时候都要加冒号 -->
    
    <!-- 2.展示内容 -->
     <h1>{{ pageContent[currentIndex] }}</h1>

    <!-- tab-control:button元素 -->
      <tab-control :titles="['衣服', '鞋子', '裤子'] " @tabItemClick="tabItemClick">
        <template #default="props">
          <!-- slot里面所有的属性汇集成在一个对象里面，名字为props -->
           <!-- 子组件的值传递给父组件 -->
          <button>{{ props.item }}</button>
        </template>
        
      </tab-control>

    <!-- tab-control:a元素 -->
      <tab-control :titles="['衣服', '鞋子', '裤子'] " @tabItemClick="tabItemClick">

        <!-- 独占默认插槽的缩写v-slot:default="props"  ==  v-slot="props" ==   -->
        <template v-slot:default="props">
          <a href="#">{{ props.item }}</a>
        </template>
      </tab-control>


      <!-- 独占默认插槽的简写（了解)-->
    <tab-control :titles="['衣服', '鞋子', '裤子'] " @tabItemClick="tabItemClick">

        <template v-slot="props">
          <a href="#">{{ props.item }}</a>
        </template>
      </tab-control>

        <!--如果只有一个默认插槽，那么template可以省略 ,v-slot="props"直接写在组件上， 但是如果我们有默认插槽和具名插槽，那么则按照完整的template来编写  -->
      <tab-control :titles="['衣服', '鞋子', '裤子'] " @tabItemClick="tabItemClick" v-slot="props">
       
          <a href="#">{{ props.item }}</a>
        
      </tab-control>
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
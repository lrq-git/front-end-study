<template>
  <!-- 1.展示why的个人信息 -->
   <!-- <show-info></show-info> -->
    <!-- 也可以用单标签 ,通过属性把数据传过去-->
   <show-info name="why" :age="18" height="1.88" /> 

<!-- 2.展示kobe的个人信息 -->
 <!-- 注：所有的属性值天生都是字符串 (String)。比如在 <div id="app" data-id="123"> 中，哪怕你写的是数字 123，浏览器也会把它当成字符串 "123" 对待。
当 Vue 看到冒号时，它的处理逻辑全变了：“我要把等号后面引号 "" 里面的内容，当成一段 JavaScript 代码来执行，把执行的结果传过去！”在 JavaScript 里，30 就是一个纯粹的数字 (Number)）。 -->

<!-- 当我们传递给一个组件某个属性，但是该属性并没有定义对应的props,称为非Prop的attribute--包括class ,id,style-,此时这些属性会默认添加到子组件的根元素上->
   <show-info name="kobe" :age="30" height="1.88" address="广州市" class="active"/> 
   
   <!-- 3.展示默认的个人信息 -->
  <show-info :age="100" show-message="hhhh"/>
  <!-- <show-info :age="100" showMessage="hhhh"/> ,也可以用驼峰，开发里写-就行-->


</template>

<script>
import ShowInfo from './ShowInfo.vue';
export default {
  components: {
    ShowInfo
  }
}
</script>

<style scoped>

</style>
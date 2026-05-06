<template>
  <!-- 希望数据是从app.vue里面传过来 -->

  <!-- 这个infos的div元素就是组件的根元素 -->
  <div class="infos">
    <!-- :class="$attrs.address"这个就可以让非Prop的attribute属性添加在这个元素上 -->
    <h2 :class="$attrs.address">姓名：{{ name }}</h2>
    <h2>年龄：{{ age }}</h2>
    <h2>身高：{{ height }}</h2>

    <h2>Message: {{ showMessage }}</h2>
   </div>

   <!-- 如果有多个根，就可以设置这个让不报警告，把这些属性绑在这个根元素中 -->
   <div class="others" v-bind="$attrs"></div>
</template>

<script>
export default {
  // data里面的数据还是自己写的
  data() {},

  // 此时非Prop的attribute--包括class ,id,style-,此时这些属性不会添加到子组件的根元素上
  // inheritAttrs: false,
  // props作用：接受父组件传递过来的属性，父组件在使用showinfo的时候把数据已经传过来了
  // props:是你可以在组件上注册一些自定义的attribute,父组件给这些attribute进行幅值，子组件通过attribute的名称获取到对应的值

  // 1.props:数组语法（弊端：1）不能最类型进行验证2）没有默认值
  // props: ["name", "age", "height"]
  
  // 2.props:对象语法
  props: {
    // type类型可以是：String，Number,Boolean,symbol,Array,Object,function
    name: {
      type: String,
      // type: [String, Number]这个意思是可以是字符串类型也可以是数字类型
      default:"我是默认name"
    },
    age: {
      type: Number,
      // 一般有默认值就不用写required
      // required: true,
      default: 0
    },
    height:{
      type: Number,
      default: 2
    } ,
    friend: {
      type:Object,
      // 如果是对象，数组类型，这里的默认值必须写函数
      default:() => ({name: "james"})
      // 几种写法：
       /* 1.default: function() {
              return { 
                  name: "james" 
                    };  
            2.default() {
              return {
                  name: "james"
                       };
}*/
                      
},
  hobbies: {
    type: Array,
    default: () => ["篮球","rap", "唱跳"]
    // default() {return ["篮球","rap", "唱跳"]},如果这样写就会绑定this,这里一般不需要
  },
  showMessage: {
    type: String,
    default: "我是showMessage"
  }
    }
  }


/* 有关箭头函数：
匿名函数：const sum = function(a, b) {
  return a + b;
};
第一种转换：const sum = (a, b) => {
  return a + b;
};
第二种转换：const sum = (a, b) => a + b;  // 极简形态！
如果参数只有一个：圆括号可以省略
// 传统写法：
const double = function(num) { return num * 2; };

// 极致箭头函数写法：
const double = num => num * 2; 
 */
</script>

<style scoped>

</style>
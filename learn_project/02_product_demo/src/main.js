import { createApp } from 'vue'//不支持template选项
// import { createApp } from "vue/dist/vue.esm-bundler"
import App from './App.vue'
/* 1.jsconfig.json的演练
作用：给vscode进行读取，vscode在读取到其中的内容时，给我们的代码更加友好的提示
    2.引入vue的版本
    默认vue版本：runtime,vue-loader:template ->createVnode过程
    vue.esm-bundler:runtime + compile, 对template进行编译
    3.单个vue文件的style有自己的作用域
    style->scoped
    4.vite
*/

// 元素->createVnosw： vue中的源码来完成
//.vue文件：不用源码，vue-loader:template ->createVnode过程
/* const App = {
  template: `<h2>hello vue3 App</h2>`,
  data() {
    return {}
  }
} */
createApp(App).mount('#app')

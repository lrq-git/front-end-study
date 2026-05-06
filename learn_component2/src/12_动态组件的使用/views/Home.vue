<template>
  <div>
    <h2>home组件- {{ name }} - {{ age }}</h2>
    <button @click="homeBtnClick">homeBtn</button>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: ""
    },
    age: {
      type: Number,
      default: 0
    }
  },
  // 给动态组件传递数据
  emits: ["homeClick"],
  methods: {
    homeBtnClick() {
      this.$emit("homeClick", "home")
    }
  }
}
</script>

<style scoped>

</style>
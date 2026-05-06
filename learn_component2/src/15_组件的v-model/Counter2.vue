<template>
  <div>
    <h2>Counter: {{ counter }}</h2>
    <button @click="changeCounter">修改counter</button>
  </div>
</template>

<script>
export default {
  props: {
    counter: {
      type:Number,
      default: 0
    }
  },
  emits:["update:counter"],
  methods: {
    changeCounter() {
      this.$emit("update:counter", 2000)
    }


  }
}
</script>

<style scoped>

</style>
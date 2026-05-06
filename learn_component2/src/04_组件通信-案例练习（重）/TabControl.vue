<template>
  <div class="tab-control">
    <template v-for="(item, index) in titles" :key="item">
      <div class="tab-control-item" @click="ItemClick(index)" :class="{active: index === currentIndex}">
       <span>{{ item }}</span> 
      </div>
    </template>
  </div>
</template>

<script>
export default {
  props: {
    titles: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      currentIndex: 0
    }
  },
  emits:["tabItemClick"],
  methods: {
    ItemClick(index) {
      this.currentIndex = index
      // 这里内部发生了点击要触动外部变化
      this.$emit("tabItemClick",index)
    }
  }
}
</script>
  
<style scoped>
.tab-control {
    display: flex;
    height:44px;
    line-height: 44px;
    text-align: center;
  }
  .tab-control-item {
    flex:1
  }
  .tab-control-item.active {
    color:red;
    font-weight:700;
  }
  .tab-control-item.active span {
    border-bottom: 3px solid red;
    padding: 8px
  }
</style>
<template>
  <div>
    <slot></slot>
    <p>测试</p>
  </div>
</template>

<script>
  export default {
    name: "slotBox",
    props: ['data'],
    created() {
      console.log(this.data)
    },
    watch: {
      data: {
        handler() {
          console.log(this.data, this.data.index)
        },
        deep: true
      }
    }
  }
</script>

<style scoped>
  p {
    margin-top: 15px;
  }
</style>

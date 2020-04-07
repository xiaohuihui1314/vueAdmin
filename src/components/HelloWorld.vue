<template>
  <div>
<!--    <item :data="list"/>-->
<!--    <item :data="list"/>-->
  </div>
</template>
<script>
  import item from './item'

  export default {
    components: {
      item
    },
    data() {
      return {
        list: [
          {index: 1, name: '1'},
          {index: 2, name: '2'},
          {index: 3, name: '3'},
          {index: 4, name: '4'},
          {
            index: 5,
            name: '5'
          }]
      }
    },
    mounted() {
      setInterval(() => {
        this.list = this.list.map((item, index) => {
          const random = Math.floor(Math.random() * 4);
          console.log(index,item)
          if (random === index) {
            item.index = item.index + 1
          }
          return item
        })
      }, 5000)
    }
  }
</script>




<template>
  <div>
    <ul>
      <li v-for="(item, i) in data" :key="i">
        <slotComponent class="slot-box" :data="item">
          <div class="title">
            {{item.index}}
          </div>
        </slotComponent>
      </li>
    </ul>
  </div>
</template>
<script>
  export default {
    props: ['data'],
    data() {
      return {
        list: [1, 2, 3, 4, 5]
      }
    }
  }
</script>
<style lang="less" scoped>
  ul, li {
    list-style: none;
  }

  ul {
    display: flex;

    li {
      flex: 1;
      padding: 22px;
      border: 1px solid #ddd;
      .title{
        color: #f00;
      }
    }
  }
</style>




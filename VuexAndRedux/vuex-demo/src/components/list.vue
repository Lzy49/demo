<template>
  <div class="list">
    我今天的任务
    <ul>
      <li v-for="(item,index) in list" :key="index"> {{item}} </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'list',
  data(){
    return {
      list:this.$store.getters.todolist
    }
  }
}
</script>
<style scoped>
  .list ul{
    border: 1px solid #eee;
  }
  .list li{
    border-bottom: 1px solid #eee;
  }
  .list li:last-of-type{
    border-bottom: 0;
  }
</style>
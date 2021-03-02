<template>
  <div id="app">
    <List />
    <AddTodo />
  </div>
</template>

<script>
import AddTodo from './components/addTodo.vue'
import List from './components/list.vue'

export default {
  name: 'App',
  components: {
    List,
    AddTodo
  },
  mounted(){
   
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

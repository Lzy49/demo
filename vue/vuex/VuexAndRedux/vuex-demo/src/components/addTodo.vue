<template>
  <div class="hello">
    新增任务 <input v-model="value" placeholder="任务名称"> <button @click="add()" > + </button>
  </div>
</template>

<script>
export default {
  name: 'addTodo',
  data(){
    return {
      value:''
    }
  },
  methods:{
    add(){
      this.$store.dispatch('addTodo',this.value)
    }
  }
}
</script>
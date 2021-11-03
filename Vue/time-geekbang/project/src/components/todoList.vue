<template>
  <h1>to do</h1>
  <input v-model="value" @keydown.enter="add" />
  <ul>
    <li v-for="(item, index) of list" :key="index">
      <input type="checkbox" v-model="item.done" />
      {{ item.title }}
    </li>
  </ul>
  <div>
    <input type="checkbox" v-model="clear" /> 全部完成 {{ all }}/{{
      list.length
    }}
  </div>
</template>
<script setup lang="ts">
import { ref, computed } from 'vue';
interface Task {
  title: string;
  done: boolean;
}
const value = ref<string>('');
const list = ref<Task[]>([]);
function add() {
  list.value.push({
    title: value.value,
    done: false
  });
}
const all = computed(() => {
  return list.value.filter((item) => item.done).length;
});
const clear = computed({
  get() {
    return all.value == list.value.length;
  },
  set(v: boolean) {
    console.log(list.value[0].done);
    list.value.forEach((item, index) => {
      item.done = v;
    });
  }
});
</script>

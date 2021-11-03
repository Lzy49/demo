<template>
  <div>
    <input type="text" v-model="thing" @keydown.enter="addTodo" />
  </div>
  <ul v-if="all !== 0">
    <li v-for="(item, index) in list" :key="index" :class="{ done: item.done }">
      <input type="checkbox" v-model="item.done" /> {{ item.label }}
    </li>
  </ul>
  <div v-else>暂无数据</div>

  <div>
    全选<input type="checkbox" v-model="check" />{{ done }} /
    {{ all }}
  </div>
</template>
<script setup lang="ts">
import { computed, ref } from 'vue';
import useStorage from './useStorage';
interface DoingItem {
  done: boolean;
  label: string;
}
const list = useStorage<DoingItem>('todoList');
console.log(list.value);
const thing = ref<string>(''); // 某事
const all = computed(() => list.value.length);
const done = computed(
  () => list.value.filter((item) => item.done === true).length
);
function addTodo() {
  list.value.push({
    label: thing.value,
    done: false
  });
  thing.value = '';
}
const check = computed<boolean>({
  set(v) {
    list.value.forEach((element, index) => {
      list.value[index].done = v;
    });
  },
  get() {
    return done === all;
  }
});
</script>

<style scoped>
.done {
  text-decoration: line-through;
}
</style>

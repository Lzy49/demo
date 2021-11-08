<template>
  <h2>使用 myVuex 玩</h2>
  {{ store.state.count }}
  <button @click="set">按钮</button>
</template>
<script setup lang="ts">
import { computed } from 'vue';
import { useStore } from './myVuex/vuex/index';
const store = useStore();
console.log('喝点', store.state);
const set = () => {
  store.commit('setName', 20);
};
// const value = computed({
//   get() {
//     return store.state.num;
//   },
//   set(v: number) {
//     store.commit('setNum', v);
//   }
// });
</script>

<template>
  <h2>使用 vuex 玩</h2>
  <input type="number" v-model="value" />
  <div>{{ $store.state.num }} * 2 = {{ $store.getters.count }}</div>
</template>
<script setup lang="ts">
import { computed } from 'vue';
import { useStore } from 'vuex';
import { key } from './vuex/index';
const store = useStore(key);
console.log(store);
const value = computed({
  get() {
    return store.state.num;
  },
  set(v: number) {
    store.commit('setNum', v);
  }
});
</script>

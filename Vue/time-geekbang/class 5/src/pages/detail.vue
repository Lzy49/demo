<template>
  <div>详情</div>
  <Todo />
  <div class="position">当前鼠标坐标:{{ x }},{{ y }}</div>
</template>
<script setup lang="ts">
// 体现 vue3 与 vue2 巨大区别 ，模块化，重组合
import { computed } from '@vue/reactivity';
import Todo from '../components/todoList.vue';
import usemouse from '../utils/mouse';
let { x, y } = usemouse();
const color = computed(() => (x.value % 2 === 0 ? 'red' : 'blue'));
</script>
<style scoped>
.position {
  color: v-bind('color');
}
</style>

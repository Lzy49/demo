<template>
  <div>
    <h1>08 | 组件化：如何像搭积木一样开发网页</h1>
    <Rate v-model:value="value"></Rate>
  </div>
</template>
<script setup lang="ts">
import Rate from './Rate.vue';
import { ref } from 'vue';
const value = ref<number>(0);
</script>

<template>
  <div>
    <h3>练习1</h3>
    <div>
      <transition name="fade">
        <div v-if="show">233</div>
      </transition>
      <button @click="show = !show">切换</button>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from '@vue/reactivity';
const show = ref<Boolean>(false);
</script>
<style>
.fade-enter-active {
  transition: opacity .5s ease;
}
.fade-enter-from {
  opacity: 0;
}
.fade-enter-to {
  opacity: 1;
}
.fade-leave-active {
  transition: opacity .5s ease;
}
.fade-leave-from {
  opacity: 1;
}
.fade-leave-to {
  opacity: 0;
}
</style>

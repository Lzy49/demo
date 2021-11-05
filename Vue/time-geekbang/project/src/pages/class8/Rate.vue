<template>
  <div class="rate">
    <div>
      <span v-for="item in 5" :key="item" @mousemove="move(item)"> ☆ </span>
    </div>
    <div>
      <span v-for="item in 5" :key="item" @mousemove="move(item)"> ★ </span>
    </div>
  </div>
</template>
<script setup lang="ts">
import { computed, ref } from 'vue';
interface Props {
  value: number;
}
const props = withDefaults(defineProps<Props>(), {});
const emits = defineEmits(['update:value']);
const width = computed(() => {
  return props.value * 20 + '%';
});
function move(e: number) {
  emits('update:value', e);
}
</script>
<style lang="scss" scoped>
.rate {
  display: inline-block;
  height: 20px;
  font-size: 20px;
  position: relative;
  > div {
    width: 100%;
    height: 100%;
    line-height: 20px;
    letter-spacing: 0;
  }
  > div:last-of-type {
    top: 0;
    left: 0;
    position: absolute;
    width: v-bind('width');
    overflow: hidden;
  }
  span {
    width: 28px;
  }
}
</style>

<template>
  <div class="todoList">
    <transition name="error">
      <div class="error" v-if="error">您没有任何输入～</div>
    </transition>
    <div>
      <input v-model="value" @keydown.enter="add" />
    </div>
    <transition-group tag="ul" name="list">
      <li v-for="(item, index) in list" :key="item.label">
        <input type="checkbox" v-model="item.done" />
        {{ item.label }}
        <span :data-index="index" @click="del">❌</span>
      </li>
    </transition-group>
    <div class="animation">
      <div class="bin">🗑</div>
      <transition name="rubbish" v-if="deling">
        <div class="rubbish">📃</div>
      </transition>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, reactive } from 'vue';
const value = ref<string>('');
interface Thing {
  done: boolean;
  label: string;
}
const list = reactive<Thing[]>([]);
const error = ref<boolean>(false);
function add() {
  if (value.value === '') {
    error.value = true;
    setTimeout(() => (error.value = false), 1000);
    return;
  }
  list.push({
    done: false,
    label: value.value
  });
  value.value = '';
}
interface Position {
  left: string;
  top: string;
}
const position = reactive<Position>({
  left: '0px',
  top: '0px'
});
const deling = ref<boolean>(false);
function del(e: Event) {
  const item = e.target.getBoundingClientRect();
  console.log(item);
  position.top = item.top + 'px';
  position.left = item.left + 'px';
  // position.value.right =
  // console.log(e.);
  // list.splice(index, 1);
  // getBoundingClientRect();
}
</script>

<style lang="scss">
.error {
  background-color: pink;
  color: #fff;
  height: 100px;
  width: 200px;
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.error-enter-from {
  opacity: 0;
}
.error-enter-to {
  opacity: 1;
}
.error-enter-active {
  transition: 0.5s opacity ease;
}
.error-leave-from {
  opacity: 1;
}
.error-leave-to {
  opacity: 0;
}
.error-leave-active {
  transition: 0.5s opacity ease;
}

.list-enter-active,
.list-leave-active {
  transition: all 1s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
.todoList {
  width: 500px;
  padding: 20px;
  .bin {
    position: absolute;
    right: 20px;
    top: 20px;
  }
  .rubbish {
    position: absolute;
    left: v-bind('position.left');
    top: v-bind('position.top');
  }
  .rubbish-leave-active {
    transition: 1s all ease;
  }
  .rubbish-leave-from {
    left: v-bind('position.left');
    top: v-bind('position.top');
  }
  .rubbish-leave-to {
    right: 20px;
    top: 20px;
  }
}
</style>

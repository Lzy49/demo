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
        <span @click="del($event, index)">❌</span>
      </li>
    </transition-group>
    <div class="animation">
      <div class="bin">🗑</div>
      <transition
        @before-enter="beforeEnter"
        @enter="enter"
        @after-enter="afterEnter"
        name="rubbish"
      >
        <div v-show="animate.show" class="rubbish">📃</div>
      </transition>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, reactive, RendererElement } from 'vue';
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
interface RemoveTodo {
  show: boolean;
  el: Element | null;
}
const animate = reactive<RemoveTodo>({
  show: false,
  el: null
});
function del(e: Event, index: number) {
  animate.el = e.target as Element;
  animate.show = true;
  list.splice(index, 1);
}
function beforeEnter(el: RendererElement) {
  let dom = animate.el as HTMLElement;
  let rect = dom.getBoundingClientRect();
  let x = window.innerWidth - rect.left - 16 - 30;
  let y = rect.top - 26 - 10;
  el.style.transform = `translate(-${x}px, ${y}px)`;
}
function enter(el: RendererElement, done: any) {
  document.body.offsetHeight;
  el.style.transform = `translate(0,0)`;
  el.addEventListener('transitionend', done);
}
function afterEnter(el: RendererElement) {
  animate.show = false;
  el.style.display = 'none';
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
  .animation {
    position: fixed;
    right: 10px;
    top: 10px;
    z-index: 100;
    .rubbish {
      position: absolute;
      top: 0;
      transition: all 0.5s linear;
    }
  }
}
</style>

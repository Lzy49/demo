import { ref, onMounted, onUnmounted } from 'vue';
export default () => {
  const x = ref(0);
  const y = ref(0);
  onMounted(() => {
    window.addEventListener('mousemove', update);
  });
  onUnmounted(() => {
    window.removeEventListener('mousemove', update);
  });

  function update(e: MouseEvent) {
    x.value = e.pageX;
    y.value = e.pageY;
  }
  return { x, y };
};

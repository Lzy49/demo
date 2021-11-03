import { ref, watchEffect } from 'vue';
export default <T>(name: string) => {
  const storage = window.localStorage;
  let data = ref<T[]>(JSON.parse(storage.getItem(name) || '[]'));
  watchEffect(() => {
    storage.setItem(name, JSON.stringify(data.value));
  });
  return data;
};

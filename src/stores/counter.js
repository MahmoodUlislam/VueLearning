import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  const doubleCount = computed(() => count.value * 2)
  function increment() {
    count.value++
  }

  return { count, doubleCount, increment }
})


export const useModalData = defineStore('modal', () => {
  const message = ref('Hello from the store!');

  const print = () => {
    console.log(message.value);
  };

  return { message, print };
});
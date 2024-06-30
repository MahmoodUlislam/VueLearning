<style lang="scss" scoped>
@import url('./ModalStyles.scss');
</style>
<script setup>
import { useModalData } from '@/stores/counter.js'
import { ref } from 'vue'
const open = ref(false)
const store = useModalData()
</script>

<template>
  <button @click="open = true">Open Modal</button>

  <Teleport to="body">
    <div v-if="open" class="modal">
      <button @click="open = false">X</button>
      <div class="modal-content">
        <slot></slot>
        <h1>{{ store.message }}</h1>
        {{ store.print() }}
      </div>
    </div>
  </Teleport>
</template>

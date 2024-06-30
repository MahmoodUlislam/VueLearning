<style lang="scss" scoped>
@import url('./Global.scss');
</style>
<script setup>
import { ref } from 'vue'
import ButtonComponent from './components/buttonComponent/ButtonCustom.vue'
import FormComponent from './components/formComponent/FormCustom.vue'
// import ModalComponent from './components/modalComponent/ModalCustom.vue'
import ModalComponent from './components/modalComponent/ModalCustom.vue'

const msg = ref('Hello World!')

const handleClick = () => {
  console.log('clicked')
}
</script>

<template>
  <div class="container">
    <h1 class="title">{{ msg }}</h1>
    <input v-model="msg" />
    <ButtonComponent @click="handleClick"> click me </ButtonComponent>
    <FormComponent />
    <ModalComponent>
      <h2>Modal Title</h2>
      <p>Modal Content goes here.</p>
    </ModalComponent>
  </div>
</template>

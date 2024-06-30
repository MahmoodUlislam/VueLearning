<style lang="scss" scoped>
@import url('./Global.scss');
</style>
<script setup>
import { ref } from 'vue'
import APIdata from './components/apiData/APIdata.vue'
import ButtonComponent from './components/buttonComponent/ButtonCustom.vue'
import FormComponent from './components/formComponent/FormCustom.vue'
import ModalComponent from './components/modalComponent/ModalCustom.vue'
import TableWithSearchComponent from './components/tableWithSearch/TableWithSearch.vue'

const msg = ref('Hello World!')

const user = [
  {
    name: 'John Doe',
    age: 30
  },
  {
    name: 'Jane Doe',
    age: 25
  }
]

const keywords = ['John', 'Jane']

const handleClick = () => {
  console.log('clicked')
}
</script>

<template>
  <div class="container">
    <h1 class="title">{{ msg }}</h1>
    <input v-model="keywords" />

    <ButtonComponent @click="handleClick"> click me </ButtonComponent>

    <FormComponent />

    <ModalComponent>
      <h2>Modal Title</h2>
      <p>Modal Content goes here.</p>
    </ModalComponent>

    <TableWithSearchComponent :testUser="user" :searchParams="keywords" />

    <APIdata />
  </div>
</template>

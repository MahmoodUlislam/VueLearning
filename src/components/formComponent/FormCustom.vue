<style lang="scss" scoped>
@import url('./FormStyle.scss');
</style>
<script setup>
import { ref } from 'vue'

const formData = ref({
  name: '',
  email: '',
  password: ''
})

const handleSubmit = () => {
  console.log(formData.value)
}
</script>

<template>
  <form class="formContainer" @submit.prevent="handleSubmit">
    <input type="text" placeholder="Name" v-model="formData.name" autocomplete="name" />
    <input type="email" placeholder="Email" v-model="formData.email" autocomplete="email" />
    <input
      type="password"
      placeholder="Password"
      v-model="formData.password"
      autocomplete="current-password"
    />
    <button type="submit">Submit</button>
  </form>
</template>

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
  const { name, email, password } = formData.value

  if (!name || !email || !password) {
    alert('Please fill in all fields')
    return
  }

  fetch('http://localhost:3000/', {
    method: 'POST',
    body: JSON.stringify(formData.value),
    headers: {
      'Content-type': 'application/json; charset=UTF-8'
    }
  })
    .then((response) => response.json())
    .then((data) => {
      console.log('Success:', data)
    })
    .catch((error) => {
      console.error('Error:', error)
    })
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

<style lang="scss" scoped>
@import url('./APIdataStyles.scss');
</style>

<script setup>
import { onMounted, ref } from 'vue'

// Create a ref to store the API data
const apiData = ref(null)
const loading = ref(true)
const error = ref(null)

// Function to fetch data from a dummy API
const fetchData = async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/1')
    if (!response.ok) {
      throw new Error('Network response was not ok')
    }
    const data = await response.json() // Parse the JSON response
    apiData.value = data // Store the parsed data in the ref
  } catch (err) {
    error.value = err.message
  } finally {
    loading.value = false
  }
}

// Fetch data when the component is mounted
onMounted(() => {
  fetchData()
})
</script>

<template>
  <div class="container">
    <h1 class="title">
      API
      <span class="subtitle">Data</span>
    </h1>
    <div class="apiData">
      <div class="apiData__container">
        <div class="apiData__container--header">
          <h2>{{ apiData?.title }}</h2>
        </div>
        <div class="apiData__container--content">
          <p>{{ apiData?.body }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

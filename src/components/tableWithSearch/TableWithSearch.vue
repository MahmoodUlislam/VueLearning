<style lang="scss" scoped>
@import url('./TableWithSearchStyles.scss');
</style>

<script setup>
import { useUserStore } from '@/stores/counter.js'
import { computed, ref } from 'vue'

const store = useUserStore()
const searchQuery = ref('')

const props = defineProps({
  testUser: Array,
  searchParams: String
})

console.log(props.testUser, props.searchParams)
// Computed property to filter users based on the search query
const filteredUsers = computed(() => {
  return props.testUser.filter((user) => {
    return user.name.toLowerCase().includes(searchQuery.value?.toLowerCase())
  })
})
</script>

<template>
  <div v-if="store.user.length !== 0" class="container">
    <input type="text" v-model="searchQuery" placeholder="Search..." class="search" />
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Age</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in filteredUsers" :key="user.name">
          <td>{{ user.name }}</td>
          <td>{{ user.age }}</td>
        </tr>
      </tbody>
    </table>
  </div>
  <div v-else class="noData">
    <p>No data found</p>
  </div>
</template>

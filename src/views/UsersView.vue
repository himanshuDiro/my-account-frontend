<!-- src/views/UsersView.vue -->
<template>
  <div class="users">
    <h1>Users</h1>
    <div v-if="loading" class="loading">Loading users...</div>
    <div v-else-if="error" class="error">{{ error }}</div>
    <div v-else>
      <UserList :users="users" />
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'
import UserList from '../components/UserList.vue'
import { fetchUsers } from '../services/userService'

export default {
  components: {
    UserList
  },
  setup() {
    const users = ref([])
    const loading = ref(true)
    const error = ref(null)

    onMounted(async () => {
      try {
        users.value = await fetchUsers()
      } catch (err) {
        error.value = 'Failed to load users: ' + err.message
      } finally {
        loading.value = false
      }
    })

    return {
      users,
      loading,
      error
    }
  }
}
</script>

<style scoped>
.users {
  padding: 20px;
  max-width: 1000px;
  margin: 0 auto;
}

h1 {
  color: #4a5568;
  margin-bottom: 20px;
}

.loading {
  text-align: center;
  padding: 20px;
  font-style: italic;
  color: #718096;
}

.error {
  color: #e53e3e;
  padding: 10px;
  background-color: #fff5f5;
  border: 1px solid #fc8181;
  border-radius: 4px;
  margin: 10px 0;
}
</style>
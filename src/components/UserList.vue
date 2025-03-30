<!-- src/components/UserList.vue -->
<template>
  <div class="user-list">
    <p v-if="users.length === 0" class="no-users">No users found.</p>
    <table v-else class="users-table">
      <thead>
        <tr>
          <th>ID</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Notifications</th>
          <th>New Dashboard</th>
          <th>Timezone</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user.id">
          <td>{{ user.id }}</td>
          <td>{{ user.firstName }}</td>
          <td>{{ user.lastName }}</td>
          <td>{{ user.email }}</td>
          <td>{{ user.settings?.isNotificationEnabled ? 'Enabled' : 'Disabled' }}</td>
          <td>{{ user.settings?.isNewDashboardEnabled ? 'Enabled' : 'Disabled' }}</td>
          <td>{{ user.settings?.timezone }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  props: {
    users: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>
.user-list {
  margin-top: 20px;
}

.no-users {
  text-align: center;
  font-style: italic;
  color: #718096;
}

.users-table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 10px;
}

.users-table th, 
.users-table td {
  padding: 12px;
  text-align: left;
  border-bottom: 1px solid #e2e8f0;
}

.users-table th {
  background-color: #f7fafc;
  font-weight: bold;
  color: #4a5568;
}

.users-table tr:hover {
  background-color: #f7fafc;
}
</style>
<template>
  <user-form @create="createUser" />
  <button @click="fetchUsers" class="btn btn-fetch">Fetch users</button>
  <user-list :users="users" @remove="removeUser" />
</template>

<script>
import axios from 'axios'
import userForm from '../components/UserForm'
import userList from '../components/UserList'
export default {
  components: {
    userList,
    userForm
  },
  data() {
    return {
      users: [],
      id: 0,
    }
  },
  methods: {
    createUser(data) {
      const user = {
        name: data.name,
        email: data.email,
        phone: data.phone,
        id: this.id++,
      }
      this.users.push(user)
    },
    removeUser(userToDelete) {
      this.users = this.users.filter(user => user.id !== userToDelete.id)
    },
    async fetchUsers() {
      const res = await axios.get("https://jsonplaceholder.typicode.com/users?_limit=10")
      this.users = res.data
      this.id = this.users.length
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.btn-fetch {
  background-color: rgb(81, 209, 81);
  margin-top: 30px;
}
</style>

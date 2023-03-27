<template>
  <h3>Add user</h3>
  <form @submit.prevent>
    <input type="text" v-model="user.name" placeholder="user name" />
    <input type="email" v-model="user.email" placeholder="user email" />
    <input type="text" v-model="user.phone" placeholder="user phone" />
    <button @click="create" class="btn btn-add">Add new user</button>
  </form>
</template>

<script>

export default {
  name: 'user-form',
  data() {
    return {
      user: {
        name: '',
        email: '',
        phone: ''
      }
    }
  },
  methods: {
    create() {
      this.$emit('create', this.user),
        this.user = {
          name: '',
          email: '',
          phone: ''
        }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.btn-add {
  background-color: aquamarine;
}

input {
  margin-right: 15px;
  padding: 5px 10px;
  border-radius: 5px;
}
</style>

<template>
  <h3>User's list</h3>
  <div v-if="users.length === 0">
    Not data
  </div>
  <div v-else class="wrap">
    <user-item v-for="user in users" :user="user" :key="user.id" @remove="$emit('remove', user)" />
  </div>
</template>

<script>
import userItem from './UserItem';
export default {
  components: {
    userItem
  },
  name: 'user-list',
  props: {
    users: {
      type: Array,
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.wrap {
  margin-top: 50px;
}
</style>

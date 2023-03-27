<template>
  <div>
    <h3>User id = {{ $route.params.id }}</h3>
    <user-item
      :user="$store.state.users[$route.params.id]"
    />
  </div>
</template>

<script>
// import userItem from '../components/UserItem.vue';
export default {
  // components: {
  //   userItem
  // },
}
</script>

<style></style>
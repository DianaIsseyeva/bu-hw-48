<template>
  <div>
    <button @click="$router.push('/')">Main page</button>
    <button @click="$router.push('/users')">Users page</button>
  </div>
</template>

<script>
  export default {
    name: 'navbar'
  }
</script>
<style>
</style>
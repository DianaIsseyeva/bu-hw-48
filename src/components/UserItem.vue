<template>
  <div class="row">
    <div class="left">
      <p>Name: {{ user.name }}</p>
      <p>Email: {{ user.email }}</p>
      <p>Phone: {{ user.phone }}</p>
    </div>
    <div>
      <button @click="$emit('remove', user)" class="btn btn-del">Delete</button>
    </div>
  </div>
</template>

<script>

export default {
  name: 'user-item',
  props: {
    user: {
      type: Object,
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
p {
  margin: 3px;
}

.row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 500px;
  border-bottom: 1px solid grey;
  margin: 20px auto;
}

.left {
  text-align: left;
}

.btn {
  padding: 5px 20px;
  border-radius: 10px;
}

.btn-del {
  background-color: rgb(241, 104, 104);
}</style>

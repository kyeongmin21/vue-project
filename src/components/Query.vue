<template>
  <div>
    <h1>Querys</h1>
    <div>name: {{ $route.query.name }}</div>
    <div>age: {{ $route.query.age }}</div>
  </div>
</template>

<script>
export default {
  name: 'Query',
  created () {
    console.log(this.$route.query.name)
    console.log(this.$route.query.age)
  }
}
</script>

<style scoped>

</style>

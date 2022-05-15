<template>
 <div>
   <h1>Params</h1>

   <h2>params로 받은 데이터</h2>
   <div>name: {{ $route.params.name }}</div>
   <div>age: {{ $route.params.age }}</div>

   <h2>props로 받은 데이터</h2>
   <div>name: {{ name }}</div>
   <div>age: {{ age }}</div>
 </div>
</template>

<script>
export default {
  name: 'Params',
  props: {
    name: {
      type: String,
      default: ''
    },
    age: {
      type: Number,
      default: 0
    }
  },
  created () {
    console.log(this.$route.params.name)
    console.log(this.$route.params.age)
  }
}
</script>

<style scoped>

</style>

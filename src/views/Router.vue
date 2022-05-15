<template>
  <div>
    <button class="btn btn-outline-dark" type="button" @click="clickQuery">query 프로그래밍 방식</button>
    <router-link :to="{ name: 'Query', query: { name: 'Query 선언적 방식', age: 1 } }">
      <button class="btn btn-outline-dark ms-2" type="button">Query 선언적 방식</button>
    </router-link>
    <br><br>
    <button class="btn btn-outline-dark" type="button" @click="clickParams">Params 프로그래밍 방식</button>
    <router-link :to="{ name: 'Params', params: { name: 'Params 선억적 방식', age: 1} }">
      <button class="btn btn-outline-dark ms-2" type="button">Param 선언적 방식</button>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'Router',
  methods: {
    clickQuery () {
      this.$router.push({
        name: 'Query',
        query: { name: 'query 프로그래밍 방식', age: 2 }
      })
    },
    clickParams () {
      this.$router.push({
        name: 'Params',
        params: { name: 'params 프로그래밍 방식', age: 2 }
      })
    }
  }
}
</script>

<style scoped>

</style>

<template>
  <div>
    <h2>Calculate</h2>
    <div>
      <input type="text" v-model="state.num1" @keyup="plusNumbers">
      <span> + </span>
      <input type="text" v-model="state.num2" @keyup="plusNumbers">
      <span> = </span>
      <span>{{ state.result }}</span>
    </div>
  </div>
</template>

<script>
import { reactive } from 'vue'

export default {
  name: 'CompositionAPI',
  setup () {
    const state = reactive({
      num1: 0,
      num2: 0,
      result: 0
    })
    function plusNumbers () {
      state.result = Number(state.num1) + Number(state.num2)
    }
    return {
      state,
      plusNumbers
    }
  }
}
</script>

<style>
</style>

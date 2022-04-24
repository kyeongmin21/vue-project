<template>
  <div>
    <h2>calculator</h2>
    <input type="text" v-model="state.num1">
    <span>+</span>
    <input type="text" v-model="state.num2">
    <span>=</span>
    <span>{{ state.result }}</span>
  </div>
</template>

<script>
import { reactive, computed, toRefs } from 'vue'
function plusCalculator () {
  const state = reactive({
    num1: '',
    num2: '',
    result: computed(() => Number(state.num1) + Number(state.num2))
  })
  return toRefs(state)
}
export default {
  name: 'test1',
  setup () {
    const { num1, num2, result } = plusCalculator()
    return { num1, num2, result }
  }
}
</script>

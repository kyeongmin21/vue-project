<template>
  <div>
    <h2>calculator</h2>
    <input type="text" v-model="num1">
    <span>+</span>
    <input type="text" v-model="num2">
    <span>=</span>
    <span>{{ result }}</span>
  </div>
</template>

<script>
import { computed, reactive, toRefs } from 'vue'

function plus () {
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
    const { num1, num2, result } = plus()
    return { num1, num2, result }
  }
}
</script>

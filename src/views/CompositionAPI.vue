<template>
  <div>
    <h2>Calculate</h2>
    <div>
      <input type="text" v-model="num1" >
      <span> + </span>
      <input type="text" v-model="num2">
      <span> = </span>
      <span>{{ result }}</span>
    </div>
  </div>
</template>

<script>
import { reactive, computed, toRefs } from 'vue'

function plus () {
  const state = reactive({
    num1: 0,
    num2: 0,
    result: computed(() => Number(state.num1) + Number(state.num2))
  })
  return toRefs(state)
}
export default {
  name: 'CompositionAPI',
  setup () {
    const { num1, num2, result } = plus()
    return {
      num1, num2, result
    }
  }
}
</script>

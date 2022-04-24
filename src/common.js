import { reactive, computed, toRefs } from 'vue'

function plus () {
  const state = reactive({
    num1: '',
    num2: '',
    result: computed(() => state.num1 + state.num2)
  })
  return toRefs(state)
}
export default {
  plus
}

<template>
  <div>
    <h2>Calculate</h2>
    <div>
      <input type="text" v-model="state.num1" @keyup="plusNumbers">
      <span> + </span>
      <input type="text" v-model="state.num2" @keyup="minusNumbers">
      <span> = </span>
      <span>{{ state.result }}</span>
    </div>
  </div>
</template>

<script>
import {reactive} from 'vue'

export default {
  name: 'calculate',
  setup () {
    let state = reactive({

    });
  }
}
</script>

<style>
</style>

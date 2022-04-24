<template>
  <CompositionAPIInject/>
</template>

<script>
import { provide } from 'vue'
import CompositionAPIInject from '@/views/CompositionAPIInject'

export default {
  components: {
    CompositionAPIInject
  },
  setup () {
    provide('title', 'hi')
  }
}
</script>

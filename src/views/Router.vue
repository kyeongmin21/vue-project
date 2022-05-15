<template>
  <div>
    <Params/>
    <Query/>
  </div>
</template>

<script>
import Params from '@/components/Params'
import Query from '@/components/Query'

export default {
  name: 'Router',
  components: {
    Params,
    Query
  }
}
</script>

<style scoped>

</style>

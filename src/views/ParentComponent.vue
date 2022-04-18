<template>
  <div>
    <ChildComponent ref="child_component" ></ChildComponent>
  </div>
</template>

<script>
import ChildComponent from '@/views/ChildComponent'

export default {
  name: 'ParentComponent',
  components: {
    ChildComponent
  },
  data () {
    return {}
  },
  mounted () {
    this.$refs.child_component.$refs.btn.click()
  }
}
</script>

<style>
</style>

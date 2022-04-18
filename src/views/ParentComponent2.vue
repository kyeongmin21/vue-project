<template>
  <div>
    <child-component ref="child_component" />
  </div>
</template>

<script>
import ChildComponent from '@/views/ChildComponent2'

export default {
  name: 'ParentComponent2',
  components: {
    ChildComponent
  },
  data () {
    return {}
  },
  mounted () {
    this.$refs.child_component.callFromParent()
  }
}
</script>

<style>
</style>

<template>
  <div>
    <child-component ref="child_component" @send-message="sendMessage" />
  </div>
</template>

<script>
import ChildComponent from '@/views/ChildComponent2'

export default {
  name: 'ParentComponent',
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

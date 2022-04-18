<template>
  <div>
    <child-component @send-msg="sendMsg" />
  </div>
</template>

<script>
import ChildComponent from '@/views/ChildComponent4'

export default {
  name: 'ParentComponent4',
  components: {
    ChildComponent
  },
  data () {
    return {}
  },
  methods: {
    sendMsg (data) {
      console.log(data)
    }
  }
}
</script>

<style>
</style>

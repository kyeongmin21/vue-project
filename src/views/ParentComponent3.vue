<template>
  <div>
    <child-component ref="child_component" />
    <button type="button" @click="changeChildData">Change Child Data</button>
  </div>
</template>

<script>
import ChildComponent from '@/views/ChildComponent3'

export default {
  name: 'ParentComponent3',
  components: {
    ChildComponent
  },
  data () {
    return {}
  },
  methods: {
    changeChildData () {
      this.$refs.child_component.msg = '부모 컴포넌트가 변경한 데이터'
    }
  }
}
</script>

<style>
</style>

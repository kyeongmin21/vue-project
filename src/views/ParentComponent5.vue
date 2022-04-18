<template>
  <div>
    <button type="button" @click="checkChild">부모꺼:자식 컴포넌트 데이터 조회</button>
    <child-component ref="child_component" />
  </div>
</template>

<script>
import ChildComponent from '@/views/ChildComponent5'

export default {
  name: 'ParentComponent5',
  components: {
    ChildComponent
  },
  computed: {
    msg () {
      return this.$refs.child_component.msg
    }
  },
  methods: {
    checkChild () {
      console.log(this.msg)
    }
  }
}
</script>

<style>
</style>

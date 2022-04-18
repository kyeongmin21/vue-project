<template>
  <div>
   <ChildComponent></ChildComponent>
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
    return {

    }
  },
  methods: {
    childFunc () {
      console.log('부모 컴포넌트에서 직접 발생시킨 이벤트')
    }
  }
}
</script>

<style>
</style>

<template>
  <div>
    <button type="button" @click="childFunc">click</button>
  </div>
</template>

<script>
export default {
  name: 'NestedComponent',
  components: {

  },
  data () {
    return {

    }
  },
  methods: {
    childFunc() {
      console.log('부모 컴포넌트에서 직접 발생시킨 이벤트')
    }
  }
}
</script>

<style>
</style>

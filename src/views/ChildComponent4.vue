<template>
  <div>
    <h3>{{ msg }}</h3>
  </div>
</template>

<script>
export default {
  name: 'ChildComponent',
  components: {},
  data () {
    return {
      msg: '자식 컴포넌트4로부터 보내는 메세지'
    }
  },
  mounted () {
    this.$emit('send-msg', this.msg)
  }
}
</script>

<style>
</style>

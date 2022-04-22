<template>
  <p>Count: {{ count }}</p>
  <button type="button" @click="increment">증가 버튼</button>
</template>

<script>
export default {
  name: 'StoreAccess',
  data () {
    return {
    }
  },
  computed: {
    count () {
      return this.$store.state.count
    }
  },
  methods: {
    increment () {
      this.$store.commit('increment')
    }
  }
}
</script>

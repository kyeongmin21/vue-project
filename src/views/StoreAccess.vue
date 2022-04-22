<template>
  <p>Count: {{ count }}</p>
  <button type="button" @click="increment">증가 버튼</button>
</template>

<script>
export default {
  name: 'StoreAccess',
  computed: {
    count () {
      return this.$store.state.count
    },
    cartCount () {
      return this.$store.state.cartCount
    }
  },
  methods: {
    increment () {
      this.$store.commit('increment')
    }
  }
}
</script>

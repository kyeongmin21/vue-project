<template>
    <component :is="layout">
      <slot/>
    </component>
</template>

<script>
export default {
  name: 'BaseLayout',
  computed: {
    layout () {
      const layout =  this.$route.meta.layout || 'DefaultLayout'
      return () => import(`@/layouts/${layout}.vue`)
    }
  }
}
</script>
<style>

</style>

<template>
  <div>
    <PageTitle :title="[1,2,3]"></PageTitle>
  </div>
</template>

<script>
import PageTitle from '@/components/PageTitle'

export default {
  name: 'NestedComponent',
  components: { PageTitle },
  data () {
    return {

    }
  },
  computed: {},
  watch: {},
  methods: {}
}
</script>

<style>

</style>

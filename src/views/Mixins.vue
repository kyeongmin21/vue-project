<template>
  <div>
  </div>
</template>

<script>
import Apimixin from '@/api.js'

export default {
  mixins: [Apimixin],
  // mounted () {
  //   console.log('믹스인 mounted')
  // },
  // unmounted () {
  //   console.log('믹스인 unmounted')
  // }
  data () {
    return {
      productList: []
    }
  },
  async mounted () {
    this.productList = await this.$callAPI('https://573a9775-b6c0-4e52-a8e0-2a84aae27a83.mock.pstmn.io/test', 'get')
    console.log(this.productList)
  }
}
</script>

<template>
  <div class="baseWrap" >
    <Header/>
    <div class="wrap">
      <slot/>
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header'

export default {
  name: 'DefaultLayout',
  components: {
    Header
  }
}
</script>

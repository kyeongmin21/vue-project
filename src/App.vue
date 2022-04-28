<template>
  <div id="app">
    <div id="nav">
      <div class="baseWrap">
        <Header></Header>
        <div class="wrap">
          <router-view/>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import Header from '@/layouts/Header'

export default {
  name: 'App',
  components: {
    Header
  }
}
</script>

<style>
@import "/css/style.css";
@import "/css/reset.css";
</style>

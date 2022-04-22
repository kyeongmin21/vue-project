<template>
  <div class="home">
    <img alt="Vue logo" src="@/assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <KakaoLogin/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import KakaoLogin from '@/views/KakaoLogin'

export default {
  name: 'Home',
  components: {
    HelloWorld,
    KakaoLogin
  }
}
</script>

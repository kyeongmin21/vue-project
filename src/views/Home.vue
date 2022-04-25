<template>
  <div class="home">
    <img alt="Vue logo" src="@/assets/logo.png">
    <KakaoLogin/>
    <NaverLogin/>
  </div>
</template>

<script>
import KakaoLogin from '@/views/KakaoLogin'
import NaverLogin from '@/views/NaverLogin'

export default {
  name: 'Home',
  components: {
    KakaoLogin,
    NaverLogin
  }
}
</script>

<template>
  <div class="home">
    <KakaoLogin/><br><br>
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

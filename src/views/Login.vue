<template>
  <div>
    <a id="custom-login-btn" @click="KakaoLogin()">
      <img src="//k.kakaocdn.net/14/dn/btqCn0WEmI3/nijroPfbpCa4at5EIsjyf0/o.jpg"
           width="222"
           alt="카카오로그인">
    </a>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
    }
  },
  methods: {
    KakaoLogin () {
      window.Kakao.Auth.login({
        scope: 'profile_nickname, profile_image',
        success: this.getKakaoAcount
      })
    },
    getKakaoAcount () {
      window.Kakao.API.request({
        url: '/v2/user/me',
        success: res => {
          const kakaoAccount = res.kakaoAccount
          const nickname = kakaoAccount.nickname
          const image = kakaoAccount.email
          console.log('nickname', nickname)
          console.log('image', image)
          alert('로그인 성공')
        },
        fail: error => {
          console.log(error)
        }
      })
    }
  }
}
</script>

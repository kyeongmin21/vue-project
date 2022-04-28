<template>
  <div>
    <a id="custom-login-btn" @click="kakaoLogin">
      <img src="//k.kakaocdn.net/14/dn/btqCn0WEmI3/nijroPfbpCa4at5EIsjyf0/o.jpg"
           width="222"
           alt="카카오로그인" />
    </a>
    <br>
    <button type="button" class="kakaoBtn" @click="kakaoLogout">카카오 로그아웃</button>
    <br>
  </div>
</template>

<script>
export default {
  name: 'KakaoLogin',
  data () {
    return {
    }
  },
  methods: {
    kakaoLogin () {
      window.Kakao.Auth.login({
        scope: 'profile_nickname,profile_image, account_email',
        success: this.getKakaoAccount
      })
    },
    getKakaoAccount () {
      window.Kakao.API.request({
        url: '/v2/user/me',
        success: res => {
          const kakaoAccount = res.kakao_account
          const name = kakaoAccount.profile_nickname
          const image = kakaoAccount.profile_image
          const email = kakaoAccount.account_email
          console.log(name)
          console.log(image)
          console.log(email)
          console.log('로그인 성공', res)
        },
        fail: error => {
          console.log(error)
        }
      })
    },
    kakaoLogout () {
      // eslint-disable-next-line no-undef
      if (!Kakao.Auth.getAccessToken()) {
        console.log('Not logged in.')
        return
      }
      // eslint-disable-next-line no-undef
      Kakao.Auth.logout((response) => {
        alert(response + ' logout')
        window.location.href = '/'
      })
    }
  }
}
</script>

<template>
  <div class="naver">
    <h1>Naver</h1>
    <button type="button" id="naverIdLogin" ></button>
    <button type="button" class="naverBtn naverLogout ms-1" @click="naverLogout" >로그아웃</button>
  </div>

</template>

<script>
import axios from 'axios'

export default {
  name: 'NaverLogin',
  data () {
    return {
      naverLogin: null
    }
  },
  mounted () {
    this.naverLogin = new window.naver.LoginWithNaverId({
      clientId: '1DjPLGm4AX2amePk7Cqq',
      callbackUrl: 'http://localhost:8080/naverlogin',
      isPopup: true,
      loginButton: {
        color: 'green', type: 3, height: 50
      }
    })
    this.naverLogin.init()
    this.naverLogin.getLoginStatus((status) => {
      if (status) {
        console.log('status', status)
        console.log('this.naverLogin.user', this.naverLogin.user)

        const email = this.naverLogin.user.getEmail()
        console.log('email', email)
      } else {
        console.log('callback 처리에 실패하였습니다.')
      }
    })
  },
  methods: {
    naverLogout () {
      const accessToken = this.naverLogin.accessToken.accessToken
      const url = `/oauth2.0/token?grant_type=delete&client_id=zFcLWPMTcDQTNB6iIOy&client_secret=bUW7FZMpS9&access_token=${accessToken}&service_provider=NAVER`
      axios.get(url).then((res) => {
        console.log(res.data)
      })
    }
  }
}
</script>

<style>
@import '/css/style.css';
</style>

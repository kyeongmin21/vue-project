<template>
  <div class="kakao">
    <h1>Kakao</h1>
    <div id="custom-login-btn" @click="kakaoLogin">
      <button type="button" class="kakaoBtn">카카오 로그인</button>
      <button type="button" class="kakaoBtn kakaoLogout ms-1" @click="kakaoLogout">로그아웃</button>
    </div>

    <div class="kakaoMap">
      <div id="map"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'KakaoLogin',
  mounted() {
    window.Kakao.init('3d11e9ddcd1b78eee6b8dec29e8583e4')
    const mapContainer = document.getElementById('map'), // 지도를 표시할 div
      mapOption = {
        center: new kakao.maps.LatLng(37.564343, 126.947613), // 지도의 중심좌표
        level: 3, // 지도의 확대 레벨
      }

    const mapObject = new kakao.maps.Map(mapContainer, mapOption)
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
        window.location.href = 'http://localhost:8080/KakaoLogin'
      })
    }
  }
}
</script>

<template>
  <div>
    <h1>구글 로그인</h1>
    <div id="google-signin-btn"></div>
  </div>
</template>

<script>
export default {
  name: 'GoogleLogin',
  mounted () {
    window.gapi.signin2.render('google-signin-btn', { onsuccess: this.onSignIn })
  },
  methods: {
    onSignIn () {
      // eslint-disable-next-line no-undef
      const profile = googleUser.getBasicProfile()
      console.log(profile.getId())
      console.log(profile.getGivenName())
      console.log(profile.getFamilyName())
      console.log(profile.getImageUrl())
      console.log(profile.getEmail())
      // eslint-disable-next-line camelcase,no-undef
      const id_token = googleUser.getAuthResponse().id_token
      console.log(id_token)
    }
  }
}
</script>

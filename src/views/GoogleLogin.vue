<template>
  <div>
    <h1>구글 로그인</h1>
    <div id="google-signin-btn"></div>
    <br><br>
    <h1>구글맵</h1>
    <GoogleMap api-key="AIzaSyCcESs9ObeJsAfgHcttqttqdaOQGRQ311g" style="width: 100%; height: 500px"
               :center="center"
               :zoom="10">
      <Marker :options="{ position: center }" />
    </GoogleMap>
  </div>
</template>

<script>
import { GoogleMap, Marker } from 'vue3-google-map'

export default {
  name: 'GoogleLogin',
  components: { GoogleMap, Marker },
  data () {
    return {
      // https://www.npmjs.com/package/vue3-google-map
      center: { lat: 37.504449, lng: 127.048860 }
    }
  },
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

<template>
  <div class="google">
    <div>
      <div id="google-signin-btn"></div>
    </div>
    <button type="button" @click="signOut">구글 로그아웃</button>
    <GoogleMap api-key="AIzaSyCcESs9ObeJsAfgHcttqttqdaOQGRQ311g"
               class="googleMap"
               :center="center"
               :zoom="10">
      <Marker :options="{ position: center }"/>
    </GoogleMap>
  </div>
</template>

<script>
import {GoogleMap, Marker} from 'vue3-google-map'

export default {
  name: 'GoogleLogin',
  components: {GoogleMap, Marker},
  mounted() {
    window.gapi.signin2.render("google-signin-btn", {onsuccess: this.onSignIn});
  },
  data() {
    return {
      // https://www.npmjs.com/package/vue3-google-map
      center: {lat: 37.504449, lng: 127.048860}
    }
  },
  methods: {
    onSignIn (googleUser) {
      const profile = googleUser.getBasicProfile()
      console.log('ID: ' + profile.getId())
      console.log('Full Name: ' + profile.getName())
      console.log('Given Name: ' + profile.getGivenName())
      console.log('Family Name: ' + profile.getFamilyName())
      console.log('Image URL: ' + profile.getImageUrl())
      console.log('Email: ' + profile.getEmail())
      const idToken = googleUser.getAuthResponse().id_token
      console.log('ID Token: ' + idToken)
    },
    signOut () {
      window.gapi.auth2.getAuthInstance().disconnect();
    }
  }
}
</script>

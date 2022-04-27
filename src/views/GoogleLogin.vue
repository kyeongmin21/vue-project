<template>
  <div>
    <GoogleMap api-key="AIzaSyCcESs9ObeJsAfgHcttqttqdaOQGRQ311g"
               style="width: 100%; height: 500px"
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
  methods: {
  }
}
</script>

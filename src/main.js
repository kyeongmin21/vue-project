import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import mixins from './mixins'
import VueGoogleMaps from 'vue3-google-map'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"

createApp(App)
  .use(store)
  .use(router)
  .use(VueGoogleMaps, {
    load: {
      key: 'AIzaSyCcESs9ObeJsAfgHcttqttqdaOQGRQ311g',
      libraries: 'places',
      region: 'KR'
    }
  })
  .mixin(mixins)
  .directive('focus', {
    mounted (el) {
      el.focus()
    }
  })
  .mount('#app')

window.Kakao.init('3d11e9ddcd1b78eee6b8dec29e8583e4')

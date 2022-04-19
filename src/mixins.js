import axios from 'axios'

export default {
  methods: {
    async api (url, method, data) {
      return (await axios({
        method: 'get',
        url,
        data
      }).catch(e => {
        console.log(e)
      })).data
    }
  }
}

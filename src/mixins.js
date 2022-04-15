import axios from 'axios'

export default {
  methods: {
    async api (url, method, data) {
      return (await axios({
        method: 'get',
        url: 'https://214db7a1-74cc-4b71-879f-04b14f15e282.mock.pstmn.io/test',
        data: ''
      }).then((response) => {
        console.log(response.data)
      }).catch(e => {
        console.log(e)
      })).data
    }
  }
}

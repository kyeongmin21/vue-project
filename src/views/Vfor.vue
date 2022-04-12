<template>
  <div>
    <!-- v-for -->
    <table>
      <thead>
        <tr>
          <th>제품명</th>
          <th>가격</th>
          <th>카테고리</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(product, i) in productList" :key="i">
          <td>{{ product.name }}</td>
          <td>{{ product.age }}</td>
          <td>{{ product.like }}</td>
        </tr>
      </tbody>
    </table>

    <!-- if, show -->
    <h3 v-if="type === 'A'">A</h3>
    <h3 v-else-if="type === 'B'">B</h3>
    <h3 v-else>C</h3>
    <h3 v-show="show">v-show 가 true이면 보입니다.</h3>

    <!-- 이벤트 처리 -->
    <button @click="up">증가버튼</button>
    <p>the counter :  {{ counter }}</p>

    <!-- change -->
    <select v-model="selectedValue" @change="changeList">
      <option value="서울">서울</option>
      <option value="대구">대구</option>
      <option value="부산">부산</option>
    </select><br>

    <!-- keyup -->
    <input type="text" @keyup.enter="enter">

    <!-- computed / watch -->
    <h3>fullName : {{ fullName }}</h3>
    <button @click="changeName">변경</button>

    <!-- async await -->

  </div>
</template>

<script>
export default {
  name: 'vFor',
  components: {},
  data () {
    return {
      type: 'A',
      show: true,
      counter: 0,
      selectedValue: '서울',
      firstName: 'kim',
      lastName: ' kyeong min',
      fullName: '',
      productList: []
    }
  },
  created () {
    this.getList()
  },
  computed: {
  },
  watch: {
    firstName (newVal, oldVal) {
      this.fullName = this.firstName + '' + this.lastName
      console.log('newVal', newVal)
      console.log('oldVal', oldVal)
    },
    lastName () {
      this.fullName = this.firstName + '' + this.lastName
    }
  },
  methods: {
    async joycoding () {
      return 'async는 function앞에 있어요.'
    },
    async getList () {
      // this.productList = await fetch('https://573a9775-b6c0-4e52-a8e0-2a84aae27a83.mock.pstmn.io/test').then(a => a.json())
      console.log(this.productList)
    },
    up () {
      this.counter += 1
    },
    changeList () {
      console.log(this.selectedValue)
    },
    enter () {
      console.log('keyup event')
    },
    changeName () {
      this.firstName = 'park'
    }
  }
}
</script>

<style>
table { border-collapse: collapse; width: 100%; }
td, th { border: 1px solid #ddd; text-align: center; padding: 8px; }
</style>

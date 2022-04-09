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
          <td>{{ product.name}}</td>
          <td>{{ product.price}}</td>
          <td>{{ product.category}}</td>
        </tr>
      </tbody>
    </table>

  </div>
</template>

<script>
export default {
  name: 'vFor',
  components: {},
  data () {
    return {
      productList: [
        { name: '키보드', price: 25000, category: '노트북' },
        { name: '마우스', price: 25000, category: '노트북' },
        { name: '아이패드', price: 25000, category: '노트북' }
      ]
    }
  },
  computed: {},
  watch: {},
  methods: {}
}
</script>

<style>
table { border-collapse: collapse; width: 100%; }
td, th { border: 1px solid #ddd; text-align: center; padding: 8px; }
</style>

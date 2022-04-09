<template>
  <div>
    <!--문자열 데이터 바인딩-->
    <h3>hello, {{ title }}</h3>
    <div>{{ htmlString }}</div>
    <div v-html="htmlString"></div>

    <!--input type text-->
    <input type="text" v-model="textModel"><br>
    <!-- input type number-->
    <input type="number" v-model.number="numberModel"><br>

    <!-- textarea -->
    <textarea v-model="msg"></textarea><br><br>

    <!-- select -->
    <select name="select" id="box" v-model="city">
      <option value="02">서울</option>
      <option value="053">대구</option>
      <option value="054">부산</option>
    </select><br>

    <!-- checkbox -->
    <input type="checkbox" v-model="checked" true-value="yes" false-value="no"> {{ checked }}<br>

    <!-- radio -->
    <input type="radio" v-model="picked" :value="radioValue1">서울
    <input type="radio" v-model="picked" :value="radioValue2">대구
    <input type="radio" v-model="picked" :value="radioValue3">부산
    <div>선택한 지역 : {{ picked }}</div><br>

    <!-- 버튼 객체의 disabled -->
    <input type="text" v-model="textValue">
    <button type="button" :disabled="textValue === ''">버튼</button><br>

    <!-- 클래스 바인딩 -->
    <div class="container"
        :class="{'active' : isActive, 'text-red' : hasError}" >
        Class Binding
    </div>

    <!-- 스타일 바인딩 -->
    <div :style="styleObject">Style Binding</div>

    <!-- 속성 -->
    <img :src="imgSrc" alt="img">

  </div>
</template>

<script>
export default {
  name: 'dataBinding',
  components: {},
  data () {
    return {
      title: 'world',
      htmlString: '<p>this is red string.</p>',
      textModel: 'korea',
      numberModel: 3,
      msg: '여러줄을 입력할 수 있는 textarea 입니다.',
      city: '02',
      checked: true,
      picked: '',
      radioValue1: '서울',
      radioValue2: '대구',
      radioValue3: '부산',
      imgSrc: 'https://kr.vuejs.org/images/logo.png',
      textValue: '',
      isActive: true,
      hasError: false,
      styleObject: {
        color: 'red'
        // fontSize : '20px'
      }
    }
  },
  computed: {},
  watch: {},
  methods: {}
}
</script>

<style>
.container { width: 100%; height: 100px; }
.active { background-color: lightyellow; font-weight: bold; }
.text-red { color: red; }
</style>

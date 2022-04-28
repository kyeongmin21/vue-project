<template>
  <div class="header">
    <ul>
      <li><router-link to="/">vue.js 스터디 </router-link></li>

      <li><router-link to="/DataBinding">Data Binding</router-link></li>
      <li><router-link to="/vFor">Binding</router-link></li>
      <li><router-link to="/NestedComponent">components</router-link></li>

      <li><router-link to="/ParentComponent">부모/자식</router-link></li>
      <li><router-link to="/ParentComponent2">부모/자식2</router-link></li>
      <li><router-link to="/ParentComponent3">부모/자식3</router-link></li>
      <li><router-link to="/ParentComponent4">부모/자식4</router-link></li>
      <li><router-link to="/ParentComponent5">부모/자식5</router-link></li>

      <li><router-link to="/SlotModalLayout">Slot Modal</router-link></li>
      <li><router-link to="/CompositionAPI">CompositionAPI</router-link></li>
      <li><router-link to="/CompositionAPIProvide">CompositionAPIProvide</router-link></li>
      <li><router-link to="/Mixins">Mixins</router-link></li>
      <li><router-link to="/CustomDirective">CustomDirective</router-link></li>
      <li><router-link to="/StoreAccess">StoreAccess</router-link></li>
      <li><router-link to="/Test1">test</router-link></li>

      <li><router-link to="/KakaoLogin">카카오로그인</router-link></li>
      <li><router-link to="/NaverLogin">네이버로그인</router-link></li>
      <li><router-link to="/GoogleLogin">구글로그인</router-link></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style >

</style>

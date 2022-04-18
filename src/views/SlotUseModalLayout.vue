<template>
  <div>
    <modal-layout>
      <template v-slot:Header>
        <h1>팝업 타이틀</h1>
      </template>
      <template v-slot:default>
        <p>팝업 컨텐츠1</p>
        <p>팝업 컨텐츠2</p>
      </template>
      <template v-slot:Footer>
        <button type="button">닫기</button>
      </template>
    </modal-layout>

  </div>
</template>

<script>
export default {
  name: 'SlotUseModalLayout',
  components: {},
  data () {
    return {
    }
  },
  methods: {
  }
}
</script>

<style>
</style>

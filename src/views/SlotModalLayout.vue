<template>
  <div class="modal-container">
    <header>
      <slot name="header"></slot>
    </header>
    <main>
      <slot></slot>
    </main>
    <footer>
      <slot name="footer"></slot>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'SlotModalLayout',
  components: {},
  data () {
    return {}
  },
  methods: {}
}
</script>

<style>
</style>

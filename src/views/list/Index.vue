<template>
  <div class="cnt">
      <Head :title="'联系人'"/>
      <Tabbar />
  </div>
</template>

<script >
import Vue from 'vue'
import Tabbar from '@/components/tabbar/tabbar.vue'
import Head from '@/components/head/head.vue'

export default Vue.extend({
  name: 'List',
  components: {
      Tabbar,
      Head,
  },
  created() {
    window.addEventListener('wxload', (query) => console.log('page2 wxload', query))
    window.addEventListener('wxshow', () => console.log('page2 wxshow'))
    window.addEventListener('wxready', () => console.log('page2 wxready'))
    window.addEventListener('wxhide', () => console.log('page2 wxhide'))
    window.addEventListener('wxunload', () => console.log('page2 wxunload'))
  },
  methods: {
    onClickJump() {
      window.location.href = '/home'
    },
  },
})
</script>

<style >
</style>

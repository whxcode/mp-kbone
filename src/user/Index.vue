<template>
  <div class="cnt">
    用户页
    <Footer check-reduce :selected="1"></Footer>
    <Footer check-reduce :selected="1"></Footer>
  </div>
</template>

<script>
import Vue from 'vue'
import Footer from '../common/Footer.vue'

export default Vue.extend({
  components: {
    Footer
  },
})
</script>

<style lang="less">
.cnt {
  margin-top: 20px;
}

</style>

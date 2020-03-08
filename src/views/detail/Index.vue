<template>
  <div class="cnt">

  </div>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  name: 'Detail',
  components: {

  },
  created() {

  },
  methods: {
    onClickBack() {
      if (process.env.isMiniprogram) {
        wx.navigateBack()
      }
    },
  },
})
</script>

<style >
.cnt {
  margin-top: 20px;
}

a, button {
  display: block;
  width: 100%;
  height: 30px;
  line-height: 30px;
  text-align: center;
  font-size: 20px;
  border: 1px solid #ddd;
}
</style>

<template>
  <div id="test_com">
    {{msg}}
    <!-- <img src="../assets/imges/bzxs_logo.jpg"> -->
  </div>
</template>

<script>
export default {
  name: 'test_com',
  data () {
    return {
      msg: 'Welcome to Your Vue.js test_com!'
    }
  }
}
</script>

<style type="less" scoped>
#test_com {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  text-align: center;
  color: orange;
  margin-top: 60px;
}
</style>
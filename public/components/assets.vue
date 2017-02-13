<template>
  <div id="assets_com">
    {{msg}}
    <!-- <img src="./imges/logo.png"> -->
  </div>
</template>

<script>
export default {
  name: 'test_com',
  data () {
    return {
      msg: 'assets_com!'
    }
  }
}
</script>

<style type="less" scoped>
#assets_com {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  text-align: center;
  color: orange;
  margin-top: 60px;
}
</style>
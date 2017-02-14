<template>
  <div id="indexHomeWrap">
    {{msg}}
    <!-- <img src="/images/logo.png"> -->
    <div class="homeInnerWrap">I am the childWrap!</div>
  </div>
  <!-- <test-com></test-com> -->
</template>

<script>
// import testCom from "../components/test";

export default {
  name: 'home',
  data () {
    return {
      msg: 'Home!'
    }
  }
}
</script>

<style type="less" scoped>
#indexHomeWrap {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  text-align: center;
  color: black;
  margin-top: 60px;

  .homeInnerWrap {
    color: orange;
  }
}
</style>
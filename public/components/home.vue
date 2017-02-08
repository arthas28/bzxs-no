<template>
  <div id="indexHomeWrap">
    {{msg}}
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

<style scoped>
#indexHomeWrap {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  text-align: center;
  color: black;
  margin-top: 60px;
}
</style>
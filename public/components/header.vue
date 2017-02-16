<template>
  <div class="headerWrap" @click="back">
    &lt;&nbsp;back
  </div>
</template>

<script>
export default {
  name: 'header_com',
  methods: {
    back: function() {
      history.back();
    }
  }
}
</script>

<style lang="less" scoped>
.headerWrap {
  font-size: 20px;
  color: black;
  margin: 10px;
}
</style>
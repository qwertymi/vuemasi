<template>
  <button class="gotop"></button>
</template>

<script>
  import {
    onMounted
  } from 'vue'
  import $ from 'jquery'
  export default {
    setup() {
      onMounted(() => {
        let go_top = $('.gotop');
        go_top.click(function () {
          $('html').animate({
            scrollTop: 0
          }, 1000);
        });
      })
    }
  }
</script>

<style scoped>
  .gotop {
    position: fixed;
    right: 10px;
    bottom: 10px;
    display: block;
    width: 50px;
    height: 50px;
    background: url('@/assets/02_masigray/images/bt-gotop.png') no-repeat center;
    background-size: cover;
    border: 0;
    cursor: pointer;
    z-index: 999;
  }
</style>
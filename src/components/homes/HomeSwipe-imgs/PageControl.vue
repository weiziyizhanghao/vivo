<template>
  <div class="page-content">
    <span class="dot" v-for="num in swiper.length" :key="num" :class="{active: num-1===activeIndex}"></span>
  </div>
</template>
<script>
  export default {
    name: "PageControl",
    props: ['swiper', 'activeIndex']
  }
</script>
<style scoped>
  .page-content {
    position: absolute;
    bottom: 0;
    left: 50%;
    padding: 5px 10px;
    transform: translateX(-50%);
    font-size: 0;
  }

  .page-content .dot {
    margin: 0 6px;
    display: inline-block;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background: #fff;
  }
  .page-content .active {
    background: #fc0;
  }

</style>
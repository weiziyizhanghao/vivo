<template>
  <div>
    <div class="banner">
      <transition-group name="slider">
        <img class="img" v-for="(item,i) in swipers" :key="item.id" v-show="i===showIndex" :src="item.img"/>
      </transition-group>
    </div>
  </div>

</template>
<script>
  export default {
    name: "Banner",
    props: ['swipers', 'showIndex']

  }
</script>
<style scoped>
  .banner {
    position: relative;
    width: 100%;
    height: 256px;
    margin: 10px auto;
    border: 1px solid #ccc;
    overflow: hidden;
  }

  .banner .img {
  	width: 100%;
  	height: 256px;
    display: block;
    position: absolute;
    left: 0;
    top: 0;
  }

  .slider-enter {
    transform: translateX(100%);
  }

  .slider-enter-to, .slider-leave {
    transform: translateX(0);
  }

  .slider-leave-to {
    transform: translateX(-100%);
  }

  .slider-enter-active, .slider-leave-active{
    transition: all .5s linear;
  }


</style>
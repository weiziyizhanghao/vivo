<template>
  <div class="home-swiper">
    <Banner :swipers="swiper" :showIndex="currentIndex"></Banner> 
    <Page-Control :swiper="swiper" :activeIndex="currentIndex"></Page-Control>
  </div>
</template>
<script>
import Banner from './HomeSwipe-imgs/Banner'
import PageControl from './HomeSwipe-imgs/PageControl'
export default {
	name:"HomeSwipe",
	components: {
      Banner,
      PageControl
    },
	data(){
	    return{
	      swiper:[
	        {
	          id:0,img:"https://shopstatic.vivo.com.cn/vivoshop/commodity/20180418/20180418104131830678_original.jpg"
	        },
	        {
	          id:1,img:"https://shopstatic.vivo.com.cn/vivoshop/commodity/20180430/20180430232146894398_original.jpg"
	        }
	      ],
	      currentIndex: 0
	    }
	},
    mounted() {
      this.$nextTick(() => {
        this.timer = setInterval(() => {
          if (this.currentIndex >= this.swiper.length - 1) {
            this.currentIndex = 0
          } else {
            this.currentIndex++
          }
        }, 2000)
      })
    }
}
</script>
<style>
.home-swiper{
	position: relative;
}     
</style>
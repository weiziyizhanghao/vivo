<template>
	<div class="home">
		<div class="Homeheader"><i class="iconfont icon-VIVO"></i></div>
		<div class="official"><img src="/static/img/official.png" alt="图片" style="width: 100%;height:100%"></div>
    <Home-Swipe></Home-Swipe>
		<Home-List></Home-List>
		<Home-Container :todos="todos"></Home-Container>
    <Home-Footer></Home-Footer>
	</div>
</template>
<script>
import axios from 'axios';
import HomeList from './homes/HomeList';
import HomeContainer from './homes/HomeContainer';
import HomeSwipe from './homes/HomeSwipe';
import HomeFooter from './footer';
export default {
  name:"home",
  data(){
    return{
      todos:[]
    }
  },
  components:{
  	HomeList,
  	HomeContainer,
    HomeSwipe,
    HomeFooter
  },
  mounted:function(){
  	this.getData()
  },
  methods:{
  	getData:function(){
  		var _this=this
      axios.get('/static/ceshi.json').then(function(res){
  			console.log(res)
  			_this.todos=res.data.data.home
  		})
  	}
  }
}
</script>
<style>
.Home{
    border-bottom: 10px;
  }
 .Homeheader i{
    font-size: 0.55rem;
  }
 .Homeheader{
     position: fixed;
     width: 100%;
     top: 0;
     z-index: 1;
     height: 1.3rem;
     line-height: 1.3rem;
     font-size: 0.35rem;
     padding-left: 0.3rem;
     background: white;
   }
.official{
      width: 100%;
      height: 0.8rem;
      background: white;
      margin-top: 1.33rem;
    }
</style>
<template>
	<div class="header">
		<div class="left" @click="Return">
			<i class="iconfont icon-zuojiantou"></i>
		</div>
		<div class="in">{{title}}</div>
		<div class="rigth"></div>
	</div>
</template>
<script>
export default {
	 name:"DetailHeader",
	 props:[
	     "title"
	 ],
 	data(){
     	return{
         
     	}
 	},
	methods: {
	    Return(){
	        this.$router.go(-1)
	    }
	}
}
</script>
<style>
.header{
	width: 100%;
	height: 1.5rem;
	z-index: 1;
	position: fixed;
	background:white;
}
.header .in{
	width: 80%;
	height: 100%;
	line-height: 1.5rem;
	float: left;
	text-align: center;
	font-size: 0.45rem;
}
.header .left{
	width: 10%;
	height: 100%;
	float: left;
}
.header .rigth{
	width: 10%;
	height: 100%;
	float: left;
}
.header .left i{
	font-size: 0.6rem;
	line-height: 1.45rem;
	text-align: center;
	display: block;
}
</style>
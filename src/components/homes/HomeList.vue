<template>
   <div class="HomeList">
    <ul>
        <li><div @click="xuangou"><img src="/static/img/xuangou.jpg" alt="选购"></div></li>
        <li><div  @click="parts"><img src="/static/img/peijian.jpg" alt="配件"></div></li>
        <li><div @click=""><img src="/static/img/pingbao.jpg" alt="屏保"></div></li>
        <li><div @click=""><img src="/static/img/dingzhi.jpg" alt="定制"></div></li>
    </ul>
    </div>
</template>
<script>
export default {
	name:'HomeList',
	methods:{
		xuangou:function(){
			this.$router.push({path:'choose'})
		},
		parts:function(){
			this.$router.push({path:'parts'})
		}
	}
}
</script>
<style>
.HomeList{
	width: 100%;
	height: 2rem;
	background:white;
	border-bottom: 1px solid #f4f4f4;
	display: flex;
	justify-content: center;
	flex-direction: column;
}
.HomeList li{
	width: 25%;
	height: 100%;
	float: left;
	margin: auto;
}
.HomeList li div{
	width: 1.58rem;
	height: 1.59rem;
	margin: auto;
}
.HomeList li div img{
	display: block;
	width: 100%;
	height: 100%;
}
</style>
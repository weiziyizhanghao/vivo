<template>
<div class="container">
	<div class="container-box" v-for="(list,i) in NewsContainer" @click="goNewsDetail(list.id)">
		<div class="container-title">
			{{list.newsTitle}}
		</div>
		<div class="container-img">
			<img :src="list.newsImg" alt="图片">
		</div>
		<div class="container-con">
			{{list.newsCon}}
		</div>
		<div class="container-time">
			{{list.newsTime}}
		</div>
	</div>
</div>
</template>
<script>
export default{
	name:'NewsContainer',
	props:{
        NewsContainer:Array
    },
    methods: {
        goNewsDetail(id){
            this.$router.push({
                path:"newsDetail",
                query:{
                    id:id
                }
            })
        }
    }
}
</script>
<style>
.container{
	width: 100%;
	height: 100%;
	/*padding-top: 1.45rem;*/
	margin-bottom: 55px;
}
.container-box{
	width: 100%;
	height: 8.4rem;
	background: white;
	border-bottom: 1px dotted #cccccc;
}
.container-title{
	color: #505b63;
	width: 95%;
	margin: auto;
	font-size: 0.5rem;
	text-align: left;
	height: 1.5rem;
	line-height: 1.5rem;
}
.container-img{
	width: 95%;
	height: 4.3rem;
	margin: auto;
}
.container-img img{
	width: 100%;
	height: 100%;
}
.container-con{
	width: 95%;
	margin: auto;
	font-size: 0.3rem;
	color: #696969;
	padding-top: 0.3rem;
	line-height: 0.5rem;
	text-align: justify;
}
.container-time{
	width: 95%;
	margin: auto;
	padding-top: 0.2rem;
	font-size: 0.3rem;
	color: #696969;
}
</style>
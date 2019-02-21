<template>
<div class="detail">
	<Detail-Header title="资讯详情"></Detail-Header>	
	<div class="detail-con" v-for="(list,i) in newsDetail">
		<div class="detail-con-box" v-html="list.newsDetail"></div>
		<div class="details-box">
			<div class="stars">
				<i class="iconfont icon-dianzan"></i>
				<span>1</span>
			</div>
			<div class="collection">
				<i class="iconfont icon-praise"></i>
				<i class="iconfont icon-praise" style="color:red"></i>
            	<span>收藏</span>
			</div>
		</div>
	</div>
</div>
</template>
<script>
import axios from "axios"
import DetailHeader from '@/conn/header'
export default{
	name:'newsDetail',
  	components: {
  	  DetailHeader
  	},
  	data(){
  		return {
  			newsDetail:[]
  		}
  	},
  	created(){
  		var _this=this;
  		var id =this.$route.query.id;
  		axios.get("/static/ceshi.json").then(function(res){
  			for(var i=0;i<res.data.data.news.length;i++){
  				if (res.data.data.news[i].id==id) {
  					_this.newsDetail.push(res.data.data.news[i])
  				}
  			}
  		})
  	}
}
</script>
<style>
.detail {
  position: absolute;
 }
 .detail-con{
 	background: white;
 }
 .detail-con-box{
 	width: 90%;
    margin: auto;
    text-align: justify;
    padding-top: 1.45rem;
    font-size: 0.4rem;
    line-height: 0.59rem;
 }
 .details-box{
	width: 100%;
    height: 2rem;
    background: #ffffff;
    display: flex;
    justify-content: center;
    color: #25b5fe;
 }
  .details-box div{
  		width: 3rem;
        height: 1rem;
        line-height: 1rem;
        border: 1px solid #25b5fe;
        border-radius: 30px;
        margin: auto 0.3rem;
        text-align: center;
        float: left;
  }
  .details-box div span{
  	padding-left: 0.1rem;
  	font-size: 0.6rem;
  }
 .details-box div i{
 	font-size: 0.6rem;
 }
  .collection{
  	display: flex;
  	justify-content: center;
  }
  .collection span{
  	font-size: 0.36rem;
  }
</style>
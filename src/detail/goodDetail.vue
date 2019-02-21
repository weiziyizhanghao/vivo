<template>
<div class="goodDetail" id="transitionName">
	<Detail-Header title="商品详情"></Detail-Header>
	<div class="goodDetailList">
		<ul style="background:white;">
			<li v-for='(goodDetail,i) in goodDetails' :key="i">
				<img src="/static/img/lb2.jpg" alt="">
				<!-- 商品信息 -->
				<div class="goodDetailMain">
					<div class="gooDetailNumber">商品编号：{{goodDetail.number}}</div>
					<div class="goodDetailName">{{goodDetail.homeName}}</div>
					<div style="text-align: justify;font-size: 0.348rem;">
                            <span style="margin-left:-.2rem;color:#FF4B3D;">【{{goodDetail.homeBright}}】</span>
                            {{goodDetail.homeTitle}}
                        </div>
                    <div class="goodDetailColor">{{goodDetail.color}}</div>
                        <div class="goodDetailPaid">￥{{goodDetail.homePrice}}</div>
				</div>
				<!-- 购买 -->
				<div class="goodDetailValue">
					<div class="gmsl">购买数量:</div>
					<div class="_cartNumber" style="margin-left: 2rem;">
						<a href="javascript:;" class="goodDetailReduce">-</a>
						<input type="text" v-model="goodDetail.homeValue" readonly="readonly">
						<a href="javascript:;" class="goodDetailAdd">+</a>
					</div>
				</div>
				<div class="category">
		            <div class="category-con">
		                <i class="iconfont icon-icon--"></i>
		                <p>支持花呗分期</p>
		            </div>
		            <div class="category-con">
		                <i class="iconfont icon-icon--"></i>
		                <p>支持以旧换新</p>
		            </div>

		            <div class="category-rigth">
		                <i class="iconfont icon-youjiantou"></i>
		            </div>
	        	</div>
	        	<div class="goodDetailBox">
	        		<mt-navbar v-model="selected">
	        			<mt-tab-item id="tab-container1">图文详情</mt-tab-item><mt-tab-item id="tab-container2">参数</mt-tab-item>
	        		</mt-navbar>
	        		<mt-tab-container v-model="selected">
	        			<mt-tab-container-item id="tab-container1">
	        				<div class="goodDetailImg">
	        					<p v-for="Image in goodDetail.Images">
	        						<img :src="Image.one" alt="详情图片">
	        					</p>
	        				</div>
	        			</mt-tab-container-item>
	        			<mt-tab-container-item id="tab-container2">
                            <div class="peizhi" v-html="goodDetail.homePeizhi"></div>
                        </mt-tab-container-item>
	        		</mt-tab-container>
	        	</div>
			</li>
		</ul>
	</div>
</div>
</template>
<script>
import { Navbar,TabItem,Tabcontainer,Tabcontaineritem } from "mint-ui"
import DetailHeader from "./component/DetailHeader"
import axios from "axios"
export default {
	name:"goodDetail",
	data(){
		return {
			selected: "tab-container1",
			goodDetails:[],
			cartlength:0
		}
	},
	created(){
		var _this =this;
		var id = this.$route.query.id;
		axios.get("/static/ceshi.json").then(res =>{
			for(var i = 0; i < res.data.data.home.length;i++){
				if (res.data.data.home[i].id == id) {
					_this.goodDetails.push(res.data.data.home[i])
				}
			}
		}),
		axios.get("/static/ceshi.json").then(res =>{
			for(var i = 0; i < res.data.data.set.length;i++){
				if (res.data.data.set[i].id == id) {
					_this.goodDetails.push(res.data.data.set[i])
				}
			}
		})
	},
	components:{
		DetailHeader
	}
}
</script>
<style>
.peizhi{
	width: 90%;
	margin:auto;
}
.peizhi div{
	margin-bottom: 0.5rem;
	margin-top: 0.5rem;
}
.peizhi h3{
	height: 2rem;
	line-height: 2.3rem;
	font-size: 0.5rem;
	border-bottom: 1px solid #ccc;
}
.peizhi span{
	font-size: 0.38rem;
	color: #888;
    margin-top: 0.3rem;
    display: block;
}
.peizhi p{
	height: 0.55rem;
    color: #888;
    font-size: 16px;
}
.goodDetailImg {
    margin-top: 4px;
    margin-bottom: 6px;
}

.goodDetailImg img {
    width: 100%;
    height: auto;
    display: block;
}
.category{
	width: 100%;
	height: 1.5rem;
	border-bottom: 10px solid #f4f4f4;
}
.category .category-con{
	float: left;
	margin-left: 10px;
	line-height: 1.28rem;
	font-size: 0.34rem;
}
.category .category-con i{
	float: left;
	color: #0098df;
}
.category .category-con p{
	float: left;
	color: #777;
	padding-left: 0.1rem;
}
.category .category-rigth{
	float: right;
	margin-right: 10px;
	line-height: 1.28rem;
}
.goodDetailValue{
	height: 2rem;
	border-bottom: 1px solid #cecece;
	padding: 0.4rem;
}
.goodDetailValue .gmsl{
	margin-top: 0.2rem;
	font-size: 0.35rem;
	float: left;
}
.goodDetailValue .goodDetailAdd{
	width: 1rem;
	height: 0.8rem;
	line-height: 0.8rem;
	display: block;
	background:white;
	float: left;
	border:1px solid #b2b2b2;
	border-left: none;
	text-align: center;
	font-size: 0.5rem;
	color: black;
}
.goodDetailValue .goodDetailReduce{
	width: 1rem;
	height: 0.8rem;
	line-height: 0.8rem;
	display: block;
	border:1px solid #b2b2b2;
	background: white;
	float: left;
	border-right: none;
	text-align: center;
    font-size: 0.5rem;
    color: black;
}
._cartNumber input {
    width: 1rem;
    height: 0.8rem;
    line-height: 0.8rem;
    float: left;
    border: 1px solid #b2b2b2;
    text-align: center;
    color: black;
}
.goodDetail{
	width: 100%;
	height: 100%;
	z-index: 999;
	top: 0;
	left: 0;
	background:white;
}
.goodDetailList{
	margin-bottom: 1rem;
	padding-top: 1.46rem;
}
.goodDetailList img{
	width: 100%;
	height: 300px;
}
.goodDetailMain{
	height: 4.1rem;
	background:white;
	border-bottom: 1px solid #cecece;
	padding: 0.4rem;
	margin-top: -15px;
}
.gooDetailNumber {
    display: none;
}
.goodDetailName {
    color: black;
    font-weight: 400;
    font-size: 0.5rem;
    line-height:1rem;
}
.goodDetailPaid {
    color: #f81200;
    font-size: 0.7rem;
    margin-top: 0.1rem;
}
</style>
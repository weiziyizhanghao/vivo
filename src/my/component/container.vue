<template>
<div class="container">
	<div class="container-bj">
		<img src="/static/img/tou.jpg" alt="">
		<span>小卡车</span>
		<p>哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈</p>
	</div>
	<div class="container-int">
		<p>
            <span>0</span>
            <span>优惠券</span>
        </p>
        <p>
            <span>0</span>
            <span>换鼓励金</span>
        </p>
        <p>
            <span>0</span>
            <span>积分</span>
        </p>
	</div>
	<div class="container-ord">
		<div class="container-ord-1">
			<p class="left">我的订单</p>
			<p class="right">全部订单 ></p>
		</div>
		<div class="container-ord-2">
			<p v-for="list in container">
				<img :src="list.img">
				<span>{{list.name}}</span>
			</p>
		</div>
	</div>
	<div class="container-con" id="transition">
		<div class="con">
			<div class="con-left">
				<i class="iconfont icon-collection"></i>
				<span>我的收藏</span>
			</div>
			<div class="con-rigth">
                <i class="iconfont icon-youjiantou"></i>
            </div>
		</div>
		<div class="con">
			<div class="con-left">
				<i class="iconfont icon-collection"></i>
				<span>我的收货地址</span>
			</div>
			<div class="con-rigth">
                <i class="iconfont icon-youjiantou"></i>
            </div>
		</div>
		<div class="con">
			<div class="con-left">
				<i class="iconfont icon-collection"></i>
				<span>我的购物车</span>
			</div>
			<div class="con-rigth">
                <i class="iconfont icon-youjiantou"></i>
            </div>
		</div>
		<div class="con">
			<div class="con-left">
				<i class="iconfont icon-collection"></i>
				<span>扫码分享</span>
			</div>
			<div class="con-rigth">
                <i class="iconfont icon-youjiantou"></i>
            </div>
		</div>
		<a href="javascript:;" class="con">
                 <div class="con-left">
                  <i class="iconfont icon-bangzhuguanyuwomen"></i>
                  <span>关于我</span>
              </div>
              <div class="con-rigth">
                  <i class="iconfont icon-youjiantou"></i>
              </div>
          </a>
	</div>
</div>
</template>
<script>
export default{
	data(){
		return{
			container:[
				{
					img:"/static/img/111.png",
					name:"待付款"
				},
				{
					img:"/static/img/222.png",
					name:"待收货"
				},
               {
                  img:"/static/img/333.png",
                  name:"待评价"
              	}, {
                  img:"/static/img/444.png",
                  name:"退货/退款"
              	}
			]
		}
	}
}
</script>
<style>
.container-con{
	margin-bottom: 55px;
}
.container-con .con{
	width: 100%;
	height: 1.41rem;
	background: #ffffff;
	border-bottom: 1px solid #f0f0f0;
	display: block;
}
.container-con .con .con-left{
	float: left;
	line-height: 1.3rem;
	padding-left: 0.47rem;
}
.container-con .con .con-left i{
	font-size: 0.5rem;
}
.container-con .con .con-left span{
	font-size: 0.37rem;
	padding-left: 0.1rem;
}
.container-con .con .con-rigth{
	float: right;
	line-height: 1.3rem;
	padding-right: 0.4rem;
}
.container-ord .container-ord-2{
	width: 100%;
	height: 1.5rem;
	display: flex;
	justify-content: center;
	align-items: center;
}
.container-ord-2 p{
	width: 25%;
	display: flex;
	flex-direction: column;
	margin-top: 0.3rem;
}
.container-ord-2 p img{
	width: 0.8rem;
	height: 0.8rem;
	margin: auto;
}
.container-ord-2 p span{
	text-align: center;
	padding-top: 0.3rem;
}
.container-ord{
	width: 100%;
	height: 3.5rem;
	background: white;
	display: block;
	margin-bottom: 0.15rem;
	margin-top: 0.15rem;
	font-size: 0.35rem;
}
.container-ord .container-ord-1{
	width: 100%;
	height: 1.5rem;
}
.container-ord-1 .left{
	float: left;
	display: block;
	line-height: 1.5rem;
	margin-left: 0.5rem;
	font-size: 0.4rem;
}
.container-ord-1 .right{
	float: right;
	line-height: 1.5rem;
	margin-right: 0.6rem;
	font-size: 0.4rem;
}
.container{
	width: 100%;
	height: 187px;
	position: absolute;
	top: 1.45rem;
}
.container-bj{
	width: 100%;
	height: 187px;
	background: url(/static/img/bj.png);
	background-size: 100% 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
}
.container-bj img{
	width: 2.3rem;
	height: 2.3rem;
	border-radius:50%;
}
.container-bj span{
	font-size: 0.5rem;
	color: white;
}
.container-bj p{
	font-size: 0.35rem;
	color: white;
}
.container-int{
	width: 100%;
	height: 2rem;
	background-color: #ffffff;
	display: flex;
	justify-content: center;
}
.container-int p{
	width: 33%;
	height:100%; 
	font-size: 0.36rem;
	line-height: 0.6rem;
	float: left;
	display: flex;
	flex-direction: column;
	text-align: center;
	justify-content: center;
}
</style>
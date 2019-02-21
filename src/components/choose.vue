<template>
<div class="choose">
	<Choose-Header title="选购手机"></Choose-Header>
	<div class="_choose_twoMain">
    <div class="upper">
		  <span v-for="(list,i) in upper" :key="i" class="list" :class="{active:i===phoneIndex}">{{list.name}}</span>
    </div>
    <div class="sort">
      <p>价格升序</p>
      <p>价格降序</p>
      <p>销量优先</p>
    </div>
		<div class="lower">
            <div v-for="(list,i) in lower.lower_data" :key="i" class="lower_list" @click="goDetails(list.id)">
              <img v-bind:src="list.ImageOne" alt="图片">
              <p>{{list.name}}</p>
              <p style="font-size: 0.3rem;">{{list.nametwo}}</p>
              <div>￥{{list.Price}}</div>
            </div>
          </div>
	</div>
</div>
	
</template>
<script>
import axios from "axios";
import ChooseHeader from "../conn/header";
export default {
	name:'choose',
	data() {
	    return {
	      upper: [],//导航目录
	      lower: [],//商品内容
	      list: [],
	      phoneIndex: 0//导航目录下标
	    }
	},
  	components: {
   		ChooseHeader
  	},
  	created() {
    var _this = this;
    axios.get("/static/ceshi.json").then(function(res) {
      _this.upper = res.data.data.phone.upper;//导航目录
      _this.list = res.data.data.phone.lower;//商品内容
      _this.lower = _this.list[0];
    });
  },
  methods:{
  	goDetails: function(id) {
      this.$router.push({
        path: "goodDetail",
        query: {
          id: id
        }
      })
    }
  }
}
</script>
<style>
.upper {
  width: 100%;
  height: 1.2rem;
  line-height: 1.2rem;
  position: fixed;
  background: #ffffff;
  z-index: 1;
}
.active {
  color: #25b5fe;
  border-bottom: 2px solid #25b5fe;
}
._choose_twoMain {
  margin-top: 1.32rem;
}
.list {
  float: left;
  text-align: center;
  width: 93px;
  font-size: 0.37rem;
  height: 50px;
}
.choose {
  position: absolute;
  background: white;
  width: 100%;
  height: 100%;
  top: 0;
  bottom: 0;
  z-index: 999;
}
.lower {
  padding-top: 1.2rem;
  border-bottom: 1px solid #f4f4f4;
}
.lower_list {
  height: 6.3rem;
  background: white;
  float: left;
  box-sizing: border-box;
  width: 50%;
  border-right: 1px solid #f4f4f4;
  border-bottom: 1px solid #f4f4f4;
  float: left;
  margin-top: 0.1rem;
  list-style: none;
 }
 .lower_list img {
    height: 3.9rem;
    width: 4rem;
    display: block;
    margin: auto;
    padding: 0.5rem;
  }

 .lower_list p {
    width: 94%;
    overflow: hidden;
    text-overflow: ellipsis;
    margin: auto;
    font-size: 0.35rem;
    text-align: center;
  }

 .lower_list div {
    text-align: center;
    color: red;
    margin-top: 10px;
    font-size: 0.35rem;
  }
  .sort {
  width: 100%;
  height: 1rem;
  background: #f4f4f4;
  position: relative;
  top: 1.3rem;
  display: flex;
  justify-content: center;
}
 .sort p {
    line-height: 1rem;
    font-size: 0.35rem;
    float: left;
    width: 33%;
    text-align: center;
  }
</style>
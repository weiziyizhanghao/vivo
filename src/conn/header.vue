<template>
	<div class="header-to">
		<div class="header-left" @click="$router.go(-1)">
          <i class="iconfont icon-zuojiantou"></i>
      </div>
      <div class="header-in">{{title}}</div>
      <div class="header-rigth"></div>
	</div>
</template>
<script>
export default {
	name:'header-to',
	props:[
      "title"
  ]
}
</script>
<style>
.header-to{
	width:100%;
    height :1.45rem;
    background :white;
    position :fixed;
    z-index :1;
}
    
.header-to .header-left{
	width: 10%;
    height :100%;
    float :left;
}
        
.header-to .header-left i {
	font-size: 0.6rem;
    line-height: 1.45rem;
    text-align: center;
    display: block;
}
            
.header-to .header-in{
		width: 80%;
        float: left;
        text-align: center;
        font-size: 0.45rem;
        line-height: 1.45rem;
}
        
.header-to .header-rigth{
		width :10%;
        height :100%;
        float :left;
}
        
</style>
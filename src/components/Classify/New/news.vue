<template>
<div>
	<News-Header></News-Header>
	<News-Container :NewsContainer="NewsContainer"></News-Container>
	<News-Footer></News-Footer>
</div>
</template>
<script>
import axios from 'axios'
import NewsHeader from './component/NewsHeader'
import NewsContainer from './component/NewsContainer'
import NewsFooter from '@/components/footer'
export default{
	name:'news',
	components:{
		NewsHeader,
		NewsContainer,
		NewsFooter
	},
    data(){
        return{
            NewsContainer:[]
        }
    },
	created(){
		var _this=this
		axios.get("/static/ceshi.json").then(function(res){
			_this.NewsContainer=res.data.data.news
		})
	}
}
</script>
<style>
	
</style>
<template>
<div class="my">
	<My-Header title="个人中心"></My-Header>
	<My-Container></My-Container>
	<v-footer></v-footer>
</div>
</template>
<script>
import footer from '../components/footer'
import MyHeader from './component/header'
import MyContainer from './component/container'
export default{
	name:'my',
	data(){
		return{
			myName:''
		}
	},
	components:{
		"v-footer":footer,
		MyHeader,
		MyContainer
	}
}
</script>
<style>
	
</style>
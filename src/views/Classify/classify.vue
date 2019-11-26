<template>
<div>
    <Header><div slot="center">频道</div></Header>
    <ChannelItem></ChannelItem>
    <main-tab-bar></main-tab-bar>
    <Part></Part>
    <ChannelRec></ChannelRec>
</div>
</template>

<script>
import Header from '@/components/common/header/Header'
import MainTabBar from '@/components/content/MainTabBar'
//频道
import ChannelItem from './page/channelItem'
import Part from './page/part'
import ChannelRec from './page/channelRec'


export default {
    data(){
       	return{
			recTop:'',
       	}
    },
    components:{
        // MainHeader,Header
        MainTabBar,Header,ChannelItem,Part,ChannelRec
    },
    activated() {
		document.documentElement.scrollTop = this.recTop;
		
	},
  	beforeRouteLeave(to,from,next){
		// this.rec =  document.getElementById('rec'); 
		this.recTop = document.documentElement.scrollTop ;
		next();
	},

}
</script>

<style>


</style>
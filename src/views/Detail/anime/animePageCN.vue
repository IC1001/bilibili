<template>
<div>
	<VideoCover  :video="animeCN" @aIntro="toAintro" @aComment="toAcomment"></VideoCover>
	<videoInfo :videoInfo="animeCN" v-show="aIntro"></videoInfo>
	<recItem :rec="recDataCN" v-show="aIntro"></recItem>
	<aComments v-show="!aIntro"></aComments>
</div>
</template>

<script>
import VideoCover from '@/components/content/Block/videoCover'
import videoInfo from '@/components/content/Block/videoInfo'
import recItem from '@/components/content/Block/recItem'
import aComments from './page/aComment'
export default {
	data(){
		return{
			aIntro:true
		}
	},
    components:{
		VideoCover,videoInfo,recItem,aComments
	},
	computed:{
		info(){
            return this.$store.state.info
        },
		animeCN(){
			return this.$store.state.animeDataAll
		},
		recDataCN(){
            return this.$store.state.recDataCN
        }
		
	},
	methods:{
		toAintro(){
            this.aIntro=true
        },
        toAcomment(){			
            this.aIntro=false
        }
	},
	activated(){
		this.aIntro = true
	}


}
</script>

<style>

</style>
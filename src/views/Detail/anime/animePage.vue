<template>
<transition name="pageFade">
<div>
	<VideoCover  :video="anime" @aIntro="toAintro" @aComment="toAcomment"></VideoCover>
	<div v-show="aIntro">
		<videoInfo :videoInfo="anime" ></videoInfo>
		<recItem :rec="recData" v-if="CN"></recItem>
		<recItem :rec="recDataCN" v-else></recItem>
	</div>
	<aComments v-show="!aIntro"></aComments>
</div>
</transition>
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
		anime(){
			return this.$store.state.animeDataAll
		},
		recData(){
            return this.$store.state.recData
		},
		recDataCN(){
            return this.$store.state.recDataCN
		},
		CN(){
			if(this.$route.params.av){
				if((this.$route.params.av[7] + this.$route.params.av[8]) / 1 < 13){
					return true
				}else{
					return false
				}
			}else{
				return true
			}
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
.pageFade-enter-active{
    transition:all 0.1s ease;
}
.pageFade-leave-active{
    transition:all 0.2s ease;
}
.pageFade-enter{
     opacity: 0;
    transform: scale(0.6,0.7)
}
.pageFade-leave-to{
    opacity: 0;
    transform: scale(0.6,0.7)
}
</style>
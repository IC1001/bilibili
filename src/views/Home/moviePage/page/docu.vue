<template>
<transition name="pageZoom">
<div>
    <videoCover :video="docu" @mIntro="toMintro" @mComment="toMcomment"></videoCover>
	<div v-show="mIntro">
        <videoInfo :videoInfo="docu"></videoInfo>
        <recItem :rec="recDocuData"></recItem>
	</div>
    <mComments v-show="!mIntro"></mComments>
</div>

</transition>
</template>

<script>
import videoCover from '@/components/content/Block/videoCover'
import videoInfo from '@/components/content/Block/videoInfo'
import recItem from '@/components/content/Block/recItem'
import mComments from './mComments'
export default {
	data(){
		return{
			mIntro:true
		}
	},
    components:{
		videoCover,videoInfo,recItem,mComments
    },
	computed:{
		docu(){
			return this.$store.state.docuData
        },
        recDocuData(){
            return this.$store.state.recDocuData
        }
		
    },
	methods:{
		toMintro(){
            this.mIntro=true
        },
        toMcomment(){
            this.mIntro=false

        }
	},    
    activated(){
        this.mIntro = true
    },    
    
}
</script>

<style>
.pageZoom-enter-active,.pageZoom-leave-active{
    transition:all 0.15s ease;
}
.pageZoom-enter,.pageZoom-leave-to{
    opacity: 0;
    transform: scale(0.6,0.7)
}
</style>
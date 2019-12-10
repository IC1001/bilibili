<template>
<transition name="pageZoom">
<div>
    <videoCover :video="TV"></videoCover>
    <videoInfo :videoInfo="TV"></videoInfo>
    <recItem :rec="recTVData"></recItem>
</div>
</transition>
</template>

<script>
import videoCover from '@/components/content/Block/videoCover'
import videoInfo from '@/components/content/Block/videoInfo'
import recItem from '@/components/content/Block/recItem'
export default {
    components:{
		videoCover,videoInfo,recItem
    },
	computed:{
		TV(){
			return this.$store.state.TVData
        },
        recTVData(){
            return this.$store.state.recTVData
        }
		
	}    
    
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
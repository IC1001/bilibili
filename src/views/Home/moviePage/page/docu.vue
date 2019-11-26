<template>
<div>
    <videoCover :video="docu"></videoCover>
    <videoInfo :videoInfo="docu"></videoInfo>
    <recItem :rec="recDocuData"></recItem>
</div>
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
		docu(){
			return this.$store.state.docuData
        },
        recDocuData(){
            return this.$store.state.recDocuData
        }
		
	}    
    
}
</script>

<style>

</style>
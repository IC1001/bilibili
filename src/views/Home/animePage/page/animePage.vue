<template>
<div>
	<VedioCover  :video="anime"></VedioCover>
	<videoInfo :videoInfo="anime"></videoInfo>
	<recItem :rec="recData"></recItem>
</div>
</template>

<script>
import VedioCover from '@/components/content/Block/videoCover'
import videoInfo from '@/components/content/Block/videoInfo'
import recItem from '@/components/content/Block/recItem'

export default {
    components:{
		VedioCover,videoInfo,recItem
	},
	computed:{
		info(){
            return this.$store.state.info
        },
		anime(){
			return this.$store.state.animeData
		},
		recData(){
            return this.$store.state.recData
        }
		
	}


}
</script>

<style>

</style>
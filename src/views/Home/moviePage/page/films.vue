<template>
<div>
    <videoCover :video="movie"></videoCover>
    <videoInfo :videoInfo="movie"></videoInfo>
    <recItem :rec="recMovieData"></recItem>
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
		movie(){
			return this.$store.state.movieData
        },
        recMovieData(){
            return this.$store.state.recMovieData
        }
		
	}    

}
</script>

<style>

</style>
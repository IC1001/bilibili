<template>
<transition name="pageZoom">
<div>
    <videoCover :video="movie" @mIntro="toMintro" @mComment="toMcomment"></videoCover>
	<div v-show="mIntro">
        <movieInfo :movieInfo="movie"></movieInfo>
        <recItem :rec="recMovieData" v-if="mov==1"></recItem>
        <recItem :rec="recDocuData" v-else-if="mov==2"></recItem>
        <recItem :rec="recTVData" v-else></recItem>
        <!-- <recItem :rec="recMovieData" v-if="CN"></recItem>
        <recItem :rec="recMovieData" v-else></recItem> -->
	</div>
    <mComments v-show="!mIntro"></mComments>
</div>
</transition>
</template>

<script>
import videoCover from '@/components/content/Block/videoCover'
import movieInfo from '@/components/content/Block/movieInfo'
import recItem from '@/components/content/Block/recItem'
import mComments from './mComments'
export default {
	data(){
		return{
			mIntro:true
		}
	},
    components:{
		videoCover,movieInfo,recItem,mComments
	},
	computed:{
		movie(){
			return this.$store.state.movieDataAll
        },
        recMovieData(){
            return this.$store.state.recMovieData
        },
        recDocuData(){
            return this.$store.state.recDocuData
        },
        recTVData(){
            return this.$store.state.recTVData
        },
		mov(){
			if(this.$route.params.av){
				if((this.$route.params.av[7] + this.$route.params.av[8]) / 1 < 13){
					return 1
				}else if((this.$route.params.av[7] + this.$route.params.av[8]) / 1 >= 13 && (this.$route.params.av[7] + this.$route.params.av[8]) / 1 <=18){
					return 2
				}else{
                    return 3
                }
			}else{
				return true
			}
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
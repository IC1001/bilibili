<template>
<transition name="pageZoom">
<div>
    <BackBarItem class="animeJPN"><span slot="backLeft">{{this.$route.params.title}}</span></BackBarItem>
    <SlideShow :imgArr="imgArr"></SlideShow>  
    <DetailItem :Data="previews"></DetailItem> 

</div>
</transition>
</template>

<script>
import BackBarItem from '@/components/common/backBar/backBarItem'
import SlideShow from '@/components/content/SlideShow/SlideShow'
import DetailItem from '@/components/content/DetailItem/detailItem'

export default {
    components:{
        BackBarItem,SlideShow,DetailItem
    },
    computed:{
        channelType:{
            get(){
                return this.$store.state.channelType
            },
            set(val){
                
            }
        },
        previews(){
            return this.$store.state.previews
            
        },
        imgArr(){
            return this.$store.state.previews.slice(0,3)
		},       
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
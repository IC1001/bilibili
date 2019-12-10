<template>
<transition name="pageZoom">
<div>
    <BackBarItem id="channelBG"><span>{{channelType.title}}</span></BackBarItem>
    <div class="channelCover">
        <img :src="channelType.cover">
    </div>
    <transition name="scroll">
    <div class="channelHead" v-show="isScroll"></div>
    </transition>
	<!-- <Scroll :scroll1="isScroll" > </Scroll> -->
    <DetailItem :Data="previews" id="channel-margin"></DetailItem> 
</div>
</transition>
</template>

<script>
import BackBarItem from '@/components/common/backBar/backBarItem'
import DetailItem from '@/components/content/DetailItem/detailItem'
import {throttle} from '@/common/utils'
// import Scroll from '@/components/common/scroll/scroll'
export default {
    components:{
        BackBarItem,DetailItem
    },
    data(){
        return{
            isScroll:false,
        }
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
            
        }
    },
    methods:{
        scrolling(){
            let scrollTop = document.documentElement.scrollTop;
                if(scrollTop == 0){
                    this.isScroll = false
                }else{
                    this.isScroll = true
                }            
        }
    },
    mounted(){
        window.addEventListener('scroll',throttle(this.scrolling,100))
    }

}
</script>

<style>
#channelBG > div{
    background-color: rgba(0, 0, 0, 0.1);
    color: white;

}
.channelCover{
    position: absolute;
    top: 0;
    width: 100%;
}
.channelCover > img{
    height: 13.4rem;
    width: 100%;

}
#channel-margin{
    margin-top: 10.4rem;
}
.channelHead{
    width: 100%;
    height: 2.625rem;
    background-color:#fa7298;
    position: fixed;
    top: 0;
    opacity: 1;
    transition: color 1s ease;
}
.scroll-enter-active,.scroll-leave-active{
    transition: all 0.65s ease;
}
.scroll-enter,.scroll-leave-to{
    opacity: 0;
}

.pageZoom-enter-active,.pageZoom-leave-active{
    transition:all 0.15s ease;
}
.pageZoom-enter,.pageZoom-leave-to{
    opacity: 0;
    transform: scale(0.6,0.7)
}
</style>
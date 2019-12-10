<template>
<transition name="pageZoom">
<div>
    <BackBarItem class="animeJPN"><span slot="backLeft">全部频道</span></BackBarItem>
    <div v-for="(item,index) in allChannelType" :key="index" class="allChannelType" @click="toChannel(index)">
        <img :src="item.img">
        <span>{{item.title}}</span>
    </div>
</div>
</transition>
</template>

<script>
import BackBarItem from '@/components/common/backBar/backBarItem'

export default {
    components:{
        BackBarItem
    },
    computed:{
        
    },
    data(){
        return {
            allChannelType:this.$store.state.channel.slice(1).concat(this.$store.state.channel2)
        }
    },
    methods:{
        toChannel(index){
            this.$router.push(this.allChannelType[index].path + '/' + this.allChannelType[index].title)
        }
    }

}
</script>

<style>
.animeJPN > div{
    color: white;
    background-color: #fa7298;
}
.allChannelType{
    font-size: 0.9rem;
    height: 3rem;
    display: flex;
    align-items: center;
    /* width: 100%; */
    margin:1rem 0 0 0.5rem;
}
.allChannelType > img{
    height: 3rem;
    width: 3rem;
    
}
.allChannelType > span{
    margin-left: 0.5rem;
    
}

.pageZoom-enter-active,.pageZoom-leave-active{
    transition:all 0.15s ease;
}
.pageZoom-enter,.pageZoom-leave-to{
    opacity: 0;
    transform: scale(0.6,0.7)
}
</style>
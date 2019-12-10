<template>
<div>
    <HotListBar>
        <div><slot>热门番剧</slot></div>
        <HotListItem >
            <!-- <div slot="hot1">
            <img :src="hotData.img" alt="" >
            <div>{{hotData.title}}</div>
            </div>
            <div slot="hot2">
            <img :src="hotData.img" alt="" >
            <div>{{hotData.title}}</div>
            </div>
            <div slot="hot3">
            <img :src="hotData.img" alt="" >
            <div>{{hotData.title}}</div>
            </div> -->
            <div slot="hot1" @click="toPage(0)">
                <img :src="hotData[0].img" alt="" >
                <div>{{hotData[0].title}}
                    <div>{{hotData[0].hotNum}}</div>
                </div>
            </div>
            <div slot="hot2" @click="toPage(1)">
                <img :src="hotData[1].img" alt="" >
                <div>{{hotData[1].title}}
                    <div>{{hotData[1].hotNum}}</div>
                </div>
            </div>
            <div slot="hot3" @click="toPage(2)">
                <img :src="hotData[2].img" alt="" >
                <div>{{hotData[2].title}}
                    <div>{{hotData[2].hotNum}}</div>
                </div>
            </div>
        </HotListItem>

    
    </HotListBar>
    

</div>
</template>

<script>
import HotListBar from '@/components/common/hotListBar/hotListBar'
import HotListItem from '@/components/common/hotListBar/hotListItem'

export default {
    props:['hotData'],
    components:{
        HotListBar,HotListItem

    },
    computed:{
        anime(){
            return this.$store.state.anime
        }

    },
    methods:{
        toPage(index){
            const routeIndex = (this.hotData[index].av[7] + this.hotData[index].av[8]) / 1 -1 
            this.$store.commit('sendAnimeData',routeIndex)
            this.$router.push(this.hotData[index].path + '/' + this.hotData[index].av)
        }
    }

}
</script>

<style>



</style>
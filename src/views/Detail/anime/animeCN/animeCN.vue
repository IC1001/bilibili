<template>
<transition name="pageFade">
<div>
    <BackBarItem class="animeJPN"><span slot="backLeft">国创</span></BackBarItem>
    <SlideShow :imgArr="animeSlideCN"></SlideShow>
    <titleBar>
        <titleBarItem><div slot="TBIleft">国创热播</div></titleBarItem>
        <titleBarItem><div slot="TBIright"></div></titleBarItem>
    </titleBar>
    <DetailItem :Data="animeCN" ></DetailItem>
    <titleBar>
        <titleBarItem>
            <div slot="TBIleft">热门榜单</div>
        </titleBarItem>
    </titleBar>
    <myBarItem>
        <hotList :hotData="hotAnimeCN"></hotList>
        <hotList :hotData="hotAnimeCN"></hotList>

        
    </myBarItem>
</div>
</transition>
</template>

<script>
import SlideShow from '@/components/content/SlideShow/SlideShow'
import BackBarItem from '@/components/common/backBar/backBarItem'
import titleBar from '@/components/common/titleBar/titleBar'
import titleBarItem from '@/components/common/titleBar/titleBarItem'
// 详情列表
import DetailItem from '@/components/content/DetailItem/detailItem'
import Change from '@/components/content/Bar/change'
//热门榜单
import hotList from '@/components/content/Bar/hotList'
//我的
import myBarItem from '@/components/content/Bar/myBarItem'
export default {
    components:{
        BackBarItem,titleBar,titleBarItem,SlideShow,DetailItem,hotList,Change,myBarItem
    },
    computed:{
        animeSlideCN(){
            //返回轮播数据
            return this.$store.getters.AnimeSlideCN
        },
        animeCN(){
            return this.$store.state.animeCN
        },
        hotAnimeCN(){
            return this.$store.getters.hotListCN
        },
    }

}
</script>

<style>
.animeJPN > div{
    color: white;
    background-color: #fa7298;
}

.pageFade-enter-active{
    transition:all 0.1s ease;
}
.pageFade-leave-active{
    transition:all 0.2s ease;
}
.pageFade-enter{
     opacity: 0;
    transform: scale(0.6,0.7)
}
.pageFade-leave-to{
    opacity: 0;
    transform: scale(0.6,0.7)
}
</style>
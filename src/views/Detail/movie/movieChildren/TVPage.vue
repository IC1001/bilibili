<template>
<transition name="pageFade">
<div>
    <SlideShow :imgArr="TVSlide"></SlideShow>
    <titleBar>
        <titleBarItem><div slot="TBIleft">热播</div></titleBarItem>
        <titleBarItem><div slot="TBIright"></div></titleBarItem>
    </titleBar>
    <DetailItem :Data="TV" ></DetailItem>
</div>
</transition>
</template>

<script>
import titleBar from '@/components/common/titleBar/titleBar'
import titleBarItem from '@/components/common/titleBar/titleBarItem'
// 详情列表
import DetailItem from '@/components/content/DetailItem/detailItem'
import Change from '@/components/content/Bar/change'
//热门榜单
import hotList from '@/components/content/Bar/hotList'
//我的
import myBarItem from '@/components/content/Bar/myBarItem'
import SlideShow from '@/components/content/SlideShow/SlideShow'
export default {
    components:{
        titleBar,titleBarItem,SlideShow,DetailItem,hotList,Change,myBarItem
    },
    computed:{
        TVSlide(){
            //返回轮播数据
            return this.$store.state.TV.slice(0,4)
        },
        TV(){
            return this.$store.state.TV.slice(0,6)
        },
        hotAnimeCN(){
            return this.$store.getters.hotListCN
        },
    },


}
</script>

<style>
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
<template>
<transition name="pageFade">
<div class="weekHot">
    <backBarItem class="weekHot">
        <div>每周必看</div>
    </backBarItem>
    <hotItem :rec="hotData"></hotItem>
</div>
</transition>
</template>

<script>
import backBarItem from '@/components/common/backBar/backBarItem'
import hotItem from '@/components/content/DetailItem/hotItem'
export default {
    components:{
        backBarItem,hotItem
    },
    computed:{
        //使用vuex数据
        hotData(){
            return this.$store.state.previews
        },
    },

}
</script>

<style>
.weekHot,.weekHot > div {
    background-color: #fed442;
    color: white;
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
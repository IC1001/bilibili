<template>
<transition name="pageFade">
<div class="mustHot">
    <backBarItem class="mustHot">
        <div>入站必看</div>
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
.mustHot,.mustHot > div{
    background-color: #f3921f;
    color: white;
}

.pageFade-enter-active{
    transition:all 0.5s ease;
}
.pageFade-leave-active{
    transition:all 0.15s ease;
}
.pageFade-enter{
     opacity: 0;
    /* transform: scale(0.6,0.95) */
}
.pageFade-leave-to{
    opacity: 0;
    transform: scale(0.6,0.95)
}


</style>
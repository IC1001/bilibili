<template>
<transition name="fadePic">
<div>
    <rowItem :rowData="shopPicData">

    </rowItem>
</div>
</transition>
</template>

<script>
//商品展示
import rowItem from '@/components/content/DetailItem/rowItem.vue'
export default {
    components:{
        rowItem
    },
    computed:{
        shopPicData(){
            return this.$store.state.shop3
        }
    }

}
</script>

<style>
.fadePic-leave-active,.fadePic-enter-active{
    transition: all 0.3s ease;
}
.fadePic-leave-to,.fadePic-enter{
    opacity: 0;
    /* transform: translateX(-100%) */
}

</style>
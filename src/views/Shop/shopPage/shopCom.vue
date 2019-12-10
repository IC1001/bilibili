<template>
<transition name="fadeCom">
<div>
    <waterfall :wfData="shopRecData">

    </waterfall>
</div>
</transition>
</template>

<script>
//商品展示
import waterfall from '@/components/content/DetailItem/waterfall.vue'
export default {
    components:{
        waterfall
    },
    computed:{
        shopRecData(){
            return this.$store.state.shop1.concat(this.$store.state.shop2)
        }
    }

}
</script>

<style>
.fadeCom-enter-active,.fadeCom-leave-active{
    transition: all 0.4s ease;
}
.fadeCom-enter{
    /* transform: translateX(-100%); */
    opacity: 0;
}
.fadeCom-leave-to{
    transform: translateX(-100%);
    opacity: 0;
}
</style>
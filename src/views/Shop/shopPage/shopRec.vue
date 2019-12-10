<template>
<transition name="fadeRec">
<div>
    <waterfall :wfData="shopRecData" ref="wf"></waterfall>
    <!-- <Scroll :newPreviews="shopRecData"> </Scroll> -->
</div>
</transition>
</template>

<script>
//商品展示
import waterfall from '@/components/content/DetailItem/waterfall.vue'
// import Scroll from '@/components/common/scroll/scroll'
export default {
    data(){
        return{
            shopTop:''
        }
    },
    components:{
        waterfall
    },
    computed:{
        shopRecData(){
            return this.$store.getters.shop123
        },
    	
    },
    beforeCreate(){
        this.$store.commit('setIsWant')
    },



}
</script>

<style>
.fadeRec-enter-active,.fadeRec-leave-active{
    transition: all 0.5s ease;
}
.fadeRec-enter,.fadeRec-leave-to{
    transform: translateX(-100%);
    opacity: 0;
}

</style>
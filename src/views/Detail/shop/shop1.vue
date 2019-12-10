<template>
<transition name="pageZoom">
<div>
    <BackBarItem id="shop1">
        <div>{{shopTitle}}</div>
        <i class="el-icon-s-unfold" slot="backRight" @click="changeLayout" v-if="layoutChange"></i>
        <i class="el-icon-s-operation" slot="backRight" @click="changeLayout" v-else></i>
    </BackBarItem>
    <!-- <div class="shop1back"></div> -->
    <waterfall :wfData="shop1Data" class="shop1top" v-if="layoutChange"></waterfall>
    <changeRow :crData="shop1Data" v-else class="shop1top"></changeRow>
    <Scroll></Scroll>
</div>
</transition>
</template>

<script>
import BackBarItem from '@/components/common/backBar/backBarItem'
import waterfall from '@/components/content/DetailItem/waterfall.vue'
import changeRow from '@/components/content/DetailItem/changeRow'
import Scroll from '@/components/common/scroll/scroll'
export default {
    components:{
        BackBarItem,waterfall,changeRow,Scroll
    },
    computed:{
        shop1Data(){
            return this.$store.getters.Dshop1
        },
        shopTitle(){
            return this.$route.params.title
        }
    	
    },
    data(){
        return{
            layoutChange:false
        }
    },
    methods:{
        changeLayout(){
            this.layoutChange = !this.layoutChange
        }
    }


}
</script>

<style>
/* #shop1{
    color: black;
    font-size: 1.1rem;
    background-color: white;
    

} */
/* .shop1back{ */
    /* background-color: white; */
    /* height: 2.625rem; */
    /* width: 23.4375rem;
    position: fixed;
    top: 0;
    z-index: 9;
    opacity: 0.9; */


.pageZoom-enter-active,.pageZoom-leave-active{
    transition:all 0.15s ease;
}
.pageZoom-enter,.pageZoom-leave-to{
    opacity: 0;
    transform: scale(0.6,0.7)
}
</style>
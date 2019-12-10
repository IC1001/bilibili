<template>
<transition name="pageZoom">
<div>
    <BackBarItem id="shop4">
        <div>模型</div>
        <div slot="backRight" @click="changeLayout">
            <i class="el-icon-s-unfold"  v-if="layoutChange"></i>
            <i class="el-icon-s-operation" v-else></i>
        </div>
    </BackBarItem>
    <div class="shop4back"></div>
    
    <waterfall :wfData="shop4Data" class="shop4top" v-if="layoutChange"></waterfall>
    <changeRow :crData="shop4Data" v-else></changeRow>
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
        shop4Data(){
            return this.$store.getters.Dshop4
        },
    	
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
#shop4{
    color: black;
    font-size: 1.1rem;
    background-color: white;
    

}
.shop4back{
    background-color: white;
    height: 2.625rem;
    width: 23.4375rem;
    position: fixed;
    top: 0;
    z-index: 9;
    opacity: 0.9;
}

.pageZoom-enter-active,.pageZoom-leave-active{
    transition:all 0.15s ease;
}
.pageZoom-enter,.pageZoom-leave-to{
    opacity: 0;
    transform: scale(0.6,0.7)
}
</style>
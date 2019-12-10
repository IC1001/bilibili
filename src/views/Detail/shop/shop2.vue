<template>
<transition name="pageZoom">
<div>
    <BackBarItem class="shop2">
        <div>周边</div>
        <div slot="backRight" @click="changeLayout">
            <i class="el-icon-s-unfold"  v-if="layoutChange"></i>
            <i class="el-icon-s-operation" v-else></i>
        </div>
    </BackBarItem>
    
    <waterfall :wfData="shop2Data" class="shop2top" v-if="layoutChange"></waterfall>
    <changeRow :crData="shop2Data" v-else></changeRow>
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
        shop2Data(){
            return this.$store.getters.Dshop2
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
.shop2{
    color: black;
    font-size: 1.1rem;
    background-color: white;
    

}
.shop2top{
    /* margin-top: 2.3rem; */
}

.pageZoom-enter-active,.pageZoom-leave-active{
    transition:all 0.15s ease;
}
.pageZoom-enter,.pageZoom-leave-to{
    opacity: 0;
    transform: scale(0.6,0.7)
}
</style>
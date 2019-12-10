<template>
<transition name="pageZoom">
<div class="cmdBG" >
    <BackBarItem></BackBarItem>
    <CmdImg :cmdImg="shop123"></CmdImg>
    <CmdInfo :cmdInfo="shop123"></CmdInfo>
    <!-- <titleBar>
        <titleBarItem><div slot="TBIleft">讨论区</div></titleBarItem>
        <titleBarItem><div slot="TBIright">全部讨论</div></titleBarItem>
    </titleBar>
    <MyBarItem myData=""></MyBarItem> -->
    <cmdRec></cmdRec>
    <titleBar>
        <titleBarItem><div slot="TBIleft">商品详情</div></titleBarItem>
    </titleBar>
    <cmdDetail :cmdDetailData="shop123"></cmdDetail>
    <cmdTabBar @addCartEmit="addCart" :isCart="isCart" :CB="shop123"></cmdTabBar>
    <div :class="{cartting:isCart==true}" @click="addCart"></div>

</div>
</transition>
</template>

<script>
import BackBarItem from '@/components/common/backBar/backBarItem'
import CmdImg from './page/cmdPage/cmdImg'
import CmdInfo from './page/cmdPage/cmdInfo'
import titleBar from '@/components/common/titleBar/titleBar'
import titleBarItem from '@/components/common/titleBar/titleBarItem'
import MyBarItem from '@/components/content/Bar/myBarItem.vue'
import cmdRec from './page/cmdPage/cmdRec'
import cmdDetail from './page/cmdPage/cmdDetail'
import cmdTabBar from './page/cmdPage/cmdTabBar'
export default {
    components:{
       CmdImg,BackBarItem,CmdInfo,MyBarItem,titleBar,titleBarItem,cmdRec,cmdDetail,cmdTabBar
    },
    data(){
        return{
            noComment:[{title:'暂无讨论'}],
            isCart:false
        }
    },
    computed:{
        
        // shop12(){
        //     return this.$store.getters.shop12[this.$route.params.index]
        // },
        shop123:{
            get(){
                // return this.$store.getters.shop123[this.$route.params.index]
                return this.$store.getters.shopAll[this.$route.query.id]
            },
            set(val){
                this.$store.getters.shop123 = val

            }

        }     
    },
    methods:{
        addCart(){
            this.isCart = !this.isCart
        }
        

    },
    activated() {
        document.documentElement.scrollTop = 0;
        this.isCart = false

        
    },
    updated(){
        document.documentElement.scrollTop = 0;
    }

}
</script>

<style>
.cartting{
    background:rgba(0, 0, 0, 0.4);
    /* opacity: 0.6; */
    height: 100%;
    width: 100%;
    z-index: 9;
    position: fixed;
    top: 0;
}

.pageZoom-enter-active,.pageZoom-leave-active{
    transition:all 0.15s ease;
}
.pageZoom-enter,.pageZoom-leave-to{
    opacity: 0;
    transform: scale(0.6,0.7)
}
</style>
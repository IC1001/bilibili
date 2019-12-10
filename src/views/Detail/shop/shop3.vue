<template>
<transition name="pageZoom">
<div>
    <BackBarItem id="shop3">
        <div>{{shopTitle}}</div>

    </BackBarItem>
    <div class="zs"></div>
    <!-- <div class="shop3back"></div> -->
    <el-carousel :interval="4000" class="shop3Sl" height="12rem" >
        <el-carousel-item v-for="(item,index) in bannerShow" :key="index" class="shop3Slitem">
            <img :src="item.img" alt="" class="shop3Img">
        </el-carousel-item>
    </el-carousel>
    <titleBar>
        <titleBarItem><div slot="TBIleft">热门{{shopTitle}}</div></titleBarItem>
        <titleBarItem><div slot="TBIright">更多</div></titleBarItem>
    </titleBar>
    <Kong></Kong>
    <titleBar>
        <titleBarItem><div slot="TBIleft">周末去哪儿</div></titleBarItem>
        <titleBarItem><div slot="TBIright">更多</div></titleBarItem>
    </titleBar>
    <Kong></Kong>
    <titleBar>
        <titleBarItem><div slot="TBIleft">猜你喜欢</div></titleBarItem>
        <titleBarItem><div slot="TBIright">更多</div></titleBarItem>
    </titleBar>
    <Kong></Kong>    

    <Scroll></Scroll>
</div>
</transition>
</template>

<script>
import BackBarItem from '@/components/common/backBar/backBarItem'
import waterfall from '@/components/content/DetailItem/waterfall.vue'
import changeRow from '@/components/content/DetailItem/changeRow'
import Scroll from '@/components/common/scroll/scroll'
import titleBar from '@/components/common/titleBar/titleBar'
import titleBarItem from '@/components/common/titleBar/titleBarItem'
import Kong from '@/components/content/Block/kong'
export default {
    components:{
        BackBarItem,waterfall,changeRow,Scroll,titleBar,titleBarItem,Kong
    },
    computed:{
    
        shop3Data(){
            return this.$store.getters.Dshop3
        },
        shopTitle(){
            return this.$route.params.title
        }
    	
    },
    data(){
        return{
            layoutChange:false,
            bannerShow:[
                {img:require('@/assets/img/shop/banner/2.jpg')},
                {img:require('@/assets/img/shop/banner/6.jpg')},
                {img:require('@/assets/img/shop/banner/6.jpg')}
            ]
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
#shop3 > div{
    background-image:linear-gradient(to right,#6959CD,#8B658B)  ;
    color: white;

}
.shop3Sl{
    height: 12rem;
    width: 100%;
    /* background-color:#483D8B ; */
}
.shop3Slitem{
    width: 100%;
    height: 12rem;
    text-align: center;
}

.shop3Img{
    width: 96%;
    height: 10rem;
    border-radius: 0.3rem;
}
.zs{
    background-image:linear-gradient(to right,#6959CD,#8B658B)  ;
    position: absolute;
    height: 14rem;
    width: 100%;
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
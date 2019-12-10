<template>
<transition name="app">
<div>
    <Header>
        <div slot="center">会员购</div>
        <img src="@/assets/img/images/iconfont/shop.png" slot="right" @click="toCart">
    </Header>
    <shopClassify></shopClassify>
    <shopBanner></shopBanner>
    <sNav :sTitles="titles"></sNav>
    <keep-alive><router-view></router-view></keep-alive>
    <Scroll> </Scroll>
    <main-tab-bar></main-tab-bar>
</div>
</transition>
</template>

<script>
import Header from '@/components/common/header/Header'
import MainTabBar from '@/components/content/MainTabBar'
import shopClassify from './shopPage/shopClassify'
import shopBanner from './shopPage/shopBanner'
import sNav from '@/components/content/NavControl/shopNav'

import Scroll from '@/components/common/scroll/scroll'



export default {
    data(){
        return{
            path:'/shop/推荐',
            titles:['推荐','商品','美图','情报'],
        }
    },
    components:{
        MainTabBar,Header,shopClassify,shopBanner,sNav,Scroll
    },
    methods:{
        toCart(){
            this.$router.push('/cart')
        }
    },
    created() {
        this.$router.push(this.path)        
        
    },
    activated(){
        this.$router.push(this.path)    
        
    },
    beforeRouteLeave(to,from,next){ 
        this.path = this.$route.path;
        next();
    },

}
</script>

<style>
.app-enter-active{
    transition: all 0.6s ease;
}
.app-enter{
    opacity: 0;
}
</style>
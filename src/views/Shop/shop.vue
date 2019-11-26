<template>
<div>
    <Header>
        <div slot="center">会员购</div>
        <img src="@/assets/img/images/iconfont/shop.png" slot="right">
    </Header>
    <shopClassify></shopClassify>
    <shopBanner></shopBanner>
    <sNav :sTitles="titles"></sNav>
    <keep-alive><router-view></router-view></keep-alive>
    <main-tab-bar></main-tab-bar>
</div>
</template>

<script>
import Header from '@/components/common/header/Header'
import MainTabBar from '@/components/content/MainTabBar'
import shopClassify from './shopPage/shopClassify'
import shopBanner from './shopPage/shopBanner'
import sNav from '@/components/content/NavControl/shopNav'



export default {
    data(){
        return{
            path:'/home/推荐',
            titles:['推荐','商品','美图','情报'],
        }
    },
    components:{
        MainTabBar,Header,shopClassify,shopBanner,sNav,
    }

}
</script>

<style>

</style>
<template>
<div id="home" >
    <Header> 
        <img src="@/assets/img/images/search.png" slot="center">
        <input type="text" slot="center" placeholder="搜索...">
        <img src="@/assets/img/images/iconfont/download2.png" slot="right">
        <img src="@/assets/img/images/iconfont/news.png" slot="right">         
    </Header>
    <Nav :titles="titles"></Nav>
    <keep-alive><router-view></router-view></keep-alive>
    <main-tab-bar></main-tab-bar>
</div>
</template>

<script>
import Header from '@/components/common/header/Header'
import MainTabBar from '@/components/content/MainTabBar'
import Nav from '@/components/content/NavControl/nav'
export default {
    data(){
        return{
            path:'/home/推荐',
            titles:['直播','推荐','热门','追番','影视'],
        }
    },
    activated() {
        this.$router.push(this.path);
    },
    beforeRouteLeave(to,from,next){ 
        this.path = this.$route.path;
        next();
    },
    components:{
        MainTabBar,Header,Nav
    }
}   
</script>

<style>
#home{
    height: 100%;
    background-color: white;
    margin-top: 5rem;
}

</style>
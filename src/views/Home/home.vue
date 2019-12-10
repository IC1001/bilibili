<template>
<transition name="app">
<div id="home" >
    <Header> 
        <!-- <img src="@/assets/img/images/search.png" > -->
        <i class="el-icon-search" slot="center"></i>
        <input type="text" slot="center" placeholder="暂时无法搜索...">
        <img src="@/assets/img/images/iconfont/download2.png" slot="right" @click="toDownLoad">
        <img src="@/assets/img/images/iconfont/news.png" slot="right" @click="toNews">         
    </Header>
    <Nav :titles="titles"></Nav>
    <keep-alive><router-view></router-view></keep-alive>
    <main-tab-bar></main-tab-bar>
</div>
</transition>
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
    },
    methods:{
        toDownLoad(){
            this.$router.push('/DownLoad/1')
        },
        toNews(){
            this.$router.push('/News')
        }
    }
}   
</script>

<style>
#home{
    height: 100%;
    background-color: white;
    
}
/* .center > input{

} */
.app-enter-active{
    transition: all 0.6s ease;
}
.app-enter{
    opacity: 0;
}
.disable{
    opacity: 0.4;
}
</style>
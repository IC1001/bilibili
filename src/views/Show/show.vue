<template>
<div>
    <Header>
        <div slot="center">动态</div>
        <img src="@/assets/img/images/iconfont/show.png" slot="right">
    </Header>
    <Nav  :titles="titles"></Nav>
    <!-- <myBarItem>
        <img src="@/assets/img/images/touxiang.png" >
    </myBarItem> -->
    <div class="OLtips"><i class="el-icon-loading"></i> 暂无动态</div>

    <main-tab-bar></main-tab-bar>
</div>
</template>

<script>
import Header from '@/components/common/header/Header'
import MainTabBar from '@/components/content/MainTabBar'
import Nav from '@/components/content/NavControl/nav'
// 分类栏
import classifyBar from '@/components/common/classifyBar/classifyBar'
import classifyItem from '@/components/common/classifyBar/classifyItem'
//我的
import myBarItem from '@/components/content/Bar/myBarItem'
export default {
    components:{
        MainTabBar,Header,Nav,classifyBar,classifyItem,myBarItem
    },
    data(){
        return{
            path:'/home/推荐',
            titles:['视频','综合','热门'],
        }
    },
}
</script>

<style>
.OLtips{
  text-align: center;
  position: relative;
  margin-top:6.125rem;
}

</style>
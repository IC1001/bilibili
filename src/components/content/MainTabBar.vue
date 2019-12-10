<template>
<div>
<div class="mainTB">
    <!-- 底部栏路由图片文字修改处 -->
    <tab-bar class="mainTB">
        <tab-bar-item path="/home"> 
        <!-- <img src="../assets/img/home.gif"> -->
            <i class="el-icon-s-home"></i>
            <div >首页</div>
        </tab-bar-item>
        <tab-bar-item path="/classify">
            <!-- <img src="../assets/img/classify.gif"> -->
            <i class="el-icon-guide"></i>
            <div>频道</div>
        </tab-bar-item>
        <tab-bar-item path="/show">
            <!-- <img src="../assets/img/show.gif"> -->
            <i class="el-icon-position"></i>
            <div>动态</div>
        </tab-bar-item>
        <tab-bar-item path="/shop">        
            <!-- <img src="../assets/img/mine.gif"> -->
            <i class="el-icon-shopping-bag-1"></i>
            <div>会员购</div>
        </tab-bar-item>
    </tab-bar>
    
</div>
<div class="TabBarBottom"></div>
</div>
</template>

<script>
import TabBar from '@/components/common/tabbar/TabBar'
import TabBarItem from '@/components/common/tabbar/TabBarItem'
export default {
    name:"MainTabBar",
    components:{
        TabBar,TabBarItem
    }
}
</script>

<style>
.mainTB{
    position: fixed;
    bottom: 0;
    z-index: 9;
    width: 100%;
    height: 3.19rem;

}
.TabBarBottom{
    position: fixed;
    bottom: 0;
    height: 3.3rem;
    width: 23.4375rem;
    background: rgb(246, 246, 246)	;

}
</style>
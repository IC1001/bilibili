<template>
  <div>
    <Header>
        <!-- <img src="../assets/img/images/haha.png" slot="left">
        <img src="../assets/img/images/touxiang.png" slot="left"> -->
        <div slot="center">我的</div>
    </Header>
    <main-tab-bar></main-tab-bar>
  </div>
</template>

<script>
import Header from '@/components/common/header/Header'
import MainTabBar from '@/components/content/MainTabBar'
export default {
    components:{
        // MainHeader,Header
        MainTabBar,Header
    }
}
</script>

<style>

</style>
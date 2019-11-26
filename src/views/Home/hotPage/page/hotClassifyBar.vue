<template>
<div>
    <classifyBar>
        <classifyItem>
        <i class="el-icon-s-data" slot="classicon"  id="rankClass"></i>
        <p slot="classtext" id="rankClass">排行榜</p>
    </classifyItem>
    <classifyItem>
        <i class="el-icon-date" slot="classicon" @click="goweekHot" id="weekClass"></i>
        <p slot="classtext">每周必看</p>
    </classifyItem>
    <classifyItem>
        <i class="el-icon-medal" slot="classicon" @click="gomustHot" id="mustClass"></i>
        <p slot="classtext">入站必看</p>
    </classifyItem>
    </classifyBar>   
</div>
</template>

<script>
import classifyBar from '@/components/common/classifyBar/classifyBar'
import classifyItem from '@/components/common/classifyBar/classifyItem'
export default {
    components:{
        classifyBar,classifyItem
    },
    methods:{
    // 分类栏点击事件
        goweekHot(){
            this.$router.push('/weekHot')
        },
        gomustHot(){
            this.$router.push('/mustHot')
        }
    },

}
</script>

<style>
/* #ClassBar{
    margin-top: 5.82rem;
} */

</style>
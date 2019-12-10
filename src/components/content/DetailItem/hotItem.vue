<!--热门页详情列表-->
<template>
<div class="hotBar">
    <div class="hotItem" v-for="(item,index) in rec" :key="index" @click="hotLink(index)">
        <img :src="item.img" >
        <div class="hotText">
            <div class="hotTitle">{{item.title}}</div>
            <div class="hotInfo" :class="[{first:index==0},{second:index==1},{third:index==2}]">
                <img src="@/assets/img/images/iconfont/fire.png" id="fire2" v-if="item.hotNum">{{item.hotNum}}{{item.upname}}
                <i class="el-icon-medal" ><div>{{index+1}}</div></i>
            </div>
        </div>
    </div>
</div>
</template>

<script>
// import Bus from '../../bus.js'
export default {

    props:['rec'],
    methods:{
        hotLink(index){
            this.$router.push(this.rec[index].path + '/' + this.rec[index].av);
            this.$store.commit('sendData',index)
        }
    },
    data(){
        return{
            rank:0
        }

    },

    
}
</script>

<style>
/* .hotBar{
    padding:0 0.6rem 0 0.6rem;
    
} */
.hotItem{
    display: flex;
    position: relative;
    padding:0.625rem;
    /* margin: 0.5rem 0 0.6rem 0; */
    background-color: white;
    height: 6rem;
    /* border-radius: 0.7rem; */
    border-bottom: 1px solid rgba(120, 120, 120, 0.1)
}
.hotItem > img{
     width:9rem;
     height: 6rem;
}
.hotText{
    width: 13.1875rem;
}
.hotTitle{
    width: 10rem;
    margin:3px 10px 3px 10px;
    overflow:hidden; 
    display: -webkit-box;
    -webkit-line-clamp:2;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
    color: black;
}
.hotInfo{
    padding-right: 1.125rem;
    padding-left: 0.625rem;
    color: #fa7299;
    font-size: 0.8rem;
    /* margin-top: 2rem; */
    position: absolute;
    display: flex;
    /* justify-content: space-between; */
    align-items: center;
    /* bottom: -1rem; */
    /* right:1.875rem; */
    bottom: 0.625rem;
    width: 12rem;
}
.hotInfo > i {
    position: absolute;
    right:0.625rem;
    bottom: 4.3rem;
    font-size: 1.8rem;
    color:lightgrey;
}
.hotInfo > i > div{
    margin-top:-0.995rem;
    font-size: 0.6rem;
    text-align: center;
}
.first i{
    color: #FFD700;
}
.second i{
    color: #c0cfe2;
}
.third i{
    color: #d3b59d;
}
#fire2{

    width: 1rem;
    height: 1rem;
    left: 0rem;
    bottom: 0rem;
}
</style>
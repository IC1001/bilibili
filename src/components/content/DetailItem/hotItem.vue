<!--热门页详情列表-->
<template>
<div class="hotBar">
    <div class="hotItem" v-for="(item,index) in rec" :key="index" @click="hotLink(index)">
        <img :src="item.img" >
        <div>
            <div class="hotTitle">{{item.title}}</div>
            <div class="hotInfo">up·{{item.upname}}
                <i class="el-icon-medal"><div>{{index+1}}</div></i>
            </div>
        </div>
    </div>
</div>
</template>

<script>
// import Bus from '../../bus.js'
export default {
    computed:{
        //使用vuex数据
        rec(){
            return this.$store.state.previews
        },
    },
    methods:{
        hotLink(index){
            this.$router.push(this.rec[index].path + '/' + this.rec[index].av);
            this.$store.commit('sendData',index)
        }
    },
    
}
</script>

<style>
.hotBar{
    padding:0 0.6rem 0 0.6rem;
    
}
.hotItem{
    display: flex;
    padding:0.625rem 0.625rem 0.8rem 0.625rem;
    margin: 0.5rem 0 0.6rem 0;
    background-color: white;
    height: 5.5rem;
    border-radius: 0.7rem;
    border-bottom: 1px solid rgba(120, 120, 120, 0.2)
}
.hotItem > img{
     width: 40%;
}
.hotTitle{
    margin:3px 10px 3px 10px;
    overflow:hidden; 
    display: -webkit-box;
    -webkit-line-clamp:2;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
}
.hotInfo{
    padding-left: 0.525rem;
    color: cadetblue;
    font-size: 0.8rem;
    margin-top: 1.15rem;
    position: relative;
}
.hotInfo > i {
    position: absolute;
    right:1.875rem;
    bottom: 0rem;
    font-size: 1.8rem;
}
.hotInfo > i > div{
    margin-top:-0.995rem;
    font-size: 0.5rem;
    text-align: center;
}
</style>
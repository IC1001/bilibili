<template>
<div id="ppt">
<!-- ElementUI轮播图 -->
    <div class="block">
    <el-carousel height="15rem"  :autoplay="true" :interval="2750" >
        <el-carousel-item v-for="(item,index) in imgArr" :key="index" @click="slideLink(index)">
            <img :src="item.img" class="elimg"   @click="slideLink(index)">
        </el-carousel-item>
    </el-carousel>
    </div>
</div>
</template>

<script>
import Bus from '@/bus.js'
export default {
    props:[
      'imgArr'
    ],
    methods:{
        slideLink(index){
        this.$router.push(this.imgArr[index].path + '/' + this.imgArr[index].av);
        this.$store.commit('sendData',index)
        this.$store.commit('sendAnimeData',index)
        this.$store.commit('useRecData',index)
        }
    }
}
</script>

<style>
.block{
    padding:2.5% 2.5% 0 2.5%;
    text-align: center;
    /* margin-top: 5rem; */
    z-index: 9;
}
.el-carousel__indicators{
    left: 90%;
    display: flex;
}
.el-carousel__button{
    width: 0.625rem;
    height: 0.625rem;
    background-color: white;
    border-radius: 50%;
    opacity: 1;
    margin-bottom: 0.2rem;
}
.is-active .el-carousel__button {
    color: pink;
    background-color: pink;
}


.elimg{
    width: 22.3rem;
    height: 14.35rem;
    border-radius: 0.5rem;
}
</style>
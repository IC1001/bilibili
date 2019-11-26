<template>
<div>
    <div class="shopBlock">
    <el-carousel height="7.5rem"  :autoplay="true" :interval="2750" >
        <el-carousel-item v-for="(item,index) in bannerData" :key="index" @click="slideLink(index)">
            <img :src="item.img" class="shopImg"   @click="slideLink(index)">
        </el-carousel-item>
    </el-carousel>
    </div>
</div>
</template>

<script>
export default {
    props:[
      'imgArr'
    ],
    data(){
        return {
            bannerData:[
                {img:require('@/assets/img/shop/banner/3.jpg'),path:''},
                {img:require('@/assets/img/shop/banner/4.jpg'),path:''},
                {img:require('@/assets/img/shop/banner/5.jpg'),path:''}
            ]
        }
    },
    methods:{
        slideLink(index){
        this.$router.push(this.bannerData[index].path + '/' + this.bannerData[index].av);
        // this.$store.commit('sendData',index)
        // this.$store.commit('sendAnimeData',index)
        // this.$store.commit('useRecData',index)
        }
    }

}
</script>

<style>
.shopBlock{
    padding:2.5% 2.5% 0 2.5%;
    text-align: center;
    /* margin-top: 5rem; */
    z-index: 9;
    border-radius: 0.8rem;
}


.shopImg{
    width: 100%;
    height: 7rem;
    border-radius: 0.6rem;
}



</style>
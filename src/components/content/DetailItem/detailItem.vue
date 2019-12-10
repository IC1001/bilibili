<!--推荐页详情列表-->
<template>

<div class="detail">
    <div class="dtItem" v-for="(item,index) in Data" :key="index" @click="dtLink(index)">
        <img v-if="item" :src="item.img" >
        <div v-if="item">
            <div class="dtTitle" >{{item.title}}</div>
            <div class="dtType">{{item.type}}</div>
        </div>
    </div>
    <!-- <div class="kong"></div> -->
    
</div>
</template>

<script>
export default {
    computed:{
        // previews(){
        //     return this.$store.state.previews
        // }
    },
    methods:{
        dtLink(index){
            const routeIndex = (this.Data[index].av[7] + this.Data[index].av[8]) / 1 -1            
            this.$router.push(this.Data[index].path + '/' + this.Data[index].av)
            // this.$router.push(this.Data[index].path + '/' + this.Data[index].av);this.$route.params.uid
            this.$store.commit('sendData',routeIndex)
            this.$store.commit('sendAnimeData',routeIndex)
            this.$store.commit('useRecData',index)
        }
    },
    props:['Data']
    
}
</script>

<style>
.detail{
    height: 100%;
    margin-top: -0.75rem;
    text-align: center;
    padding:1rem 0.6rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
}
.detail > .dtItem{
    height: 10.55rem;
    width: 10.695rem;
    margin: 0.3rem 0;
    background-color: white;
    border-radius: 6%;
        /* 卡片阴影效果 */
    box-shadow: 0px 0px 0.1rem 0.05rem rgba(0, 0, 0, 0.1);
    /* border-bottom: 1px solid rgba(100, 100, 100, 0.3); */

}
.detail > .dtItem > img{    
    width: 100%; 
    height: 7rem;   
    border-top-left-radius: 6%;
    border-top-right-radius: 6%;
}
.dtTitle{
    font-size: 0.9rem;
    text-align: left;
    margin:0.125rem 0.625rem 0.3125rem 0.325rem;
    /* 多出变省略号   */
    overflow:hidden; 
    display: -webkit-box;
    -webkit-line-clamp:2;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
}
.dtType{
    color: #708090	;
    font-size: 0.75rem;
    text-align: left;
    padding-left: 10px;
    padding:0.125rem 0.625rem 0.3125rem 0.325rem;
}
/* .kong{
    height: 1rem;
    width: 100%;
    
} */



</style>
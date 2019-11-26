<!--推荐页详情列表-->
<template>
<div class="detail">
    <div class="dtItem" v-for="(item,index) in Data" :key="index" @click="dtLink(index)">
        <img :src="item.img" >
        <div>
            <div class="dtTitle">{{item.title}}</div>
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
            this.$router.push(this.Data[index].path + '/' + this.Data[index].av)
            // this.$router.push(this.Data[index].path + '/' + this.Data[index].av);this.$route.params.uid
            this.$store.commit('sendData',index)
            this.$store.commit('sendAnimeData',index)
            this.$store.commit('useRecData',index)
        }
    },
    props:['Data']
    
}
</script>

<style>
.detail{
    height: 100%;
    text-align: center;
    padding:1%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
}
.detail > .dtItem{
    height: 10.55rem;
    width: 10.695rem;
    margin-top: 0.375rem;
    background-color: white;
    border-radius: 6%;

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
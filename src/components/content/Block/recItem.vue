<template>
<div>
    <div class="recommendPage" v-for="(item,index) in rec" :key="index" @click="recLink(index)">
        <img :src="item.img" >
        <div class="recText">
            <div class="recTitle">{{item.title}}</div>
            <div class="recData">{{item.type}}</div>
            <div class="recData">
                <i class="el-icon-video-play">0</i>
                <i class="el-icon-star-off">0</i>
            </div>
    
        </div>
    </div>
</div>  
</template>

<script>
// import Bus from '../../bus.js'
export default {
    name:'recPage',
    data(){
        return{
        }
    },
    computed:{
        recData(){
            return this.$store.state.recData
        }
    },
    props:['rec'],
    methods:{
        recLink(index){
            this.$router.push(this.rec[index].path + '/' + this.rec[index].av);
            
            const currentIndex = ((this.$route.params.av[7] + this.$route.params.av[8]) / 1 ) - 1
            console.log(this.$route.params.av[7] + this.$route.params.av[8]);
            
            
            this.$store.commit('sendData',currentIndex)
            this.$store.commit('sendAnimeData',currentIndex)
            this.$store.commit('isPlayReset')
 
            // if(index == this.$route.params.av -1){
            
            this.$store.commit('useRecData',currentIndex)
            //回到顶部
             document.documentElement.scrollTop = 0
            // }else{
            //    this.$store.commit('useRecData',index + 1 )
            // }

            
            // const routeIndex = ((this.$route.params.av[7] + this.$route.params.av[8]) / 1 ) - 1
            // this.rec.splice(2,1)
        }
    },

    // updated(){
    //     if(this.$route.params.av ){
    //         //传入路由params值的后两位当索引
    //         // const routeAV = ((this.$route.params.av[7] + this.$route.params.av[8]) / 1 ) -1
    //         // this.$store.commit('sendData',routeAV)
    //         const currentIndex = ((this.$route.params.av[7] + this.$route.params.av[8]) / 1 ) - 1
    //         this.$store.commit('useRecData',currentIndex)
    //     }
      
       

    

}
</script>

<style>
/* 推荐页 */
.recommendPage{
    display: flex;
    margin:0.625rem;
    padding-bottom: 0.625rem;
    background-color: white;
    border-bottom: 1px rgba(120, 120, 120, 0.2) solid;
}
.recommendPage > img{
    width: 8rem;
    height: 6rem;
}
.recTitle{
    overflow:hidden; 
    display: -webkit-box;
    -webkit-line-clamp:2;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;

}
.recData{
    color: cadetblue;
    font-size: 0.8rem;
    margin-top: 1rem;

}
.recData > i,i{
    font-size: 1rem;
    margin-right: 0.3rem;

}
.recText{
    padding-left: 0.525rem;
    
}


</style>

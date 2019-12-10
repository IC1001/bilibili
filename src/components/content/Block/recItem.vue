<template>
<div>    
    <div class="recommendPage" v-for="(item,index) in rec" :key="index" @click="recLink(index)">
        <img :src="item.img" >
        <div class="recText">
            <div class="recTitle">{{item.title}}</div>
            <div class="recData">{{item.type}}</div>
            <div class="recData">
                <i class="el-icon-video-play">{{item.playNums}}</i>
                <i class="el-icon-postcard">0</i>
                <span v-if="history">{{item.Date | formatDate}}</span>
            </div>
        </div>
    </div>
</div>  
</template>

<script>
import {formatDate} from '@/common/utils.js'
// import Bus from '../../bus.js'
export default {
    name:'recPage',
    data(){
        return{
        }
    },
    filters:{
        formatDate (time) {
　　　　    let date = new Date(time) 
            return formatDate(date, 'MM-dd hhhh:mm')
　　    },
    },
    computed:{
        recData(){
            return this.$store.state.recData
        },
        history(){
            if(this.$route.path.indexOf('history')!==-1){
                return true
            }else{
                return  false
            }
           
        }
    },
    props:['rec'],
    methods:{
        recLink(index){
            this.$router.push(this.rec[index].path + '/' + this.rec[index].av);
            
            const currentIndex = ((this.$route.params.av[7] + this.$route.params.av[8]) / 1 ) - 1
            // console.log(this.$route.params.av[7] + this.$route.params.av[8]);
            
            
            this.$store.commit('sendData',currentIndex)
            this.$store.commit('sendAnimeData',currentIndex)
            this.$store.commit('isPlayReset')
 
            // if(index == this.$route.params.av -1){
            
            this.$store.commit('useRecData',currentIndex)
            //回到顶部
             document.documentElement.scrollTop = 0
        }
    },

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
    color: #9C9C9C	;
    font-size: 0.8rem;
    margin-top: 1rem;

}
.recData > i{
    font-size: 1rem;
    margin-right: 0.9rem;


}
.recText{
    padding-left: 0.525rem;
    
}


</style>

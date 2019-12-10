<template>
<div>
    <div class="commentTitle">
        <div v-if="hot">热门评论</div><div v-else>最新评论</div>
        <div class="ctRight" @click="ishot">
            <div class="three"></div>
            <div v-if="hot">按热度</div><div v-else>按时间</div>
        </div>
    </div>
    <!-- <div class="noComment" v-if="!hasComment">看看下面~来发评论吧</div> -->
    <div class="commentBlock" v-for="(item,index) in aComments" :key="index">
        <div class="userInfo">
            <img src="@/assets/img/images/iconfont/admin.png" alt="">
            <div><span>游客</span><div>{{sendDate | formatDate}}</div></div>
        </div>
        <div class="cContent"> {{item}}</div>
    </div>
    
    <sendBar @sendAcomment="sendAcomment"></sendBar>
    <div class="ac">{{ac}}</div>
  </div>
</template>

<script>
import sendBar from '@/components/content/Bar/sendBar.vue'
import {formatDate} from '@/common/utils.js'
export default {
    data(){
        return{
            hot:true,
            ac:1,
        }
    },
    filters:{
        formatDate (time) {
　　　　    let date = new Date(time) 
            return formatDate(date, 'MM-dd')
　　    }
    },
    computed:{
        aComments:{
            get(){
                return this.$store.state.animeDataAll.comments
            },
            set(val){
                this.$store.state.animeDataAll.comments = val

            }
        },
        sendDate(){
            return Date()
        }
    },
    components:{
        sendBar
    },
    methods:{
        ishot(){
            this.hot = !this.hot
        },
        sendAcomment(cc){
            this.aComments.push(cc)
            this.ac++
        },
        
    },
    activated(){
    },
    updated(){
    }

}
</script>

<style>
.commentTitle{
    display: flex;
    justify-content: space-between;
    padding: 0.8rem 0.5rem ;
    font-size: 0.93rem;
}
.three{
    border-top: 0.125rem grey solid;
    border-bottom: 0.125rem grey solid;
    padding: 0.1875rem 0;
    background-color: grey;
    height: 0.125rem;
    width: 0.875rem;
    background-clip:content-box;
    margin-right: 0.2rem;
}
.ctRight{
    color: grey;
    display: flex;
    align-items: center;
}
.noComment{
    text-align: center;
    margin-top: 30%;
    font-size: 0.8rem;
    color: grey;
}
.commentBlock{
    /* height: 16%; */
    width: 100%;    
    margin-bottom: 10px;
    border-bottom: 1px solid rgba(100, 100, 100, 0.1);
}
.ac{
    display: none;
}
.userInfo{
    display: flex;
    margin-left: 0.3rem;
}
.userInfo > img{
    margin-right: 0.3rem;
    width: 2rem;
}
.userInfo > div > span{
    color: #696969;
    font-size: 0.9rem;
}
.userInfo > div > div{
    color: grey;
    font-size: 0.7rem;
}
.cContent{
    margin:0.1rem 0 0.5rem 2.7rem;
    white-space: normal;
    line-height: 1.1rem;
    width: 20rem;
    /* overflow: hidden; */
    word-wrap:break-word;
}

</style>
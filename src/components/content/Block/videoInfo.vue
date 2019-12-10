<template>
<div>    
    <div class="videoTitle">
        <div class="videoInfo" >{{videoInfo.title}}</div> 
        <div class="afollow" @click="followAnime" v-if="follow">♥ 追番</div>
        <div class="afollow followed" @click="followAnime" v-else>已追番</div>
        <div class="videoData">
            <div><i class="el-icon-video-play"></i></div>
            <div><i class="el-icon-postcard"></i></div>
            <div><span>{{videoInfo.type}}</span></div>
            <div><span></span></div>
        </div>
    </div>
    <likeBar>
        <img src="@/assets/img/images/likeBar-icon/like.png"  @click="touchLike" v-if="!touch">
        <img src="@/assets/img/images/iconfont/like2.png"  @click="touchLike" v-else>
        <img src="@/assets/img/images/likeBar-icon/download.png">
        <img src="@/assets/img/images/likeBar-icon/comments.png" class="disable">
        <img src="@/assets/img/images/likeBar-icon/share.png" class="disable">
    </likeBar>
    <div class="moreRec">更多推荐</div>

</div>
</template>

<script>
import likeBar from '@/components/content/Bar/likeBar'
import recItem from '@/components/content/Block/recItem'
export default {
    data(){
        return{
            follow: this.$store.state.animeDataAll.follow,
            animeFollow:0,
            touch:this.$store.state.animeDataAll.touch,
        }
        
    },
    components:{
        likeBar,recItem
    },
    props:{
        videoInfo:{
            default() {
                return[]
            }
        }
    },

    computed:{
        animeNum:{
            get(){
            return this.$store.state.animeNum
        },
            set(val){
                this.$store.state.animeNum = val
            }
        },

    },
    methods:{
        followAnime(){
            this.$store.commit('isFollow') 
            this.follow = !this.follow
            if(this.follow == false){
                this.$store.commit('addToFollowAnime',this.videoInfo)
            }else{
                this.$store.commit('deleteFollowAnime',this.$route.params.av)
            }
        },
        touchLike(){
            this.touch = !this.touch
            this.$store.commit('isTouch')

        },
    },
    beforeUpdate(){
        this.touch = this.$store.state.animeDataAll.touch
        this.follow = this.$store.state.animeDataAll.follow
    },

}
</script>

<style>
.afollow{
    background-color: #fa7298;
    position: absolute;
    color: white;
    width:5rem;
    height: 1.5rem;
    text-align: center;  
    line-height: 1.5rem;
    font-size:0.9375rem;
    border-radius: 5%;
    right: 0.65rem;
    top: 0;
    /* margin-left: 140px; */
}
.followed{
    background-color: #D3D3D3;
}
/* 视频信息栏*/
.videoInfo{
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    width: 90%;
    font-size: 1.1rem;
}
/* .el-icon-video-play:before,.el-icon-postcard:before{
    font-size: 1rem;
    margin-right: 0.2rem;
    
} */
.unfold{
    width: 90%;
    overflow: visible;
    white-space:normal;

}
.videoTitle{
    margin-top: 0.625rem;
    margin-left: 0.55rem;
    position: relative;
    font-size: 2rem;

}
.videoData{
    color:#708090;
    line-height: 1.425rem;
    height: 1.425rem;
    display: flex;
    /* margin-top: 0.5rem; */
}
.videoData >div >i{
    font-size: 0.85rem;
}
.videoData > div{
    font-size: 0.85rem;
    margin:0.825rem 0.425rem 0 0;
}

.moreRec{
    margin: 0.7rem;
}

.disable{
    opacity: 0.4;
}
</style>
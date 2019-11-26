<template>
<div>    
    <div class="videoTitle">
        <div class="videoInfo" >{{videoInfo.title}}</div> 
        <div class="follow" @click="followAnime"  :class="{followed:animeFollow==1}">{{FollowText}}</div>
        <div class="videoData">
            <div><i class="el-icon-video-play">0</i></div>
            <div><i class="el-icon-postcard">0</i></div>
            <div><span>{{videoInfo.type}}</span></div>
            <div><span></span></div>
        </div>
    </div>
    <likeBar>
        <img src="@/assets/img/images/likeBar-icon/like.png" alt="">
        <img src="@/assets/img/images/likeBar-icon/download.png" alt="">
        <img src="@/assets/img/images/likeBar-icon/comments.png" alt="">
        <img src="@/assets/img/images/likeBar-icon/share.png" alt="">
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
            FollowText:'♥ 追番',
            animeFollow:0,
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
    methods:{
        followAnime(){            
            if(this.animeFollow == 1){
                localStorage.setItem("animeStatus",0)
                this.animeFollow = 0
                this.FollowText = '♥ 追番'  
                this.animeNum --       
                localStorage.setItem("animeNums",this.$store.state.animeNum)     
            }else{
                localStorage.setItem("animeStatus",1)
                this.animeFollow = 1
                this.FollowText = '已追番'
                this.animeNum ++
                localStorage.setItem("animeNums",this.$store.state.animeNum)
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
    activated(){
        // console.log(this.$store.state.recData);
        

    },
    created(){
        this.animeNum = localStorage.getItem("animeNums")
        // this.playNum = localStorage.getItem("playNums")
        //初始化完成时对是否关注进行判断，没有服务器数据这里借用的localStorge
        this.isFollow = localStorage.getItem("status")
        if(this.isFollow == 1){
            this.FollowText = '已追番'
        }else{
            this.FollowText = '♥ 追番'
        }
    },

}
</script>

<style>
.follow{
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


</style>
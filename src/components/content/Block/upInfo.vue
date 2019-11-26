<template>
<div>
    <div class="infoBar">
        <img :src="upinfo.portrait">
        <div class="infoText">
            <div class="upName">{{video.upname}}</div>
            <div class="fansNum">{{fansNum}}粉丝</div>  
        </div>
    <div class="follow" @click="clickFollow"  :class="{followed:isFollow==1}">{{FollowText}}</div>
    </div>
    <!-- 标题栏 -->
    <div class="videoTitle">
        <div class="vedioInfo" :class="{unfold:isUnfold}">{{video.title}}</div>
        <!-- 下拉 -->
         <div class="downSelect" @click="downSelect">
            <i class="el-icon-arrow-down" v-show="!isUnfold"></i>
            <i class="el-icon-arrow-up" id="downSelect" v-show="isUnfold" ></i>
        </div>
        <!-- 视频信息 -->
        <div class="vedioData">
            <div><i class="el-icon-video-play">{{playNum}}</i></div>
            <div><i class="el-icon-postcard">{{barrage}}</i></div>
            <div><span>{{date}}</span></div>
            <div><span>{{video.av}}</span></div>
        </div>
        <div class="vdIntro" v-show="intro">{{video.intro}}</div>
    </div>
    <likeBar>
        <img src="@/assets/img/detail-img/images/like.png" alt="">
        <img src="@/assets/img/detail-img/images/dislike.png" alt="">
        <img src="@/assets/img/detail-img/images/poin.png" alt="">
        <img src="@/assets/img/detail-img/images/collect.png" alt="">
        <img src="@/assets/img/detail-img/images/share.png" alt="">
    </likeBar>
</div>
</template>


<script>
import likeBar from '../Bar/likeBar'
// import Bus from '../../bus.js'
export default {
    name:'upInfo',
    data(){
        return{
            FollowText:'+ 关注' ,
            isFollow:0,
            // vedioData
            barrage:0,
            date:'11-11'   ,
            //下拉点击状态
            intro:false,
            isUnfold:false
        }

    },
    components:{
        likeBar
        },
    computed:{
        // state为单向传递，设置set才能更新store中的值
        playNum:{
            get(){
            return this.$store.state.playNum
        },
            set(val){
                this.$store.state.playNum = val

            }
        },
        fansNum:{
            get(){
            return this.$store.state.fansNum
        },
            set(val){
                this.$store.state.fansNum = val

            }
        },
        video(){
            return this.$store.state.detailData
        }
    },
    created(){
        this.fansNum = localStorage.getItem("fansNums")
        this.playNum = localStorage.getItem("playNums")
        //初始化完成时对是否关注进行判断，没有服务器数据这里借用的localStorge
        this.isFollow = localStorage.getItem("status")
        if(this.isFollow == 1){
          this.FollowText = '已关注'
          }else{
            this.FollowText = '+ 关注'
            }


    },
    props:{
        upinfo:{
            type:Object,
            default(){
                return {}
            }
        },

    },
    methods:{
        clickFollow(){            
            if(this.isFollow == 1){
                localStorage.setItem("status",0)
                this.isFollow = 0
                this.FollowText = '+ 关注'  
                this.fansNum --       
                localStorage.setItem("fansNums",this.$store.state.fansNum)     
            }else{
                
                localStorage.setItem("status",1)
                this.isFollow = 1
                this.FollowText = '已关注'
                this.fansNum ++
                localStorage.setItem("fansNums",this.$store.state.fansNum)
            }
        },
        downSelect(){
            this.intro = !this.intro;
            this.isUnfold = !this.isUnfold
            
        }
    },


}
</script>

<style>
/* up信息栏 */
.infoBar{
    height: 10%;
    width: 100%;
    display: flex;
    align-items: center;
}
.infoBar>img{
    height: 90%;
    width: 12%;
    margin-left: 0.45rem;
    
}
.infoText{
    height: 1.25rem;
}
.upName{
    color: #fa7298;
    font-size: 0.9375rem;
    font-weight: 600;
    margin-bottom: 2px;
}
.fansNum{
    font-size: 0.875rem;
    color: gray;
}
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
    /* margin-left: 140px; */
}
.followed{
    background-color: #D3D3D3;
}
/* 视频信息栏*/
.vedioInfo{
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    width: 90%;
    font-size: 1rem;
}
.el-icon-video-play:before,.el-icon-postcard:before{
    font-size: 1rem;
    margin-right: 0.2rem;
    
}
.unfold{
    width: 90%;
    overflow: visible;
    white-space:normal;

}
.videoTitle{
    margin-top: 0.625rem;
    margin-left: 0.55rem;
    position: relative;

}
.downSelect{
    position: absolute;
    right: 0.5rem;
    top: -0.06rem;
    text-align: center;
}
#downSelect{
    position: absolute;
    right: 0rem;

    text-align: center;
}
.vedioData{
    color:#708090;
    line-height: 22.8px;
    height: 22.8px;
    display: flex;
}
/* .el-icon-video-play {
    border-radius:0.3125rem;
} */
.vedioData >div >i{
    font-size: 0.85rem;

}
.vedioData > div{
    font-size: 0.85rem;
    margin:0.425rem 0.425rem 0 0;
}
/* 显示隐藏 */
.vdIntro{
    width: 100%;
    font-size: 1rem;
    margin-top: 0.625rem;
}




</style>
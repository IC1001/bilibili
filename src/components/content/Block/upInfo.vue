<template>
<div>
    <div class="infoBar">
        <img :src="upinfo.portrait" @click="toZone"> 
        <div class="infoText">
            <div class="upName">{{upinfo.upname}}</div>
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
            <div><i class="el-icon-video-play">{{playNums}}</i></div>
            <div><i class="el-icon-postcard">{{barrage}}</i></div>
            <div><span>{{date}}</span></div>
            <div><span>{{video.av}}</span></div>
        </div>
        <el-collapse-transition>
            <div class="vdIntro" v-show="intro">{{video.intro}}</div>
        </el-collapse-transition>
    </div>
    <likeBar>
        <!-- 赞 -->
        <div class="likeAnime" v-show="heart">
            <img src="@/assets/img/images/iconfont/likeAnime.png" alt="">
            <!-- <img src="@/assets/img/images/iconfont/bilibili.png" alt=""> -->
        </div>
        <img src="@/assets/img/detail-img/images/like.png" class="likeActive" 
        :class="{likeActived:OT}" @touchstart="oneThree" @touchend="oneThree" v-if="!like"  >
        <img src="@/assets/img/detail-img/images/liked.png" class="likeActive" v-else  @touchstart="oneThree" @touchend="oneThree">
        <!-- <img src="@/assets/img/detail-img/images/liked.png" class="likeActive" @touchstart="oneThree" v-show="like" @click="Like"> -->
        <!-- 踩 -->
        <img src="@/assets/img/detail-img/images/dislike.png" class="likeActive2" v-if="!cai" @click="dislike">
        <img src="@/assets/img/detail-img/images/disliked.png" class="likeActive3" v-else @click="dislike">
        <!-- 币 -->
        <img src="@/assets/img/detail-img/images/poin.png" class="likeActive"  
        :class="{likeActived:OT}"  v-if="!poin"  @click="Poin">
        <img src="@/assets/img/detail-img/images/poined.png" class="likeActive" v-else @click="Poin">
        <!-- <img src="@/assets/img/detail-img/images/poined.png" class="likeActive" v-show="poin" @click="Poin"> -->
        <!-- 收藏 -->
        <img src="@/assets/img/detail-img/images/collect.png" class="likeActive" 
        :class="{likeActived:OT}" v-if="!collect"  @click="Collect">
        <img src="@/assets/img/detail-img/images/collected.png" class="likeActive" v-else  @click="Collect">
        <!-- <img src="@/assets/img/detail-img/images/collected.png" class="likeActive"  v-show="collect" @click="Collect"> -->
        <!-- 分享 -->
        <img src="@/assets/img/detail-img/images/share.png" class="likeActive2 disable"> 
        <div class="F5">{{f5}}</div>
    </likeBar>
</div>
</template>


<script>
import likeBar from '../Bar/likeBar'
import {debounce} from '@/common/utils.js'
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
            isUnfold:false,
            OT:false,
            OTO: this.$store.state.detailData.OTO,
            cai: this.$store.state.detailData.cai,
            like: this.$store.state.detailData.like,
            poin: this.$store.state.detailData.poin,
            collect: this.$store.state.detailData.collect,
            f5:1,
            heart:false,

            OTstatus:0,
            time1:'',
            time2:'',
     
        }

    },
    components:{
        likeBar
    },
    computed:{
        routeAV(){
            if(this.$route.params.av){
                return ((this.$route.params.av[7] + this.$route.params.av[8]) / 1 ) - 1
            }
        },
        // state为单向传递，设置set才能更新store中的值
        playNums:{
            get(){
                return this.$store.state.detailData.playNums
        },
            set(val){
                this.$store.state.detailData.playNums = val
            }
        },
        fansNum:{
            get(){
                return this.$store.state.info[0].fansnum
        },
            set(val){
                this.$store.state.info[0].fansnum = val

            }
        },
        video(){
            return this.$store.state.detailData
        },

    },
    created(){
        this.fansNum = localStorage.getItem("fansNums")
        // this.playNum = localStorage.getItem("playNums")
        //初始化完成时对是否关注进行判断，没有服务器数据这里借用的localStorge
        this.isFollow = localStorage.getItem("status")
        if(this.isFollow == 1){
          this.FollowText = '已关注'
        }else{
            this.FollowText = '+ 关注'
        }
    },
    activated(){
        this.like = this.$store.state.previews[this.routeAV].like
        this.cai = this.$store.state.previews[this.routeAV].cai
        this.poin = this.$store.state.previews[this.routeAV].poin
        this.collect = this.$store.state.previews[this.routeAV].collect
        this.fansNum = localStorage.getItem("fansNums")
        this.isFollow = localStorage.getItem("status")
        this.isFollow = localStorage.getItem("status")
        if(this.isFollow == 1){
          this.FollowText = '已关注'
        }else{
            this.FollowText = '+ 关注'
        }
    },
    beforeUpdate(){
        if(this.$route.params.av){
            
            this.like = this.$store.state.previews[this.routeAV].like
            this.cai = this.$store.state.previews[this.routeAV].cai
            this.poin = this.$store.state.previews[this.routeAV].poin
            this.collect = this.$store.state.previews[this.routeAV].collect
        }

    },
    props:{
        upinfo:{
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
                localStorage.setItem("fansNums",this.fansNum)     
            }else{
                localStorage.setItem("status",1)
                this.isFollow = 1
                this.FollowText = '已关注'
                this.fansNum ++
                localStorage.setItem("fansNums",this.fansNum)
            }
        },
        downSelect(){
            this.intro = !this.intro;
            this.isUnfold = !this.isUnfold
            
        },
        Poin(){                
            this.poin = true
            this.$store.commit('iscollect',this.routeAV)
        },
        Collect(){
            this.collect = !this.collect
            this.$store.commit('iscollect',this.routeAV)
            if(this.collect == true){
                this.$store.commit('addCollect',this.video)
            }else{
                this.$store.commit('removeCollect',this.$route.params.av)
            }
        },
        //点赞、一键三连功能实现
        oneThree(num){
            if(this.OTstatus == 0){                
                this.OTstatus = 1
                setTimeout(()=>{
                    this.OTstatus = 2
                    this.OT = true
                    // this.like = false
                    if(this.OTstatus == 2){                        
                        // this.like = false
                        var timer=setTimeout(()=>{
                            if(this.OTstatus == 2){
                                this.OTstatus = 3
                                // this.OTO = true
                                this.cai = false
                                this.like = true
                                //收藏
                                this.collect = true
                                this.$store.commit('addCollect',this.video)
                                //
                                this.poin = true
                                // this.OTstatus = 0
                                this.OT = false
                                this.heart = true
                                //
                                this.$store.commit('isOT',this.routeAV)
                                setTimeout(()=>{
                                    this.heart = false
                                },2000)

                            }
                        },1500)
                    }
                },100)
            }else if(this.OTstatus == 1){
                    this.like = !this.like
                    //
                    this.$store.commit('islike',this.routeAV)
                    if(this.like == true){
                        this.heart = true
                        setTimeout(()=>{
                            this.heart = false
                        },2000)
                    }else{
                        this.heart = false
                    }
                    this.cai = false
                    // this.OT = false
                    this.OTstatus = 0
                    setTimeout(()=>{
                        this.OTstatus = 0
                        this.OT = false
                    },100)
            }else if(this.OTstatus == 2){
                    this.like = false
                    
                    this.cai = false
                    this.OTstatus = 0
                    // this.$store.commit('islike',this.routeAV)
                    setTimeout(()=>{
                        this.OTstatus = 0
                        this.OT = false
                    },100)
            }else if(this.OTstatus == 3){
                console.log('三连已完成');
                this.OTstatus = 0
            }
        },
        dislike(){
            this.cai = !this.cai 
            this.like = false
            this.heart = false
            this.$store.commit('iscai',this.routeAV)
            this.OT = false
            this.OTstatus = 0
        },
        toZone(){
            this.$router.push('/zone?id=0&name=xiao')
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

.likeActive{
    padding: 0.15rem 0.15rem 0.15rem 0.19rem;
    border: white solid 0.13rem;
    border-radius: 50%;
   
}
.likeActive2{
    padding: 0.15rem 0.15rem 0.15rem 0.19rem;
    border: white solid 0.13rem;

}
.likeActive3{
    padding: 0.15rem 0.15rem 0.15rem 0.19rem;
    border: white solid 0.13rem;
    margin-bottom: 0.1rem;

}
.likeActived{

    animation: OneThree 5s;
    animation-fill-mode:backwards;
    animation-direction:alternate;
    border-radius: 50%;
    padding: 0.15rem 0.15rem 0.15rem 0.19rem;

}
@keyframes OneThree{
    0% {}
    20% {border-top: #fa7298 solid 0.13rem;}
    40% {border-left: #fa7298 solid 0.13rem;}
    60% {border-bottom: #fa7298 solid 0.13rem;}
    80% {border-right: #fa7298 solid 0.13rem;}
    100% {border: #fa7298 solid 0.13rem;}
}


.F5{
    display: none;
}

.likeAnime{
    position: absolute;
    background-color: transparent;
    width: 4rem;
    height: 5rem;
    text-align: center;
    line-height: 4rem;
    left: 0.35rem;
    top: -2rem;
    animation: heartRotate 2.5s;

}
.likeAnime > img{
    width: 2rem;
    height: 2rem;
}
@keyframes  heartRotate{
    0%  {transform: rotateY(0deg);}
    25%  {transform: rotateY(90deg);}
    50%  {transform: rotateY(180deg);}
    75%  {transform: rotateY(270deg);}
    75%  {transform: rotateY(360deg);}

    
}
.disable{
    opacity: 0.4;
}

</style>
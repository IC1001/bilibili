<!--详情页视频区域-->
<template>
<!-- 视频封面 -->
<div class="vp">
    <div class="back" @click="goback"><i class="el-icon-back"></i></div>
    <div class="vpCover">
        <img :src="video.img" v-show="isPlay">
        <video controls=true class="videoClass" :src="video.vdo" type="video/mp4" ref="video"></video>
        <div class="playBtn" @click="playVideo" v-show="isPlay">
            <img src="@/assets/img/images/iconfont/play.png">
        </div>
    </div>
    <!-- 分隔导航栏 -->
    <div class="midBar">
        <div class="barLeft" @click="itemClick1"><span :class="{actived1:mark===0}">简介</span></div>
        <div class="barMid"  @click="itemClick2"><span :class="{actived1:mark===1}">评论</span></div>
        <div class="barRight">点我发送弹幕</div>
    </div>
</div>
</template>

<script>
export default {
    name:'videoPage',
    data(){
        return{
            mark:0,
        }
    },
    props:{
        info:{
            type:Array,
            default() {
                return[]
            }
        },
        video:{
            default() {
                return[]
            }
        },
    },
    computed:{
        //是否已播放
        isPlay:{
            get(){
                return this.$store.state.isPlay
            },
            set(val){
                this.$store.state.isPlay = val
            }
        },
        
        // 接收带index的数据源detailData
    
    },
    methods:{
        itemClick1(){
            this.mark = 0
            // this.$router.push('/detailPage/简介')
            this.$emit('intro')
            this.$emit('aIntro')
            this.$emit('mIntro')
        },
        itemClick2(){
            this.mark = 1
            this.$emit('comment')
            this.$emit('aComment')
            this.$emit('mComment')
        },
        goback(){
            this.$router.back()
            //解决返回时路由更新但页面不更新问题
            const routeAV = ((this.$route.params.av[7] + this.$route.params.av[8]) / 1 ) 
            setTimeout(()=>{ 
                this.$store.commit('sendData',routeAV)
                this.$store.commit('sendAnimeData',routeAV)
            },30) 
        },
        
        playVideo(){              
            this.isPlay = false
            this.$refs.video.play()
            this.$store.commit('isplayed')
            
            this.$store.dispatch('sendHistory',this.video)
            
            // localStorage.setItem('playNums',this.$store.state.playNum)

        },

    },
    beforeUpdate(){
        //解决返回时路由更新但页面不更新问题
        if(this.$route.params.av ){
            //传入路由params值的后两位当索引，activated会更新页面触发此事件
            const routeAV = ((this.$route.params.av[7] + this.$route.params.av[8]) / 1 ) -1
            this.$store.commit('sendData',routeAV)
            this.$store.commit('sendAnimeData',routeAV)
            this.$store.commit('useRecData',routeAV-12)           
        }
    },
    //   页面活跃后生成封面图与播放按钮
    activated(){
        document.documentElement.scrollTop = 0 ; 
        this.mark = 0;
        this.$store.state.isPlay = true;
        
        
    },
}
</script>

<style>
/* 返回键 */
.back{
    position: fixed;
    left: 10px;
    top: 15px;
    color: white;
    background-color:rgba(100,100,100,0.1);
    font-size: 1.45rem;
    text-align: center;
    line-height: 1.1rem;
    height: 1.4rem;
    width: 1.4rem;
    border-radius: 100%;
    z-index: 12;
}
/* 封面区 */
.vpCover{
    position: relative;
}
.vpCover img{
    height: 100%;
    width: 100%;
    position: absolute;
    z-index: 10;
}

/* 播放键 */
.playBtn{
    position: absolute;
    right: 3.8rem;
    bottom: 3.4rem;
    /* background-color: rgba(255, 255, 255, 0.9); */
    border-radius: 20%;
    /* width: 2.5rem; */
    z-index: 11;
    /* line-height: 1.66rem; */
    text-align: center;
    
}
.playBtn > img{
    height: 2.5rem;
    width: 2.8rem;
    /* font-size: 1.7rem; */
    opacity: 0.85;
    
    
}
/* 中间栏 */
.midBar{
    display: flex;
    justify-content: space-around;
    text-align: center;
    font-size: 0.93rem;
    border-bottom: 1px solid rgba(100, 100, 100, 0.1);
    padding: 0.4rem;
}
/* .barLeft{
    width: 31%;
} */
.midBar :active{
    background-color: rgba(100,100,100,0.1);
}
.actived1{
    color: #fa7298;
    padding-bottom: 2px;
    border-bottom: 2px solid #fa7298;
}
/* .barMid{
    width: 31%;
}
*/
.videoClass{
    width: 100%;
    height:13.125rem;
}
.barRight{
    color: grey;
    opacity: 0.5;
} 


</style>
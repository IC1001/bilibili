<template>
<transition name="anime">
<div>
    <SlideShow :imgArr="animeSlide"></SlideShow> 
    <classifyBar id="OLClassBar">
        <classifyItem @click.native="toAnimeJPN">
        <img src="@/assets/img/images/animate_03.png" alt="" slot="classicon">
        <p slot="classtext">番剧</p>
        </classifyItem>
        <classifyItem @click.native="toAnimeCN">
        <img src="@/assets/img/images/animate_06.png" alt="" slot="classicon">
        <p slot="classtext">国创</p>
        </classifyItem>
        <classifyItem @click.native="toAnimeIndex">
        <img src="@/assets/img/images/animate_10.png" alt="" slot="classicon">
        <p slot="classtext">索引</p>
        </classifyItem>
        <classifyItem @click.native="toAnimeHot">
        <img src="@/assets/img/images/animate_12.png" alt="" slot="classicon">
        <p slot="classtext">热门榜单</p>
        </classifyItem>
    </classifyBar>
    <titleBar>
        <titleBarItem>
            <div slot="TBIleft">我的追番</div>
        </titleBarItem>
        <titleBarItem>
            <span slot="TBIright" @click="toMyCollect">查看全部<i class="el-icon-arrow-right" ></i></span>
        </titleBarItem>
    </titleBar>
    <myBarItem :myData="followAnime"></myBarItem>
    <titleBar>
        <titleBarItem>
            <div slot="TBIleft" >番剧推荐</div>
        </titleBarItem>
        <titleBarItem>
            <span slot="TBIright" @click="toAnimeJPN">查看更多<i class="el-icon-arrow-right" ></i></span>
        </titleBarItem>
    </titleBar>
    <DetailItem :Data="anime" ></DetailItem>
    <titleBar>
        <titleBarItem>
            <div slot="TBIleft">国创推荐</div>
        </titleBarItem>
        <titleBarItem>
            <span slot="TBIright" @click="toAnimeCN">查看更多<i class="el-icon-arrow-right" ></i></span>
        </titleBarItem>
    </titleBar> 
    <DetailItem :Data="animeCN" ></DetailItem>
    <titleBar>
        <titleBarItem>
            <div slot="TBIleft">热门榜单</div>
        </titleBarItem>
    </titleBar>
    <myBarItem>
        <hotList :hotData="hotAnime"></hotList>
        <hotList :hotData="hotAnimeCN">热门国创</hotList>
        
    </myBarItem>
    <Change @click.native="toAnimeHot">查看完整榜单<i class="el-icon-arrow-right"></i></Change>
</div>
</transition>
</template>

<script>
//轮播
import SlideShow from '@/components/content/SlideShow/SlideShow'
// 分类栏
import classifyBar from '@/components/common/classifyBar/classifyBar'
import classifyItem from '@/components/common/classifyBar/classifyItem'
//我的
import myBarItem from '@/components/content/Bar/myBarItem'
//热门榜单
import hotList from '@/components/content/Bar/hotList'
// 标题栏
import titleBar from '@/components/common/titleBar/titleBar'
import titleBarItem from '@/components/common/titleBar/titleBarItem'
// 详情列表
import DetailItem from '@/components/content/DetailItem/detailItem'
import Change from '@/components/content/Bar/change'

export default {
    name:'videoo',
    data(){
        return{
            animeTop:0,
            // followAnime:this.$store.state.followAnimeArr

        }
    },
    components:{
        SlideShow,classifyBar,classifyItem,titleBar,titleBarItem,myBarItem,DetailItem,hotList,Change
    },
    computed:{
        animeSlide(){
            //返回轮播数据
            return this.$store.getters.AnimeSlide
        },
        anime(){
            //返回前4个数据
            return this.$store.state.animeAll.slice(0,4)
        },
        animeCN(){
            return this.$store.state.animeAll.slice(12,16)
        },
        hotAnime(){
            return this.$store.getters.hotList
        },
        hotAnimeCN(){
            return this.$store.getters.hotListCN
        },
        followAnime(){
            return this.$store.state.followAnimeArr
        }
    },
    methods:{
        toAnimeJPN(){
            this.$router.push('/animeJPN')
        },
        toAnimeCN(){
            this.$router.push('/animeCN')
        },
        toAnimeHot(){
            
            this.$store.commit('sethlData',['热门番剧','热门国创','全部'])
            this.$store.commit('setArankData',0)
            this.$router.push('/hotListPage/热门番剧')
        },
        toAnimeIndex(){
            
            // this.$store.commit('sethlData',['热门番剧','热门国创','全部'])
            // this.$store.commit('setArankData',0)
            this.$router.push('/animeIndex')
        },
        toMyCollect(){
            this.$router.push('/myCollect/1')
        }
    },
	beforeCreate(){
		this.$store.commit('setAnimeBasic')
    },
    beforeUpdate(){
        // console.log(111);
    },
    activated() {
		// this.$router.push(this.path);
        document.documentElement.scrollTop = this.animeTop;
        
       
	},
  	beforeRouteLeave(to,from,next){
		this.animeTop = document.documentElement.scrollTop ;
		next();
	},    


}
</script>

<style>
.anime-enter-active{
    transition: all 0.5s ease;
}
.anime-enter{
	transform: translateX(-100%);
    opacity: 0;
}
/* .anime-enter{
	transform: translateX(100%);
    opacity: 0;
} */
</style>
<template>
<div>
    <SlideShow :imgArr="animeSlide"></SlideShow> 
    <classifyBar id="OLClassBar">
        <classifyItem>
        <img src="@/assets/img/images/animate_03.png" alt="" slot="classicon">
        <p slot="classtext">番剧</p>
        </classifyItem>
        <classifyItem>
        <img src="@/assets/img/images/animate_06.png" alt="" slot="classicon">
        <p slot="classtext">国创</p>
        </classifyItem>
        <classifyItem>
        <img src="@/assets/img/images/animate_10.png" alt="" slot="classicon">
        <p slot="classtext">索引</p>
        </classifyItem>
        <classifyItem>
        <img src="@/assets/img/images/animate_12.png" alt="" slot="classicon">
        <p slot="classtext">热门榜单</p>
        </classifyItem>
    </classifyBar>
    <titleBar>
        <titleBarItem>
            <div slot="TBIleft">我的追番</div>
        </titleBarItem>
        <titleBarItem>
            <span slot="TBIright" >查看全部<i class="el-icon-arrow-right" ></i></span>
        </titleBarItem>
    </titleBar>
    <myBarItem :myData="anime"></myBarItem>
    <titleBar>
        <titleBarItem>
            <div slot="TBIleft">番剧推荐</div>
        </titleBarItem>
        <titleBarItem>
            <span slot="TBIright" >查看更多<i class="el-icon-arrow-right" ></i></span>
        </titleBarItem>
    </titleBar>
    <DetailItem :Data="anime" ></DetailItem>
    <titleBar>
        <titleBarItem>
            <div slot="TBIleft">番剧推荐</div>
        </titleBarItem>
        <titleBarItem>
            <span slot="TBIright" >查看更多<i class="el-icon-arrow-right" ></i></span>
        </titleBarItem>
    </titleBar> 
    <DetailItem :Data="anime" ></DetailItem>
    <titleBar>
        <titleBarItem>
            <div slot="TBIleft">热门榜单</div>
        </titleBarItem>
        <titleBarItem>
            <span slot="TBIright" >查看更多<i class="el-icon-arrow-right" ></i></span>
        </titleBarItem>
    </titleBar>
    <myBarItem>
        <hotList :hotData="hotAnime"></hotList>
        <hotList :hotData="hotAnime"></hotList>
        
    </myBarItem>
    <Change>查看完整榜单<i class="el-icon-arrow-right"></i></Change>
    <div>!!!</div>
    <div>!!!</div>
    <div>!!!</div>
    <div>!!!</div>
    <div>!!!</div>
    <div>!!!</div>
</div>
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
            animeTop:0

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
            return this.$store.state.anime.slice(0,4)
        },
        hotAnime(){
            return this.$store.getters.hotList
        }
    },
    activated() {
		// this.$router.push(this.path);
		document.documentElement.scrollTop = this.animeTop;
	},
  	beforeRouteLeave(to,from,next){
		this.animeTop = document.documentElement.scrollTop ;
		next();
	},    
    // activated() {
	//     document.documentElement.scrollTop =0 ;   
  	// },
  	// beforeRouteLeave(to,from,next){
  	// this.rec =  document.getElementById('rec');
  	//   this.homeTop = window.scrollY;   
  	// 	this.recTop = document.documentElement.scrollTop ;
	// this.path = this.$route.path;
	// console.log(this.recTop);
	
  	// 	next();
    // },

}
</script>

<style>
/* #fourLimit{
    height: 25rem;
    overflow: hidden;
} */
</style>
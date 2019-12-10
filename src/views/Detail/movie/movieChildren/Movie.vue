<template>
<transition name="pageFade">
<div>
    <SlideShow :imgArr="movieSlide"></SlideShow> 

    <titleBar>
        <titleBarItem>
            <div slot="TBIleft">电影热播</div>
        </titleBarItem>
        <titleBarItem>
            <span slot="TBIright" >查看更多<i class="el-icon-arrow-right" ></i></span>
        </titleBarItem>
    </titleBar>
    <verticalItem :verData="movie" ></verticalItem> 
    <Change @rotate="change"></Change>
    <titleBar>
        <titleBarItem>
            <div slot="TBIleft">纪录片热播</div>
        </titleBarItem>
        <titleBarItem> 
            <span slot="TBIright" >查看更多<i class="el-icon-arrow-right" ></i></span>
        </titleBarItem>
    </titleBar>
    <verticalItem :verData="docu"></verticalItem>   
    <titleBar>
        <titleBarItem>
            <div slot="TBIleft">电视剧热播</div>
        </titleBarItem>
        <titleBarItem>
            <span slot="TBIright" >查看更多<i class="el-icon-arrow-right" ></i></span>
        </titleBarItem>
    </titleBar>
    <DetailItem :Data="TV" ></DetailItem>       
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
// 标题栏
import titleBar from '@/components/common/titleBar/titleBar'
import titleBarItem from '@/components/common/titleBar/titleBarItem'
// 详情列表
import verticalItem from '@/components/content/DetailItem/verticalItem'
import DetailItem from '@/components/content/DetailItem/detailItem'
import Change from '@/components/content/Bar/change'
export default {
    name:'movie',
    data(){
        return{
            movieTop:'',
            changeNum:0

        }
    },
    components:{
        SlideShow,classifyBar,classifyItem,titleBar,titleBarItem,myBarItem,verticalItem,DetailItem,Change
    },
    computed:{
        movie(){
            //换一换数据切换
            if(this.changeNum == 0){
                return this.$store.state.movieAll.slice(0,6)
            }else{
                return this.$store.state.movieAll.slice(this.changeNum,this.changeNum * 2)
            }
        },
        docu(){
            return this.$store.state.movieAll.slice(12,18)
        },
        TV(){
            return this.$store.state.movieAll.slice(20,24)
        },
        movieSlide(){
            return this.$store.getters.MovieSlide
        },
        followMovie:{
            get(){
                return this.$store.state.followMovieArr
            },
            set(val){
            }
        }       
    },
    methods:{
        //换一换数据切换
        change(){
            //当大于数据数组长度时归0，否则更新6条数据
            if(this.changeNum * 2 >= this.$store.state.movie.length){
                this.changeNum = 0
            }else{
                this.changeNum += 6
            }
        },
        toDocu(){
            this.$router.push('/movie/纪录片')
        },
        toFilm(){
            this.$router.push('/movie/电影')
        },
        toTV(){
            this.$router.push('/movie/电视剧')
        },
        followMovie(){
            return this.$store.state.followMovieArr
        },
        toMovieHot(){
            
            this.$store.commit('sethlData',['热门纪录片','热门电影','热门电视剧'])
            this.$store.commit('setrankData',0)
            this.$router.push('/hotListPage/热门纪录片')
        }
    },
    activated() {
		// this.$router.push(this.path);
        document.documentElement.scrollTop = this.movieTop;
    },
	beforeCreate(){
		this.$store.commit('setMovieBasic')
    },
  	beforeRouteLeave(to,from,next){
        this.movieTop = document.documentElement.scrollTop ;
		next();
    },

}
</script>

<style>
.pageFade-enter-active{
    transition:all 0.1s ease;
}
.pageFade-leave-active{
    transition:all 0.2s ease;
}
.pageFade-enter{
     opacity: 0;
    transform: scale(0.6,0.7)
}
.pageFade-leave-to{
    opacity: 0;
    transform: scale(0.6,0.7)
}

</style>
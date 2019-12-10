<template>
<transition name="rec">
<div  class="recClass" > 
	<!-- 推荐页轮播图  -->
	<div v-show="isalert" class="refreshText">无更新内容</div>
	<refresh @refresh="refresh">
		<SlideShow :imgArr="imgArr"></SlideShow>   
		<!-- 组件详情页 -->
		<DetailItem :Data="previews" id="shaw"></DetailItem>
	</refresh> 
	<Scroll> </Scroll>
</div>
</transition>
</template>

<script>
import SlideShow from '@/components/content/SlideShow/SlideShow'
// import detail from '@/components/DetailPage/detail'
import DetailItem from '@/components/content/DetailItem/detailItem'
// import Bus from '../../bus'
import Scroll from '@/components/common/scroll/scroll'
import refresh from '@/common/refresh'
export default {
	name:'recommend',
    methods:{
    },
    data(){
       	return{
			recTop:'',
			isalert:false
       	}
    },
    //  轮播图数据源
    computed:{
        imgArr(){
            return this.$store.state.previews.slice(0,3)
		},
		previews(){
			return this.$store.state.loadMoreData
		}
	},
	methods:{
		refresh(){
			setTimeout(()=>{
				this.isalert = true
				setTimeout(()=>{
					this.isalert = false
				},1200)
			},850)
		}
	},
	beforeCreate(){
		this.$store.commit('setBasic')
	},
	created() {
		this.$store.commit('loadMore')
		
	},
    activated() {
		document.documentElement.scrollTop = this.recTop;
	},
  	beforeRouteLeave(to,from,next){
		// this.rec =  document.getElementById('rec'); 
		this.recTop = document.documentElement.scrollTop ;
		next();
	},
    components:{
      	SlideShow,DetailItem,Scroll,refresh
    }

}
</script>

<style>
.recClass{
    background: rgb(246, 246, 246)	;
}

.pullRefresh{
	position: fixed;
	top:6rem;
	z-index: 11;
	margin-left: 45%;
	font-size: 1.4rem;
	color: #fa7298;
	background-color: white;
	border-radius: 50%;
	padding: 0.5rem;

}
.refreshText{
	z-index: 11;
	margin-left: 38%;
	position: fixed;
	top:6rem;
	background-color: rgba(0,0,0,0.4);
	padding: 0.5rem;
	color: white;
	border-radius: 0.3rem;
}
.refresh-enter-active,.refresh-leave-active{
	transition: all 0.3s ease;
}
.refresh-enter,.refresh-leave-to{
	top: 0;
	opacity: 0;
}
/* #shaw > .dtItem{
	border-bottom: 1px solid rgba(100, 100, 100, 0.3);
} */
.rec-enter-active{
	transition: all 0.3s ease;
}
.rec-leave-active{
	transition: all 0.3s ease;
}
.rec-enter{
	transform: translateX(-100%)
}
.rec-leave-to{
	transform: translateX(-100%)
}

</style>
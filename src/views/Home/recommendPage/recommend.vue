<template>
<div  class="recClass">   
	<!-- 推荐页轮播图  -->
	<SlideShow :imgArr="imgArr"></SlideShow>   
	<!-- 组件详情页 -->
	<DetailItem :Data="previews" id="shaw"></DetailItem> 
</div>
</template>

<script>
import SlideShow from '@/components/content/SlideShow/SlideShow'
// import detail from '@/components/DetailPage/detail'
import DetailItem from '@/components/content/DetailItem/detailItem'
// import Bus from '../../bus'
export default {
	name:'recommend',
    methods:{
    },
    data(){
       	return{
			recTop:'',
       	}
    },
    //  轮播图数据源
    computed:{
        imgArr(){
            return this.$store.state.previews.slice(0,3)
		},
		previews(){
			return this.$store.state.previews
		}
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
      	SlideShow,DetailItem
    }

}
</script>

<style>
.recClass{
    background: rgb(246, 246, 246)	;
}
#shaw > .dtItem{
	border-bottom: 1px solid rgba(100, 100, 100, 0.3);
}

</style>
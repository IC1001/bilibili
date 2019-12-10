<template>
<transition name="hot">
<div>
    <refresh>
    <hotClassifyBar></hotClassifyBar>
    
    <hotItem :rec="hotData"></hotItem>
    </refresh>
</div>
</transition>
</template>

<script>
import hotClassifyBar from './page/hotClassifyBar'
import hotItem from '@/components/content/DetailItem/hotItem'
import refresh from '@/common/refresh'

export default {
    name:'hot',
    data(){
        return{
            hotTop:0,
			hot:''
        }
    },
    computed:{
        //使用vuex数据
        hotData(){
            return this.$store.state.previews
        },
    },
    components:{
        hotItem,hotClassifyBar,refresh
    },
    // beforeRouteEnter(to,from,next){
    // //     if(document.documentElement.scrollTop <= 44){
    // //         this.hotTop = document.documentElement.scrollTop
    // //         console.log('<44');
            
            
    // //     }else{
    // //         this.hotTop = 44
    // //         console.log('44');
            
    // //    }
    // console.log(this.hotTop);
    
    //     next()
    // },
    activated() {
		// this.$router.push(this.path);
		document.documentElement.scrollTop = this.hotTop;
	},
  	beforeRouteLeave(to,from,next){
		this.hotTop = document.documentElement.scrollTop ;
		next();
	},    
}
</script>

<style>
#rankClass{
    color: pink;
}
#weekClass{
    color: #fed442;
}
#mustClass{
    color: #f3921f;
}
/* #ClassBar{
    margin-top: 5.82rem;
} */
.hot-leave-active,.hot-enter-active{
	transition: all 0.3s ease;
}
/* .hot-enter,.hot-enter-active, */
.hot-leave-to{
    opacity: 0;
}
.hot-enter{
    opacity: 0;
}
</style>
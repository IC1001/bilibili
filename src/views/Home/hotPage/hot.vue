<template>
<div>
    <hotClassifyBar></hotClassifyBar>
    <hotItem></hotItem>

</div>
</template>

<script>
import hotClassifyBar from './page/hotClassifyBar'
import hotItem from '@/components/content/DetailItem/hotItem'

export default {
    name:'hot',
    data(){
        return{
            hotTop:0,
			hot:''
        }
    },
    components:{
        hotItem,hotClassifyBar
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

</style>
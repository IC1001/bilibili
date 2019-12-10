<template>
<div>
    <div v-show="isupLoad" class="loadMore"> <img src="@/assets/img/images/iconfont/tv.png">正在加载</div>
    <div v-show="isOver" class="loadMore"> <img src="@/assets/img/images/iconfont/tv.png">什么也没有了</div>
</div>
</template>

<script>
import {throttle} from '@/common/utils'
export default {
    data(){
        return{
            isupLoad:false,
            isOver:false,
            times:3,
            isScroll:this.scroll1
        }
    },
    props:['scroll1'],
    methods:{
        //上拉加载更多
        uploadMore(){
            //可滚动容器的高度
            let innerHeight = document.querySelector('#app').clientHeight;           
            //屏幕尺寸高度
            let outerHeight = document.documentElement.clientHeight;
            //可滚动容器超出当前窗口显示范围的高度
            let scrollTop = document.documentElement.scrollTop;              
            // console.log(innerHeight);console.log(outerHeight);console.log(scrollTop);
            //    console.log(scrollTop); 
            if (innerHeight == (outerHeight + scrollTop)) {
                //加载更多操作
                       
                //  this.$store.commit('loadMore',this.times)
                // this.$store.commit('loadMore',this.times)
                //1秒后显示数据
                if(this.$route.path == '/home/推荐'){
                    this.isupLoad = true
                    setTimeout(()=>{this.$store.commit('loadMore')},1000)
                     
                }else{
                    this.isOver = true     
                }
                // else if(this.$route.path == '/shop/推荐'){
                    
                //     setTimeout(()=>{this.$store.commit('loadShop')},1000)
                // }else if(this.$route.path == '/shop1'){
                //     console.log(111);
                    
                //     setTimeout(()=>{this.$store.commit('loadShop1')},1000)
                // }
                
                
            }else{
                this.isupLoad = false
                this.isOver = false
            }   
       
        },
        scrolling(){
            let scrollTop = document.documentElement.scrollTop;
            this.$emit('navChange',scrollTop)
            if(this.$route.path.indexOf('channelPage'!==-1)){
                if(scrollTop == 0){
                    this.isScroll = false
                }else{
                    this.isScroll = true
                }
            }
        }
        //下拉刷新
        // downloadMore(){
        //     //可滚动容器的高度
        //     let innerHeight = document.querySelector('#app').clientHeight;           
        //     //屏幕尺寸高度
        //     let outerHeight = document.documentElement.clientHeight;
        //     //可滚动容器超出当前窗口显示范围的高度
        //     let scrollTop = document.documentElement.scrollTop;
        //     // console.log(innerHeight);
        //     // console.log(outerHeight+scrollTop);
            
        //     if (innerHeight == (outerHeight + scrollTop)) {
        //         //加载更多操作
        //         this.isupLoad = true
        //         //  this.$store.commit('loadMore',this.times)
        //         // this.$store.commit('loadMore',this.times)
 
        //         //1秒后显示数据
        //         setTimeout(()=>{this.$store.commit('loadMore')},1000)
                
        //     }else{
        //         this.isupLoad = false
        //     }           
        // }
                //上拉加载更多

    },
    mounted(){
        window.addEventListener('scroll', throttle(this.uploadMore,500));
        window.addEventListener('scroll', throttle(this.scrolling,50));
    }
}
</script>

<style>
.loadMore{
    display: flex;
    align-items: center;
    justify-content: center;
    color: black;
    font-size: 0.8rem;
    position: sticky;
    bottom: 3.2rem;
    width: 100%;
    background-color: rgb(246, 246, 246);
    /* margin-bottom: 0.5rem; */
  
}
.loadMore > img{
    height: 1rem;
    margin-right: 0.2rem;
}

</style>
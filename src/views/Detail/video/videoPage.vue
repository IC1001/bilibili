<template>
<div>
    <VedioCover :info="info" :video="upVideo">
    </VedioCover>
    <!-- 分隔页路由显示区域 -->
    <Intro></Intro>
    <Comment v-show="false"></Comment>

   

</div>
</template>

<script>
import VedioCover from '@/components/content/Block/videoCover'
import Intro from './page/intro'
import Comment from './page/comment'
export default {
    components:{
        VedioCover,Intro,Comment 
    },
    // data(){
    //   return{
    //     info:
    //     [{
    //     portrait:require("@/assets/img/images/portrait.png"),
    //     upname:'xiao',fansnum:'0',
    //     isFollow:'flase'}]
    //     }
    // },
    beforeUpdate(index){
        // this.$store.commit('sendData',index)
        
    },
    deactivated(){
        // console.log('deactived'+this.$store.state.detailData);
        
    },
    computed:{
        info(){
            return this.$store.state.info
        },
        upVideo:{
            get(){
              return this.$store.state.detailData
            },
            set(val){
                this.$store.state.detailData = val

            }
        }

    },
    // activated(){
    
         
    // },

}
</script>

<style>

</style>
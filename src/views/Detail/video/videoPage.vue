<template>
<transition name="pageZoom">
<div>
    <VideoCover :info="info" :video="upVideo" @intro="toIntro" @comment="toComment">
    </VideoCover>
    <!-- 分隔页路由显示区域 -->
    <Intro v-if="page"></Intro>
    <Comment v-else></Comment>

   

</div>
</transition>
</template>

<script>
import VideoCover from '@/components/content/Block/videoCover'
import Intro from './page/intro'
import Comment from './page/comment'
export default {
    components:{
        VideoCover,Intro,Comment 
    },
    data(){
      return{
          page:true
        }
    },
    methods:{
        toIntro(){
            this.page=true
        },
        toComment(){
            this.page=false

        }
    },
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
    activated(){
        this.page = true
    },

}
</script>

<style>
.pageZoom-enter-active,.pageZoom-leave-active{
    transition:all 0.15s ease;
}
.pageZoom-enter,.pageZoom-leave-to{
    opacity: 0;
    transform: scale(0.6,0.7)
}
</style>
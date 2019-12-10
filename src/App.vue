<template>
<div id="app">
    <refresh>
        <keep-alive><router-view></router-view></keep-alive>
    </refresh>   
    <mine v-show="ismine" @closeMine="closeMine"></mine>
    <transition name="fadeShade">
        <div class="admin" @click="closeMine" v-show="ismine"></div>
    </transition> 
</div>
</template>
<script>
import mine from "@/views/mine.vue"
import refresh from '@/common/refresh'
export default {
    name:'App',
    components:{
        mine,refresh
    },
    // data(){
    //     return{
    //         ismine: this.$store.state.ismine
    //   }
    // },
    computed:{
        ismine:{
            get(){
                return this.$store.state.ismine
            },
            set(val){
                
            }
        }
    },
    methods:{
        closeMine(){
            this.$store.commit('switchMine')
        }
    }
}
</script>
<style>
@import "./assets/css/base.css";
/* #app{
    margin-top: 3rem;
    margin-bottom: 3.12rem;
} */
.fadeShade-enter-active{
    transition:all 0.5s ease;
}
.fadeShade-leave-active{
    transition:all 0.3s ease;
}
.fadeShade-enter, .fadeShade-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */ {
  opacity: 0;
}
.admin{
    width: 100%;
    height: 41.6875rem;
    position: fixed;
    top: 0;
    right: 0;
    background-color: rgba(50,50,50,0.4);
    z-index: 990;
}
</style>

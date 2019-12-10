<template>
<div class="cmdImg">    
    <v-touch  @swipeleft="swiper()">  
            
    <div class="cmdImgBlock">
         <transition name="imgSlide"> 
        <img :src="cmdImg.cover" alt="" v-show="imgChange" :class="{cmdImgTransition:!imgChange}">
        </transition>
        <transition name="imgSlide"> 
        <img :src="cmdImg.img" alt="" v-show="!imgChange" :class="{cmdImgTransition:imgChange}">
        </transition>
    </div>
        
    </v-touch>
</div>

</template>

<script>
export default {
    props:{
        cmdImg:{
            default(){
                return[]
            }
        }
    },
    data(){
        return{
            imgChange:true
        }
    },
    methods:{
        swiper(){
            this.imgChange = !this.imgChange
            
        }
    }

}
</script>

<style>
.cmdImgBlock{

    height: 21rem;
    width: 100%;
    position: relative;
    
}
.cmdImgBlock > img{
    position: absolute;
    height: 100%;
    width: 100%;

}
/* .cmdImgTransition{
    animation: fadeInRight 0.5s;
} */

.imgSlide-enter-active{
    transition: all 0.8s ease;
}
.imgSlide-enter{
    opacity: 0;
}
.imgSlide-leave-active{
    transition: all 0.8s ease;
}
.imgSlide-leave-to{
    opacity: 0;
}

</style>
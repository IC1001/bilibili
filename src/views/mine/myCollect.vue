<template>
<div>
    <BackBarItem class="animeJPN" ><span slot="backLeft">我的收藏</span></BackBarItem>
    <Kong v-if="hasHistory"></Kong>  
    <recItem :rec="followAnime" v-else></recItem>
    
</div>
</template>

<script>
import BackBarItem from '@/components/common/backBar/backBarItem'
import recItem from '@/components/content/Block/recItem'
import Kong from '@/components/content/Block/kong.vue'
export default {
    data(){
        return{
            hasHistory:true,
        }
    },
    components:{
        BackBarItem,recItem,Kong
    },
    computed:{
        followAnime(){
            return this.$store.state.followAnimeArr.concat(this.$store.state.followMovieArr).concat(this.$store.state.collectVideo)
        },
    },
    activated(){
        if(this.followAnime.length > 0){
            this.hasHistory = false
        }else{
            this.hasHistory = true
        }
    }
}
</script>

<style>
.animeJPN > div{
    color: white;
    background-color: #fa7298;
}
#myCollect > div {
    border-bottom: rgba(100, 100, 100, 0.2) solid 1px;
}
</style>
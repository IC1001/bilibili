<template>
<transition name="pageFade">
<div>    
    <BackBarItem class="animeJPN"><span slot="backLeft">放映厅</span></BackBarItem>
    <Nav :titles="titles" @click.native="changeRank"></Nav>
    <div class="changePage" v-show="changePage"><i class="el-icon-loading"></i></div>
    <router-view></router-view>

</div>
</transition>
</template>

<script>
import Nav from '@/components/content/NavControl/nav'
import BackBarItem from '@/components/common/backBar/backBarItem'

export default {
    data(){
        return{
            // path:'/movie/推荐',
            titles:['推荐','纪录片','电影','电视剧'],
            changePage:false
        }
    },
    components:{
        Nav,BackBarItem
    },
    computed:{
        animeSlideCN(){
            //返回轮播数据
            return this.$store.getters.AnimeSlideCN
        },
        animeCN(){
            return this.$store.state.animeCN
        },
        hotAnimeCN(){
            return this.$store.getters.hotListCN
        },
        // blood(){
        //     return this.$store.getters.bloodListCN
        // },
        // fantasy(){
        //      return this.$store.getters.fantasyList
        // }
    },
    methods:{
        changeRank(){
            this.changePage = true
            setTimeout(()=>{
                this.changePage = false
            },200)
        }
    }

}
</script>

<style>
.animeJPN > div{
    color: white;
    background-color: #fa7298;
}

.pageFade-enter-active{
    transition:all 0.1s ease;
}
.pageFade-leave-active{
    transition:all 0.2s ease;
}
.pageFade-enter{
     opacity: 0;
    transform: scale(0.6,0.7)
}
.pageFade-leave-to{
    opacity: 0;
    transform: scale(0.6,0.7)
}


.changePage{
    position: sticky;
    top:0;
    height: 99rem;
    width: 100%;
    background-color: white;
    text-align: center;
    font-size: 2rem;
}
</style>
<template>
<transition name="pageFade">
<div>
    <BackBarItem class="animeJPN"><span slot="backLeft">热门榜单</span></BackBarItem>
    <Nav :titles="hlData" @click.native="changeRank"></Nav>
    <transition name="changePage">
        <div class="changePage" v-show="changePage"><i class="el-icon-loading"></i></div>
    </transition>   
    <hotItem :rec="rankData"></hotItem>
 
</div>
</transition>
</template>

<script>
import Nav from '@/components/content/NavControl/nav'
import BackBarItem from '@/components/common/backBar/backBarItem'
import hotItem from '@/components/content/DetailItem/hotItem'

export default {
    data(){
        return{
            changePage:false
        }
    },
    props:{
        // hlData:{
        //     type:Array,
        //     default:[]

        // },
        // rankData:{
        //     type:Array,
        //     default:[]

        // }
    },
    components:{
        Nav,BackBarItem,hotItem
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
        hlData(){
            return this.$store.state.hlData
        },
        rankData(){
             return this.$store.state.rankData
        }
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

.changePage-enter-active,.changePage-leave-active{
    transition: all 0.2s ease;
}
.changePage-enter,.changePage-leave-to{
    opacity: 0;
}
</style>
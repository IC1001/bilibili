<template>

<div>
    <BackBarItem class="animeJPN"><div slot="backLeft">索引</div></BackBarItem>
    <div class="type">
        <div class="typeItem">
            <div v-for="(item,index) in indexType1" :key="index" 
            :class="{typeActive:mark == index}" @click="toType(index)">
                {{item}}
            </div>
        </div>
        <div class="typeItem">
            <div v-for="(item,index) in indexType2" :key="index" 
            :class="{typeActive:mark == index + 6}" @click="toType(index+6)">
                {{item}}
            </div>
        </div>
    </div>
    <transition name="updating">
        <div class="updating" v-show="updating"><i class="el-icon-loading"></i></div>
    </transition>
    <DetailItem :Data="animeType" ></DetailItem>
</div>

</template>

<script>
import BackBarItem from '@/components/common/backBar/backBarItem'
import DetailItem from '@/components/content/DetailItem/detailItem'
export default {
    data(){
        return {
            indexType1:['全部','热血','战斗','奇幻','冒险','架空','科幻'],
            indexType2:['搞笑','日常','治愈','智斗','恋爱','萌系','穿越'],
            mark:0,
            updating:false
        }
    },
    components:{
        BackBarItem,DetailItem
    },
    methods:{
        toType(index){
            this.mark = index
            this.$store.commit('setAnimeType',index)
            this.updating = true
            setTimeout(()=>{
                this.updating = false
            },100)
        }
    },
    computed:{
        animeType(){
            return this.$store.state.animeType
        }
    },
    activated(){
        this.$store.commit('setAnimeType',0)
        this.mark = 0
    }

}
</script>

<style>
.animeJPN > div{
    color: white;
    background-color: #fa7298;
}
.type{
    /* display: flex;  */
    overflow-y: hidden;
    overflow-x: scroll;
    
}
.typeItem{
    display: flex;
    /* justify-content: flex-start; */
}
.typeItem > div{
    /* display: flex; */
    white-space: nowrap;
    padding: 0.4rem 0.7rem 0.4rem 0.7rem;
    width: 3rem;
    margin: 0.5rem 0.3rem 0rem;
     
}
.typeActive{
    background-color: #F5F5F5;
    color: #fa7298;
    border-radius: 0.5rem;
    font-weight: 600;

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
.updating{
    position: sticky;
    top:116px;
    height: 99rem;
    width: 100%;
    background-color: white;
    text-align: center;
    font-size: 2rem;
}

.updating-enter-active,.updating-leave-active{
    transition: all 0.2s ease;
}
.updating-enter,.updating-leave-to{
    opacity: 0;
}
</style>
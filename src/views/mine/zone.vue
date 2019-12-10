<template>
<div>
    <BackBarItem></BackBarItem>
    <img src="@/assets/img/slide/xxx.jpg" class="zoneImg">
    <div class="zoneBar" >
        <div class="zoneInfo">
            <img :src="zonePortrait" alt="">
            <div>{{zoneupname}}</div>
        </div>
    </div>
    <div class="zoneFB" v-if="this.$route.query.id==1">
        <div>
            {{followNum}}<span>关注</span>
        </div>
        <div>
            0<span>粉丝</span>

        </div>
    </div>
    <div class="zoneFB" v-else>
        <div>
            0<span>关注</span>
        </div>
        <div>
            {{followNum}}<span>粉丝</span>

        </div>
    </div>
    <Kong class="middleMes" v-if="this.zoneData.length==0">空空如也</Kong>
    <DetailItem :Data="zoneData" v-else></DetailItem> 
    
</div>
</template>

<script>
import BackBarItem from '@/components/common/backBar/backBarItem'
import Kong from '@/components/content/Block/kong'
import DetailItem from '@/components/content/DetailItem/detailItem'
export default {
    data(){
        return{

        }
    },
    components:{
        Kong,DetailItem,BackBarItem
    },
    computed:{
        zoneData(){
            return this.$store.state.zoneData
        },
        zonePortrait(){
            if(this.$route.path.indexOf('zone')!==-1){
                return this.$store.state.info[this.$route.query.id].portrait
            }
        },
        zoneupname(){
            if(this.$route.path.indexOf('zone')!==-1){
                return this.$store.state.info[this.$route.query.id].upname
            }
        },
        followNum:{
            get(){
                return localStorage.getItem("fansNums")
            },
            set(val){
                this.$store.state.fansNum = val

            }
        },
        previews(){
            return this.$store.state.previews
        }
    },
    methods:{
        // tofriends(num){
        //     this.$router.push('/myFriends/' + num)
        //     this.$emit('closeMine')
        // },
    },
    activated(){
        this.$store.commit('setZoneData',this.zoneupname)
    }
}
</script>

<style>
.zoneImg{
    width: 23.4375rem;
    position: absolute;
    top: 0;
}
.zoneBar{
    margin-top: 12rem;
}
.zoneInfo{
    position: relative;
    margin:2rem 0 0.5rem 1rem;
    font-weight: 600;
    font-size: 1.1rem;
}
.zoneInfo > img{
    width: 4rem;
    height: 4rem;
    position: absolute;
    top: -4rem;
    left: -0.8rem;
}
.zoneFB{
    display: flex;
    border-bottom: rgba(100, 100, 100, 0.1) 1px solid;
    padding-bottom: 0.85rem;
    /* padding-left: 0.5rem; */
}
.zoneFB > div{
    padding-left: 0.85rem;
}
.zoneFB > div > span{
    font-size: 0.8rem;
    color: grey;
    padding-left: 0.2rem;
}
</style>
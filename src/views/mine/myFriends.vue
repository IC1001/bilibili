<template>
<div>
    <BackBarItem class="animeJPN" @click.native="friends"><span slot="backLeft">我的好友</span></BackBarItem>
    <Nav :titles="titles"></Nav>
    <div v-if="this.$route.params.num==1">
    <div v-for="(item,index) in follower" :key="index" class="followerBar" >
        <div class="follow1">
            <img :src="item.portrait" alt="">
            <span>{{item.upname}}</span>
        </div>
        <div class="follow2" @click="clickFollow"  :class="{followed2:isFollow==1}">{{FollowText}}</div>
    </div>
    </div>
    <div v-else class="nofans">暂无粉丝</div>
</div>
</template>

<script>
import BackBarItem from '@/components/common/backBar/backBarItem'
import Nav from '@/components/content/NavControl/nav'
export default {
    data(){
        return{
            titles:['我的关注','我的粉丝'],
            FollowText:'+ 关注' ,
            isFollow:0,
            follower:[],
            follow:true
        }
    },
    computed:{
        fansNum:{
            get(){
                return this.$store.state.info[0].fansnum
        },
            set(val){
                this.$store.state.info[0].fansnum = val

            }
        },
    },
    components:{
        BackBarItem,Nav
    },
    methods:{
        friends(){
            this.$store.commit('switchMine')
        },
        clickFollow(){            
            if(this.isFollow == 1){
                localStorage.setItem("status",0)
                this.isFollow = 0
                this.FollowText = '+ 关注'  
                this.fansNum --       
                localStorage.setItem("fansNums",this.fansNum)     
            }else{
                localStorage.setItem("status",1)
                this.isFollow = 1
                this.FollowText = '已关注'
                this.fansNum ++
                localStorage.setItem("fansNums",this.fansNum)
            }
        }
    },
    created(){
        this.fansNum = localStorage.getItem("fansNums")
        // this.playNum = localStorage.getItem("playNums")
        //初始化完成时对是否关注进行判断，没有服务器数据这里借用的localStorge
        this.isFollow = localStorage.getItem("status")
        if(this.isFollow == 1){
          this.FollowText = '已关注'
        }else{
            this.FollowText = '+ 关注'
        }
    },
    activated(){
        this.fansNum = localStorage.getItem("fansNums")
        this.isFollow = localStorage.getItem("status")
        if(this.isFollow == 1){
            this.follower = this.$store.state.info.slice(0,1)
            this.FollowText = '已关注'
        }else{
            this.follower = []
        }
    }
}
</script>

<style>
.animeJPN > div{
    color: white;
    background-color: #fa7298;
}
.followerBar{
    height: 3rem;
    width: 100%;
    display: flex;
    align-items: center;
    margin: 0.4rem 0 0rem 0.8rem;
    padding-bottom: 0.4rem;
    border-bottom: 1px rgba(100, 100, 100, 0.1) solid;
   
}
.followerBar > .follow1 {
    display: flex;
}
.followerBar > div > img{
    height: 3rem;
}
.followerBar > div > span{
    padding-top: 0.8rem;
}

.follow2{

    background-color: #fa7298;
    position: absolute;
    color: white;
    width:5rem;
    height: 1.5rem;
    text-align: center;  
    line-height: 1.5rem;
    font-size:0.9375rem;
    border-radius: 5%;
    /* top: 0.5rem; */
    right: 0.65rem;
}
.followed2{
    background-color: #D3D3D3;
    text-align: center;  
}

.nofans{
    text-align: center;
    margin-top: 2rem;
}
</style>
<template>
<div>
    <div class="nav">
        <div v-for="(item,index) in titles" :key="index" class="nav-item" 
        :class="{actived:index===mark}" @click="navClick(index)">
            <a>{{item}}</a>
        </div>  
    </div>    
    <div class="navBottom"></div>
</div>

</template>

<script>
export default {
    data(){
        return{
            mark:1,
        }
    },
    methods:{
        navClick(index){
            this.mark = index ;
            if(this.$route.path.indexOf('movie')!==-1){
                this.$router.push('/movie/' + this.titles[index])
            }else if(this.$route.path.indexOf('home')!==-1){
                this.$router.push('/home/' + this.titles[index])
            }else if(this.$route.path.indexOf('hotListPage')!==-1){
                // console.log(this.$store.state.rankData);
                // console.log(index);
                this.$router.push('/hotListPage/' + this.titles[index])
                if( this.$route.path.indexOf('纪录片')!==-1 || 
                    this.$route.path.indexOf('电影')!==-1 || 
                    this.$route.path.indexOf('电视')!==-1){
                        this.$store.commit('setrankData',index)
                }else{
                    this.$store.commit('setArankData',index)
                }
                
            }else if(this.$route.path.indexOf('myFriends')!==-1){
                this.$router.push('/myFriends/' + (index+1)/1)
                console.log(index);
                
            }
        }
    },
    befroeRouteLeave(to,from,next){   
        this.path = this.$route.path;
        next()
    },
    activated(){
        
            if(this.$route.path.indexOf('/纪录片')!==-1  || this.$route.path.indexOf('热门榜单') !==-1){
                this.mark = 1
            }else if(this.$route.path.indexOf('电影')!==-1){
                this.mark = 2
            }else if(this.$route.path.indexOf('电视剧')!==-1){
                this.mark =  3
            }else if(this.$route.path.indexOf('movie/推荐')!==-1 || this.$route.path.indexOf('hotListPage')!==-1){
                this.mark =  0
            }else if(this.$route.path.indexOf('myFriends')!==-1){
                if(this.$route.params.num == 1){
                    this.mark = 0
                }else{
                    this.mark = 1
                }
            }
    },
    props:{
        titles:{
            type:Array,
            default(){
                return[]
            }
        },
    }

}
</script>

<style>
.nav {
    display: flex;
    position: fixed;
    top: 2.6rem;
    width: 100%;
    border-bottom:0.5px solid rgba(140, 140,140, 0.4);
    padding-bottom:0.35rem;
    padding-top:0.3rem;  
    z-index: 10;
    background-color: white;  
    
}
.navBottom{
    height: 2rem;
}
.nav > .nav-item{
    text-decoration: none;
    width: 100%;
    text-align: center;
    flex: 1;
    font-size: 0.95rem;
    white-space: nowrap;
    height: 1.5625rem;
    line-height: 1.5625rem;   
}
.nav > .nav-item > a{
    text-decoration: none;
    color: black;   
}
.nav > .nav-item.actived a{ 
    border-bottom: 0.157rem solid pink;
    width: 100%;
    color:pink;
    font-weight: 600;
    padding-bottom:0.24rem;
}
</style>